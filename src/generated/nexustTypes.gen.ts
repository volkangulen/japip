/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context } from "./../graphql/context"
import type { core } from "nexus"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    json<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "JSON";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    json<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "JSON";
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  JSON: any
}

export interface NexusGenObjects {
  Query: {};
  Room: { // root type
    createdAt: string; // String!
    description?: string | null; // String
    id: string; // String!
    name: string; // String!
    options?: NexusGenScalars['JSON'] | null; // JSON
    ownerToken: string; // String!
    updatedAt: string; // String!
  }
  Story: { // root type
    createdAt: string; // String!
    id: string; // ID!
    title: string; // String!
  }
  User: { // root type
    createdAt: string; // String!
    email?: string | null; // String
    id: string; // ID!
    name: string; // String!
    updatedAt: string; // String!
  }
  Vote: { // root type
    choice: number; // Int!
    createdAt: string; // String!
    description?: string | null; // String
    id: string; // ID!
    updatedAt: string; // String!
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Query: { // field return type
    rooms: Array<NexusGenRootTypes['Room'] | null> | null; // [Room]
  }
  Room: { // field return type
    createdAt: string; // String!
    description: string | null; // String
    id: string; // String!
    name: string; // String!
    options: NexusGenScalars['JSON'] | null; // JSON
    ownerToken: string; // String!
    stories: Array<NexusGenRootTypes['Story'] | null>; // [Story]!
    updatedAt: string; // String!
    users: Array<NexusGenRootTypes['User'] | null>; // [User]!
  }
  Story: { // field return type
    createdAt: string; // String!
    id: string; // ID!
    room: NexusGenRootTypes['Room']; // Room!
    title: string; // String!
    votes: Array<NexusGenRootTypes['Vote'] | null>; // [Vote]!
  }
  User: { // field return type
    createdAt: string; // String!
    email: string | null; // String
    id: string; // ID!
    name: string; // String!
    rooms: Array<NexusGenRootTypes['Room'] | null>; // [Room]!
    updatedAt: string; // String!
    votes: Array<NexusGenRootTypes['Vote'] | null>; // [Vote]!
  }
  Vote: { // field return type
    choice: number; // Int!
    createdAt: string; // String!
    description: string | null; // String
    id: string; // ID!
    story: NexusGenRootTypes['Story']; // Story!
    updatedAt: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
}

export interface NexusGenFieldTypeNames {
  Query: { // field return type name
    rooms: 'Room'
  }
  Room: { // field return type name
    createdAt: 'String'
    description: 'String'
    id: 'String'
    name: 'String'
    options: 'JSON'
    ownerToken: 'String'
    stories: 'Story'
    updatedAt: 'String'
    users: 'User'
  }
  Story: { // field return type name
    createdAt: 'String'
    id: 'ID'
    room: 'Room'
    title: 'String'
    votes: 'Vote'
  }
  User: { // field return type name
    createdAt: 'String'
    email: 'String'
    id: 'ID'
    name: 'String'
    rooms: 'Room'
    updatedAt: 'String'
    votes: 'Vote'
  }
  Vote: { // field return type name
    choice: 'Int'
    createdAt: 'String'
    description: 'String'
    id: 'ID'
    story: 'Story'
    updatedAt: 'String'
    user: 'User'
  }
}

export interface NexusGenArgTypes {
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}