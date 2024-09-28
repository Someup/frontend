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
  toolbarPlugin,
} from '@mdxeditor/editor';
import '@mdxeditor/editor/style.css';
import BoldUnderlineStrikethoughToggles from '@/components/editor/format-groups';
import HeadingToggles from '@/components/editor/heading-toggles';
import QuoteGroups from '@/components/editor/quote-groups';
import ListToggles from '@/components/editor/lists-toggles';
import CodeBlockGroups from '@/components/editor/code-block-groups';

const InitializedMDXEditor: ForwardRefExoticComponent<
  MDXEditorProps & RefAttributes<MDXEditorMethods>
> = forwardRef<MDXEditorMethods, MDXEditorProps>(
  ({ readOnly, ...props }, ref) => {
    return (
      <MDXEditor
        contentEditableClassName="!p-0 prose max-w-full bg-white"
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
        ref={ref}
      />
    );
  },
);

InitializedMDXEditor.displayName = 'Editor';

export default InitializedMDXEditor;
