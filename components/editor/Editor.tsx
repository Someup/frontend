'use client';

import { forwardRef } from 'react';
import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import {
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  markdownShortcutPlugin,
  MDXEditor,
  linkPlugin,
  linkDialogPlugin,
  tablePlugin,
  codeBlockPlugin,
  codeMirrorPlugin,
  type MDXEditorMethods,
  type MDXEditorProps,
} from '@mdxeditor/editor';
import '@mdxeditor/editor/style.css';

const Editor: ForwardRefExoticComponent<
  MDXEditorProps & RefAttributes<MDXEditorMethods>
> = forwardRef<MDXEditorMethods, MDXEditorProps>(({ ...props }, ref) => {
  return (
    <MDXEditor
      contentEditableClassName="prose"
      plugins={[
        headingsPlugin(),
        listsPlugin(),
        quotePlugin(),
        thematicBreakPlugin(),
        linkPlugin(),
        linkDialogPlugin(),
        tablePlugin(),
        codeBlockPlugin({ defaultCodeBlockLanguage: '' }),
        codeMirrorPlugin({
          codeBlockLanguages: {
            js: 'JavaScript',
            css: 'CSS',
            txt: 'Plain Text',
            tsx: 'TypeScript',
            java: 'Java',
            '': 'Unspecified',
          },
          autoLoadLanguageSupport: true,
        }),
        markdownShortcutPlugin(),
      ]}
      {...props}
      ref={ref}
    />
  );
});

Editor.displayName = 'Editor';

export default Editor;
