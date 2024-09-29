'use client';

import { ForwardedRef } from 'react';
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
  toolbarPlugin,
  type MDXEditorMethods,
  type MDXEditorProps,
} from '@mdxeditor/editor';
import '@mdxeditor/editor/style.css';
import BoldUnderlineStrikethoughToggles from '@/components/editor/format-groups';
import HeadingToggles from '@/components/editor/heading-toggles';
import QuoteGroups from '@/components/editor/quote-groups';
import ListToggles from '@/components/editor/lists-toggles';
import CodeBlockGroups from '@/components/editor/code-block-groups';

const InitializedMDXEditor = ({
  readOnly,
  editorRef,
  ...props
}: { editorRef: ForwardedRef<MDXEditorMethods> | null } & MDXEditorProps) => {
  return (
    <MDXEditor
      contentEditableClassName="!p-2 prose max-w-full bg-transparent"
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
        toolbarPlugin({
          toolbarContents: () =>
            readOnly ? null : (
              <>
                <HeadingToggles />
                <BoldUnderlineStrikethoughToggles />
                <QuoteGroups />
                <ListToggles />
                <CodeBlockGroups />
              </>
            ),
        }),
        markdownShortcutPlugin(),
      ]}
      {...props}
      readOnly={readOnly}
      ref={editorRef}
    />
  );
};

InitializedMDXEditor.displayName = 'Editor';

export default InitializedMDXEditor;
