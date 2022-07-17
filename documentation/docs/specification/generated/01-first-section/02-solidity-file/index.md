# Solidity File

<!-- markdownlint-disable no-inline-html -->
<!-- markdownlint-disable no-space-in-emphasis -->
<!-- cSpell:disable -->

<div class="admonition summary">
<p class="admonition-title">Grammar</p>

<pre style="white-space: pre-wrap;"><code id="SourceUnitProduction"><span style="color: var(--md-code-hl-keyword-color);">SourceUnit</span><span style="color: var(--md-code-hl-operator-color);"> = </span><span style="color: var(--md-code-hl-keyword-color);"><a href="../../01-first-section/01-trivia#LeadingTriviaProduction">«LeadingTrivia»</a></span><span style="color: var(--md-code-hl-operator-color);"> </span><span style="color: var(--md-code-hl-operator-color);">{</span><span style="color: var(--md-code-hl-keyword-color);"><a href="../../01-first-section/02-solidity-file#DirectiveProduction">Directive</a></span><span style="color: var(--md-code-hl-operator-color);"> | </span><span style="color: var(--md-code-hl-keyword-color);"><a href="../../01-first-section/02-solidity-file#DefinitionProduction">Definition</a></span><span style="color: var(--md-code-hl-operator-color);">}</span><span style="color: var(--md-code-hl-operator-color);"> </span><span style="color: var(--md-code-hl-keyword-color);"><a href="../../01-first-section/01-trivia#EndOfFileTriviaProduction">«EndOfFileTrivia»</a></span><span style="color: var(--md-code-hl-operator-color);"> </span><span style="color: var(--md-code-hl-keyword-color);">$</span><span style="color: var(--md-code-hl-operator-color);">;</span><br/></code></pre>

<pre style="white-space: pre-wrap;"><code id="DirectiveProduction"><span style="color: var(--md-code-hl-keyword-color);">Directive</span><span style="color: var(--md-code-hl-operator-color);"> = </span><span style="color: var(--md-code-hl-keyword-color);"><a href="../../02-todo-section/01-todo-topic#PragmaDirectiveProduction">PragmaDirective</a></span><span style="color: var(--md-code-hl-operator-color);"> | </span><span style="color: var(--md-code-hl-keyword-color);"><a href="../../01-first-section/02-solidity-file#ImportDirectiveProduction">ImportDirective</a></span><span style="color: var(--md-code-hl-operator-color);"> | </span><span style="color: var(--md-code-hl-keyword-color);"><a href="../../01-first-section/02-solidity-file#UsingDirectiveProduction">UsingDirective</a></span><span style="color: var(--md-code-hl-operator-color);">;</span><br/></code></pre>

<pre style="white-space: pre-wrap;"><code id="DefinitionProduction"><span style="color: var(--md-code-hl-keyword-color);">Definition</span><span style="color: var(--md-code-hl-operator-color);"> = </span><span style="color: var(--md-code-hl-keyword-color);"><a href="../../02-todo-section/01-todo-topic#ContractDefinitionProduction">ContractDefinition</a></span><span style="color: var(--md-code-hl-operator-color);"> | </span><span style="color: var(--md-code-hl-keyword-color);"><a href="../../02-todo-section/01-todo-topic#InterfaceDefinitionProduction">InterfaceDefinition</a></span><span style="color: var(--md-code-hl-operator-color);"> | </span><span style="color: var(--md-code-hl-keyword-color);"><a href="../../02-todo-section/01-todo-topic#LibraryDefinitionProduction">LibraryDefinition</a></span><span style="color: var(--md-code-hl-operator-color);"> | </span><span style="color: var(--md-code-hl-keyword-color);"><a href="../../02-todo-section/01-todo-topic#FunctionDefinitionProduction">FunctionDefinition</a></span><span style="color: var(--md-code-hl-operator-color);"> | </span><span style="color: var(--md-code-hl-keyword-color);"><a href="../../02-todo-section/01-todo-topic#ConstantDefinitionProduction">ConstantDefinition</a></span><span style="color: var(--md-code-hl-operator-color);"> | </span><span style="color: var(--md-code-hl-keyword-color);"><a href="../../02-todo-section/01-todo-topic#StructDefinitionProduction">StructDefinition</a></span><span style="color: var(--md-code-hl-operator-color);"> | </span><span style="color: var(--md-code-hl-keyword-color);"><a href="../../02-todo-section/01-todo-topic#EnumDefinitionProduction">EnumDefinition</a></span><span style="color: var(--md-code-hl-operator-color);"> | </span><span style="color: var(--md-code-hl-keyword-color);"><a href="../../02-todo-section/01-todo-topic#UserDefinedValueTypeDefinitionProduction">UserDefinedValueTypeDefinition</a></span><span style="color: var(--md-code-hl-operator-color);"> | </span><span style="color: var(--md-code-hl-keyword-color);"><a href="../../02-todo-section/01-todo-topic#ErrorDefinitionProduction">ErrorDefinition</a></span><span style="color: var(--md-code-hl-operator-color);">;</span><br/></code></pre>

