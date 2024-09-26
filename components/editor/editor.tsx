import dynamic from 'next/dynamic';
import { forwardRef, ForwardRefExoticComponent, RefAttributes } from 'react';
import { type MDXEditorMethods, type MDXEditorProps } from '@mdxeditor/editor';

const InitializedMDXEditor = dynamic(
  () => import('@/components/editor/initalized-mdx-editor'),
  {
    ssr: false,
  },
);

const Editor: ForwardRefExoticComponent<
  MDXEditorProps & RefAttributes<MDXEditorMethods>
> = forwardRef<MDXEditorMethods, MDXEditorProps>((props, ref) => (
  <InitializedMDXEditor {...props} ref={ref} />
));

Editor.displayName = 'Editor';

export default Editor;
