// Slang License: https://github.com/NomicFoundation/slang/blob/main/LICENSE
// NAPI-RS License: https://github.com/napi-rs/napi-rs/blob/main/LICENSE

// @ts-nocheck

/* tslint:disable */
/* eslint-disable */

/* auto-generated by NAPI-RS */

export enum NodeType {
  Rule = 0,
  Token = 1,
}
export enum TokenKind {
  AbicoderKeyword = 0,
  AbstractKeyword = 1,
  AddressKeyword = 2,
  Ampersand = 3,
  AmpersandAmpersand = 4,
  AmpersandEqual = 5,
  AnonymousKeyword = 6,
  AsKeyword = 7,
  AsciiEscape = 8,
  AsciiStringLiteral = 9,
  AssemblyKeyword = 10,
  Asterisk = 11,
  AsteriskAsterisk = 12,
  AsteriskEqual = 13,
  Bang = 14,
  BangEqual = 15,
  Bar = 16,
  BarBar = 17,
  BarEqual = 18,
  BoolKeyword = 19,
  BreakKeyword = 20,
  ByteType = 21,
  CalldataKeyword = 22,
  Caret = 23,
  CaretEqual = 24,
  CaseKeyword = 25,
  CatchKeyword = 26,
  CloseBrace = 27,
  CloseBracket = 28,
  CloseParen = 29,
  Colon = 30,
  ColonEqual = 31,
  Comma = 32,
  ConstantKeyword = 33,
  ConstructorKeyword = 34,
  ContinueKeyword = 35,
  ContractKeyword = 36,
  DaysKeyword = 37,
  DecimalExponent = 38,
  DecimalLiteral = 39,
  DecimalNumber = 40,
  DefaultKeyword = 41,
  DeleteKeyword = 42,
  DoKeyword = 43,
  DoubleQuotedAsciiStringLiteral = 44,
  DoubleQuotedUnicodeStringLiteral = 45,
  ElseKeyword = 46,
  EmitKeyword = 47,
  EndOfLine = 48,
  EnumKeyword = 49,
  Equal = 50,
  EqualEqual = 51,
  EqualGreaterThan = 52,
  ErrorKeyword = 53,
  EscapeSequence = 54,
  EtherKeyword = 55,
  EventKeyword = 56,
  Evmasm = 57,
  ExperimentalKeyword = 58,
  ExternalKeyword = 59,
  FallbackKeyword = 60,
  FalseKeyword = 61,
  FinneyKeyword = 62,
  FixedBytesType = 63,
  ForKeyword = 64,
  FromKeyword = 65,
  FunctionKeyword = 66,
  GlobalKeyword = 67,
  GreaterThan = 68,
  GreaterThanEqual = 69,
  GreaterThanGreaterThan = 70,
  GreaterThanGreaterThanEqual = 71,
  GreaterThanGreaterThanGreaterThan = 72,
  GreaterThanGreaterThanGreaterThanEqual = 73,
  GweiKeyword = 74,
  HexByteEscape = 75,
  HexCharacter = 76,
  HexLiteral = 77,
  HexStringLiteral = 78,
  HoursKeyword = 79,
  Identifier = 80,
  IdentifierPart = 81,
  IdentifierStart = 82,
  IfKeyword = 83,
  ImmutableKeyword = 84,
  ImportKeyword = 85,
  IndexedKeyword = 86,
  InterfaceKeyword = 87,
  InternalKeyword = 88,
  IsKeyword = 89,
  LeaveKeyword = 90,
  LessThan = 91,
  LessThanEqual = 92,
  LessThanLessThan = 93,
  LessThanLessThanEqual = 94,
  LetKeyword = 95,
  LibraryKeyword = 96,
  MappingKeyword = 97,
  MemoryKeyword = 98,
  Minus = 99,
  MinusEqual = 100,
  MinusGreaterThan = 101,
  MinusMinus = 102,
  MinutesKeyword = 103,
  ModifierKeyword = 104,
  MultilineComment = 105,
  NewKeyword = 106,
  NotAnIdentifierInAnyVersion = 107,
  NotAnIdentifierInSomeVersions = 108,
  OpenBrace = 109,
  OpenBracket = 110,
  OpenParen = 111,
  OverrideKeyword = 112,
  PayableKeyword = 113,
  Percent = 114,
  PercentEqual = 115,
  Period = 116,
  Plus = 117,
  PlusEqual = 118,
  PlusPlus = 119,
  PossiblySeparatedPairsOfHexDigits = 120,
  PragmaKeyword = 121,
  PrivateKeyword = 122,
  PublicKeyword = 123,
  PureKeyword = 124,
  QuestionMark = 125,
  RawIdentifier = 126,
  ReceiveKeyword = 127,
  ReturnKeyword = 128,
  ReturnsKeyword = 129,
  RevertKeyword = 130,
  SecondsKeyword = 131,
  Semicolon = 132,
  SignedFixedType = 133,
  SignedIntegerType = 134,
  SingleLineComment = 135,
  SingleQuotedAsciiStringLiteral = 136,
  SingleQuotedUnicodeStringLiteral = 137,
  Slash = 138,
  SlashEqual = 139,
  SolidityKeyword = 140,
  StorageKeyword = 141,
  StringKeyword = 142,
  StructKeyword = 143,
  SwitchKeyword = 144,
  SzaboKeyword = 145,
  ThrowKeyword = 146,
  Tilde = 147,
  TrueKeyword = 148,
  TryKeyword = 149,
  TypeKeyword = 150,
  UncheckedKeyword = 151,
  UnicodeEscape = 152,
  UnicodeStringLiteral = 153,
  UnsignedFixedType = 154,
  UnsignedIntegerType = 155,
  UsingKeyword = 156,
  VarKeyword = 157,
  VersionPragmaValue = 158,
  ViewKeyword = 159,
  VirtualKeyword = 160,
  WeeksKeyword = 161,
  WeiKeyword = 162,
  WhileKeyword = 163,
  Whitespace = 164,
  YearsKeyword = 165,
  YulDecimalLiteral = 166,
  YulHexLiteral = 167,
  YulIdentifier = 168,
  YulKeyword = 169,
  YulReservedKeyword = 170,
}
export enum RuleKind {
  ABICoderPragma = 0,
  AddSubExpression = 1,
  AddressType = 2,
  AndExpression = 3,
  ArgumentList = 4,
  Arguments = 5,
  ArrayLiteral = 6,
  ArrayTypeName = 7,
  AssemblyFlags = 8,
  AssemblyStatement = 9,
  AssignmentExpression = 10,
  AsteriskImport = 11,
  BitAndExpression = 12,
  BitOrExpression = 13,
  BitXOrExpression = 14,
  Block = 15,
  BooleanLiteral = 16,
  BreakStatement = 17,
  CatchClause = 18,
  ConditionalExpression = 19,
  ConstantDefinition = 20,
  ConstructorAttribute = 21,
  ConstructorDefinition = 22,
  ContinueStatement = 23,
  ContractBodyElement = 24,
  ContractDefinition = 25,
  DataLocation = 26,
  Definition = 27,
  DeleteStatement = 28,
  Directive = 29,
  DoWhileStatement = 30,
  ElementaryType = 31,
  EmitStatement = 32,
  EndOfFileTrivia = 33,
  EnumDefinition = 34,
  EqualityComparisonExpression = 35,
  ErrorDefinition = 36,
  ErrorParameter = 37,
  EventDefinition = 38,
  EventParameter = 39,
  ExperimentalPragma = 40,
  ExponentiationExpression = 41,
  Expression = 42,
  ExpressionStatement = 43,
  FallbackFunctionAttribute = 44,
  FallbackFunctionDefinition = 45,
  ForStatement = 46,
  FunctionAttribute = 47,
  FunctionCallExpression = 48,
  FunctionCallOptions = 49,
  FunctionDefinition = 50,
  FunctionType = 51,
  IdentifierPath = 52,
  IfStatement = 53,
  ImportAlias = 54,
  ImportDirective = 55,
  ImportPath = 56,
  IndexAccessExpression = 57,
  InheritanceSpecifier = 58,
  InheritanceSpecifierList = 59,
  InterfaceDefinition = 60,
  LeadingTrivia = 61,
  LibraryDefinition = 62,
  MappingKeyType = 63,
  MappingType = 64,
  MappingValueType = 65,
  MemberAccessExpression = 66,
  ModifierAttribute = 67,
  ModifierDefinition = 68,
  ModifierInvocation = 69,
  MulDivModExpression = 70,
  NamedArgument = 71,
  NamedArgumentList = 72,
  NewExpression = 73,
  NumberUnit = 74,
  NumericExpression = 75,
  OrExpression = 76,
  OrderComparisonExpression = 77,
  OverrideSpecifier = 78,
  ParameterDeclaration = 79,
  ParameterList = 80,
  PayableType = 81,
  PositionalArgumentList = 82,
  PragmaDirective = 83,
  PrimaryExpression = 84,
  ReceiveFunctionAttribute = 85,
  ReceiveFunctionDefinition = 86,
  Results = 87,
  ReturnStatement = 88,
  RevertStatement = 89,
  SelectiveImport = 90,
  ShiftExpression = 91,
  SimpleImport = 92,
  SimpleStatement = 93,
  SourceUnit = 94,
  StateVariableAttribute = 95,
  StateVariableDeclaration = 96,
  Statement = 97,
  StringExpression = 98,
  StructDefinition = 99,
  StructMember = 100,
  ThrowStatement = 101,
  TrailingTrivia = 102,
  TryStatement = 103,
  TupleDeconstructionStatement = 104,
  TupleExpression = 105,
  TypeExpression = 106,
  TypeName = 107,
  UnaryPostfixExpression = 108,
  UnaryPrefixExpression = 109,
  UncheckedBlock = 110,
  UnnamedFunctionAttribute = 111,
  UnnamedFunctionDefinition = 112,
  UserDefinedOperator = 113,
  UserDefinedValueTypeDefinition = 114,
  UsingDirective = 115,
  VariableDeclarationStatement = 116,
  VersionPragma = 117,
  VersionPragmaAlternatives = 118,
  VersionPragmaComparator = 119,
  VersionPragmaExpression = 120,
  VersionPragmaRange = 121,
  VersionPragmaSpecifier = 122,
  WhileStatement = 123,
  YulAssignmentStatement = 124,
  YulBlock = 125,
  YulBreakStatement = 126,
  YulContinueStatement = 127,
  YulDeclarationStatement = 128,
  YulExpression = 129,
  YulForStatement = 130,
  YulFunctionCallExpression = 131,
  YulFunctionDefinition = 132,
  YulIdentifierPath = 133,
  YulIfStatement = 134,
  YulLeaveStatement = 135,
  YulLiteral = 136,
  YulStatement = 137,
  YulSwitchStatement = 138,
  _DELIMITEDBY = 139,
  _OPTIONAL = 140,
  _REPEATED = 141,
  _SEPARATEDBY = 142,
  _SEQUENCE = 143,
  _TERMINATEDBY = 144,
}
export enum ProductionKind {
  ABICoderPragma = 0,
  AbicoderKeyword = 1,
  AbstractKeyword = 2,
  AddressKeyword = 3,
  AddressType = 4,
  Ampersand = 5,
  AmpersandAmpersand = 6,
  AmpersandEqual = 7,
  AnonymousKeyword = 8,
  ArgumentList = 9,
  ArrayLiteral = 10,
  AsKeyword = 11,
  AsciiEscape = 12,
  AsciiStringLiteral = 13,
  AssemblyFlags = 14,
  AssemblyKeyword = 15,
  AssemblyStatement = 16,
  Asterisk = 17,
  AsteriskAsterisk = 18,
  AsteriskEqual = 19,
  AsteriskImport = 20,
  Bang = 21,
  BangEqual = 22,
  Bar = 23,
  BarBar = 24,
  BarEqual = 25,
  Block = 26,
  BoolKeyword = 27,
  BooleanLiteral = 28,
  BreakKeyword = 29,
  BreakStatement = 30,
  ByteType = 31,
  CalldataKeyword = 32,
  Caret = 33,
  CaretEqual = 34,
  CaseKeyword = 35,
  CatchClause = 36,
  CatchKeyword = 37,
  CloseBrace = 38,
  CloseBracket = 39,
  CloseParen = 40,
  Colon = 41,
  ColonEqual = 42,
  Comma = 43,
  ConstantDefinition = 44,
  ConstantKeyword = 45,
  ConstructorAttribute = 46,
  ConstructorDefinition = 47,
  ConstructorKeyword = 48,
  ContinueKeyword = 49,
  ContinueStatement = 50,
  ContractBodyElement = 51,
  ContractDefinition = 52,
  ContractKeyword = 53,
  DataLocation = 54,
  DaysKeyword = 55,
  DecimalExponent = 56,
  DecimalLiteral = 57,
  DecimalNumber = 58,
  DefaultKeyword = 59,
  Definition = 60,
  DeleteKeyword = 61,
  DeleteStatement = 62,
  Directive = 63,
  DoKeyword = 64,
  DoWhileStatement = 65,
  DoubleQuotedAsciiStringLiteral = 66,
  DoubleQuotedUnicodeStringLiteral = 67,
  ElementaryType = 68,
  ElseKeyword = 69,
  EmitKeyword = 70,
  EmitStatement = 71,
  EndOfFileTrivia = 72,
  EndOfLine = 73,
  EnumDefinition = 74,
  EnumKeyword = 75,
  Equal = 76,
  EqualEqual = 77,
  EqualGreaterThan = 78,
  ErrorDefinition = 79,
  ErrorKeyword = 80,
  ErrorParameter = 81,
  EscapeSequence = 82,
  EtherKeyword = 83,
  EventDefinition = 84,
  EventKeyword = 85,
  EventParameter = 86,
  Evmasm = 87,
  ExperimentalKeyword = 88,
  ExperimentalPragma = 89,
  Expression = 90,
  ExpressionStatement = 91,
  ExternalKeyword = 92,
  FallbackFunctionAttribute = 93,
  FallbackFunctionDefinition = 94,
  FallbackKeyword = 95,
  FalseKeyword = 96,
  FinneyKeyword = 97,
  FixedBytesType = 98,
  ForKeyword = 99,
  ForStatement = 100,
  FromKeyword = 101,
  FunctionAttribute = 102,
  FunctionCallOptions = 103,
  FunctionDefinition = 104,
  FunctionKeyword = 105,
  FunctionType = 106,
  GlobalKeyword = 107,
  GreaterThan = 108,
  GreaterThanEqual = 109,
  GreaterThanGreaterThan = 110,
  GreaterThanGreaterThanEqual = 111,
  GreaterThanGreaterThanGreaterThan = 112,
  GreaterThanGreaterThanGreaterThanEqual = 113,
  GweiKeyword = 114,
  HexByteEscape = 115,
  HexCharacter = 116,
  HexLiteral = 117,
  HexStringLiteral = 118,
  HoursKeyword = 119,
  Identifier = 120,
  IdentifierPart = 121,
  IdentifierPath = 122,
  IdentifierStart = 123,
  IfKeyword = 124,
  IfStatement = 125,
  ImmutableKeyword = 126,
  ImportAlias = 127,
  ImportDirective = 128,
  ImportKeyword = 129,
  ImportPath = 130,
  IndexedKeyword = 131,
  InheritanceSpecifier = 132,
  InheritanceSpecifierList = 133,
  InterfaceDefinition = 134,
  InterfaceKeyword = 135,
  InternalKeyword = 136,
  IsKeyword = 137,
  LeadingTrivia = 138,
  LeaveKeyword = 139,
  LessThan = 140,
  LessThanEqual = 141,
  LessThanLessThan = 142,
  LessThanLessThanEqual = 143,
  LetKeyword = 144,
  LibraryDefinition = 145,
  LibraryKeyword = 146,
  MappingKeyType = 147,
  MappingKeyword = 148,
  MappingType = 149,
  MappingValueType = 150,
  MemoryKeyword = 151,
  Minus = 152,
  MinusEqual = 153,
  MinusGreaterThan = 154,
  MinusMinus = 155,
  MinutesKeyword = 156,
  ModifierAttribute = 157,
  ModifierDefinition = 158,
  ModifierInvocation = 159,
  ModifierKeyword = 160,
  MultilineComment = 161,
  NamedArgument = 162,
  NamedArgumentList = 163,
  NewExpression = 164,
  NewKeyword = 165,
  NotAnIdentifierInAnyVersion = 166,
  NotAnIdentifierInSomeVersions = 167,
  NumberUnit = 168,
  NumericExpression = 169,
  OpenBrace = 170,
  OpenBracket = 171,
  OpenParen = 172,
  OverrideKeyword = 173,
  OverrideSpecifier = 174,
  ParameterDeclaration = 175,
  ParameterList = 176,
  PayableKeyword = 177,
  PayableType = 178,
  Percent = 179,
  PercentEqual = 180,
  Period = 181,
  Plus = 182,
  PlusEqual = 183,
  PlusPlus = 184,
  PositionalArgumentList = 185,
  PossiblySeparatedPairsOfHexDigits = 186,
  PragmaDirective = 187,
  PragmaKeyword = 188,
  PrimaryExpression = 189,
  PrivateKeyword = 190,
  PublicKeyword = 191,
  PureKeyword = 192,
  QuestionMark = 193,
  RawIdentifier = 194,
  ReceiveFunctionAttribute = 195,
  ReceiveFunctionDefinition = 196,
  ReceiveKeyword = 197,
  ReturnKeyword = 198,
  ReturnStatement = 199,
  ReturnsKeyword = 200,
  RevertKeyword = 201,
  RevertStatement = 202,
  SecondsKeyword = 203,
  SelectiveImport = 204,
  Semicolon = 205,
  SignedFixedType = 206,
  SignedIntegerType = 207,
  SimpleImport = 208,
  SimpleStatement = 209,
  SingleLineComment = 210,
  SingleQuotedAsciiStringLiteral = 211,
  SingleQuotedUnicodeStringLiteral = 212,
  Slash = 213,
  SlashEqual = 214,
  SolidityKeyword = 215,
  SourceUnit = 216,
  StateVariableAttribute = 217,
  StateVariableDeclaration = 218,
  Statement = 219,
  StorageKeyword = 220,
  StringExpression = 221,
  StringKeyword = 222,
  StructDefinition = 223,
  StructKeyword = 224,
  StructMember = 225,
  SwitchKeyword = 226,
  SzaboKeyword = 227,
  ThrowKeyword = 228,
  ThrowStatement = 229,
  Tilde = 230,
  TrailingTrivia = 231,
  TrueKeyword = 232,
  TryKeyword = 233,
  TryStatement = 234,
  TupleDeconstructionStatement = 235,
  TupleExpression = 236,
  TypeExpression = 237,
  TypeKeyword = 238,
  TypeName = 239,
  UncheckedBlock = 240,
  UncheckedKeyword = 241,
  UnicodeEscape = 242,
  UnicodeStringLiteral = 243,
  UnnamedFunctionAttribute = 244,
  UnnamedFunctionDefinition = 245,
  UnsignedFixedType = 246,
  UnsignedIntegerType = 247,
  UserDefinedOperator = 248,
  UserDefinedValueTypeDefinition = 249,
  UsingDirective = 250,
  UsingKeyword = 251,
  VarKeyword = 252,
  VariableDeclarationStatement = 253,
  VersionPragma = 254,
  VersionPragmaExpression = 255,
  VersionPragmaSpecifier = 256,
  VersionPragmaValue = 257,
  ViewKeyword = 258,
  VirtualKeyword = 259,
  WeeksKeyword = 260,
  WeiKeyword = 261,
  WhileKeyword = 262,
  WhileStatement = 263,
  Whitespace = 264,
  YearsKeyword = 265,
  YulAssignmentStatement = 266,
  YulBlock = 267,
  YulBreakStatement = 268,
  YulContinueStatement = 269,
  YulDecimalLiteral = 270,
  YulDeclarationStatement = 271,
  YulExpression = 272,
  YulForStatement = 273,
  YulFunctionDefinition = 274,
  YulHexLiteral = 275,
  YulIdentifier = 276,
  YulIdentifierPath = 277,
  YulIfStatement = 278,
  YulKeyword = 279,
  YulLeaveStatement = 280,
  YulLiteral = 281,
  YulReservedKeyword = 282,
  YulStatement = 283,
  YulSwitchStatement = 284,
}
export class RuleNode {
  get type(): NodeType.Rule;
  get kind(): RuleKind;
  get byteRange(): [start: number, end: number];
  get charRange(): [start: number, end: number];
  get byteRangeIncludingTrivia(): [start: number, end: number];
  get charRangeIncludingTrivia(): [start: number, end: number];
  get children(): (RuleNode | TokenNode)[];
}
export class TokenNode {
  get type(): NodeType.Token;
  get kind(): TokenKind;
  get byteRange(): [start: number, end: number];
  get charRange(): [start: number, end: number];
  get byteRangeIncludingTrivia(): [start: number, end: number];
  get charRangeIncludingTrivia(): [start: number, end: number];
  get trivia(): (RuleNode | TokenNode)[];
}
export class Language {
  constructor(version: string);
  get version(): string;
  parse(productionKind: ProductionKind, input: string): ParseOutput;
}
export class ParseOutput {
  get parseTree(): RuleNode | TokenNode | null;
  get errors(): Array<ParseError>;
  get isValid(): boolean;
}
export class ParseError {
  get bytePosition(): number;
  get charPosition(): number;
  get expected(): Array<string>;
  toErrorReport(sourceId: string, source: string, withColour: boolean): string;
}