<pre style="white-space: pre-wrap;"><code id="ImportDirectiveProduction"><span style="color: var(--md-code-hl-keyword-color);">ImportDirective</span><span style="color: var(--md-code-hl-operator-color);"> = </span><span style="color: var(--md-code-hl-string-color);">"import"</span><span style="color: var(--md-code-hl-operator-color);"> </span><span style="color: var(--md-code-hl-operator-color);">(</span><span style="color: var(--md-code-hl-keyword-color);"><a href="../../01-first-section/02-solidity-file#SimpleImportDirectiveProduction">SimpleImportDirective</a></span><span style="color: var(--md-code-hl-operator-color);"> | </span><span style="color: var(--md-code-hl-keyword-color);"><a href="../../01-first-section/02-solidity-file#StarImportDirectiveProduction">StarImportDirective</a></span><span style="color: var(--md-code-hl-operator-color);"> | </span><span style="color: var(--md-code-hl-keyword-color);"><a href="../../01-first-section/02-solidity-file#SelectingImportDirectiveProduction">SelectingImportDirective</a></span><span style="color: var(--md-code-hl-operator-color);">)</span><span style="color: var(--md-code-hl-operator-color);"> </span><span style="color: var(--md-code-hl-string-color);">';'</span><span style="color: var(--md-code-hl-operator-color);">;</span><br/></code></pre>

<pre style="white-space: pre-wrap;"><code id="SimpleImportDirectiveProduction"><span style="color: var(--md-code-hl-keyword-color);">SimpleImportDirective</span><span style="color: var(--md-code-hl-operator-color);"> = </span><span style="color: var(--md-code-hl-keyword-color);"><a href="../../01-first-section/02-solidity-file#ImportPathProduction">ImportPath</a></span><span style="color: var(--md-code-hl-operator-color);"> </span><span style="color: var(--md-code-hl-operator-color);">{</span><span style="color: var(--md-code-hl-string-color);">"as"</span><span style="color: var(--md-code-hl-operator-color);"> </span><span style="color: var(--md-code-hl-keyword-color);"><a href="../../02-todo-section/01-todo-topic#IdentifierProduction">«Identifier»</a></span><span style="color: var(--md-code-hl-operator-color);">}</span><span style="color: var(--md-code-hl-operator-color);">;</span><br/></code></pre>

<pre style="white-space: pre-wrap;"><code id="StarImportDirectiveProduction"><span style="color: var(--md-code-hl-keyword-color);">StarImportDirective</span><span style="color: var(--md-code-hl-operator-color);"> = </span><span style="color: var(--md-code-hl-string-color);">'*'</span><span style="color: var(--md-code-hl-operator-color);"> </span><span style="color: var(--md-code-hl-string-color);">"as"</span><span style="color: var(--md-code-hl-operator-color);"> </span><span style="color: var(--md-code-hl-keyword-color);"><a href="../../02-todo-section/01-todo-topic#IdentifierProduction">«Identifier»</a></span><span style="color: var(--md-code-hl-operator-color);"> </span><span style="color: var(--md-code-hl-string-color);">"from"</span><span style="color: var(--md-code-hl-operator-color);"> </span><span style="color: var(--md-code-hl-keyword-color);"><a href="../../01-first-section/02-solidity-file#ImportPathProduction">ImportPath</a></span><span style="color: var(--md-code-hl-operator-color);">;</span><br/></code></pre>

<pre style="white-space: pre-wrap;"><code id="SelectingImportDirectiveProduction"><span style="color: var(--md-code-hl-keyword-color);">SelectingImportDirective</span><span style="color: var(--md-code-hl-operator-color);"> = </span><span style="color: var(--md-code-hl-string-color);">'{'</span><span style="color: var(--md-code-hl-operator-color);"> </span><span style="color: var(--md-code-hl-constant-color);">1</span><span style="color: var(--md-code-hl-operator-color);">…</span><span style="color: var(--md-code-hl-operator-color);">{</span><span style="color: var(--md-code-hl-keyword-color);"><a href="../../01-first-section/02-solidity-file#SelectedImportProduction">SelectedImport</a></span><span style="color: var(--md-code-hl-operator-color);"> / </span><span style="color: var(--md-code-hl-string-color);">','</span><span style="color: var(--md-code-hl-operator-color);">}</span><span style="color: var(--md-code-hl-operator-color);"> </span><span style="color: var(--md-code-hl-string-color);">'}'</span><span style="color: var(--md-code-hl-operator-color);"> </span><span style="color: var(--md-code-hl-string-color);">"from"</span><span style="color: var(--md-code-hl-operator-color);"> </span><span style="color: var(--md-code-hl-keyword-color);"><a href="../../01-first-section/02-solidity-file#ImportPathProduction">ImportPath</a></span><span style="color: var(--md-code-hl-operator-color);">;</span><br/></code></pre>

