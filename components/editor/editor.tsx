import dynamic from 'next/dynamic';
import { forwardRef } from 'react';
import { type MDXEditorProps, type MDXEditorMethods } from '@mdxeditor/editor';
import Spinner from '@/components/ui/spinner';

const InitializedMDXEditor = dynamic(
  () => import('@/components/editor/initalized-mdx-editor'),
  {
    ssr: false,
    loading: () => <Spinner />,
  },
);

export const Editor = forwardRef<MDXEditorMethods, MDXEditorProps>(
  (props, ref) => <InitializedMDXEditor {...props} editorRef={ref} />,
);

Editor.displayName = 'Editor';

export default Editor;
