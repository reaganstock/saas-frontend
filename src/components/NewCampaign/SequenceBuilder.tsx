import React, { useState } from 'react';
import { Plus, Trash2, MessageCircle } from 'lucide-react';
import MessageEditor from './MessageEditor';

interface SequenceBuilderProps {
  messages: any[];
  onMessagesUpdate: (messages: any[]) => void;
  onNext: () => void;
  onBack: () => void;
  platform: string;
}

function SequenceBuilder({ messages, onMessagesUpdate, onNext, onBack, platform }: SequenceBuilderProps) {
  const [activeStep, setActiveStep] = useState(0);

  const addStep = () => {
    onMessagesUpdate([
      ...messages,
      {
        type: 'direct_message',
        content: '',
        variants: [''],
        waitDays: 1,
      },
    ]);
  };

  const updateStepContent = (stepIndex: number, variantIndex: number, content: string) => {
    const newMessages = [...messages];
    newMessages[stepIndex].variants[variantIndex] = content;
    onMessagesUpdate(newMessages);
  };

  const addVariant = (stepIndex: number) => {
    const newMessages = [...messages];
    newMessages[stepIndex].variants.push('');
    onMessagesUpdate(newMessages);
  };

  const removeVariant = (stepIndex: number, variantIndex: number) => {
    const newMessages = [...messages];
    newMessages[stepIndex].variants = newMessages[stepIndex].variants.filter(
      (_: any, i: number) => i !== variantIndex
    );
    onMessagesUpdate(newMessages);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Message Sequence</h2>
        <p className="text-gray-400">Create your message sequence with multiple variants and steps</p>
      </div>

      <div className="space-y-8">
        {messages.map((step, stepIndex) => (
          <div
            key={stepIndex}
            className={`bg-gray-800 rounded-lg p-6 ${
              activeStep === stepIndex ? 'ring-2 ring-blue-500' : ''
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium">
                Step {stepIndex + 1}: {step.type === 'direct_message' ? 'Direct Message' : 'Follow-up'}
              </h3>
            </div>

            <div className="space-y-4">
              {step.variants.map((variant: string, variantIndex: number) => (
                <div key={variantIndex} className="relative">
                  <MessageEditor
                    content={variant}
                    onChange={(content) => updateStepContent(stepIndex, variantIndex, content)}
                    platform={platform}
                  />
                  {step.variants.length > 1 && (
                    <button
                      onClick={() => removeVariant(stepIndex, variantIndex)}
                      className="absolute top-2 right-2 p-1 hover:bg-gray-800 rounded-md"
                    >
                      <Trash2 size={16} />
                    </button>
                  )}
                </div>
              ))}

              <button
                onClick={() => addVariant(stepIndex)}
                className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md text-sm"
              >
                <Plus size={16} />
                Add Variant
              </button>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium mb-2">Wait Time</label>
              <select
                value={step.waitDays}
                onChange={(e) => {
                  const newMessages = [...messages];
                  newMessages[stepIndex].waitDays = parseInt(e.target.value);
                  onMessagesUpdate(newMessages);
                }}
                className="w-48 px-3 py-2 bg-gray-900 rounded-md border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              >
                <option value={1}>1 day</option>
                <option value={2}>2 days</option>
                <option value={3}>3 days</option>
                <option value={5}>5 days</option>
                <option value={7}>7 days</option>
              </select>
            </div>
          </div>
        ))}

        <button
          onClick={addStep}
          className="w-full py-4 border-2 border-dashed border-gray-700 rounded-lg hover:border-blue-500 hover:bg-blue-500/10 transition-colors"
        >
          <Plus size={24} className="mx-auto" />
        </button>
      </div>

      <div className="flex justify-between mt-8">
        <button
          onClick={onBack}
          className="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700"
        >
          Back
        </button>
        <button
          onClick={onNext}
          disabled={!messages.length}
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-800 disabled:text-gray-400"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default SequenceBuilder;