<pre style="white-space: pre-wrap;"><code id="SelectedImportProduction"><span style="color: var(--md-code-hl-keyword-color);">SelectedImport</span><span style="color: var(--md-code-hl-operator-color);"> = </span><span style="color: var(--md-code-hl-keyword-color);"><a href="../../02-todo-section/01-todo-topic#IdentifierProduction">«Identifier»</a></span><span style="color: var(--md-code-hl-operator-color);"> </span><span style="color: var(--md-code-hl-operator-color);">[</span><span style="color: var(--md-code-hl-string-color);">"as"</span><span style="color: var(--md-code-hl-operator-color);"> </span><span style="color: var(--md-code-hl-keyword-color);"><a href="../../02-todo-section/01-todo-topic#IdentifierProduction">«Identifier»</a></span><span style="color: var(--md-code-hl-operator-color);">]</span><span style="color: var(--md-code-hl-operator-color);">;</span><br/></code></pre>

<pre style="white-space: pre-wrap;"><code id="ImportPathProduction"><span style="color: var(--md-code-hl-keyword-color);">ImportPath</span><span style="color: var(--md-code-hl-operator-color);"> = </span><span style="color: var(--md-code-hl-keyword-color);"><a href="../../02-todo-section/01-todo-topic#AsciiStringLiteralProduction">«AsciiStringLiteral»</a></span><span style="color: var(--md-code-hl-operator-color);">;</span><br/></code></pre>

<pre style="white-space: pre-wrap;"><code id="UsingDirectiveProduction"><span style="color: var(--md-code-hl-keyword-color);">UsingDirective</span><span style="color: var(--md-code-hl-operator-color);"> = </span><span style="color: var(--md-code-hl-string-color);">"using"</span><span style="color: var(--md-code-hl-operator-color);"> </span><span style="color: var(--md-code-hl-operator-color);">(</span><span style="color: var(--md-code-hl-keyword-color);"><a href="../../02-todo-section/01-todo-topic#IdentifierPathProduction">IdentifierPath</a></span><span style="color: var(--md-code-hl-operator-color);"> | </span><span style="color: var(--md-code-hl-string-color);">'{'</span><span style="color: var(--md-code-hl-operator-color);"> </span><span style="color: var(--md-code-hl-constant-color);">1</span><span style="color: var(--md-code-hl-operator-color);">…</span><span style="color: var(--md-code-hl-operator-color);">{</span><span style="color: var(--md-code-hl-keyword-color);"><a href="../../02-todo-section/01-todo-topic#IdentifierPathProduction">IdentifierPath</a></span><span style="color: var(--md-code-hl-operator-color);"> / </span><span style="color: var(--md-code-hl-string-color);">','</span><span style="color: var(--md-code-hl-operator-color);">}</span><span style="color: var(--md-code-hl-operator-color);"> </span><span style="color: var(--md-code-hl-string-color);">'}'</span><span style="color: var(--md-code-hl-operator-color);">)</span><span style="color: var(--md-code-hl-operator-color);"> </span><span style="color: var(--md-code-hl-string-color);">"for"</span><span style="color: var(--md-code-hl-operator-color);"> </span><span style="color: var(--md-code-hl-operator-color);">(</span><span style="color: var(--md-code-hl-string-color);">'*'</span><span style="color: var(--md-code-hl-operator-color);"> | </span><span style="color: var(--md-code-hl-keyword-color);"><a href="../../02-todo-section/01-todo-topic#TypeNameProduction">TypeName</a></span><span style="color: var(--md-code-hl-operator-color);">)</span><span style="color: var(--md-code-hl-operator-color);"> </span><span style="color: var(--md-code-hl-operator-color);">[</span><span style="color: var(--md-code-hl-string-color);">"global"</span><span style="color: var(--md-code-hl-operator-color);">]</span><span style="color: var(--md-code-hl-operator-color);"> </span><span style="color: var(--md-code-hl-string-color);">';'</span><span style="color: var(--md-code-hl-operator-color);">;</span><br/></code></pre>

</div>

--8<-- "specification/notes/under-construction-snippet.md"