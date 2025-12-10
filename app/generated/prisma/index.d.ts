
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model properties
 * 
 */
export type properties = $Result.DefaultSelection<Prisma.$propertiesPayload>
/**
 * Model supercars
 * 
 */
export type supercars = $Result.DefaultSelection<Prisma.$supercarsPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model yachts
 * 
 */
export type yachts = $Result.DefaultSelection<Prisma.$yachtsPayload>
/**
 * Model crypto_prices
 * 
 */
export type crypto_prices = $Result.DefaultSelection<Prisma.$crypto_pricesPayload>
/**
 * Model leads
 * 
 */
export type leads = $Result.DefaultSelection<Prisma.$leadsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Properties
 * const properties = await prisma.properties.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Properties
   * const properties = await prisma.properties.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.properties`: Exposes CRUD operations for the **properties** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Properties
    * const properties = await prisma.properties.findMany()
    * ```
    */
  get properties(): Prisma.propertiesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.supercars`: Exposes CRUD operations for the **supercars** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Supercars
    * const supercars = await prisma.supercars.findMany()
    * ```
    */
  get supercars(): Prisma.supercarsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.yachts`: Exposes CRUD operations for the **yachts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Yachts
    * const yachts = await prisma.yachts.findMany()
    * ```
    */
  get yachts(): Prisma.yachtsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.crypto_prices`: Exposes CRUD operations for the **crypto_prices** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Crypto_prices
    * const crypto_prices = await prisma.crypto_prices.findMany()
    * ```
    */
  get crypto_prices(): Prisma.crypto_pricesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.leads`: Exposes CRUD operations for the **leads** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Leads
    * const leads = await prisma.leads.findMany()
    * ```
    */
  get leads(): Prisma.leadsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.1.0
   * Query Engine version: ab635e6b9d606fa5c8fb8b1a7f909c3c3c1c98ba
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    properties: 'properties',
    supercars: 'supercars',
    User: 'User',
    yachts: 'yachts',
    crypto_prices: 'crypto_prices',
    leads: 'leads'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "properties" | "supercars" | "user" | "yachts" | "crypto_prices" | "leads"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      properties: {
        payload: Prisma.$propertiesPayload<ExtArgs>
        fields: Prisma.propertiesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.propertiesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$propertiesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.propertiesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$propertiesPayload>
          }
          findFirst: {
            args: Prisma.propertiesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$propertiesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.propertiesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$propertiesPayload>
          }
          findMany: {
            args: Prisma.propertiesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$propertiesPayload>[]
          }
          create: {
            args: Prisma.propertiesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$propertiesPayload>
          }
          createMany: {
            args: Prisma.propertiesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.propertiesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$propertiesPayload>[]
          }
          delete: {
            args: Prisma.propertiesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$propertiesPayload>
          }
          update: {
            args: Prisma.propertiesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$propertiesPayload>
          }
          deleteMany: {
            args: Prisma.propertiesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.propertiesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.propertiesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$propertiesPayload>[]
          }
          upsert: {
            args: Prisma.propertiesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$propertiesPayload>
          }
          aggregate: {
            args: Prisma.PropertiesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProperties>
          }
          groupBy: {
            args: Prisma.propertiesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropertiesGroupByOutputType>[]
          }
          count: {
            args: Prisma.propertiesCountArgs<ExtArgs>
            result: $Utils.Optional<PropertiesCountAggregateOutputType> | number
          }
        }
      }
      supercars: {
        payload: Prisma.$supercarsPayload<ExtArgs>
        fields: Prisma.supercarsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.supercarsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supercarsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.supercarsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supercarsPayload>
          }
          findFirst: {
            args: Prisma.supercarsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supercarsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.supercarsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supercarsPayload>
          }
          findMany: {
            args: Prisma.supercarsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supercarsPayload>[]
          }
          create: {
            args: Prisma.supercarsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supercarsPayload>
          }
          createMany: {
            args: Prisma.supercarsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.supercarsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supercarsPayload>[]
          }
          delete: {
            args: Prisma.supercarsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supercarsPayload>
          }
          update: {
            args: Prisma.supercarsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supercarsPayload>
          }
          deleteMany: {
            args: Prisma.supercarsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.supercarsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.supercarsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supercarsPayload>[]
          }
          upsert: {
            args: Prisma.supercarsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supercarsPayload>
          }
          aggregate: {
            args: Prisma.SupercarsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupercars>
          }
          groupBy: {
            args: Prisma.supercarsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupercarsGroupByOutputType>[]
          }
          count: {
            args: Prisma.supercarsCountArgs<ExtArgs>
            result: $Utils.Optional<SupercarsCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      yachts: {
        payload: Prisma.$yachtsPayload<ExtArgs>
        fields: Prisma.yachtsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.yachtsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$yachtsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.yachtsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$yachtsPayload>
          }
          findFirst: {
            args: Prisma.yachtsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$yachtsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.yachtsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$yachtsPayload>
          }
          findMany: {
            args: Prisma.yachtsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$yachtsPayload>[]
          }
          create: {
            args: Prisma.yachtsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$yachtsPayload>
          }
          createMany: {
            args: Prisma.yachtsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.yachtsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$yachtsPayload>[]
          }
          delete: {
            args: Prisma.yachtsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$yachtsPayload>
          }
          update: {
            args: Prisma.yachtsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$yachtsPayload>
          }
          deleteMany: {
            args: Prisma.yachtsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.yachtsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.yachtsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$yachtsPayload>[]
          }
          upsert: {
            args: Prisma.yachtsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$yachtsPayload>
          }
          aggregate: {
            args: Prisma.YachtsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateYachts>
          }
          groupBy: {
            args: Prisma.yachtsGroupByArgs<ExtArgs>
            result: $Utils.Optional<YachtsGroupByOutputType>[]
          }
          count: {
            args: Prisma.yachtsCountArgs<ExtArgs>
            result: $Utils.Optional<YachtsCountAggregateOutputType> | number
          }
        }
      }
      crypto_prices: {
        payload: Prisma.$crypto_pricesPayload<ExtArgs>
        fields: Prisma.crypto_pricesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.crypto_pricesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$crypto_pricesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.crypto_pricesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$crypto_pricesPayload>
          }
          findFirst: {
            args: Prisma.crypto_pricesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$crypto_pricesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.crypto_pricesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$crypto_pricesPayload>
          }
          findMany: {
            args: Prisma.crypto_pricesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$crypto_pricesPayload>[]
          }
          create: {
            args: Prisma.crypto_pricesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$crypto_pricesPayload>
          }
          createMany: {
            args: Prisma.crypto_pricesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.crypto_pricesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$crypto_pricesPayload>[]
          }
          delete: {
            args: Prisma.crypto_pricesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$crypto_pricesPayload>
          }
          update: {
            args: Prisma.crypto_pricesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$crypto_pricesPayload>
          }
          deleteMany: {
            args: Prisma.crypto_pricesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.crypto_pricesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.crypto_pricesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$crypto_pricesPayload>[]
          }
          upsert: {
            args: Prisma.crypto_pricesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$crypto_pricesPayload>
          }
          aggregate: {
            args: Prisma.Crypto_pricesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCrypto_prices>
          }
          groupBy: {
            args: Prisma.crypto_pricesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Crypto_pricesGroupByOutputType>[]
          }
          count: {
            args: Prisma.crypto_pricesCountArgs<ExtArgs>
            result: $Utils.Optional<Crypto_pricesCountAggregateOutputType> | number
          }
        }
      }
      leads: {
        payload: Prisma.$leadsPayload<ExtArgs>
        fields: Prisma.leadsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.leadsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leadsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.leadsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leadsPayload>
          }
          findFirst: {
            args: Prisma.leadsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leadsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.leadsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leadsPayload>
          }
          findMany: {
            args: Prisma.leadsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leadsPayload>[]
          }
          create: {
            args: Prisma.leadsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leadsPayload>
          }
          createMany: {
            args: Prisma.leadsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.leadsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leadsPayload>[]
          }
          delete: {
            args: Prisma.leadsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leadsPayload>
          }
          update: {
            args: Prisma.leadsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leadsPayload>
          }
          deleteMany: {
            args: Prisma.leadsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.leadsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.leadsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leadsPayload>[]
          }
          upsert: {
            args: Prisma.leadsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leadsPayload>
          }
          aggregate: {
            args: Prisma.LeadsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeads>
          }
          groupBy: {
            args: Prisma.leadsGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeadsGroupByOutputType>[]
          }
          count: {
            args: Prisma.leadsCountArgs<ExtArgs>
            result: $Utils.Optional<LeadsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    properties?: propertiesOmit
    supercars?: supercarsOmit
    user?: UserOmit
    yachts?: yachtsOmit
    crypto_prices?: crypto_pricesOmit
    leads?: leadsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model properties
   */

  export type AggregateProperties = {
    _count: PropertiesCountAggregateOutputType | null
    _avg: PropertiesAvgAggregateOutputType | null
    _sum: PropertiesSumAggregateOutputType | null
    _min: PropertiesMinAggregateOutputType | null
    _max: PropertiesMaxAggregateOutputType | null
  }

  export type PropertiesAvgAggregateOutputType = {
    price_aed: Decimal | null
    bedrooms: number | null
    bathrooms: number | null
    sqft: number | null
    latitude: Decimal | null
    longitude: Decimal | null
  }

  export type PropertiesSumAggregateOutputType = {
    price_aed: Decimal | null
    bedrooms: number | null
    bathrooms: number | null
    sqft: number | null
    latitude: Decimal | null
    longitude: Decimal | null
  }

  export type PropertiesMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    price_aed: Decimal | null
    property_type: string | null
    bedrooms: number | null
    bathrooms: number | null
    sqft: number | null
    area: string | null
    developer: string | null
    crypto_verified: boolean | null
    golden_visa_eligible: boolean | null
    status: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    created_at: Date | null
  }

  export type PropertiesMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    price_aed: Decimal | null
    property_type: string | null
    bedrooms: number | null
    bathrooms: number | null
    sqft: number | null
    area: string | null
    developer: string | null
    crypto_verified: boolean | null
    golden_visa_eligible: boolean | null
    status: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    created_at: Date | null
  }

  export type PropertiesCountAggregateOutputType = {
    id: number
    title: number
    description: number
    price_aed: number
    property_type: number
    bedrooms: number
    bathrooms: number
    sqft: number
    area: number
    developer: number
    crypto_verified: number
    golden_visa_eligible: number
    images: number
    amenities: number
    status: number
    latitude: number
    longitude: number
    created_at: number
    _all: number
  }


  export type PropertiesAvgAggregateInputType = {
    price_aed?: true
    bedrooms?: true
    bathrooms?: true
    sqft?: true
    latitude?: true
    longitude?: true
  }

  export type PropertiesSumAggregateInputType = {
    price_aed?: true
    bedrooms?: true
    bathrooms?: true
    sqft?: true
    latitude?: true
    longitude?: true
  }

  export type PropertiesMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    price_aed?: true
    property_type?: true
    bedrooms?: true
    bathrooms?: true
    sqft?: true
    area?: true
    developer?: true
    crypto_verified?: true
    golden_visa_eligible?: true
    status?: true
    latitude?: true
    longitude?: true
    created_at?: true
  }

  export type PropertiesMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    price_aed?: true
    property_type?: true
    bedrooms?: true
    bathrooms?: true
    sqft?: true
    area?: true
    developer?: true
    crypto_verified?: true
    golden_visa_eligible?: true
    status?: true
    latitude?: true
    longitude?: true
    created_at?: true
  }

  export type PropertiesCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    price_aed?: true
    property_type?: true
    bedrooms?: true
    bathrooms?: true
    sqft?: true
    area?: true
    developer?: true
    crypto_verified?: true
    golden_visa_eligible?: true
    images?: true
    amenities?: true
    status?: true
    latitude?: true
    longitude?: true
    created_at?: true
    _all?: true
  }

  export type PropertiesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which properties to aggregate.
     */
    where?: propertiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of properties to fetch.
     */
    orderBy?: propertiesOrderByWithRelationInput | propertiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: propertiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned properties
    **/
    _count?: true | PropertiesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PropertiesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PropertiesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropertiesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropertiesMaxAggregateInputType
  }

  export type GetPropertiesAggregateType<T extends PropertiesAggregateArgs> = {
        [P in keyof T & keyof AggregateProperties]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProperties[P]>
      : GetScalarType<T[P], AggregateProperties[P]>
  }




  export type propertiesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: propertiesWhereInput
    orderBy?: propertiesOrderByWithAggregationInput | propertiesOrderByWithAggregationInput[]
    by: PropertiesScalarFieldEnum[] | PropertiesScalarFieldEnum
    having?: propertiesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropertiesCountAggregateInputType | true
    _avg?: PropertiesAvgAggregateInputType
    _sum?: PropertiesSumAggregateInputType
    _min?: PropertiesMinAggregateInputType
    _max?: PropertiesMaxAggregateInputType
  }

  export type PropertiesGroupByOutputType = {
    id: string
    title: string
    description: string | null
    price_aed: Decimal
    property_type: string | null
    bedrooms: number | null
    bathrooms: number | null
    sqft: number | null
    area: string | null
    developer: string | null
    crypto_verified: boolean | null
    golden_visa_eligible: boolean | null
    images: string[]
    amenities: string[]
    status: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    created_at: Date | null
    _count: PropertiesCountAggregateOutputType | null
    _avg: PropertiesAvgAggregateOutputType | null
    _sum: PropertiesSumAggregateOutputType | null
    _min: PropertiesMinAggregateOutputType | null
    _max: PropertiesMaxAggregateOutputType | null
  }

  type GetPropertiesGroupByPayload<T extends propertiesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropertiesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropertiesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropertiesGroupByOutputType[P]>
            : GetScalarType<T[P], PropertiesGroupByOutputType[P]>
        }
      >
    >


  export type propertiesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    price_aed?: boolean
    property_type?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    sqft?: boolean
    area?: boolean
    developer?: boolean
    crypto_verified?: boolean
    golden_visa_eligible?: boolean
    images?: boolean
    amenities?: boolean
    status?: boolean
    latitude?: boolean
    longitude?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["properties"]>

  export type propertiesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    price_aed?: boolean
    property_type?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    sqft?: boolean
    area?: boolean
    developer?: boolean
    crypto_verified?: boolean
    golden_visa_eligible?: boolean
    images?: boolean
    amenities?: boolean
    status?: boolean
    latitude?: boolean
    longitude?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["properties"]>

  export type propertiesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    price_aed?: boolean
    property_type?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    sqft?: boolean
    area?: boolean
    developer?: boolean
    crypto_verified?: boolean
    golden_visa_eligible?: boolean
    images?: boolean
    amenities?: boolean
    status?: boolean
    latitude?: boolean
    longitude?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["properties"]>

  export type propertiesSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    price_aed?: boolean
    property_type?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    sqft?: boolean
    area?: boolean
    developer?: boolean
    crypto_verified?: boolean
    golden_visa_eligible?: boolean
    images?: boolean
    amenities?: boolean
    status?: boolean
    latitude?: boolean
    longitude?: boolean
    created_at?: boolean
  }

  export type propertiesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "price_aed" | "property_type" | "bedrooms" | "bathrooms" | "sqft" | "area" | "developer" | "crypto_verified" | "golden_visa_eligible" | "images" | "amenities" | "status" | "latitude" | "longitude" | "created_at", ExtArgs["result"]["properties"]>

  export type $propertiesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "properties"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      price_aed: Prisma.Decimal
      property_type: string | null
      bedrooms: number | null
      bathrooms: number | null
      sqft: number | null
      area: string | null
      developer: string | null
      crypto_verified: boolean | null
      golden_visa_eligible: boolean | null
      images: string[]
      amenities: string[]
      status: string | null
      latitude: Prisma.Decimal | null
      longitude: Prisma.Decimal | null
      created_at: Date | null
    }, ExtArgs["result"]["properties"]>
    composites: {}
  }

  type propertiesGetPayload<S extends boolean | null | undefined | propertiesDefaultArgs> = $Result.GetResult<Prisma.$propertiesPayload, S>

  type propertiesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<propertiesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PropertiesCountAggregateInputType | true
    }

  export interface propertiesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['properties'], meta: { name: 'properties' } }
    /**
     * Find zero or one Properties that matches the filter.
     * @param {propertiesFindUniqueArgs} args - Arguments to find a Properties
     * @example
     * // Get one Properties
     * const properties = await prisma.properties.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends propertiesFindUniqueArgs>(args: SelectSubset<T, propertiesFindUniqueArgs<ExtArgs>>): Prisma__propertiesClient<$Result.GetResult<Prisma.$propertiesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Properties that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {propertiesFindUniqueOrThrowArgs} args - Arguments to find a Properties
     * @example
     * // Get one Properties
     * const properties = await prisma.properties.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends propertiesFindUniqueOrThrowArgs>(args: SelectSubset<T, propertiesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__propertiesClient<$Result.GetResult<Prisma.$propertiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Properties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {propertiesFindFirstArgs} args - Arguments to find a Properties
     * @example
     * // Get one Properties
     * const properties = await prisma.properties.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends propertiesFindFirstArgs>(args?: SelectSubset<T, propertiesFindFirstArgs<ExtArgs>>): Prisma__propertiesClient<$Result.GetResult<Prisma.$propertiesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Properties that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {propertiesFindFirstOrThrowArgs} args - Arguments to find a Properties
     * @example
     * // Get one Properties
     * const properties = await prisma.properties.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends propertiesFindFirstOrThrowArgs>(args?: SelectSubset<T, propertiesFindFirstOrThrowArgs<ExtArgs>>): Prisma__propertiesClient<$Result.GetResult<Prisma.$propertiesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Properties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {propertiesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Properties
     * const properties = await prisma.properties.findMany()
     * 
     * // Get first 10 Properties
     * const properties = await prisma.properties.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propertiesWithIdOnly = await prisma.properties.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends propertiesFindManyArgs>(args?: SelectSubset<T, propertiesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$propertiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Properties.
     * @param {propertiesCreateArgs} args - Arguments to create a Properties.
     * @example
     * // Create one Properties
     * const Properties = await prisma.properties.create({
     *   data: {
     *     // ... data to create a Properties
     *   }
     * })
     * 
     */
    create<T extends propertiesCreateArgs>(args: SelectSubset<T, propertiesCreateArgs<ExtArgs>>): Prisma__propertiesClient<$Result.GetResult<Prisma.$propertiesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Properties.
     * @param {propertiesCreateManyArgs} args - Arguments to create many Properties.
     * @example
     * // Create many Properties
     * const properties = await prisma.properties.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends propertiesCreateManyArgs>(args?: SelectSubset<T, propertiesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Properties and returns the data saved in the database.
     * @param {propertiesCreateManyAndReturnArgs} args - Arguments to create many Properties.
     * @example
     * // Create many Properties
     * const properties = await prisma.properties.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Properties and only return the `id`
     * const propertiesWithIdOnly = await prisma.properties.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends propertiesCreateManyAndReturnArgs>(args?: SelectSubset<T, propertiesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$propertiesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Properties.
     * @param {propertiesDeleteArgs} args - Arguments to delete one Properties.
     * @example
     * // Delete one Properties
     * const Properties = await prisma.properties.delete({
     *   where: {
     *     // ... filter to delete one Properties
     *   }
     * })
     * 
     */
    delete<T extends propertiesDeleteArgs>(args: SelectSubset<T, propertiesDeleteArgs<ExtArgs>>): Prisma__propertiesClient<$Result.GetResult<Prisma.$propertiesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Properties.
     * @param {propertiesUpdateArgs} args - Arguments to update one Properties.
     * @example
     * // Update one Properties
     * const properties = await prisma.properties.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends propertiesUpdateArgs>(args: SelectSubset<T, propertiesUpdateArgs<ExtArgs>>): Prisma__propertiesClient<$Result.GetResult<Prisma.$propertiesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Properties.
     * @param {propertiesDeleteManyArgs} args - Arguments to filter Properties to delete.
     * @example
     * // Delete a few Properties
     * const { count } = await prisma.properties.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends propertiesDeleteManyArgs>(args?: SelectSubset<T, propertiesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {propertiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Properties
     * const properties = await prisma.properties.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends propertiesUpdateManyArgs>(args: SelectSubset<T, propertiesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Properties and returns the data updated in the database.
     * @param {propertiesUpdateManyAndReturnArgs} args - Arguments to update many Properties.
     * @example
     * // Update many Properties
     * const properties = await prisma.properties.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Properties and only return the `id`
     * const propertiesWithIdOnly = await prisma.properties.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends propertiesUpdateManyAndReturnArgs>(args: SelectSubset<T, propertiesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$propertiesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Properties.
     * @param {propertiesUpsertArgs} args - Arguments to update or create a Properties.
     * @example
     * // Update or create a Properties
     * const properties = await prisma.properties.upsert({
     *   create: {
     *     // ... data to create a Properties
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Properties we want to update
     *   }
     * })
     */
    upsert<T extends propertiesUpsertArgs>(args: SelectSubset<T, propertiesUpsertArgs<ExtArgs>>): Prisma__propertiesClient<$Result.GetResult<Prisma.$propertiesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {propertiesCountArgs} args - Arguments to filter Properties to count.
     * @example
     * // Count the number of Properties
     * const count = await prisma.properties.count({
     *   where: {
     *     // ... the filter for the Properties we want to count
     *   }
     * })
    **/
    count<T extends propertiesCountArgs>(
      args?: Subset<T, propertiesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropertiesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertiesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PropertiesAggregateArgs>(args: Subset<T, PropertiesAggregateArgs>): Prisma.PrismaPromise<GetPropertiesAggregateType<T>>

    /**
     * Group by Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {propertiesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends propertiesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: propertiesGroupByArgs['orderBy'] }
        : { orderBy?: propertiesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, propertiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertiesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the properties model
   */
  readonly fields: propertiesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for properties.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__propertiesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the properties model
   */
  interface propertiesFieldRefs {
    readonly id: FieldRef<"properties", 'String'>
    readonly title: FieldRef<"properties", 'String'>
    readonly description: FieldRef<"properties", 'String'>
    readonly price_aed: FieldRef<"properties", 'Decimal'>
    readonly property_type: FieldRef<"properties", 'String'>
    readonly bedrooms: FieldRef<"properties", 'Int'>
    readonly bathrooms: FieldRef<"properties", 'Int'>
    readonly sqft: FieldRef<"properties", 'Int'>
    readonly area: FieldRef<"properties", 'String'>
    readonly developer: FieldRef<"properties", 'String'>
    readonly crypto_verified: FieldRef<"properties", 'Boolean'>
    readonly golden_visa_eligible: FieldRef<"properties", 'Boolean'>
    readonly images: FieldRef<"properties", 'String[]'>
    readonly amenities: FieldRef<"properties", 'String[]'>
    readonly status: FieldRef<"properties", 'String'>
    readonly latitude: FieldRef<"properties", 'Decimal'>
    readonly longitude: FieldRef<"properties", 'Decimal'>
    readonly created_at: FieldRef<"properties", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * properties findUnique
   */
  export type propertiesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the properties
     */
    select?: propertiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the properties
     */
    omit?: propertiesOmit<ExtArgs> | null
    /**
     * Filter, which properties to fetch.
     */
    where: propertiesWhereUniqueInput
  }

  /**
   * properties findUniqueOrThrow
   */
  export type propertiesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the properties
     */
    select?: propertiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the properties
     */
    omit?: propertiesOmit<ExtArgs> | null
    /**
     * Filter, which properties to fetch.
     */
    where: propertiesWhereUniqueInput
  }

  /**
   * properties findFirst
   */
  export type propertiesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the properties
     */
    select?: propertiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the properties
     */
    omit?: propertiesOmit<ExtArgs> | null
    /**
     * Filter, which properties to fetch.
     */
    where?: propertiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of properties to fetch.
     */
    orderBy?: propertiesOrderByWithRelationInput | propertiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for properties.
     */
    cursor?: propertiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of properties.
     */
    distinct?: PropertiesScalarFieldEnum | PropertiesScalarFieldEnum[]
  }

  /**
   * properties findFirstOrThrow
   */
  export type propertiesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the properties
     */
    select?: propertiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the properties
     */
    omit?: propertiesOmit<ExtArgs> | null
    /**
     * Filter, which properties to fetch.
     */
    where?: propertiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of properties to fetch.
     */
    orderBy?: propertiesOrderByWithRelationInput | propertiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for properties.
     */
    cursor?: propertiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of properties.
     */
    distinct?: PropertiesScalarFieldEnum | PropertiesScalarFieldEnum[]
  }

  /**
   * properties findMany
   */
  export type propertiesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the properties
     */
    select?: propertiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the properties
     */
    omit?: propertiesOmit<ExtArgs> | null
    /**
     * Filter, which properties to fetch.
     */
    where?: propertiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of properties to fetch.
     */
    orderBy?: propertiesOrderByWithRelationInput | propertiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing properties.
     */
    cursor?: propertiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` properties.
     */
    skip?: number
    distinct?: PropertiesScalarFieldEnum | PropertiesScalarFieldEnum[]
  }

  /**
   * properties create
   */
  export type propertiesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the properties
     */
    select?: propertiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the properties
     */
    omit?: propertiesOmit<ExtArgs> | null
    /**
     * The data needed to create a properties.
     */
    data: XOR<propertiesCreateInput, propertiesUncheckedCreateInput>
  }

  /**
   * properties createMany
   */
  export type propertiesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many properties.
     */
    data: propertiesCreateManyInput | propertiesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * properties createManyAndReturn
   */
  export type propertiesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the properties
     */
    select?: propertiesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the properties
     */
    omit?: propertiesOmit<ExtArgs> | null
    /**
     * The data used to create many properties.
     */
    data: propertiesCreateManyInput | propertiesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * properties update
   */
  export type propertiesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the properties
     */
    select?: propertiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the properties
     */
    omit?: propertiesOmit<ExtArgs> | null
    /**
     * The data needed to update a properties.
     */
    data: XOR<propertiesUpdateInput, propertiesUncheckedUpdateInput>
    /**
     * Choose, which properties to update.
     */
    where: propertiesWhereUniqueInput
  }

  /**
   * properties updateMany
   */
  export type propertiesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update properties.
     */
    data: XOR<propertiesUpdateManyMutationInput, propertiesUncheckedUpdateManyInput>
    /**
     * Filter which properties to update
     */
    where?: propertiesWhereInput
    /**
     * Limit how many properties to update.
     */
    limit?: number
  }

  /**
   * properties updateManyAndReturn
   */
  export type propertiesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the properties
     */
    select?: propertiesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the properties
     */
    omit?: propertiesOmit<ExtArgs> | null
    /**
     * The data used to update properties.
     */
    data: XOR<propertiesUpdateManyMutationInput, propertiesUncheckedUpdateManyInput>
    /**
     * Filter which properties to update
     */
    where?: propertiesWhereInput
    /**
     * Limit how many properties to update.
     */
    limit?: number
  }

  /**
   * properties upsert
   */
  export type propertiesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the properties
     */
    select?: propertiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the properties
     */
    omit?: propertiesOmit<ExtArgs> | null
    /**
     * The filter to search for the properties to update in case it exists.
     */
    where: propertiesWhereUniqueInput
    /**
     * In case the properties found by the `where` argument doesn't exist, create a new properties with this data.
     */
    create: XOR<propertiesCreateInput, propertiesUncheckedCreateInput>
    /**
     * In case the properties was found with the provided `where` argument, update it with this data.
     */
    update: XOR<propertiesUpdateInput, propertiesUncheckedUpdateInput>
  }

  /**
   * properties delete
   */
  export type propertiesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the properties
     */
    select?: propertiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the properties
     */
    omit?: propertiesOmit<ExtArgs> | null
    /**
     * Filter which properties to delete.
     */
    where: propertiesWhereUniqueInput
  }

  /**
   * properties deleteMany
   */
  export type propertiesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which properties to delete
     */
    where?: propertiesWhereInput
    /**
     * Limit how many properties to delete.
     */
    limit?: number
  }

  /**
   * properties without action
   */
  export type propertiesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the properties
     */
    select?: propertiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the properties
     */
    omit?: propertiesOmit<ExtArgs> | null
  }


  /**
   * Model supercars
   */

  export type AggregateSupercars = {
    _count: SupercarsCountAggregateOutputType | null
    _avg: SupercarsAvgAggregateOutputType | null
    _sum: SupercarsSumAggregateOutputType | null
    _min: SupercarsMinAggregateOutputType | null
    _max: SupercarsMaxAggregateOutputType | null
  }

  export type SupercarsAvgAggregateOutputType = {
    year: number | null
    price_per_day_aed: Decimal | null
  }

  export type SupercarsSumAggregateOutputType = {
    year: number | null
    price_per_day_aed: Decimal | null
  }

  export type SupercarsMinAggregateOutputType = {
    id: string | null
    brand: string | null
    model: string | null
    year: number | null
    price_per_day_aed: Decimal | null
    whatsapp_booking: string | null
    created_at: Date | null
  }

  export type SupercarsMaxAggregateOutputType = {
    id: string | null
    brand: string | null
    model: string | null
    year: number | null
    price_per_day_aed: Decimal | null
    whatsapp_booking: string | null
    created_at: Date | null
  }

  export type SupercarsCountAggregateOutputType = {
    id: number
    brand: number
    model: number
    year: number
    price_per_day_aed: number
    images: number
    specs: number
    whatsapp_booking: number
    created_at: number
    _all: number
  }


  export type SupercarsAvgAggregateInputType = {
    year?: true
    price_per_day_aed?: true
  }

  export type SupercarsSumAggregateInputType = {
    year?: true
    price_per_day_aed?: true
  }

  export type SupercarsMinAggregateInputType = {
    id?: true
    brand?: true
    model?: true
    year?: true
    price_per_day_aed?: true
    whatsapp_booking?: true
    created_at?: true
  }

  export type SupercarsMaxAggregateInputType = {
    id?: true
    brand?: true
    model?: true
    year?: true
    price_per_day_aed?: true
    whatsapp_booking?: true
    created_at?: true
  }

  export type SupercarsCountAggregateInputType = {
    id?: true
    brand?: true
    model?: true
    year?: true
    price_per_day_aed?: true
    images?: true
    specs?: true
    whatsapp_booking?: true
    created_at?: true
    _all?: true
  }

  export type SupercarsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which supercars to aggregate.
     */
    where?: supercarsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of supercars to fetch.
     */
    orderBy?: supercarsOrderByWithRelationInput | supercarsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: supercarsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` supercars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` supercars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned supercars
    **/
    _count?: true | SupercarsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SupercarsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SupercarsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupercarsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupercarsMaxAggregateInputType
  }

  export type GetSupercarsAggregateType<T extends SupercarsAggregateArgs> = {
        [P in keyof T & keyof AggregateSupercars]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupercars[P]>
      : GetScalarType<T[P], AggregateSupercars[P]>
  }




  export type supercarsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: supercarsWhereInput
    orderBy?: supercarsOrderByWithAggregationInput | supercarsOrderByWithAggregationInput[]
    by: SupercarsScalarFieldEnum[] | SupercarsScalarFieldEnum
    having?: supercarsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupercarsCountAggregateInputType | true
    _avg?: SupercarsAvgAggregateInputType
    _sum?: SupercarsSumAggregateInputType
    _min?: SupercarsMinAggregateInputType
    _max?: SupercarsMaxAggregateInputType
  }

  export type SupercarsGroupByOutputType = {
    id: string
    brand: string
    model: string
    year: number | null
    price_per_day_aed: Decimal
    images: string[]
    specs: JsonValue | null
    whatsapp_booking: string | null
    created_at: Date | null
    _count: SupercarsCountAggregateOutputType | null
    _avg: SupercarsAvgAggregateOutputType | null
    _sum: SupercarsSumAggregateOutputType | null
    _min: SupercarsMinAggregateOutputType | null
    _max: SupercarsMaxAggregateOutputType | null
  }

  type GetSupercarsGroupByPayload<T extends supercarsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupercarsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupercarsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupercarsGroupByOutputType[P]>
            : GetScalarType<T[P], SupercarsGroupByOutputType[P]>
        }
      >
    >


  export type supercarsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    brand?: boolean
    model?: boolean
    year?: boolean
    price_per_day_aed?: boolean
    images?: boolean
    specs?: boolean
    whatsapp_booking?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["supercars"]>

  export type supercarsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    brand?: boolean
    model?: boolean
    year?: boolean
    price_per_day_aed?: boolean
    images?: boolean
    specs?: boolean
    whatsapp_booking?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["supercars"]>

  export type supercarsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    brand?: boolean
    model?: boolean
    year?: boolean
    price_per_day_aed?: boolean
    images?: boolean
    specs?: boolean
    whatsapp_booking?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["supercars"]>

  export type supercarsSelectScalar = {
    id?: boolean
    brand?: boolean
    model?: boolean
    year?: boolean
    price_per_day_aed?: boolean
    images?: boolean
    specs?: boolean
    whatsapp_booking?: boolean
    created_at?: boolean
  }

  export type supercarsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "brand" | "model" | "year" | "price_per_day_aed" | "images" | "specs" | "whatsapp_booking" | "created_at", ExtArgs["result"]["supercars"]>

  export type $supercarsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "supercars"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      brand: string
      model: string
      year: number | null
      price_per_day_aed: Prisma.Decimal
      images: string[]
      specs: Prisma.JsonValue | null
      whatsapp_booking: string | null
      created_at: Date | null
    }, ExtArgs["result"]["supercars"]>
    composites: {}
  }

  type supercarsGetPayload<S extends boolean | null | undefined | supercarsDefaultArgs> = $Result.GetResult<Prisma.$supercarsPayload, S>

  type supercarsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<supercarsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SupercarsCountAggregateInputType | true
    }

  export interface supercarsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['supercars'], meta: { name: 'supercars' } }
    /**
     * Find zero or one Supercars that matches the filter.
     * @param {supercarsFindUniqueArgs} args - Arguments to find a Supercars
     * @example
     * // Get one Supercars
     * const supercars = await prisma.supercars.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends supercarsFindUniqueArgs>(args: SelectSubset<T, supercarsFindUniqueArgs<ExtArgs>>): Prisma__supercarsClient<$Result.GetResult<Prisma.$supercarsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Supercars that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {supercarsFindUniqueOrThrowArgs} args - Arguments to find a Supercars
     * @example
     * // Get one Supercars
     * const supercars = await prisma.supercars.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends supercarsFindUniqueOrThrowArgs>(args: SelectSubset<T, supercarsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__supercarsClient<$Result.GetResult<Prisma.$supercarsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Supercars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supercarsFindFirstArgs} args - Arguments to find a Supercars
     * @example
     * // Get one Supercars
     * const supercars = await prisma.supercars.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends supercarsFindFirstArgs>(args?: SelectSubset<T, supercarsFindFirstArgs<ExtArgs>>): Prisma__supercarsClient<$Result.GetResult<Prisma.$supercarsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Supercars that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supercarsFindFirstOrThrowArgs} args - Arguments to find a Supercars
     * @example
     * // Get one Supercars
     * const supercars = await prisma.supercars.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends supercarsFindFirstOrThrowArgs>(args?: SelectSubset<T, supercarsFindFirstOrThrowArgs<ExtArgs>>): Prisma__supercarsClient<$Result.GetResult<Prisma.$supercarsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Supercars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supercarsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Supercars
     * const supercars = await prisma.supercars.findMany()
     * 
     * // Get first 10 Supercars
     * const supercars = await prisma.supercars.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const supercarsWithIdOnly = await prisma.supercars.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends supercarsFindManyArgs>(args?: SelectSubset<T, supercarsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$supercarsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Supercars.
     * @param {supercarsCreateArgs} args - Arguments to create a Supercars.
     * @example
     * // Create one Supercars
     * const Supercars = await prisma.supercars.create({
     *   data: {
     *     // ... data to create a Supercars
     *   }
     * })
     * 
     */
    create<T extends supercarsCreateArgs>(args: SelectSubset<T, supercarsCreateArgs<ExtArgs>>): Prisma__supercarsClient<$Result.GetResult<Prisma.$supercarsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Supercars.
     * @param {supercarsCreateManyArgs} args - Arguments to create many Supercars.
     * @example
     * // Create many Supercars
     * const supercars = await prisma.supercars.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends supercarsCreateManyArgs>(args?: SelectSubset<T, supercarsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Supercars and returns the data saved in the database.
     * @param {supercarsCreateManyAndReturnArgs} args - Arguments to create many Supercars.
     * @example
     * // Create many Supercars
     * const supercars = await prisma.supercars.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Supercars and only return the `id`
     * const supercarsWithIdOnly = await prisma.supercars.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends supercarsCreateManyAndReturnArgs>(args?: SelectSubset<T, supercarsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$supercarsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Supercars.
     * @param {supercarsDeleteArgs} args - Arguments to delete one Supercars.
     * @example
     * // Delete one Supercars
     * const Supercars = await prisma.supercars.delete({
     *   where: {
     *     // ... filter to delete one Supercars
     *   }
     * })
     * 
     */
    delete<T extends supercarsDeleteArgs>(args: SelectSubset<T, supercarsDeleteArgs<ExtArgs>>): Prisma__supercarsClient<$Result.GetResult<Prisma.$supercarsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Supercars.
     * @param {supercarsUpdateArgs} args - Arguments to update one Supercars.
     * @example
     * // Update one Supercars
     * const supercars = await prisma.supercars.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends supercarsUpdateArgs>(args: SelectSubset<T, supercarsUpdateArgs<ExtArgs>>): Prisma__supercarsClient<$Result.GetResult<Prisma.$supercarsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Supercars.
     * @param {supercarsDeleteManyArgs} args - Arguments to filter Supercars to delete.
     * @example
     * // Delete a few Supercars
     * const { count } = await prisma.supercars.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends supercarsDeleteManyArgs>(args?: SelectSubset<T, supercarsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Supercars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supercarsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Supercars
     * const supercars = await prisma.supercars.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends supercarsUpdateManyArgs>(args: SelectSubset<T, supercarsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Supercars and returns the data updated in the database.
     * @param {supercarsUpdateManyAndReturnArgs} args - Arguments to update many Supercars.
     * @example
     * // Update many Supercars
     * const supercars = await prisma.supercars.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Supercars and only return the `id`
     * const supercarsWithIdOnly = await prisma.supercars.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends supercarsUpdateManyAndReturnArgs>(args: SelectSubset<T, supercarsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$supercarsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Supercars.
     * @param {supercarsUpsertArgs} args - Arguments to update or create a Supercars.
     * @example
     * // Update or create a Supercars
     * const supercars = await prisma.supercars.upsert({
     *   create: {
     *     // ... data to create a Supercars
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Supercars we want to update
     *   }
     * })
     */
    upsert<T extends supercarsUpsertArgs>(args: SelectSubset<T, supercarsUpsertArgs<ExtArgs>>): Prisma__supercarsClient<$Result.GetResult<Prisma.$supercarsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Supercars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supercarsCountArgs} args - Arguments to filter Supercars to count.
     * @example
     * // Count the number of Supercars
     * const count = await prisma.supercars.count({
     *   where: {
     *     // ... the filter for the Supercars we want to count
     *   }
     * })
    **/
    count<T extends supercarsCountArgs>(
      args?: Subset<T, supercarsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupercarsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Supercars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupercarsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SupercarsAggregateArgs>(args: Subset<T, SupercarsAggregateArgs>): Prisma.PrismaPromise<GetSupercarsAggregateType<T>>

    /**
     * Group by Supercars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supercarsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends supercarsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: supercarsGroupByArgs['orderBy'] }
        : { orderBy?: supercarsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, supercarsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupercarsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the supercars model
   */
  readonly fields: supercarsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for supercars.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__supercarsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the supercars model
   */
  interface supercarsFieldRefs {
    readonly id: FieldRef<"supercars", 'String'>
    readonly brand: FieldRef<"supercars", 'String'>
    readonly model: FieldRef<"supercars", 'String'>
    readonly year: FieldRef<"supercars", 'Int'>
    readonly price_per_day_aed: FieldRef<"supercars", 'Decimal'>
    readonly images: FieldRef<"supercars", 'String[]'>
    readonly specs: FieldRef<"supercars", 'Json'>
    readonly whatsapp_booking: FieldRef<"supercars", 'String'>
    readonly created_at: FieldRef<"supercars", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * supercars findUnique
   */
  export type supercarsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supercars
     */
    select?: supercarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supercars
     */
    omit?: supercarsOmit<ExtArgs> | null
    /**
     * Filter, which supercars to fetch.
     */
    where: supercarsWhereUniqueInput
  }

  /**
   * supercars findUniqueOrThrow
   */
  export type supercarsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supercars
     */
    select?: supercarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supercars
     */
    omit?: supercarsOmit<ExtArgs> | null
    /**
     * Filter, which supercars to fetch.
     */
    where: supercarsWhereUniqueInput
  }

  /**
   * supercars findFirst
   */
  export type supercarsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supercars
     */
    select?: supercarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supercars
     */
    omit?: supercarsOmit<ExtArgs> | null
    /**
     * Filter, which supercars to fetch.
     */
    where?: supercarsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of supercars to fetch.
     */
    orderBy?: supercarsOrderByWithRelationInput | supercarsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for supercars.
     */
    cursor?: supercarsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` supercars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` supercars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of supercars.
     */
    distinct?: SupercarsScalarFieldEnum | SupercarsScalarFieldEnum[]
  }

  /**
   * supercars findFirstOrThrow
   */
  export type supercarsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supercars
     */
    select?: supercarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supercars
     */
    omit?: supercarsOmit<ExtArgs> | null
    /**
     * Filter, which supercars to fetch.
     */
    where?: supercarsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of supercars to fetch.
     */
    orderBy?: supercarsOrderByWithRelationInput | supercarsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for supercars.
     */
    cursor?: supercarsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` supercars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` supercars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of supercars.
     */
    distinct?: SupercarsScalarFieldEnum | SupercarsScalarFieldEnum[]
  }

  /**
   * supercars findMany
   */
  export type supercarsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supercars
     */
    select?: supercarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supercars
     */
    omit?: supercarsOmit<ExtArgs> | null
    /**
     * Filter, which supercars to fetch.
     */
    where?: supercarsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of supercars to fetch.
     */
    orderBy?: supercarsOrderByWithRelationInput | supercarsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing supercars.
     */
    cursor?: supercarsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` supercars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` supercars.
     */
    skip?: number
    distinct?: SupercarsScalarFieldEnum | SupercarsScalarFieldEnum[]
  }

  /**
   * supercars create
   */
  export type supercarsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supercars
     */
    select?: supercarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supercars
     */
    omit?: supercarsOmit<ExtArgs> | null
    /**
     * The data needed to create a supercars.
     */
    data: XOR<supercarsCreateInput, supercarsUncheckedCreateInput>
  }

  /**
   * supercars createMany
   */
  export type supercarsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many supercars.
     */
    data: supercarsCreateManyInput | supercarsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * supercars createManyAndReturn
   */
  export type supercarsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supercars
     */
    select?: supercarsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the supercars
     */
    omit?: supercarsOmit<ExtArgs> | null
    /**
     * The data used to create many supercars.
     */
    data: supercarsCreateManyInput | supercarsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * supercars update
   */
  export type supercarsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supercars
     */
    select?: supercarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supercars
     */
    omit?: supercarsOmit<ExtArgs> | null
    /**
     * The data needed to update a supercars.
     */
    data: XOR<supercarsUpdateInput, supercarsUncheckedUpdateInput>
    /**
     * Choose, which supercars to update.
     */
    where: supercarsWhereUniqueInput
  }

  /**
   * supercars updateMany
   */
  export type supercarsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update supercars.
     */
    data: XOR<supercarsUpdateManyMutationInput, supercarsUncheckedUpdateManyInput>
    /**
     * Filter which supercars to update
     */
    where?: supercarsWhereInput
    /**
     * Limit how many supercars to update.
     */
    limit?: number
  }

  /**
   * supercars updateManyAndReturn
   */
  export type supercarsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supercars
     */
    select?: supercarsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the supercars
     */
    omit?: supercarsOmit<ExtArgs> | null
    /**
     * The data used to update supercars.
     */
    data: XOR<supercarsUpdateManyMutationInput, supercarsUncheckedUpdateManyInput>
    /**
     * Filter which supercars to update
     */
    where?: supercarsWhereInput
    /**
     * Limit how many supercars to update.
     */
    limit?: number
  }

  /**
   * supercars upsert
   */
  export type supercarsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supercars
     */
    select?: supercarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supercars
     */
    omit?: supercarsOmit<ExtArgs> | null
    /**
     * The filter to search for the supercars to update in case it exists.
     */
    where: supercarsWhereUniqueInput
    /**
     * In case the supercars found by the `where` argument doesn't exist, create a new supercars with this data.
     */
    create: XOR<supercarsCreateInput, supercarsUncheckedCreateInput>
    /**
     * In case the supercars was found with the provided `where` argument, update it with this data.
     */
    update: XOR<supercarsUpdateInput, supercarsUncheckedUpdateInput>
  }

  /**
   * supercars delete
   */
  export type supercarsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supercars
     */
    select?: supercarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supercars
     */
    omit?: supercarsOmit<ExtArgs> | null
    /**
     * Filter which supercars to delete.
     */
    where: supercarsWhereUniqueInput
  }

  /**
   * supercars deleteMany
   */
  export type supercarsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which supercars to delete
     */
    where?: supercarsWhereInput
    /**
     * Limit how many supercars to delete.
     */
    limit?: number
  }

  /**
   * supercars without action
   */
  export type supercarsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supercars
     */
    select?: supercarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supercars
     */
    omit?: supercarsOmit<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createAt?: true
    updateAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createAt?: true
    updateAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    createAt: Date
    updateAt: Date | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createAt?: boolean
    updateAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createAt?: boolean
    updateAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createAt?: boolean
    updateAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createAt?: boolean
    updateAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "createAt" | "updateAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      createAt: Date
      updateAt: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createAt: FieldRef<"User", 'DateTime'>
    readonly updateAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model yachts
   */

  export type AggregateYachts = {
    _count: YachtsCountAggregateOutputType | null
    _avg: YachtsAvgAggregateOutputType | null
    _sum: YachtsSumAggregateOutputType | null
    _min: YachtsMinAggregateOutputType | null
    _max: YachtsMaxAggregateOutputType | null
  }

  export type YachtsAvgAggregateOutputType = {
    price_per_day_aed: Decimal | null
    length_ft: number | null
    guests_max: number | null
  }

  export type YachtsSumAggregateOutputType = {
    price_per_day_aed: Decimal | null
    length_ft: number | null
    guests_max: number | null
  }

  export type YachtsMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    price_per_day_aed: Decimal | null
    length_ft: number | null
    guests_max: number | null
    yacht_type: string | null
    whatsapp_booking: string | null
    created_at: Date | null
  }

  export type YachtsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    price_per_day_aed: Decimal | null
    length_ft: number | null
    guests_max: number | null
    yacht_type: string | null
    whatsapp_booking: string | null
    created_at: Date | null
  }

  export type YachtsCountAggregateOutputType = {
    id: number
    name: number
    description: number
    price_per_day_aed: number
    length_ft: number
    guests_max: number
    yacht_type: number
    images: number
    amenities: number
    whatsapp_booking: number
    created_at: number
    _all: number
  }


  export type YachtsAvgAggregateInputType = {
    price_per_day_aed?: true
    length_ft?: true
    guests_max?: true
  }

  export type YachtsSumAggregateInputType = {
    price_per_day_aed?: true
    length_ft?: true
    guests_max?: true
  }

  export type YachtsMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price_per_day_aed?: true
    length_ft?: true
    guests_max?: true
    yacht_type?: true
    whatsapp_booking?: true
    created_at?: true
  }

  export type YachtsMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price_per_day_aed?: true
    length_ft?: true
    guests_max?: true
    yacht_type?: true
    whatsapp_booking?: true
    created_at?: true
  }

  export type YachtsCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price_per_day_aed?: true
    length_ft?: true
    guests_max?: true
    yacht_type?: true
    images?: true
    amenities?: true
    whatsapp_booking?: true
    created_at?: true
    _all?: true
  }

  export type YachtsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which yachts to aggregate.
     */
    where?: yachtsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of yachts to fetch.
     */
    orderBy?: yachtsOrderByWithRelationInput | yachtsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: yachtsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` yachts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` yachts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned yachts
    **/
    _count?: true | YachtsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: YachtsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: YachtsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: YachtsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: YachtsMaxAggregateInputType
  }

  export type GetYachtsAggregateType<T extends YachtsAggregateArgs> = {
        [P in keyof T & keyof AggregateYachts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateYachts[P]>
      : GetScalarType<T[P], AggregateYachts[P]>
  }




  export type yachtsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: yachtsWhereInput
    orderBy?: yachtsOrderByWithAggregationInput | yachtsOrderByWithAggregationInput[]
    by: YachtsScalarFieldEnum[] | YachtsScalarFieldEnum
    having?: yachtsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: YachtsCountAggregateInputType | true
    _avg?: YachtsAvgAggregateInputType
    _sum?: YachtsSumAggregateInputType
    _min?: YachtsMinAggregateInputType
    _max?: YachtsMaxAggregateInputType
  }

  export type YachtsGroupByOutputType = {
    id: string
    name: string
    description: string | null
    price_per_day_aed: Decimal
    length_ft: number | null
    guests_max: number | null
    yacht_type: string | null
    images: string[]
    amenities: string[]
    whatsapp_booking: string | null
    created_at: Date | null
    _count: YachtsCountAggregateOutputType | null
    _avg: YachtsAvgAggregateOutputType | null
    _sum: YachtsSumAggregateOutputType | null
    _min: YachtsMinAggregateOutputType | null
    _max: YachtsMaxAggregateOutputType | null
  }

  type GetYachtsGroupByPayload<T extends yachtsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<YachtsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof YachtsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], YachtsGroupByOutputType[P]>
            : GetScalarType<T[P], YachtsGroupByOutputType[P]>
        }
      >
    >


  export type yachtsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price_per_day_aed?: boolean
    length_ft?: boolean
    guests_max?: boolean
    yacht_type?: boolean
    images?: boolean
    amenities?: boolean
    whatsapp_booking?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["yachts"]>

  export type yachtsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price_per_day_aed?: boolean
    length_ft?: boolean
    guests_max?: boolean
    yacht_type?: boolean
    images?: boolean
    amenities?: boolean
    whatsapp_booking?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["yachts"]>

  export type yachtsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price_per_day_aed?: boolean
    length_ft?: boolean
    guests_max?: boolean
    yacht_type?: boolean
    images?: boolean
    amenities?: boolean
    whatsapp_booking?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["yachts"]>

  export type yachtsSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    price_per_day_aed?: boolean
    length_ft?: boolean
    guests_max?: boolean
    yacht_type?: boolean
    images?: boolean
    amenities?: boolean
    whatsapp_booking?: boolean
    created_at?: boolean
  }

  export type yachtsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "price_per_day_aed" | "length_ft" | "guests_max" | "yacht_type" | "images" | "amenities" | "whatsapp_booking" | "created_at", ExtArgs["result"]["yachts"]>

  export type $yachtsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "yachts"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      price_per_day_aed: Prisma.Decimal
      length_ft: number | null
      guests_max: number | null
      yacht_type: string | null
      images: string[]
      amenities: string[]
      whatsapp_booking: string | null
      created_at: Date | null
    }, ExtArgs["result"]["yachts"]>
    composites: {}
  }

  type yachtsGetPayload<S extends boolean | null | undefined | yachtsDefaultArgs> = $Result.GetResult<Prisma.$yachtsPayload, S>

  type yachtsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<yachtsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: YachtsCountAggregateInputType | true
    }

  export interface yachtsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['yachts'], meta: { name: 'yachts' } }
    /**
     * Find zero or one Yachts that matches the filter.
     * @param {yachtsFindUniqueArgs} args - Arguments to find a Yachts
     * @example
     * // Get one Yachts
     * const yachts = await prisma.yachts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends yachtsFindUniqueArgs>(args: SelectSubset<T, yachtsFindUniqueArgs<ExtArgs>>): Prisma__yachtsClient<$Result.GetResult<Prisma.$yachtsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Yachts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {yachtsFindUniqueOrThrowArgs} args - Arguments to find a Yachts
     * @example
     * // Get one Yachts
     * const yachts = await prisma.yachts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends yachtsFindUniqueOrThrowArgs>(args: SelectSubset<T, yachtsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__yachtsClient<$Result.GetResult<Prisma.$yachtsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Yachts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {yachtsFindFirstArgs} args - Arguments to find a Yachts
     * @example
     * // Get one Yachts
     * const yachts = await prisma.yachts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends yachtsFindFirstArgs>(args?: SelectSubset<T, yachtsFindFirstArgs<ExtArgs>>): Prisma__yachtsClient<$Result.GetResult<Prisma.$yachtsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Yachts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {yachtsFindFirstOrThrowArgs} args - Arguments to find a Yachts
     * @example
     * // Get one Yachts
     * const yachts = await prisma.yachts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends yachtsFindFirstOrThrowArgs>(args?: SelectSubset<T, yachtsFindFirstOrThrowArgs<ExtArgs>>): Prisma__yachtsClient<$Result.GetResult<Prisma.$yachtsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Yachts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {yachtsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Yachts
     * const yachts = await prisma.yachts.findMany()
     * 
     * // Get first 10 Yachts
     * const yachts = await prisma.yachts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const yachtsWithIdOnly = await prisma.yachts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends yachtsFindManyArgs>(args?: SelectSubset<T, yachtsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$yachtsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Yachts.
     * @param {yachtsCreateArgs} args - Arguments to create a Yachts.
     * @example
     * // Create one Yachts
     * const Yachts = await prisma.yachts.create({
     *   data: {
     *     // ... data to create a Yachts
     *   }
     * })
     * 
     */
    create<T extends yachtsCreateArgs>(args: SelectSubset<T, yachtsCreateArgs<ExtArgs>>): Prisma__yachtsClient<$Result.GetResult<Prisma.$yachtsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Yachts.
     * @param {yachtsCreateManyArgs} args - Arguments to create many Yachts.
     * @example
     * // Create many Yachts
     * const yachts = await prisma.yachts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends yachtsCreateManyArgs>(args?: SelectSubset<T, yachtsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Yachts and returns the data saved in the database.
     * @param {yachtsCreateManyAndReturnArgs} args - Arguments to create many Yachts.
     * @example
     * // Create many Yachts
     * const yachts = await prisma.yachts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Yachts and only return the `id`
     * const yachtsWithIdOnly = await prisma.yachts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends yachtsCreateManyAndReturnArgs>(args?: SelectSubset<T, yachtsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$yachtsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Yachts.
     * @param {yachtsDeleteArgs} args - Arguments to delete one Yachts.
     * @example
     * // Delete one Yachts
     * const Yachts = await prisma.yachts.delete({
     *   where: {
     *     // ... filter to delete one Yachts
     *   }
     * })
     * 
     */
    delete<T extends yachtsDeleteArgs>(args: SelectSubset<T, yachtsDeleteArgs<ExtArgs>>): Prisma__yachtsClient<$Result.GetResult<Prisma.$yachtsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Yachts.
     * @param {yachtsUpdateArgs} args - Arguments to update one Yachts.
     * @example
     * // Update one Yachts
     * const yachts = await prisma.yachts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends yachtsUpdateArgs>(args: SelectSubset<T, yachtsUpdateArgs<ExtArgs>>): Prisma__yachtsClient<$Result.GetResult<Prisma.$yachtsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Yachts.
     * @param {yachtsDeleteManyArgs} args - Arguments to filter Yachts to delete.
     * @example
     * // Delete a few Yachts
     * const { count } = await prisma.yachts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends yachtsDeleteManyArgs>(args?: SelectSubset<T, yachtsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Yachts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {yachtsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Yachts
     * const yachts = await prisma.yachts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends yachtsUpdateManyArgs>(args: SelectSubset<T, yachtsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Yachts and returns the data updated in the database.
     * @param {yachtsUpdateManyAndReturnArgs} args - Arguments to update many Yachts.
     * @example
     * // Update many Yachts
     * const yachts = await prisma.yachts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Yachts and only return the `id`
     * const yachtsWithIdOnly = await prisma.yachts.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends yachtsUpdateManyAndReturnArgs>(args: SelectSubset<T, yachtsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$yachtsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Yachts.
     * @param {yachtsUpsertArgs} args - Arguments to update or create a Yachts.
     * @example
     * // Update or create a Yachts
     * const yachts = await prisma.yachts.upsert({
     *   create: {
     *     // ... data to create a Yachts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Yachts we want to update
     *   }
     * })
     */
    upsert<T extends yachtsUpsertArgs>(args: SelectSubset<T, yachtsUpsertArgs<ExtArgs>>): Prisma__yachtsClient<$Result.GetResult<Prisma.$yachtsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Yachts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {yachtsCountArgs} args - Arguments to filter Yachts to count.
     * @example
     * // Count the number of Yachts
     * const count = await prisma.yachts.count({
     *   where: {
     *     // ... the filter for the Yachts we want to count
     *   }
     * })
    **/
    count<T extends yachtsCountArgs>(
      args?: Subset<T, yachtsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], YachtsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Yachts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YachtsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends YachtsAggregateArgs>(args: Subset<T, YachtsAggregateArgs>): Prisma.PrismaPromise<GetYachtsAggregateType<T>>

    /**
     * Group by Yachts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {yachtsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends yachtsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: yachtsGroupByArgs['orderBy'] }
        : { orderBy?: yachtsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, yachtsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetYachtsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the yachts model
   */
  readonly fields: yachtsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for yachts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__yachtsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the yachts model
   */
  interface yachtsFieldRefs {
    readonly id: FieldRef<"yachts", 'String'>
    readonly name: FieldRef<"yachts", 'String'>
    readonly description: FieldRef<"yachts", 'String'>
    readonly price_per_day_aed: FieldRef<"yachts", 'Decimal'>
    readonly length_ft: FieldRef<"yachts", 'Int'>
    readonly guests_max: FieldRef<"yachts", 'Int'>
    readonly yacht_type: FieldRef<"yachts", 'String'>
    readonly images: FieldRef<"yachts", 'String[]'>
    readonly amenities: FieldRef<"yachts", 'String[]'>
    readonly whatsapp_booking: FieldRef<"yachts", 'String'>
    readonly created_at: FieldRef<"yachts", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * yachts findUnique
   */
  export type yachtsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the yachts
     */
    select?: yachtsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the yachts
     */
    omit?: yachtsOmit<ExtArgs> | null
    /**
     * Filter, which yachts to fetch.
     */
    where: yachtsWhereUniqueInput
  }

  /**
   * yachts findUniqueOrThrow
   */
  export type yachtsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the yachts
     */
    select?: yachtsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the yachts
     */
    omit?: yachtsOmit<ExtArgs> | null
    /**
     * Filter, which yachts to fetch.
     */
    where: yachtsWhereUniqueInput
  }

  /**
   * yachts findFirst
   */
  export type yachtsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the yachts
     */
    select?: yachtsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the yachts
     */
    omit?: yachtsOmit<ExtArgs> | null
    /**
     * Filter, which yachts to fetch.
     */
    where?: yachtsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of yachts to fetch.
     */
    orderBy?: yachtsOrderByWithRelationInput | yachtsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for yachts.
     */
    cursor?: yachtsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` yachts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` yachts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of yachts.
     */
    distinct?: YachtsScalarFieldEnum | YachtsScalarFieldEnum[]
  }

  /**
   * yachts findFirstOrThrow
   */
  export type yachtsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the yachts
     */
    select?: yachtsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the yachts
     */
    omit?: yachtsOmit<ExtArgs> | null
    /**
     * Filter, which yachts to fetch.
     */
    where?: yachtsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of yachts to fetch.
     */
    orderBy?: yachtsOrderByWithRelationInput | yachtsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for yachts.
     */
    cursor?: yachtsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` yachts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` yachts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of yachts.
     */
    distinct?: YachtsScalarFieldEnum | YachtsScalarFieldEnum[]
  }

  /**
   * yachts findMany
   */
  export type yachtsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the yachts
     */
    select?: yachtsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the yachts
     */
    omit?: yachtsOmit<ExtArgs> | null
    /**
     * Filter, which yachts to fetch.
     */
    where?: yachtsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of yachts to fetch.
     */
    orderBy?: yachtsOrderByWithRelationInput | yachtsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing yachts.
     */
    cursor?: yachtsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` yachts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` yachts.
     */
    skip?: number
    distinct?: YachtsScalarFieldEnum | YachtsScalarFieldEnum[]
  }

  /**
   * yachts create
   */
  export type yachtsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the yachts
     */
    select?: yachtsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the yachts
     */
    omit?: yachtsOmit<ExtArgs> | null
    /**
     * The data needed to create a yachts.
     */
    data: XOR<yachtsCreateInput, yachtsUncheckedCreateInput>
  }

  /**
   * yachts createMany
   */
  export type yachtsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many yachts.
     */
    data: yachtsCreateManyInput | yachtsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * yachts createManyAndReturn
   */
  export type yachtsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the yachts
     */
    select?: yachtsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the yachts
     */
    omit?: yachtsOmit<ExtArgs> | null
    /**
     * The data used to create many yachts.
     */
    data: yachtsCreateManyInput | yachtsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * yachts update
   */
  export type yachtsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the yachts
     */
    select?: yachtsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the yachts
     */
    omit?: yachtsOmit<ExtArgs> | null
    /**
     * The data needed to update a yachts.
     */
    data: XOR<yachtsUpdateInput, yachtsUncheckedUpdateInput>
    /**
     * Choose, which yachts to update.
     */
    where: yachtsWhereUniqueInput
  }

  /**
   * yachts updateMany
   */
  export type yachtsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update yachts.
     */
    data: XOR<yachtsUpdateManyMutationInput, yachtsUncheckedUpdateManyInput>
    /**
     * Filter which yachts to update
     */
    where?: yachtsWhereInput
    /**
     * Limit how many yachts to update.
     */
    limit?: number
  }

  /**
   * yachts updateManyAndReturn
   */
  export type yachtsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the yachts
     */
    select?: yachtsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the yachts
     */
    omit?: yachtsOmit<ExtArgs> | null
    /**
     * The data used to update yachts.
     */
    data: XOR<yachtsUpdateManyMutationInput, yachtsUncheckedUpdateManyInput>
    /**
     * Filter which yachts to update
     */
    where?: yachtsWhereInput
    /**
     * Limit how many yachts to update.
     */
    limit?: number
  }

  /**
   * yachts upsert
   */
  export type yachtsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the yachts
     */
    select?: yachtsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the yachts
     */
    omit?: yachtsOmit<ExtArgs> | null
    /**
     * The filter to search for the yachts to update in case it exists.
     */
    where: yachtsWhereUniqueInput
    /**
     * In case the yachts found by the `where` argument doesn't exist, create a new yachts with this data.
     */
    create: XOR<yachtsCreateInput, yachtsUncheckedCreateInput>
    /**
     * In case the yachts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<yachtsUpdateInput, yachtsUncheckedUpdateInput>
  }

  /**
   * yachts delete
   */
  export type yachtsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the yachts
     */
    select?: yachtsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the yachts
     */
    omit?: yachtsOmit<ExtArgs> | null
    /**
     * Filter which yachts to delete.
     */
    where: yachtsWhereUniqueInput
  }

  /**
   * yachts deleteMany
   */
  export type yachtsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which yachts to delete
     */
    where?: yachtsWhereInput
    /**
     * Limit how many yachts to delete.
     */
    limit?: number
  }

  /**
   * yachts without action
   */
  export type yachtsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the yachts
     */
    select?: yachtsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the yachts
     */
    omit?: yachtsOmit<ExtArgs> | null
  }


  /**
   * Model crypto_prices
   */

  export type AggregateCrypto_prices = {
    _count: Crypto_pricesCountAggregateOutputType | null
    _avg: Crypto_pricesAvgAggregateOutputType | null
    _sum: Crypto_pricesSumAggregateOutputType | null
    _min: Crypto_pricesMinAggregateOutputType | null
    _max: Crypto_pricesMaxAggregateOutputType | null
  }

  export type Crypto_pricesAvgAggregateOutputType = {
    price_aed: Decimal | null
  }

  export type Crypto_pricesSumAggregateOutputType = {
    price_aed: Decimal | null
  }

  export type Crypto_pricesMinAggregateOutputType = {
    currency: string | null
    price_aed: Decimal | null
    updated_at: Date | null
  }

  export type Crypto_pricesMaxAggregateOutputType = {
    currency: string | null
    price_aed: Decimal | null
    updated_at: Date | null
  }

  export type Crypto_pricesCountAggregateOutputType = {
    currency: number
    price_aed: number
    updated_at: number
    _all: number
  }


  export type Crypto_pricesAvgAggregateInputType = {
    price_aed?: true
  }

  export type Crypto_pricesSumAggregateInputType = {
    price_aed?: true
  }

  export type Crypto_pricesMinAggregateInputType = {
    currency?: true
    price_aed?: true
    updated_at?: true
  }

  export type Crypto_pricesMaxAggregateInputType = {
    currency?: true
    price_aed?: true
    updated_at?: true
  }

  export type Crypto_pricesCountAggregateInputType = {
    currency?: true
    price_aed?: true
    updated_at?: true
    _all?: true
  }

  export type Crypto_pricesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which crypto_prices to aggregate.
     */
    where?: crypto_pricesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of crypto_prices to fetch.
     */
    orderBy?: crypto_pricesOrderByWithRelationInput | crypto_pricesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: crypto_pricesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` crypto_prices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` crypto_prices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned crypto_prices
    **/
    _count?: true | Crypto_pricesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Crypto_pricesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Crypto_pricesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Crypto_pricesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Crypto_pricesMaxAggregateInputType
  }

  export type GetCrypto_pricesAggregateType<T extends Crypto_pricesAggregateArgs> = {
        [P in keyof T & keyof AggregateCrypto_prices]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCrypto_prices[P]>
      : GetScalarType<T[P], AggregateCrypto_prices[P]>
  }




  export type crypto_pricesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: crypto_pricesWhereInput
    orderBy?: crypto_pricesOrderByWithAggregationInput | crypto_pricesOrderByWithAggregationInput[]
    by: Crypto_pricesScalarFieldEnum[] | Crypto_pricesScalarFieldEnum
    having?: crypto_pricesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Crypto_pricesCountAggregateInputType | true
    _avg?: Crypto_pricesAvgAggregateInputType
    _sum?: Crypto_pricesSumAggregateInputType
    _min?: Crypto_pricesMinAggregateInputType
    _max?: Crypto_pricesMaxAggregateInputType
  }

  export type Crypto_pricesGroupByOutputType = {
    currency: string
    price_aed: Decimal
    updated_at: Date | null
    _count: Crypto_pricesCountAggregateOutputType | null
    _avg: Crypto_pricesAvgAggregateOutputType | null
    _sum: Crypto_pricesSumAggregateOutputType | null
    _min: Crypto_pricesMinAggregateOutputType | null
    _max: Crypto_pricesMaxAggregateOutputType | null
  }

  type GetCrypto_pricesGroupByPayload<T extends crypto_pricesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Crypto_pricesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Crypto_pricesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Crypto_pricesGroupByOutputType[P]>
            : GetScalarType<T[P], Crypto_pricesGroupByOutputType[P]>
        }
      >
    >


  export type crypto_pricesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    currency?: boolean
    price_aed?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["crypto_prices"]>

  export type crypto_pricesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    currency?: boolean
    price_aed?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["crypto_prices"]>

  export type crypto_pricesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    currency?: boolean
    price_aed?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["crypto_prices"]>

  export type crypto_pricesSelectScalar = {
    currency?: boolean
    price_aed?: boolean
    updated_at?: boolean
  }

  export type crypto_pricesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"currency" | "price_aed" | "updated_at", ExtArgs["result"]["crypto_prices"]>

  export type $crypto_pricesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "crypto_prices"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      currency: string
      price_aed: Prisma.Decimal
      updated_at: Date | null
    }, ExtArgs["result"]["crypto_prices"]>
    composites: {}
  }

  type crypto_pricesGetPayload<S extends boolean | null | undefined | crypto_pricesDefaultArgs> = $Result.GetResult<Prisma.$crypto_pricesPayload, S>

  type crypto_pricesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<crypto_pricesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Crypto_pricesCountAggregateInputType | true
    }

  export interface crypto_pricesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['crypto_prices'], meta: { name: 'crypto_prices' } }
    /**
     * Find zero or one Crypto_prices that matches the filter.
     * @param {crypto_pricesFindUniqueArgs} args - Arguments to find a Crypto_prices
     * @example
     * // Get one Crypto_prices
     * const crypto_prices = await prisma.crypto_prices.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends crypto_pricesFindUniqueArgs>(args: SelectSubset<T, crypto_pricesFindUniqueArgs<ExtArgs>>): Prisma__crypto_pricesClient<$Result.GetResult<Prisma.$crypto_pricesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Crypto_prices that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {crypto_pricesFindUniqueOrThrowArgs} args - Arguments to find a Crypto_prices
     * @example
     * // Get one Crypto_prices
     * const crypto_prices = await prisma.crypto_prices.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends crypto_pricesFindUniqueOrThrowArgs>(args: SelectSubset<T, crypto_pricesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__crypto_pricesClient<$Result.GetResult<Prisma.$crypto_pricesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Crypto_prices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {crypto_pricesFindFirstArgs} args - Arguments to find a Crypto_prices
     * @example
     * // Get one Crypto_prices
     * const crypto_prices = await prisma.crypto_prices.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends crypto_pricesFindFirstArgs>(args?: SelectSubset<T, crypto_pricesFindFirstArgs<ExtArgs>>): Prisma__crypto_pricesClient<$Result.GetResult<Prisma.$crypto_pricesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Crypto_prices that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {crypto_pricesFindFirstOrThrowArgs} args - Arguments to find a Crypto_prices
     * @example
     * // Get one Crypto_prices
     * const crypto_prices = await prisma.crypto_prices.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends crypto_pricesFindFirstOrThrowArgs>(args?: SelectSubset<T, crypto_pricesFindFirstOrThrowArgs<ExtArgs>>): Prisma__crypto_pricesClient<$Result.GetResult<Prisma.$crypto_pricesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Crypto_prices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {crypto_pricesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Crypto_prices
     * const crypto_prices = await prisma.crypto_prices.findMany()
     * 
     * // Get first 10 Crypto_prices
     * const crypto_prices = await prisma.crypto_prices.findMany({ take: 10 })
     * 
     * // Only select the `currency`
     * const crypto_pricesWithCurrencyOnly = await prisma.crypto_prices.findMany({ select: { currency: true } })
     * 
     */
    findMany<T extends crypto_pricesFindManyArgs>(args?: SelectSubset<T, crypto_pricesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$crypto_pricesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Crypto_prices.
     * @param {crypto_pricesCreateArgs} args - Arguments to create a Crypto_prices.
     * @example
     * // Create one Crypto_prices
     * const Crypto_prices = await prisma.crypto_prices.create({
     *   data: {
     *     // ... data to create a Crypto_prices
     *   }
     * })
     * 
     */
    create<T extends crypto_pricesCreateArgs>(args: SelectSubset<T, crypto_pricesCreateArgs<ExtArgs>>): Prisma__crypto_pricesClient<$Result.GetResult<Prisma.$crypto_pricesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Crypto_prices.
     * @param {crypto_pricesCreateManyArgs} args - Arguments to create many Crypto_prices.
     * @example
     * // Create many Crypto_prices
     * const crypto_prices = await prisma.crypto_prices.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends crypto_pricesCreateManyArgs>(args?: SelectSubset<T, crypto_pricesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Crypto_prices and returns the data saved in the database.
     * @param {crypto_pricesCreateManyAndReturnArgs} args - Arguments to create many Crypto_prices.
     * @example
     * // Create many Crypto_prices
     * const crypto_prices = await prisma.crypto_prices.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Crypto_prices and only return the `currency`
     * const crypto_pricesWithCurrencyOnly = await prisma.crypto_prices.createManyAndReturn({
     *   select: { currency: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends crypto_pricesCreateManyAndReturnArgs>(args?: SelectSubset<T, crypto_pricesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$crypto_pricesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Crypto_prices.
     * @param {crypto_pricesDeleteArgs} args - Arguments to delete one Crypto_prices.
     * @example
     * // Delete one Crypto_prices
     * const Crypto_prices = await prisma.crypto_prices.delete({
     *   where: {
     *     // ... filter to delete one Crypto_prices
     *   }
     * })
     * 
     */
    delete<T extends crypto_pricesDeleteArgs>(args: SelectSubset<T, crypto_pricesDeleteArgs<ExtArgs>>): Prisma__crypto_pricesClient<$Result.GetResult<Prisma.$crypto_pricesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Crypto_prices.
     * @param {crypto_pricesUpdateArgs} args - Arguments to update one Crypto_prices.
     * @example
     * // Update one Crypto_prices
     * const crypto_prices = await prisma.crypto_prices.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends crypto_pricesUpdateArgs>(args: SelectSubset<T, crypto_pricesUpdateArgs<ExtArgs>>): Prisma__crypto_pricesClient<$Result.GetResult<Prisma.$crypto_pricesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Crypto_prices.
     * @param {crypto_pricesDeleteManyArgs} args - Arguments to filter Crypto_prices to delete.
     * @example
     * // Delete a few Crypto_prices
     * const { count } = await prisma.crypto_prices.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends crypto_pricesDeleteManyArgs>(args?: SelectSubset<T, crypto_pricesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Crypto_prices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {crypto_pricesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Crypto_prices
     * const crypto_prices = await prisma.crypto_prices.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends crypto_pricesUpdateManyArgs>(args: SelectSubset<T, crypto_pricesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Crypto_prices and returns the data updated in the database.
     * @param {crypto_pricesUpdateManyAndReturnArgs} args - Arguments to update many Crypto_prices.
     * @example
     * // Update many Crypto_prices
     * const crypto_prices = await prisma.crypto_prices.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Crypto_prices and only return the `currency`
     * const crypto_pricesWithCurrencyOnly = await prisma.crypto_prices.updateManyAndReturn({
     *   select: { currency: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends crypto_pricesUpdateManyAndReturnArgs>(args: SelectSubset<T, crypto_pricesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$crypto_pricesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Crypto_prices.
     * @param {crypto_pricesUpsertArgs} args - Arguments to update or create a Crypto_prices.
     * @example
     * // Update or create a Crypto_prices
     * const crypto_prices = await prisma.crypto_prices.upsert({
     *   create: {
     *     // ... data to create a Crypto_prices
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Crypto_prices we want to update
     *   }
     * })
     */
    upsert<T extends crypto_pricesUpsertArgs>(args: SelectSubset<T, crypto_pricesUpsertArgs<ExtArgs>>): Prisma__crypto_pricesClient<$Result.GetResult<Prisma.$crypto_pricesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Crypto_prices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {crypto_pricesCountArgs} args - Arguments to filter Crypto_prices to count.
     * @example
     * // Count the number of Crypto_prices
     * const count = await prisma.crypto_prices.count({
     *   where: {
     *     // ... the filter for the Crypto_prices we want to count
     *   }
     * })
    **/
    count<T extends crypto_pricesCountArgs>(
      args?: Subset<T, crypto_pricesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Crypto_pricesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Crypto_prices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Crypto_pricesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Crypto_pricesAggregateArgs>(args: Subset<T, Crypto_pricesAggregateArgs>): Prisma.PrismaPromise<GetCrypto_pricesAggregateType<T>>

    /**
     * Group by Crypto_prices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {crypto_pricesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends crypto_pricesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: crypto_pricesGroupByArgs['orderBy'] }
        : { orderBy?: crypto_pricesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, crypto_pricesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCrypto_pricesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the crypto_prices model
   */
  readonly fields: crypto_pricesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for crypto_prices.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__crypto_pricesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the crypto_prices model
   */
  interface crypto_pricesFieldRefs {
    readonly currency: FieldRef<"crypto_prices", 'String'>
    readonly price_aed: FieldRef<"crypto_prices", 'Decimal'>
    readonly updated_at: FieldRef<"crypto_prices", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * crypto_prices findUnique
   */
  export type crypto_pricesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the crypto_prices
     */
    select?: crypto_pricesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the crypto_prices
     */
    omit?: crypto_pricesOmit<ExtArgs> | null
    /**
     * Filter, which crypto_prices to fetch.
     */
    where: crypto_pricesWhereUniqueInput
  }

  /**
   * crypto_prices findUniqueOrThrow
   */
  export type crypto_pricesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the crypto_prices
     */
    select?: crypto_pricesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the crypto_prices
     */
    omit?: crypto_pricesOmit<ExtArgs> | null
    /**
     * Filter, which crypto_prices to fetch.
     */
    where: crypto_pricesWhereUniqueInput
  }

  /**
   * crypto_prices findFirst
   */
  export type crypto_pricesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the crypto_prices
     */
    select?: crypto_pricesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the crypto_prices
     */
    omit?: crypto_pricesOmit<ExtArgs> | null
    /**
     * Filter, which crypto_prices to fetch.
     */
    where?: crypto_pricesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of crypto_prices to fetch.
     */
    orderBy?: crypto_pricesOrderByWithRelationInput | crypto_pricesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for crypto_prices.
     */
    cursor?: crypto_pricesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` crypto_prices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` crypto_prices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of crypto_prices.
     */
    distinct?: Crypto_pricesScalarFieldEnum | Crypto_pricesScalarFieldEnum[]
  }

  /**
   * crypto_prices findFirstOrThrow
   */
  export type crypto_pricesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the crypto_prices
     */
    select?: crypto_pricesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the crypto_prices
     */
    omit?: crypto_pricesOmit<ExtArgs> | null
    /**
     * Filter, which crypto_prices to fetch.
     */
    where?: crypto_pricesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of crypto_prices to fetch.
     */
    orderBy?: crypto_pricesOrderByWithRelationInput | crypto_pricesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for crypto_prices.
     */
    cursor?: crypto_pricesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` crypto_prices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` crypto_prices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of crypto_prices.
     */
    distinct?: Crypto_pricesScalarFieldEnum | Crypto_pricesScalarFieldEnum[]
  }

  /**
   * crypto_prices findMany
   */
  export type crypto_pricesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the crypto_prices
     */
    select?: crypto_pricesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the crypto_prices
     */
    omit?: crypto_pricesOmit<ExtArgs> | null
    /**
     * Filter, which crypto_prices to fetch.
     */
    where?: crypto_pricesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of crypto_prices to fetch.
     */
    orderBy?: crypto_pricesOrderByWithRelationInput | crypto_pricesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing crypto_prices.
     */
    cursor?: crypto_pricesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` crypto_prices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` crypto_prices.
     */
    skip?: number
    distinct?: Crypto_pricesScalarFieldEnum | Crypto_pricesScalarFieldEnum[]
  }

  /**
   * crypto_prices create
   */
  export type crypto_pricesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the crypto_prices
     */
    select?: crypto_pricesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the crypto_prices
     */
    omit?: crypto_pricesOmit<ExtArgs> | null
    /**
     * The data needed to create a crypto_prices.
     */
    data: XOR<crypto_pricesCreateInput, crypto_pricesUncheckedCreateInput>
  }

  /**
   * crypto_prices createMany
   */
  export type crypto_pricesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many crypto_prices.
     */
    data: crypto_pricesCreateManyInput | crypto_pricesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * crypto_prices createManyAndReturn
   */
  export type crypto_pricesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the crypto_prices
     */
    select?: crypto_pricesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the crypto_prices
     */
    omit?: crypto_pricesOmit<ExtArgs> | null
    /**
     * The data used to create many crypto_prices.
     */
    data: crypto_pricesCreateManyInput | crypto_pricesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * crypto_prices update
   */
  export type crypto_pricesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the crypto_prices
     */
    select?: crypto_pricesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the crypto_prices
     */
    omit?: crypto_pricesOmit<ExtArgs> | null
    /**
     * The data needed to update a crypto_prices.
     */
    data: XOR<crypto_pricesUpdateInput, crypto_pricesUncheckedUpdateInput>
    /**
     * Choose, which crypto_prices to update.
     */
    where: crypto_pricesWhereUniqueInput
  }

  /**
   * crypto_prices updateMany
   */
  export type crypto_pricesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update crypto_prices.
     */
    data: XOR<crypto_pricesUpdateManyMutationInput, crypto_pricesUncheckedUpdateManyInput>
    /**
     * Filter which crypto_prices to update
     */
    where?: crypto_pricesWhereInput
    /**
     * Limit how many crypto_prices to update.
     */
    limit?: number
  }

  /**
   * crypto_prices updateManyAndReturn
   */
  export type crypto_pricesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the crypto_prices
     */
    select?: crypto_pricesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the crypto_prices
     */
    omit?: crypto_pricesOmit<ExtArgs> | null
    /**
     * The data used to update crypto_prices.
     */
    data: XOR<crypto_pricesUpdateManyMutationInput, crypto_pricesUncheckedUpdateManyInput>
    /**
     * Filter which crypto_prices to update
     */
    where?: crypto_pricesWhereInput
    /**
     * Limit how many crypto_prices to update.
     */
    limit?: number
  }

  /**
   * crypto_prices upsert
   */
  export type crypto_pricesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the crypto_prices
     */
    select?: crypto_pricesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the crypto_prices
     */
    omit?: crypto_pricesOmit<ExtArgs> | null
    /**
     * The filter to search for the crypto_prices to update in case it exists.
     */
    where: crypto_pricesWhereUniqueInput
    /**
     * In case the crypto_prices found by the `where` argument doesn't exist, create a new crypto_prices with this data.
     */
    create: XOR<crypto_pricesCreateInput, crypto_pricesUncheckedCreateInput>
    /**
     * In case the crypto_prices was found with the provided `where` argument, update it with this data.
     */
    update: XOR<crypto_pricesUpdateInput, crypto_pricesUncheckedUpdateInput>
  }

  /**
   * crypto_prices delete
   */
  export type crypto_pricesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the crypto_prices
     */
    select?: crypto_pricesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the crypto_prices
     */
    omit?: crypto_pricesOmit<ExtArgs> | null
    /**
     * Filter which crypto_prices to delete.
     */
    where: crypto_pricesWhereUniqueInput
  }

  /**
   * crypto_prices deleteMany
   */
  export type crypto_pricesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which crypto_prices to delete
     */
    where?: crypto_pricesWhereInput
    /**
     * Limit how many crypto_prices to delete.
     */
    limit?: number
  }

  /**
   * crypto_prices without action
   */
  export type crypto_pricesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the crypto_prices
     */
    select?: crypto_pricesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the crypto_prices
     */
    omit?: crypto_pricesOmit<ExtArgs> | null
  }


  /**
   * Model leads
   */

  export type AggregateLeads = {
    _count: LeadsCountAggregateOutputType | null
    _avg: LeadsAvgAggregateOutputType | null
    _sum: LeadsSumAggregateOutputType | null
    _min: LeadsMinAggregateOutputType | null
    _max: LeadsMaxAggregateOutputType | null
  }

  export type LeadsAvgAggregateOutputType = {
    budget_max: Decimal | null
  }

  export type LeadsSumAggregateOutputType = {
    budget_max: Decimal | null
  }

  export type LeadsMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    whatsapp: string | null
    budget_max: Decimal | null
    message: string | null
    status: string | null
    created_at: Date | null
  }

  export type LeadsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    whatsapp: string | null
    budget_max: Decimal | null
    message: string | null
    status: string | null
    created_at: Date | null
  }

  export type LeadsCountAggregateOutputType = {
    id: number
    name: number
    email: number
    whatsapp: number
    interest_type: number
    budget_max: number
    message: number
    status: number
    created_at: number
    _all: number
  }


  export type LeadsAvgAggregateInputType = {
    budget_max?: true
  }

  export type LeadsSumAggregateInputType = {
    budget_max?: true
  }

  export type LeadsMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    whatsapp?: true
    budget_max?: true
    message?: true
    status?: true
    created_at?: true
  }

  export type LeadsMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    whatsapp?: true
    budget_max?: true
    message?: true
    status?: true
    created_at?: true
  }

  export type LeadsCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    whatsapp?: true
    interest_type?: true
    budget_max?: true
    message?: true
    status?: true
    created_at?: true
    _all?: true
  }

  export type LeadsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which leads to aggregate.
     */
    where?: leadsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of leads to fetch.
     */
    orderBy?: leadsOrderByWithRelationInput | leadsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: leadsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned leads
    **/
    _count?: true | LeadsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LeadsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LeadsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeadsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeadsMaxAggregateInputType
  }

  export type GetLeadsAggregateType<T extends LeadsAggregateArgs> = {
        [P in keyof T & keyof AggregateLeads]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeads[P]>
      : GetScalarType<T[P], AggregateLeads[P]>
  }




  export type leadsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: leadsWhereInput
    orderBy?: leadsOrderByWithAggregationInput | leadsOrderByWithAggregationInput[]
    by: LeadsScalarFieldEnum[] | LeadsScalarFieldEnum
    having?: leadsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeadsCountAggregateInputType | true
    _avg?: LeadsAvgAggregateInputType
    _sum?: LeadsSumAggregateInputType
    _min?: LeadsMinAggregateInputType
    _max?: LeadsMaxAggregateInputType
  }

  export type LeadsGroupByOutputType = {
    id: string
    name: string
    email: string | null
    whatsapp: string
    interest_type: string[]
    budget_max: Decimal | null
    message: string | null
    status: string | null
    created_at: Date | null
    _count: LeadsCountAggregateOutputType | null
    _avg: LeadsAvgAggregateOutputType | null
    _sum: LeadsSumAggregateOutputType | null
    _min: LeadsMinAggregateOutputType | null
    _max: LeadsMaxAggregateOutputType | null
  }

  type GetLeadsGroupByPayload<T extends leadsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeadsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeadsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeadsGroupByOutputType[P]>
            : GetScalarType<T[P], LeadsGroupByOutputType[P]>
        }
      >
    >


  export type leadsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    whatsapp?: boolean
    interest_type?: boolean
    budget_max?: boolean
    message?: boolean
    status?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["leads"]>

  export type leadsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    whatsapp?: boolean
    interest_type?: boolean
    budget_max?: boolean
    message?: boolean
    status?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["leads"]>

  export type leadsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    whatsapp?: boolean
    interest_type?: boolean
    budget_max?: boolean
    message?: boolean
    status?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["leads"]>

  export type leadsSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    whatsapp?: boolean
    interest_type?: boolean
    budget_max?: boolean
    message?: boolean
    status?: boolean
    created_at?: boolean
  }

  export type leadsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "whatsapp" | "interest_type" | "budget_max" | "message" | "status" | "created_at", ExtArgs["result"]["leads"]>

  export type $leadsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "leads"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string | null
      whatsapp: string
      interest_type: string[]
      budget_max: Prisma.Decimal | null
      message: string | null
      status: string | null
      created_at: Date | null
    }, ExtArgs["result"]["leads"]>
    composites: {}
  }

  type leadsGetPayload<S extends boolean | null | undefined | leadsDefaultArgs> = $Result.GetResult<Prisma.$leadsPayload, S>

  type leadsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<leadsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeadsCountAggregateInputType | true
    }

  export interface leadsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['leads'], meta: { name: 'leads' } }
    /**
     * Find zero or one Leads that matches the filter.
     * @param {leadsFindUniqueArgs} args - Arguments to find a Leads
     * @example
     * // Get one Leads
     * const leads = await prisma.leads.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends leadsFindUniqueArgs>(args: SelectSubset<T, leadsFindUniqueArgs<ExtArgs>>): Prisma__leadsClient<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Leads that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {leadsFindUniqueOrThrowArgs} args - Arguments to find a Leads
     * @example
     * // Get one Leads
     * const leads = await prisma.leads.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends leadsFindUniqueOrThrowArgs>(args: SelectSubset<T, leadsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__leadsClient<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Leads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leadsFindFirstArgs} args - Arguments to find a Leads
     * @example
     * // Get one Leads
     * const leads = await prisma.leads.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends leadsFindFirstArgs>(args?: SelectSubset<T, leadsFindFirstArgs<ExtArgs>>): Prisma__leadsClient<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Leads that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leadsFindFirstOrThrowArgs} args - Arguments to find a Leads
     * @example
     * // Get one Leads
     * const leads = await prisma.leads.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends leadsFindFirstOrThrowArgs>(args?: SelectSubset<T, leadsFindFirstOrThrowArgs<ExtArgs>>): Prisma__leadsClient<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Leads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leadsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Leads
     * const leads = await prisma.leads.findMany()
     * 
     * // Get first 10 Leads
     * const leads = await prisma.leads.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leadsWithIdOnly = await prisma.leads.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends leadsFindManyArgs>(args?: SelectSubset<T, leadsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Leads.
     * @param {leadsCreateArgs} args - Arguments to create a Leads.
     * @example
     * // Create one Leads
     * const Leads = await prisma.leads.create({
     *   data: {
     *     // ... data to create a Leads
     *   }
     * })
     * 
     */
    create<T extends leadsCreateArgs>(args: SelectSubset<T, leadsCreateArgs<ExtArgs>>): Prisma__leadsClient<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Leads.
     * @param {leadsCreateManyArgs} args - Arguments to create many Leads.
     * @example
     * // Create many Leads
     * const leads = await prisma.leads.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends leadsCreateManyArgs>(args?: SelectSubset<T, leadsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Leads and returns the data saved in the database.
     * @param {leadsCreateManyAndReturnArgs} args - Arguments to create many Leads.
     * @example
     * // Create many Leads
     * const leads = await prisma.leads.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Leads and only return the `id`
     * const leadsWithIdOnly = await prisma.leads.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends leadsCreateManyAndReturnArgs>(args?: SelectSubset<T, leadsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Leads.
     * @param {leadsDeleteArgs} args - Arguments to delete one Leads.
     * @example
     * // Delete one Leads
     * const Leads = await prisma.leads.delete({
     *   where: {
     *     // ... filter to delete one Leads
     *   }
     * })
     * 
     */
    delete<T extends leadsDeleteArgs>(args: SelectSubset<T, leadsDeleteArgs<ExtArgs>>): Prisma__leadsClient<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Leads.
     * @param {leadsUpdateArgs} args - Arguments to update one Leads.
     * @example
     * // Update one Leads
     * const leads = await prisma.leads.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends leadsUpdateArgs>(args: SelectSubset<T, leadsUpdateArgs<ExtArgs>>): Prisma__leadsClient<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Leads.
     * @param {leadsDeleteManyArgs} args - Arguments to filter Leads to delete.
     * @example
     * // Delete a few Leads
     * const { count } = await prisma.leads.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends leadsDeleteManyArgs>(args?: SelectSubset<T, leadsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leadsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Leads
     * const leads = await prisma.leads.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends leadsUpdateManyArgs>(args: SelectSubset<T, leadsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leads and returns the data updated in the database.
     * @param {leadsUpdateManyAndReturnArgs} args - Arguments to update many Leads.
     * @example
     * // Update many Leads
     * const leads = await prisma.leads.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Leads and only return the `id`
     * const leadsWithIdOnly = await prisma.leads.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends leadsUpdateManyAndReturnArgs>(args: SelectSubset<T, leadsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Leads.
     * @param {leadsUpsertArgs} args - Arguments to update or create a Leads.
     * @example
     * // Update or create a Leads
     * const leads = await prisma.leads.upsert({
     *   create: {
     *     // ... data to create a Leads
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Leads we want to update
     *   }
     * })
     */
    upsert<T extends leadsUpsertArgs>(args: SelectSubset<T, leadsUpsertArgs<ExtArgs>>): Prisma__leadsClient<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leadsCountArgs} args - Arguments to filter Leads to count.
     * @example
     * // Count the number of Leads
     * const count = await prisma.leads.count({
     *   where: {
     *     // ... the filter for the Leads we want to count
     *   }
     * })
    **/
    count<T extends leadsCountArgs>(
      args?: Subset<T, leadsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeadsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LeadsAggregateArgs>(args: Subset<T, LeadsAggregateArgs>): Prisma.PrismaPromise<GetLeadsAggregateType<T>>

    /**
     * Group by Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leadsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends leadsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: leadsGroupByArgs['orderBy'] }
        : { orderBy?: leadsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, leadsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeadsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the leads model
   */
  readonly fields: leadsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for leads.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__leadsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the leads model
   */
  interface leadsFieldRefs {
    readonly id: FieldRef<"leads", 'String'>
    readonly name: FieldRef<"leads", 'String'>
    readonly email: FieldRef<"leads", 'String'>
    readonly whatsapp: FieldRef<"leads", 'String'>
    readonly interest_type: FieldRef<"leads", 'String[]'>
    readonly budget_max: FieldRef<"leads", 'Decimal'>
    readonly message: FieldRef<"leads", 'String'>
    readonly status: FieldRef<"leads", 'String'>
    readonly created_at: FieldRef<"leads", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * leads findUnique
   */
  export type leadsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leads
     */
    omit?: leadsOmit<ExtArgs> | null
    /**
     * Filter, which leads to fetch.
     */
    where: leadsWhereUniqueInput
  }

  /**
   * leads findUniqueOrThrow
   */
  export type leadsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leads
     */
    omit?: leadsOmit<ExtArgs> | null
    /**
     * Filter, which leads to fetch.
     */
    where: leadsWhereUniqueInput
  }

  /**
   * leads findFirst
   */
  export type leadsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leads
     */
    omit?: leadsOmit<ExtArgs> | null
    /**
     * Filter, which leads to fetch.
     */
    where?: leadsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of leads to fetch.
     */
    orderBy?: leadsOrderByWithRelationInput | leadsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for leads.
     */
    cursor?: leadsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of leads.
     */
    distinct?: LeadsScalarFieldEnum | LeadsScalarFieldEnum[]
  }

  /**
   * leads findFirstOrThrow
   */
  export type leadsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leads
     */
    omit?: leadsOmit<ExtArgs> | null
    /**
     * Filter, which leads to fetch.
     */
    where?: leadsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of leads to fetch.
     */
    orderBy?: leadsOrderByWithRelationInput | leadsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for leads.
     */
    cursor?: leadsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of leads.
     */
    distinct?: LeadsScalarFieldEnum | LeadsScalarFieldEnum[]
  }

  /**
   * leads findMany
   */
  export type leadsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leads
     */
    omit?: leadsOmit<ExtArgs> | null
    /**
     * Filter, which leads to fetch.
     */
    where?: leadsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of leads to fetch.
     */
    orderBy?: leadsOrderByWithRelationInput | leadsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing leads.
     */
    cursor?: leadsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` leads.
     */
    skip?: number
    distinct?: LeadsScalarFieldEnum | LeadsScalarFieldEnum[]
  }

  /**
   * leads create
   */
  export type leadsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leads
     */
    omit?: leadsOmit<ExtArgs> | null
    /**
     * The data needed to create a leads.
     */
    data: XOR<leadsCreateInput, leadsUncheckedCreateInput>
  }

  /**
   * leads createMany
   */
  export type leadsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many leads.
     */
    data: leadsCreateManyInput | leadsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * leads createManyAndReturn
   */
  export type leadsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the leads
     */
    omit?: leadsOmit<ExtArgs> | null
    /**
     * The data used to create many leads.
     */
    data: leadsCreateManyInput | leadsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * leads update
   */
  export type leadsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leads
     */
    omit?: leadsOmit<ExtArgs> | null
    /**
     * The data needed to update a leads.
     */
    data: XOR<leadsUpdateInput, leadsUncheckedUpdateInput>
    /**
     * Choose, which leads to update.
     */
    where: leadsWhereUniqueInput
  }

  /**
   * leads updateMany
   */
  export type leadsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update leads.
     */
    data: XOR<leadsUpdateManyMutationInput, leadsUncheckedUpdateManyInput>
    /**
     * Filter which leads to update
     */
    where?: leadsWhereInput
    /**
     * Limit how many leads to update.
     */
    limit?: number
  }

  /**
   * leads updateManyAndReturn
   */
  export type leadsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the leads
     */
    omit?: leadsOmit<ExtArgs> | null
    /**
     * The data used to update leads.
     */
    data: XOR<leadsUpdateManyMutationInput, leadsUncheckedUpdateManyInput>
    /**
     * Filter which leads to update
     */
    where?: leadsWhereInput
    /**
     * Limit how many leads to update.
     */
    limit?: number
  }

  /**
   * leads upsert
   */
  export type leadsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leads
     */
    omit?: leadsOmit<ExtArgs> | null
    /**
     * The filter to search for the leads to update in case it exists.
     */
    where: leadsWhereUniqueInput
    /**
     * In case the leads found by the `where` argument doesn't exist, create a new leads with this data.
     */
    create: XOR<leadsCreateInput, leadsUncheckedCreateInput>
    /**
     * In case the leads was found with the provided `where` argument, update it with this data.
     */
    update: XOR<leadsUpdateInput, leadsUncheckedUpdateInput>
  }

  /**
   * leads delete
   */
  export type leadsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leads
     */
    omit?: leadsOmit<ExtArgs> | null
    /**
     * Filter which leads to delete.
     */
    where: leadsWhereUniqueInput
  }

  /**
   * leads deleteMany
   */
  export type leadsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which leads to delete
     */
    where?: leadsWhereInput
    /**
     * Limit how many leads to delete.
     */
    limit?: number
  }

  /**
   * leads without action
   */
  export type leadsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leads
     */
    omit?: leadsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PropertiesScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    price_aed: 'price_aed',
    property_type: 'property_type',
    bedrooms: 'bedrooms',
    bathrooms: 'bathrooms',
    sqft: 'sqft',
    area: 'area',
    developer: 'developer',
    crypto_verified: 'crypto_verified',
    golden_visa_eligible: 'golden_visa_eligible',
    images: 'images',
    amenities: 'amenities',
    status: 'status',
    latitude: 'latitude',
    longitude: 'longitude',
    created_at: 'created_at'
  };

  export type PropertiesScalarFieldEnum = (typeof PropertiesScalarFieldEnum)[keyof typeof PropertiesScalarFieldEnum]


  export const SupercarsScalarFieldEnum: {
    id: 'id',
    brand: 'brand',
    model: 'model',
    year: 'year',
    price_per_day_aed: 'price_per_day_aed',
    images: 'images',
    specs: 'specs',
    whatsapp_booking: 'whatsapp_booking',
    created_at: 'created_at'
  };

  export type SupercarsScalarFieldEnum = (typeof SupercarsScalarFieldEnum)[keyof typeof SupercarsScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const YachtsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    price_per_day_aed: 'price_per_day_aed',
    length_ft: 'length_ft',
    guests_max: 'guests_max',
    yacht_type: 'yacht_type',
    images: 'images',
    amenities: 'amenities',
    whatsapp_booking: 'whatsapp_booking',
    created_at: 'created_at'
  };

  export type YachtsScalarFieldEnum = (typeof YachtsScalarFieldEnum)[keyof typeof YachtsScalarFieldEnum]


  export const Crypto_pricesScalarFieldEnum: {
    currency: 'currency',
    price_aed: 'price_aed',
    updated_at: 'updated_at'
  };

  export type Crypto_pricesScalarFieldEnum = (typeof Crypto_pricesScalarFieldEnum)[keyof typeof Crypto_pricesScalarFieldEnum]


  export const LeadsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    whatsapp: 'whatsapp',
    interest_type: 'interest_type',
    budget_max: 'budget_max',
    message: 'message',
    status: 'status',
    created_at: 'created_at'
  };

  export type LeadsScalarFieldEnum = (typeof LeadsScalarFieldEnum)[keyof typeof LeadsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type propertiesWhereInput = {
    AND?: propertiesWhereInput | propertiesWhereInput[]
    OR?: propertiesWhereInput[]
    NOT?: propertiesWhereInput | propertiesWhereInput[]
    id?: StringFilter<"properties"> | string
    title?: StringFilter<"properties"> | string
    description?: StringNullableFilter<"properties"> | string | null
    price_aed?: DecimalFilter<"properties"> | Decimal | DecimalJsLike | number | string
    property_type?: StringNullableFilter<"properties"> | string | null
    bedrooms?: IntNullableFilter<"properties"> | number | null
    bathrooms?: IntNullableFilter<"properties"> | number | null
    sqft?: IntNullableFilter<"properties"> | number | null
    area?: StringNullableFilter<"properties"> | string | null
    developer?: StringNullableFilter<"properties"> | string | null
    crypto_verified?: BoolNullableFilter<"properties"> | boolean | null
    golden_visa_eligible?: BoolNullableFilter<"properties"> | boolean | null
    images?: StringNullableListFilter<"properties">
    amenities?: StringNullableListFilter<"properties">
    status?: StringNullableFilter<"properties"> | string | null
    latitude?: DecimalNullableFilter<"properties"> | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableFilter<"properties"> | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeNullableFilter<"properties"> | Date | string | null
  }

  export type propertiesOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    price_aed?: SortOrder
    property_type?: SortOrderInput | SortOrder
    bedrooms?: SortOrderInput | SortOrder
    bathrooms?: SortOrderInput | SortOrder
    sqft?: SortOrderInput | SortOrder
    area?: SortOrderInput | SortOrder
    developer?: SortOrderInput | SortOrder
    crypto_verified?: SortOrderInput | SortOrder
    golden_visa_eligible?: SortOrderInput | SortOrder
    images?: SortOrder
    amenities?: SortOrder
    status?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
  }

  export type propertiesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: propertiesWhereInput | propertiesWhereInput[]
    OR?: propertiesWhereInput[]
    NOT?: propertiesWhereInput | propertiesWhereInput[]
    title?: StringFilter<"properties"> | string
    description?: StringNullableFilter<"properties"> | string | null
    price_aed?: DecimalFilter<"properties"> | Decimal | DecimalJsLike | number | string
    property_type?: StringNullableFilter<"properties"> | string | null
    bedrooms?: IntNullableFilter<"properties"> | number | null
    bathrooms?: IntNullableFilter<"properties"> | number | null
    sqft?: IntNullableFilter<"properties"> | number | null
    area?: StringNullableFilter<"properties"> | string | null
    developer?: StringNullableFilter<"properties"> | string | null
    crypto_verified?: BoolNullableFilter<"properties"> | boolean | null
    golden_visa_eligible?: BoolNullableFilter<"properties"> | boolean | null
    images?: StringNullableListFilter<"properties">
    amenities?: StringNullableListFilter<"properties">
    status?: StringNullableFilter<"properties"> | string | null
    latitude?: DecimalNullableFilter<"properties"> | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableFilter<"properties"> | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeNullableFilter<"properties"> | Date | string | null
  }, "id" | "id">

  export type propertiesOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    price_aed?: SortOrder
    property_type?: SortOrderInput | SortOrder
    bedrooms?: SortOrderInput | SortOrder
    bathrooms?: SortOrderInput | SortOrder
    sqft?: SortOrderInput | SortOrder
    area?: SortOrderInput | SortOrder
    developer?: SortOrderInput | SortOrder
    crypto_verified?: SortOrderInput | SortOrder
    golden_visa_eligible?: SortOrderInput | SortOrder
    images?: SortOrder
    amenities?: SortOrder
    status?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: propertiesCountOrderByAggregateInput
    _avg?: propertiesAvgOrderByAggregateInput
    _max?: propertiesMaxOrderByAggregateInput
    _min?: propertiesMinOrderByAggregateInput
    _sum?: propertiesSumOrderByAggregateInput
  }

  export type propertiesScalarWhereWithAggregatesInput = {
    AND?: propertiesScalarWhereWithAggregatesInput | propertiesScalarWhereWithAggregatesInput[]
    OR?: propertiesScalarWhereWithAggregatesInput[]
    NOT?: propertiesScalarWhereWithAggregatesInput | propertiesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"properties"> | string
    title?: StringWithAggregatesFilter<"properties"> | string
    description?: StringNullableWithAggregatesFilter<"properties"> | string | null
    price_aed?: DecimalWithAggregatesFilter<"properties"> | Decimal | DecimalJsLike | number | string
    property_type?: StringNullableWithAggregatesFilter<"properties"> | string | null
    bedrooms?: IntNullableWithAggregatesFilter<"properties"> | number | null
    bathrooms?: IntNullableWithAggregatesFilter<"properties"> | number | null
    sqft?: IntNullableWithAggregatesFilter<"properties"> | number | null
    area?: StringNullableWithAggregatesFilter<"properties"> | string | null
    developer?: StringNullableWithAggregatesFilter<"properties"> | string | null
    crypto_verified?: BoolNullableWithAggregatesFilter<"properties"> | boolean | null
    golden_visa_eligible?: BoolNullableWithAggregatesFilter<"properties"> | boolean | null
    images?: StringNullableListFilter<"properties">
    amenities?: StringNullableListFilter<"properties">
    status?: StringNullableWithAggregatesFilter<"properties"> | string | null
    latitude?: DecimalNullableWithAggregatesFilter<"properties"> | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableWithAggregatesFilter<"properties"> | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"properties"> | Date | string | null
  }

  export type supercarsWhereInput = {
    AND?: supercarsWhereInput | supercarsWhereInput[]
    OR?: supercarsWhereInput[]
    NOT?: supercarsWhereInput | supercarsWhereInput[]
    id?: StringFilter<"supercars"> | string
    brand?: StringFilter<"supercars"> | string
    model?: StringFilter<"supercars"> | string
    year?: IntNullableFilter<"supercars"> | number | null
    price_per_day_aed?: DecimalFilter<"supercars"> | Decimal | DecimalJsLike | number | string
    images?: StringNullableListFilter<"supercars">
    specs?: JsonNullableFilter<"supercars">
    whatsapp_booking?: StringNullableFilter<"supercars"> | string | null
    created_at?: DateTimeNullableFilter<"supercars"> | Date | string | null
  }

  export type supercarsOrderByWithRelationInput = {
    id?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    year?: SortOrderInput | SortOrder
    price_per_day_aed?: SortOrder
    images?: SortOrder
    specs?: SortOrderInput | SortOrder
    whatsapp_booking?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
  }

  export type supercarsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: supercarsWhereInput | supercarsWhereInput[]
    OR?: supercarsWhereInput[]
    NOT?: supercarsWhereInput | supercarsWhereInput[]
    brand?: StringFilter<"supercars"> | string
    model?: StringFilter<"supercars"> | string
    year?: IntNullableFilter<"supercars"> | number | null
    price_per_day_aed?: DecimalFilter<"supercars"> | Decimal | DecimalJsLike | number | string
    images?: StringNullableListFilter<"supercars">
    specs?: JsonNullableFilter<"supercars">
    whatsapp_booking?: StringNullableFilter<"supercars"> | string | null
    created_at?: DateTimeNullableFilter<"supercars"> | Date | string | null
  }, "id" | "id">

  export type supercarsOrderByWithAggregationInput = {
    id?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    year?: SortOrderInput | SortOrder
    price_per_day_aed?: SortOrder
    images?: SortOrder
    specs?: SortOrderInput | SortOrder
    whatsapp_booking?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: supercarsCountOrderByAggregateInput
    _avg?: supercarsAvgOrderByAggregateInput
    _max?: supercarsMaxOrderByAggregateInput
    _min?: supercarsMinOrderByAggregateInput
    _sum?: supercarsSumOrderByAggregateInput
  }

  export type supercarsScalarWhereWithAggregatesInput = {
    AND?: supercarsScalarWhereWithAggregatesInput | supercarsScalarWhereWithAggregatesInput[]
    OR?: supercarsScalarWhereWithAggregatesInput[]
    NOT?: supercarsScalarWhereWithAggregatesInput | supercarsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"supercars"> | string
    brand?: StringWithAggregatesFilter<"supercars"> | string
    model?: StringWithAggregatesFilter<"supercars"> | string
    year?: IntNullableWithAggregatesFilter<"supercars"> | number | null
    price_per_day_aed?: DecimalWithAggregatesFilter<"supercars"> | Decimal | DecimalJsLike | number | string
    images?: StringNullableListFilter<"supercars">
    specs?: JsonNullableWithAggregatesFilter<"supercars">
    whatsapp_booking?: StringNullableWithAggregatesFilter<"supercars"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"supercars"> | Date | string | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createAt?: DateTimeFilter<"User"> | Date | string
    updateAt?: DateTimeNullableFilter<"User"> | Date | string | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrderInput | SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createAt?: DateTimeFilter<"User"> | Date | string
    updateAt?: DateTimeNullableFilter<"User"> | Date | string | null
  }, "id" | "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updateAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type yachtsWhereInput = {
    AND?: yachtsWhereInput | yachtsWhereInput[]
    OR?: yachtsWhereInput[]
    NOT?: yachtsWhereInput | yachtsWhereInput[]
    id?: StringFilter<"yachts"> | string
    name?: StringFilter<"yachts"> | string
    description?: StringNullableFilter<"yachts"> | string | null
    price_per_day_aed?: DecimalFilter<"yachts"> | Decimal | DecimalJsLike | number | string
    length_ft?: IntNullableFilter<"yachts"> | number | null
    guests_max?: IntNullableFilter<"yachts"> | number | null
    yacht_type?: StringNullableFilter<"yachts"> | string | null
    images?: StringNullableListFilter<"yachts">
    amenities?: StringNullableListFilter<"yachts">
    whatsapp_booking?: StringNullableFilter<"yachts"> | string | null
    created_at?: DateTimeNullableFilter<"yachts"> | Date | string | null
  }

  export type yachtsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price_per_day_aed?: SortOrder
    length_ft?: SortOrderInput | SortOrder
    guests_max?: SortOrderInput | SortOrder
    yacht_type?: SortOrderInput | SortOrder
    images?: SortOrder
    amenities?: SortOrder
    whatsapp_booking?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
  }

  export type yachtsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: yachtsWhereInput | yachtsWhereInput[]
    OR?: yachtsWhereInput[]
    NOT?: yachtsWhereInput | yachtsWhereInput[]
    name?: StringFilter<"yachts"> | string
    description?: StringNullableFilter<"yachts"> | string | null
    price_per_day_aed?: DecimalFilter<"yachts"> | Decimal | DecimalJsLike | number | string
    length_ft?: IntNullableFilter<"yachts"> | number | null
    guests_max?: IntNullableFilter<"yachts"> | number | null
    yacht_type?: StringNullableFilter<"yachts"> | string | null
    images?: StringNullableListFilter<"yachts">
    amenities?: StringNullableListFilter<"yachts">
    whatsapp_booking?: StringNullableFilter<"yachts"> | string | null
    created_at?: DateTimeNullableFilter<"yachts"> | Date | string | null
  }, "id" | "id">

  export type yachtsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price_per_day_aed?: SortOrder
    length_ft?: SortOrderInput | SortOrder
    guests_max?: SortOrderInput | SortOrder
    yacht_type?: SortOrderInput | SortOrder
    images?: SortOrder
    amenities?: SortOrder
    whatsapp_booking?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: yachtsCountOrderByAggregateInput
    _avg?: yachtsAvgOrderByAggregateInput
    _max?: yachtsMaxOrderByAggregateInput
    _min?: yachtsMinOrderByAggregateInput
    _sum?: yachtsSumOrderByAggregateInput
  }

  export type yachtsScalarWhereWithAggregatesInput = {
    AND?: yachtsScalarWhereWithAggregatesInput | yachtsScalarWhereWithAggregatesInput[]
    OR?: yachtsScalarWhereWithAggregatesInput[]
    NOT?: yachtsScalarWhereWithAggregatesInput | yachtsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"yachts"> | string
    name?: StringWithAggregatesFilter<"yachts"> | string
    description?: StringNullableWithAggregatesFilter<"yachts"> | string | null
    price_per_day_aed?: DecimalWithAggregatesFilter<"yachts"> | Decimal | DecimalJsLike | number | string
    length_ft?: IntNullableWithAggregatesFilter<"yachts"> | number | null
    guests_max?: IntNullableWithAggregatesFilter<"yachts"> | number | null
    yacht_type?: StringNullableWithAggregatesFilter<"yachts"> | string | null
    images?: StringNullableListFilter<"yachts">
    amenities?: StringNullableListFilter<"yachts">
    whatsapp_booking?: StringNullableWithAggregatesFilter<"yachts"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"yachts"> | Date | string | null
  }

  export type crypto_pricesWhereInput = {
    AND?: crypto_pricesWhereInput | crypto_pricesWhereInput[]
    OR?: crypto_pricesWhereInput[]
    NOT?: crypto_pricesWhereInput | crypto_pricesWhereInput[]
    currency?: StringFilter<"crypto_prices"> | string
    price_aed?: DecimalFilter<"crypto_prices"> | Decimal | DecimalJsLike | number | string
    updated_at?: DateTimeNullableFilter<"crypto_prices"> | Date | string | null
  }

  export type crypto_pricesOrderByWithRelationInput = {
    currency?: SortOrder
    price_aed?: SortOrder
    updated_at?: SortOrderInput | SortOrder
  }

  export type crypto_pricesWhereUniqueInput = Prisma.AtLeast<{
    currency?: string
    AND?: crypto_pricesWhereInput | crypto_pricesWhereInput[]
    OR?: crypto_pricesWhereInput[]
    NOT?: crypto_pricesWhereInput | crypto_pricesWhereInput[]
    price_aed?: DecimalFilter<"crypto_prices"> | Decimal | DecimalJsLike | number | string
    updated_at?: DateTimeNullableFilter<"crypto_prices"> | Date | string | null
  }, "currency" | "currency">

  export type crypto_pricesOrderByWithAggregationInput = {
    currency?: SortOrder
    price_aed?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: crypto_pricesCountOrderByAggregateInput
    _avg?: crypto_pricesAvgOrderByAggregateInput
    _max?: crypto_pricesMaxOrderByAggregateInput
    _min?: crypto_pricesMinOrderByAggregateInput
    _sum?: crypto_pricesSumOrderByAggregateInput
  }

  export type crypto_pricesScalarWhereWithAggregatesInput = {
    AND?: crypto_pricesScalarWhereWithAggregatesInput | crypto_pricesScalarWhereWithAggregatesInput[]
    OR?: crypto_pricesScalarWhereWithAggregatesInput[]
    NOT?: crypto_pricesScalarWhereWithAggregatesInput | crypto_pricesScalarWhereWithAggregatesInput[]
    currency?: StringWithAggregatesFilter<"crypto_prices"> | string
    price_aed?: DecimalWithAggregatesFilter<"crypto_prices"> | Decimal | DecimalJsLike | number | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"crypto_prices"> | Date | string | null
  }

  export type leadsWhereInput = {
    AND?: leadsWhereInput | leadsWhereInput[]
    OR?: leadsWhereInput[]
    NOT?: leadsWhereInput | leadsWhereInput[]
    id?: StringFilter<"leads"> | string
    name?: StringFilter<"leads"> | string
    email?: StringNullableFilter<"leads"> | string | null
    whatsapp?: StringFilter<"leads"> | string
    interest_type?: StringNullableListFilter<"leads">
    budget_max?: DecimalNullableFilter<"leads"> | Decimal | DecimalJsLike | number | string | null
    message?: StringNullableFilter<"leads"> | string | null
    status?: StringNullableFilter<"leads"> | string | null
    created_at?: DateTimeNullableFilter<"leads"> | Date | string | null
  }

  export type leadsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    whatsapp?: SortOrder
    interest_type?: SortOrder
    budget_max?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
  }

  export type leadsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: leadsWhereInput | leadsWhereInput[]
    OR?: leadsWhereInput[]
    NOT?: leadsWhereInput | leadsWhereInput[]
    name?: StringFilter<"leads"> | string
    email?: StringNullableFilter<"leads"> | string | null
    whatsapp?: StringFilter<"leads"> | string
    interest_type?: StringNullableListFilter<"leads">
    budget_max?: DecimalNullableFilter<"leads"> | Decimal | DecimalJsLike | number | string | null
    message?: StringNullableFilter<"leads"> | string | null
    status?: StringNullableFilter<"leads"> | string | null
    created_at?: DateTimeNullableFilter<"leads"> | Date | string | null
  }, "id" | "id">

  export type leadsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    whatsapp?: SortOrder
    interest_type?: SortOrder
    budget_max?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: leadsCountOrderByAggregateInput
    _avg?: leadsAvgOrderByAggregateInput
    _max?: leadsMaxOrderByAggregateInput
    _min?: leadsMinOrderByAggregateInput
    _sum?: leadsSumOrderByAggregateInput
  }

  export type leadsScalarWhereWithAggregatesInput = {
    AND?: leadsScalarWhereWithAggregatesInput | leadsScalarWhereWithAggregatesInput[]
    OR?: leadsScalarWhereWithAggregatesInput[]
    NOT?: leadsScalarWhereWithAggregatesInput | leadsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"leads"> | string
    name?: StringWithAggregatesFilter<"leads"> | string
    email?: StringNullableWithAggregatesFilter<"leads"> | string | null
    whatsapp?: StringWithAggregatesFilter<"leads"> | string
    interest_type?: StringNullableListFilter<"leads">
    budget_max?: DecimalNullableWithAggregatesFilter<"leads"> | Decimal | DecimalJsLike | number | string | null
    message?: StringNullableWithAggregatesFilter<"leads"> | string | null
    status?: StringNullableWithAggregatesFilter<"leads"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"leads"> | Date | string | null
  }

  export type propertiesCreateInput = {
    id?: string
    title: string
    description?: string | null
    price_aed: Decimal | DecimalJsLike | number | string
    property_type?: string | null
    bedrooms?: number | null
    bathrooms?: number | null
    sqft?: number | null
    area?: string | null
    developer?: string | null
    crypto_verified?: boolean | null
    golden_visa_eligible?: boolean | null
    images?: propertiesCreateimagesInput | string[]
    amenities?: propertiesCreateamenitiesInput | string[]
    status?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
  }

  export type propertiesUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    price_aed: Decimal | DecimalJsLike | number | string
    property_type?: string | null
    bedrooms?: number | null
    bathrooms?: number | null
    sqft?: number | null
    area?: string | null
    developer?: string | null
    crypto_verified?: boolean | null
    golden_visa_eligible?: boolean | null
    images?: propertiesCreateimagesInput | string[]
    amenities?: propertiesCreateamenitiesInput | string[]
    status?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
  }

  export type propertiesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price_aed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    property_type?: NullableStringFieldUpdateOperationsInput | string | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    sqft?: NullableIntFieldUpdateOperationsInput | number | null
    area?: NullableStringFieldUpdateOperationsInput | string | null
    developer?: NullableStringFieldUpdateOperationsInput | string | null
    crypto_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    golden_visa_eligible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    images?: propertiesUpdateimagesInput | string[]
    amenities?: propertiesUpdateamenitiesInput | string[]
    status?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type propertiesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price_aed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    property_type?: NullableStringFieldUpdateOperationsInput | string | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    sqft?: NullableIntFieldUpdateOperationsInput | number | null
    area?: NullableStringFieldUpdateOperationsInput | string | null
    developer?: NullableStringFieldUpdateOperationsInput | string | null
    crypto_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    golden_visa_eligible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    images?: propertiesUpdateimagesInput | string[]
    amenities?: propertiesUpdateamenitiesInput | string[]
    status?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type propertiesCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    price_aed: Decimal | DecimalJsLike | number | string
    property_type?: string | null
    bedrooms?: number | null
    bathrooms?: number | null
    sqft?: number | null
    area?: string | null
    developer?: string | null
    crypto_verified?: boolean | null
    golden_visa_eligible?: boolean | null
    images?: propertiesCreateimagesInput | string[]
    amenities?: propertiesCreateamenitiesInput | string[]
    status?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
  }

  export type propertiesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price_aed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    property_type?: NullableStringFieldUpdateOperationsInput | string | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    sqft?: NullableIntFieldUpdateOperationsInput | number | null
    area?: NullableStringFieldUpdateOperationsInput | string | null
    developer?: NullableStringFieldUpdateOperationsInput | string | null
    crypto_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    golden_visa_eligible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    images?: propertiesUpdateimagesInput | string[]
    amenities?: propertiesUpdateamenitiesInput | string[]
    status?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type propertiesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price_aed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    property_type?: NullableStringFieldUpdateOperationsInput | string | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    sqft?: NullableIntFieldUpdateOperationsInput | number | null
    area?: NullableStringFieldUpdateOperationsInput | string | null
    developer?: NullableStringFieldUpdateOperationsInput | string | null
    crypto_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    golden_visa_eligible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    images?: propertiesUpdateimagesInput | string[]
    amenities?: propertiesUpdateamenitiesInput | string[]
    status?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type supercarsCreateInput = {
    id?: string
    brand: string
    model: string
    year?: number | null
    price_per_day_aed: Decimal | DecimalJsLike | number | string
    images?: supercarsCreateimagesInput | string[]
    specs?: NullableJsonNullValueInput | InputJsonValue
    whatsapp_booking?: string | null
    created_at?: Date | string | null
  }

  export type supercarsUncheckedCreateInput = {
    id?: string
    brand: string
    model: string
    year?: number | null
    price_per_day_aed: Decimal | DecimalJsLike | number | string
    images?: supercarsCreateimagesInput | string[]
    specs?: NullableJsonNullValueInput | InputJsonValue
    whatsapp_booking?: string | null
    created_at?: Date | string | null
  }

  export type supercarsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    price_per_day_aed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    images?: supercarsUpdateimagesInput | string[]
    specs?: NullableJsonNullValueInput | InputJsonValue
    whatsapp_booking?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type supercarsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    price_per_day_aed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    images?: supercarsUpdateimagesInput | string[]
    specs?: NullableJsonNullValueInput | InputJsonValue
    whatsapp_booking?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type supercarsCreateManyInput = {
    id?: string
    brand: string
    model: string
    year?: number | null
    price_per_day_aed: Decimal | DecimalJsLike | number | string
    images?: supercarsCreateimagesInput | string[]
    specs?: NullableJsonNullValueInput | InputJsonValue
    whatsapp_booking?: string | null
    created_at?: Date | string | null
  }

  export type supercarsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    price_per_day_aed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    images?: supercarsUpdateimagesInput | string[]
    specs?: NullableJsonNullValueInput | InputJsonValue
    whatsapp_booking?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type supercarsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    price_per_day_aed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    images?: supercarsUpdateimagesInput | string[]
    specs?: NullableJsonNullValueInput | InputJsonValue
    whatsapp_booking?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    createAt?: Date | string
    updateAt?: Date | string | null
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    createAt?: Date | string
    updateAt?: Date | string | null
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    createAt?: Date | string
    updateAt?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type yachtsCreateInput = {
    id?: string
    name: string
    description?: string | null
    price_per_day_aed: Decimal | DecimalJsLike | number | string
    length_ft?: number | null
    guests_max?: number | null
    yacht_type?: string | null
    images?: yachtsCreateimagesInput | string[]
    amenities?: yachtsCreateamenitiesInput | string[]
    whatsapp_booking?: string | null
    created_at?: Date | string | null
  }

  export type yachtsUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    price_per_day_aed: Decimal | DecimalJsLike | number | string
    length_ft?: number | null
    guests_max?: number | null
    yacht_type?: string | null
    images?: yachtsCreateimagesInput | string[]
    amenities?: yachtsCreateamenitiesInput | string[]
    whatsapp_booking?: string | null
    created_at?: Date | string | null
  }

  export type yachtsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price_per_day_aed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    length_ft?: NullableIntFieldUpdateOperationsInput | number | null
    guests_max?: NullableIntFieldUpdateOperationsInput | number | null
    yacht_type?: NullableStringFieldUpdateOperationsInput | string | null
    images?: yachtsUpdateimagesInput | string[]
    amenities?: yachtsUpdateamenitiesInput | string[]
    whatsapp_booking?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type yachtsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price_per_day_aed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    length_ft?: NullableIntFieldUpdateOperationsInput | number | null
    guests_max?: NullableIntFieldUpdateOperationsInput | number | null
    yacht_type?: NullableStringFieldUpdateOperationsInput | string | null
    images?: yachtsUpdateimagesInput | string[]
    amenities?: yachtsUpdateamenitiesInput | string[]
    whatsapp_booking?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type yachtsCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    price_per_day_aed: Decimal | DecimalJsLike | number | string
    length_ft?: number | null
    guests_max?: number | null
    yacht_type?: string | null
    images?: yachtsCreateimagesInput | string[]
    amenities?: yachtsCreateamenitiesInput | string[]
    whatsapp_booking?: string | null
    created_at?: Date | string | null
  }

  export type yachtsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price_per_day_aed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    length_ft?: NullableIntFieldUpdateOperationsInput | number | null
    guests_max?: NullableIntFieldUpdateOperationsInput | number | null
    yacht_type?: NullableStringFieldUpdateOperationsInput | string | null
    images?: yachtsUpdateimagesInput | string[]
    amenities?: yachtsUpdateamenitiesInput | string[]
    whatsapp_booking?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type yachtsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price_per_day_aed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    length_ft?: NullableIntFieldUpdateOperationsInput | number | null
    guests_max?: NullableIntFieldUpdateOperationsInput | number | null
    yacht_type?: NullableStringFieldUpdateOperationsInput | string | null
    images?: yachtsUpdateimagesInput | string[]
    amenities?: yachtsUpdateamenitiesInput | string[]
    whatsapp_booking?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type crypto_pricesCreateInput = {
    currency: string
    price_aed: Decimal | DecimalJsLike | number | string
    updated_at?: Date | string | null
  }

  export type crypto_pricesUncheckedCreateInput = {
    currency: string
    price_aed: Decimal | DecimalJsLike | number | string
    updated_at?: Date | string | null
  }

  export type crypto_pricesUpdateInput = {
    currency?: StringFieldUpdateOperationsInput | string
    price_aed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type crypto_pricesUncheckedUpdateInput = {
    currency?: StringFieldUpdateOperationsInput | string
    price_aed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type crypto_pricesCreateManyInput = {
    currency: string
    price_aed: Decimal | DecimalJsLike | number | string
    updated_at?: Date | string | null
  }

  export type crypto_pricesUpdateManyMutationInput = {
    currency?: StringFieldUpdateOperationsInput | string
    price_aed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type crypto_pricesUncheckedUpdateManyInput = {
    currency?: StringFieldUpdateOperationsInput | string
    price_aed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type leadsCreateInput = {
    id?: string
    name: string
    email?: string | null
    whatsapp: string
    interest_type?: leadsCreateinterest_typeInput | string[]
    budget_max?: Decimal | DecimalJsLike | number | string | null
    message?: string | null
    status?: string | null
    created_at?: Date | string | null
  }

  export type leadsUncheckedCreateInput = {
    id?: string
    name: string
    email?: string | null
    whatsapp: string
    interest_type?: leadsCreateinterest_typeInput | string[]
    budget_max?: Decimal | DecimalJsLike | number | string | null
    message?: string | null
    status?: string | null
    created_at?: Date | string | null
  }

  export type leadsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: StringFieldUpdateOperationsInput | string
    interest_type?: leadsUpdateinterest_typeInput | string[]
    budget_max?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type leadsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: StringFieldUpdateOperationsInput | string
    interest_type?: leadsUpdateinterest_typeInput | string[]
    budget_max?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type leadsCreateManyInput = {
    id?: string
    name: string
    email?: string | null
    whatsapp: string
    interest_type?: leadsCreateinterest_typeInput | string[]
    budget_max?: Decimal | DecimalJsLike | number | string | null
    message?: string | null
    status?: string | null
    created_at?: Date | string | null
  }

  export type leadsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: StringFieldUpdateOperationsInput | string
    interest_type?: leadsUpdateinterest_typeInput | string[]
    budget_max?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type leadsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: StringFieldUpdateOperationsInput | string
    interest_type?: leadsUpdateinterest_typeInput | string[]
    budget_max?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type propertiesCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price_aed?: SortOrder
    property_type?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    sqft?: SortOrder
    area?: SortOrder
    developer?: SortOrder
    crypto_verified?: SortOrder
    golden_visa_eligible?: SortOrder
    images?: SortOrder
    amenities?: SortOrder
    status?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    created_at?: SortOrder
  }

  export type propertiesAvgOrderByAggregateInput = {
    price_aed?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    sqft?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type propertiesMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price_aed?: SortOrder
    property_type?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    sqft?: SortOrder
    area?: SortOrder
    developer?: SortOrder
    crypto_verified?: SortOrder
    golden_visa_eligible?: SortOrder
    status?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    created_at?: SortOrder
  }

  export type propertiesMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price_aed?: SortOrder
    property_type?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    sqft?: SortOrder
    area?: SortOrder
    developer?: SortOrder
    crypto_verified?: SortOrder
    golden_visa_eligible?: SortOrder
    status?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    created_at?: SortOrder
  }

  export type propertiesSumOrderByAggregateInput = {
    price_aed?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    sqft?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type supercarsCountOrderByAggregateInput = {
    id?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    year?: SortOrder
    price_per_day_aed?: SortOrder
    images?: SortOrder
    specs?: SortOrder
    whatsapp_booking?: SortOrder
    created_at?: SortOrder
  }

  export type supercarsAvgOrderByAggregateInput = {
    year?: SortOrder
    price_per_day_aed?: SortOrder
  }

  export type supercarsMaxOrderByAggregateInput = {
    id?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    year?: SortOrder
    price_per_day_aed?: SortOrder
    whatsapp_booking?: SortOrder
    created_at?: SortOrder
  }

  export type supercarsMinOrderByAggregateInput = {
    id?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    year?: SortOrder
    price_per_day_aed?: SortOrder
    whatsapp_booking?: SortOrder
    created_at?: SortOrder
  }

  export type supercarsSumOrderByAggregateInput = {
    year?: SortOrder
    price_per_day_aed?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type yachtsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price_per_day_aed?: SortOrder
    length_ft?: SortOrder
    guests_max?: SortOrder
    yacht_type?: SortOrder
    images?: SortOrder
    amenities?: SortOrder
    whatsapp_booking?: SortOrder
    created_at?: SortOrder
  }

  export type yachtsAvgOrderByAggregateInput = {
    price_per_day_aed?: SortOrder
    length_ft?: SortOrder
    guests_max?: SortOrder
  }

  export type yachtsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price_per_day_aed?: SortOrder
    length_ft?: SortOrder
    guests_max?: SortOrder
    yacht_type?: SortOrder
    whatsapp_booking?: SortOrder
    created_at?: SortOrder
  }

  export type yachtsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price_per_day_aed?: SortOrder
    length_ft?: SortOrder
    guests_max?: SortOrder
    yacht_type?: SortOrder
    whatsapp_booking?: SortOrder
    created_at?: SortOrder
  }

  export type yachtsSumOrderByAggregateInput = {
    price_per_day_aed?: SortOrder
    length_ft?: SortOrder
    guests_max?: SortOrder
  }

  export type crypto_pricesCountOrderByAggregateInput = {
    currency?: SortOrder
    price_aed?: SortOrder
    updated_at?: SortOrder
  }

  export type crypto_pricesAvgOrderByAggregateInput = {
    price_aed?: SortOrder
  }

  export type crypto_pricesMaxOrderByAggregateInput = {
    currency?: SortOrder
    price_aed?: SortOrder
    updated_at?: SortOrder
  }

  export type crypto_pricesMinOrderByAggregateInput = {
    currency?: SortOrder
    price_aed?: SortOrder
    updated_at?: SortOrder
  }

  export type crypto_pricesSumOrderByAggregateInput = {
    price_aed?: SortOrder
  }

  export type leadsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    whatsapp?: SortOrder
    interest_type?: SortOrder
    budget_max?: SortOrder
    message?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type leadsAvgOrderByAggregateInput = {
    budget_max?: SortOrder
  }

  export type leadsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    whatsapp?: SortOrder
    budget_max?: SortOrder
    message?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type leadsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    whatsapp?: SortOrder
    budget_max?: SortOrder
    message?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type leadsSumOrderByAggregateInput = {
    budget_max?: SortOrder
  }

  export type propertiesCreateimagesInput = {
    set: string[]
  }

  export type propertiesCreateamenitiesInput = {
    set: string[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type propertiesUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type propertiesUpdateamenitiesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type supercarsCreateimagesInput = {
    set: string[]
  }

  export type supercarsUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type yachtsCreateimagesInput = {
    set: string[]
  }

  export type yachtsCreateamenitiesInput = {
    set: string[]
  }

  export type yachtsUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type yachtsUpdateamenitiesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type leadsCreateinterest_typeInput = {
    set: string[]
  }

  export type leadsUpdateinterest_typeInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}