import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import { Wand2, AlertCircle } from 'lucide-react';

interface MessageEditorProps {
  content: string;
  onChange: (content: string) => void;
  platform: string;
}

const MessageEditor: React.FC<MessageEditorProps> = ({ content, onChange, platform }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: 'Write your message here... Use {first_name} for personalization',
      }),
    ],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  const spamWords = ['buy now', 'limited time', 'urgent', 'exclusive offer'];
  const messageContent = editor?.getHTML() || '';
  const hasSpamWords = spamWords.some(word => 
    messageContent.toLowerCase().includes(word.toLowerCase())
  );

  return (
    <div className="relative">
      <div className="absolute right-2 top-2 flex gap-2">
        <button
          className="p-2 hover:bg-gray-700 rounded-md text-gray-400 hover:text-white"
          title="AI Writing Assistant"
        >
          <Wand2 size={20} />
        </button>
        {hasSpamWords && (
          <div className="p-2 text-yellow-500" title="Contains potential spam words">
            <AlertCircle size={20} />
          </div>
        )}
      </div>
      
      <div className="prose prose-invert max-w-none">
        <EditorContent 
          editor={editor} 
          className="min-h-[200px] p-4 bg-gray-900 rounded-lg border border-gray-700 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500"
        />
      </div>

      <div className="mt-2 flex flex-wrap gap-2">
        {['first_name', 'company', 'custom_intro'].map(variable => (
          <button
            key={variable}
            onClick={() => editor?.commands.insertContent(`{${variable}}`)}
            className="px-2 py-1 text-xs bg-gray-700 hover:bg-gray-600 rounded-md"
          >
            {`{${variable}}`}
          </button>
        ))}
      </div>

      {platform === 'linkedin' && (
        <div className="mt-4 p-3 bg-blue-900/20 border border-blue-800 rounded-md">
          <p className="text-sm text-blue-400">
            LinkedIn Tip: Keep messages professional and reference shared connections or experiences
          </p>
        </div>
      )}
    </div>
  );
};

export default MessageEditor;