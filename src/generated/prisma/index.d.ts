
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Cohort
 * 
 */
export type Cohort = $Result.DefaultSelection<Prisma.$CohortPayload>
/**
 * Model Group
 * 
 */
export type Group = $Result.DefaultSelection<Prisma.$GroupPayload>
/**
 * Model GroupJoinRequest
 * 
 */
export type GroupJoinRequest = $Result.DefaultSelection<Prisma.$GroupJoinRequestPayload>
/**
 * Model GroupLog
 * 
 */
export type GroupLog = $Result.DefaultSelection<Prisma.$GroupLogPayload>
/**
 * Model GroupMember
 * 
 */
export type GroupMember = $Result.DefaultSelection<Prisma.$GroupMemberPayload>
/**
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>
/**
 * Model StudentCohort
 * 
 */
export type StudentCohort = $Result.DefaultSelection<Prisma.$StudentCohortPayload>
/**
 * Model StudentLog
 * 
 */
export type StudentLog = $Result.DefaultSelection<Prisma.$StudentLogPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const GroupStatus: {
  OPEN: 'OPEN',
  CLOSED: 'CLOSED',
  DELETED: 'DELETED'
};

export type GroupStatus = (typeof GroupStatus)[keyof typeof GroupStatus]


export const LogType: {
  AUDIT: 'AUDIT',
  ANNOUNCEMENT: 'ANNOUNCEMENT'
};

export type LogType = (typeof LogType)[keyof typeof LogType]


export const UserRole: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const UserStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  BANNED: 'BANNED',
  DELETED: 'DELETED'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]


export const RequestStatus: {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  REJECTED: 'REJECTED'
};

export type RequestStatus = (typeof RequestStatus)[keyof typeof RequestStatus]

}

export type GroupStatus = $Enums.GroupStatus

export const GroupStatus: typeof $Enums.GroupStatus

export type LogType = $Enums.LogType

export const LogType: typeof $Enums.LogType

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type UserStatus = $Enums.UserStatus

export const UserStatus: typeof $Enums.UserStatus

export type RequestStatus = $Enums.RequestStatus

export const RequestStatus: typeof $Enums.RequestStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Cohorts
 * const cohorts = await prisma.cohort.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Cohorts
   * const cohorts = await prisma.cohort.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.cohort`: Exposes CRUD operations for the **Cohort** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cohorts
    * const cohorts = await prisma.cohort.findMany()
    * ```
    */
  get cohort(): Prisma.CohortDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.group`: Exposes CRUD operations for the **Group** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Groups
    * const groups = await prisma.group.findMany()
    * ```
    */
  get group(): Prisma.GroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.groupJoinRequest`: Exposes CRUD operations for the **GroupJoinRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GroupJoinRequests
    * const groupJoinRequests = await prisma.groupJoinRequest.findMany()
    * ```
    */
  get groupJoinRequest(): Prisma.GroupJoinRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.groupLog`: Exposes CRUD operations for the **GroupLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GroupLogs
    * const groupLogs = await prisma.groupLog.findMany()
    * ```
    */
  get groupLog(): Prisma.GroupLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.groupMember`: Exposes CRUD operations for the **GroupMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GroupMembers
    * const groupMembers = await prisma.groupMember.findMany()
    * ```
    */
  get groupMember(): Prisma.GroupMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.studentCohort`: Exposes CRUD operations for the **StudentCohort** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudentCohorts
    * const studentCohorts = await prisma.studentCohort.findMany()
    * ```
    */
  get studentCohort(): Prisma.StudentCohortDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.studentLog`: Exposes CRUD operations for the **StudentLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudentLogs
    * const studentLogs = await prisma.studentLog.findMany()
    * ```
    */
  get studentLog(): Prisma.StudentLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export 

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export 

  /**
   * Prisma Errors
   */
  export 
  export 
  export 
  export 
  export 

  /**
   * Re-export of sql-template-tag
   */
  export 
  export 
  export 
  export 
  export 



  /**
   * Decimal.js
   */
  export 

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export 
  export 
  export 
  export 
  export 
  export 

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export 
  export 
  export 
  export 
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
  type IsObject<T> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends bigint
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T> = T extends Array<infer U> ? U : T

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

  export type ComputeRaw<A> = A extends Function ? A : {
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

  export type Extends<A1, A2> = [A1] extends [never]
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
    Cohort: 'Cohort',
    Group: 'Group',
    GroupJoinRequest: 'GroupJoinRequest',
    GroupLog: 'GroupLog',
    GroupMember: 'GroupMember',
    Student: 'Student',
    StudentCohort: 'StudentCohort',
    StudentLog: 'StudentLog',
    User: 'User'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "cohort" | "group" | "groupJoinRequest" | "groupLog" | "groupMember" | "student" | "studentCohort" | "studentLog" | "user"
      txIsolationLevel: never
    }
    model: {
      Cohort: {
        payload: Prisma.$CohortPayload<ExtArgs>
        fields: Prisma.CohortFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CohortFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CohortPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CohortFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CohortPayload>
          }
          findFirst: {
            args: Prisma.CohortFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CohortPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CohortFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CohortPayload>
          }
          findMany: {
            args: Prisma.CohortFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CohortPayload>[]
          }
          create: {
            args: Prisma.CohortCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CohortPayload>
          }
          createMany: {
            args: Prisma.CohortCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CohortDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CohortPayload>
          }
          update: {
            args: Prisma.CohortUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CohortPayload>
          }
          deleteMany: {
            args: Prisma.CohortDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CohortUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CohortUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CohortPayload>
          }
          aggregate: {
            args: Prisma.CohortAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCohort>
          }
          groupBy: {
            args: Prisma.CohortGroupByArgs<ExtArgs>
            result: $Utils.Optional<CohortGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.CohortFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.CohortAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.CohortCountArgs<ExtArgs>
            result: $Utils.Optional<CohortCountAggregateOutputType> | number
          }
        }
      }
      Group: {
        payload: Prisma.$GroupPayload<ExtArgs>
        fields: Prisma.GroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findFirst: {
            args: Prisma.GroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findMany: {
            args: Prisma.GroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          create: {
            args: Prisma.GroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          createMany: {
            args: Prisma.GroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          update: {
            args: Prisma.GroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          deleteMany: {
            args: Prisma.GroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          aggregate: {
            args: Prisma.GroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroup>
          }
          groupBy: {
            args: Prisma.GroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.GroupFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.GroupAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.GroupCountArgs<ExtArgs>
            result: $Utils.Optional<GroupCountAggregateOutputType> | number
          }
        }
      }
      GroupJoinRequest: {
        payload: Prisma.$GroupJoinRequestPayload<ExtArgs>
        fields: Prisma.GroupJoinRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupJoinRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupJoinRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupJoinRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupJoinRequestPayload>
          }
          findFirst: {
            args: Prisma.GroupJoinRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupJoinRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupJoinRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupJoinRequestPayload>
          }
          findMany: {
            args: Prisma.GroupJoinRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupJoinRequestPayload>[]
          }
          create: {
            args: Prisma.GroupJoinRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupJoinRequestPayload>
          }
          createMany: {
            args: Prisma.GroupJoinRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GroupJoinRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupJoinRequestPayload>
          }
          update: {
            args: Prisma.GroupJoinRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupJoinRequestPayload>
          }
          deleteMany: {
            args: Prisma.GroupJoinRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupJoinRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GroupJoinRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupJoinRequestPayload>
          }
          aggregate: {
            args: Prisma.GroupJoinRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroupJoinRequest>
          }
          groupBy: {
            args: Prisma.GroupJoinRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupJoinRequestGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.GroupJoinRequestFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.GroupJoinRequestAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.GroupJoinRequestCountArgs<ExtArgs>
            result: $Utils.Optional<GroupJoinRequestCountAggregateOutputType> | number
          }
        }
      }
      GroupLog: {
        payload: Prisma.$GroupLogPayload<ExtArgs>
        fields: Prisma.GroupLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupLogPayload>
          }
          findFirst: {
            args: Prisma.GroupLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupLogPayload>
          }
          findMany: {
            args: Prisma.GroupLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupLogPayload>[]
          }
          create: {
            args: Prisma.GroupLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupLogPayload>
          }
          createMany: {
            args: Prisma.GroupLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GroupLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupLogPayload>
          }
          update: {
            args: Prisma.GroupLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupLogPayload>
          }
          deleteMany: {
            args: Prisma.GroupLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GroupLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupLogPayload>
          }
          aggregate: {
            args: Prisma.GroupLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroupLog>
          }
          groupBy: {
            args: Prisma.GroupLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupLogGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.GroupLogFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.GroupLogAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.GroupLogCountArgs<ExtArgs>
            result: $Utils.Optional<GroupLogCountAggregateOutputType> | number
          }
        }
      }
      GroupMember: {
        payload: Prisma.$GroupMemberPayload<ExtArgs>
        fields: Prisma.GroupMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          findFirst: {
            args: Prisma.GroupMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          findMany: {
            args: Prisma.GroupMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>[]
          }
          create: {
            args: Prisma.GroupMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          createMany: {
            args: Prisma.GroupMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GroupMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          update: {
            args: Prisma.GroupMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          deleteMany: {
            args: Prisma.GroupMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GroupMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          aggregate: {
            args: Prisma.GroupMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroupMember>
          }
          groupBy: {
            args: Prisma.GroupMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupMemberGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.GroupMemberFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.GroupMemberAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.GroupMemberCountArgs<ExtArgs>
            result: $Utils.Optional<GroupMemberCountAggregateOutputType> | number
          }
        }
      }
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.StudentFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.StudentAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      StudentCohort: {
        payload: Prisma.$StudentCohortPayload<ExtArgs>
        fields: Prisma.StudentCohortFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentCohortFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentCohortPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentCohortFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentCohortPayload>
          }
          findFirst: {
            args: Prisma.StudentCohortFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentCohortPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentCohortFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentCohortPayload>
          }
          findMany: {
            args: Prisma.StudentCohortFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentCohortPayload>[]
          }
          create: {
            args: Prisma.StudentCohortCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentCohortPayload>
          }
          createMany: {
            args: Prisma.StudentCohortCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StudentCohortDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentCohortPayload>
          }
          update: {
            args: Prisma.StudentCohortUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentCohortPayload>
          }
          deleteMany: {
            args: Prisma.StudentCohortDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentCohortUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StudentCohortUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentCohortPayload>
          }
          aggregate: {
            args: Prisma.StudentCohortAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudentCohort>
          }
          groupBy: {
            args: Prisma.StudentCohortGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentCohortGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.StudentCohortFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.StudentCohortAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.StudentCohortCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCohortCountAggregateOutputType> | number
          }
        }
      }
      StudentLog: {
        payload: Prisma.$StudentLogPayload<ExtArgs>
        fields: Prisma.StudentLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentLogPayload>
          }
          findFirst: {
            args: Prisma.StudentLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentLogPayload>
          }
          findMany: {
            args: Prisma.StudentLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentLogPayload>[]
          }
          create: {
            args: Prisma.StudentLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentLogPayload>
          }
          createMany: {
            args: Prisma.StudentLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StudentLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentLogPayload>
          }
          update: {
            args: Prisma.StudentLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentLogPayload>
          }
          deleteMany: {
            args: Prisma.StudentLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StudentLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentLogPayload>
          }
          aggregate: {
            args: Prisma.StudentLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudentLog>
          }
          groupBy: {
            args: Prisma.StudentLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentLogGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.StudentLogFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.StudentLogAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.StudentLogCountArgs<ExtArgs>
            result: $Utils.Optional<StudentLogCountAggregateOutputType> | number
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
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
    }
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
  }
  export type GlobalOmitConfig = {
    cohort?: CohortOmit
    group?: GroupOmit
    groupJoinRequest?: GroupJoinRequestOmit
    groupLog?: GroupLogOmit
    groupMember?: GroupMemberOmit
    student?: StudentOmit
    studentCohort?: StudentCohortOmit
    studentLog?: StudentLogOmit
    user?: UserOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type CohortCountOutputType
   */

  export type CohortCountOutputType = {
    students: number
    groups: number
  }

  export type CohortCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | CohortCountOutputTypeCountStudentsArgs
    groups?: boolean | CohortCountOutputTypeCountGroupsArgs
  }

  // Custom InputTypes
  /**
   * CohortCountOutputType without action
   */
  export type CohortCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CohortCountOutputType
     */
    select?: CohortCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CohortCountOutputType without action
   */
  export type CohortCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentCohortWhereInput
  }

  /**
   * CohortCountOutputType without action
   */
  export type CohortCountOutputTypeCountGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
  }


  /**
   * Count Type GroupCountOutputType
   */

  export type GroupCountOutputType = {
    groupLogs: number
    members: number
    groupJoinRequests: number
  }

  export type GroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groupLogs?: boolean | GroupCountOutputTypeCountGroupLogsArgs
    members?: boolean | GroupCountOutputTypeCountMembersArgs
    groupJoinRequests?: boolean | GroupCountOutputTypeCountGroupJoinRequestsArgs
  }

  // Custom InputTypes
  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupCountOutputType
     */
    select?: GroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountGroupLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupLogWhereInput
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupMemberWhereInput
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountGroupJoinRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupJoinRequestWhereInput
  }


  /**
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    studentLogs: number
    cohorts: number
    groups: number
    adminOfGroups: number
    groupJoinRequests: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studentLogs?: boolean | StudentCountOutputTypeCountStudentLogsArgs
    cohorts?: boolean | StudentCountOutputTypeCountCohortsArgs
    groups?: boolean | StudentCountOutputTypeCountGroupsArgs
    adminOfGroups?: boolean | StudentCountOutputTypeCountAdminOfGroupsArgs
    groupJoinRequests?: boolean | StudentCountOutputTypeCountGroupJoinRequestsArgs
  }

  // Custom InputTypes
  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountStudentLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentLogWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountCohortsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentCohortWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupMemberWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountAdminOfGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountGroupJoinRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupJoinRequestWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Cohort
   */

  export type AggregateCohort = {
    _count: CohortCountAggregateOutputType | null
    _min: CohortMinAggregateOutputType | null
    _max: CohortMaxAggregateOutputType | null
  }

  export type CohortMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    startDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CohortMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    startDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CohortCountAggregateOutputType = {
    id: number
    name: number
    description: number
    startDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CohortMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    startDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CohortMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    startDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CohortCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    startDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CohortAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cohort to aggregate.
     */
    where?: CohortWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cohorts to fetch.
     */
    orderBy?: CohortOrderByWithRelationInput | CohortOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CohortWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cohorts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cohorts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cohorts
    **/
    _count?: true | CohortCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CohortMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CohortMaxAggregateInputType
  }

  export type GetCohortAggregateType<T extends CohortAggregateArgs> = {
        [P in keyof T & keyof AggregateCohort]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCohort[P]>
      : GetScalarType<T[P], AggregateCohort[P]>
  }




  export type CohortGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CohortWhereInput
    orderBy?: CohortOrderByWithAggregationInput | CohortOrderByWithAggregationInput[]
    by: CohortScalarFieldEnum[] | CohortScalarFieldEnum
    having?: CohortScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CohortCountAggregateInputType | true
    _min?: CohortMinAggregateInputType
    _max?: CohortMaxAggregateInputType
  }

  export type CohortGroupByOutputType = {
    id: string
    name: string
    description: string | null
    startDate: Date
    createdAt: Date
    updatedAt: Date
    _count: CohortCountAggregateOutputType | null
    _min: CohortMinAggregateOutputType | null
    _max: CohortMaxAggregateOutputType | null
  }

  type GetCohortGroupByPayload<T extends CohortGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CohortGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CohortGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CohortGroupByOutputType[P]>
            : GetScalarType<T[P], CohortGroupByOutputType[P]>
        }
      >
    >


  export type CohortSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    startDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    students?: boolean | Cohort$studentsArgs<ExtArgs>
    groups?: boolean | Cohort$groupsArgs<ExtArgs>
    _count?: boolean | CohortCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cohort"]>



  export type CohortSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    startDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CohortOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "startDate" | "createdAt" | "updatedAt", ExtArgs["result"]["cohort"]>
  export type CohortInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | Cohort$studentsArgs<ExtArgs>
    groups?: boolean | Cohort$groupsArgs<ExtArgs>
    _count?: boolean | CohortCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CohortPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cohort"
    objects: {
      students: Prisma.$StudentCohortPayload<ExtArgs>[]
      groups: Prisma.$GroupPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      startDate: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cohort"]>
    composites: {}
  }

  type CohortGetPayload<S extends boolean | null | undefined | CohortDefaultArgs> = $Result.GetResult<Prisma.$CohortPayload, S>

  type CohortCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CohortFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CohortCountAggregateInputType | true
    }

  export interface CohortDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cohort'], meta: { name: 'Cohort' } }
    /**
     * Find zero or one Cohort that matches the filter.
     * @param {CohortFindUniqueArgs} args - Arguments to find a Cohort
     * @example
     * // Get one Cohort
     * const cohort = await prisma.cohort.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CohortFindUniqueArgs>(args: SelectSubset<T, CohortFindUniqueArgs<ExtArgs>>): Prisma__CohortClient<$Result.GetResult<Prisma.$CohortPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cohort that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CohortFindUniqueOrThrowArgs} args - Arguments to find a Cohort
     * @example
     * // Get one Cohort
     * const cohort = await prisma.cohort.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CohortFindUniqueOrThrowArgs>(args: SelectSubset<T, CohortFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CohortClient<$Result.GetResult<Prisma.$CohortPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cohort that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CohortFindFirstArgs} args - Arguments to find a Cohort
     * @example
     * // Get one Cohort
     * const cohort = await prisma.cohort.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CohortFindFirstArgs>(args?: SelectSubset<T, CohortFindFirstArgs<ExtArgs>>): Prisma__CohortClient<$Result.GetResult<Prisma.$CohortPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cohort that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CohortFindFirstOrThrowArgs} args - Arguments to find a Cohort
     * @example
     * // Get one Cohort
     * const cohort = await prisma.cohort.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CohortFindFirstOrThrowArgs>(args?: SelectSubset<T, CohortFindFirstOrThrowArgs<ExtArgs>>): Prisma__CohortClient<$Result.GetResult<Prisma.$CohortPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cohorts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CohortFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cohorts
     * const cohorts = await prisma.cohort.findMany()
     * 
     * // Get first 10 Cohorts
     * const cohorts = await prisma.cohort.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cohortWithIdOnly = await prisma.cohort.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CohortFindManyArgs>(args?: SelectSubset<T, CohortFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CohortPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cohort.
     * @param {CohortCreateArgs} args - Arguments to create a Cohort.
     * @example
     * // Create one Cohort
     * const Cohort = await prisma.cohort.create({
     *   data: {
     *     // ... data to create a Cohort
     *   }
     * })
     * 
     */
    create<T extends CohortCreateArgs>(args: SelectSubset<T, CohortCreateArgs<ExtArgs>>): Prisma__CohortClient<$Result.GetResult<Prisma.$CohortPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cohorts.
     * @param {CohortCreateManyArgs} args - Arguments to create many Cohorts.
     * @example
     * // Create many Cohorts
     * const cohort = await prisma.cohort.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CohortCreateManyArgs>(args?: SelectSubset<T, CohortCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cohort.
     * @param {CohortDeleteArgs} args - Arguments to delete one Cohort.
     * @example
     * // Delete one Cohort
     * const Cohort = await prisma.cohort.delete({
     *   where: {
     *     // ... filter to delete one Cohort
     *   }
     * })
     * 
     */
    delete<T extends CohortDeleteArgs>(args: SelectSubset<T, CohortDeleteArgs<ExtArgs>>): Prisma__CohortClient<$Result.GetResult<Prisma.$CohortPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cohort.
     * @param {CohortUpdateArgs} args - Arguments to update one Cohort.
     * @example
     * // Update one Cohort
     * const cohort = await prisma.cohort.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CohortUpdateArgs>(args: SelectSubset<T, CohortUpdateArgs<ExtArgs>>): Prisma__CohortClient<$Result.GetResult<Prisma.$CohortPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cohorts.
     * @param {CohortDeleteManyArgs} args - Arguments to filter Cohorts to delete.
     * @example
     * // Delete a few Cohorts
     * const { count } = await prisma.cohort.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CohortDeleteManyArgs>(args?: SelectSubset<T, CohortDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cohorts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CohortUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cohorts
     * const cohort = await prisma.cohort.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CohortUpdateManyArgs>(args: SelectSubset<T, CohortUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cohort.
     * @param {CohortUpsertArgs} args - Arguments to update or create a Cohort.
     * @example
     * // Update or create a Cohort
     * const cohort = await prisma.cohort.upsert({
     *   create: {
     *     // ... data to create a Cohort
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cohort we want to update
     *   }
     * })
     */
    upsert<T extends CohortUpsertArgs>(args: SelectSubset<T, CohortUpsertArgs<ExtArgs>>): Prisma__CohortClient<$Result.GetResult<Prisma.$CohortPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cohorts that matches the filter.
     * @param {CohortFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const cohort = await prisma.cohort.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: CohortFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Cohort.
     * @param {CohortAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const cohort = await prisma.cohort.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: CohortAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Cohorts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CohortCountArgs} args - Arguments to filter Cohorts to count.
     * @example
     * // Count the number of Cohorts
     * const count = await prisma.cohort.count({
     *   where: {
     *     // ... the filter for the Cohorts we want to count
     *   }
     * })
    **/
    count<T extends CohortCountArgs>(
      args?: Subset<T, CohortCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CohortCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cohort.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CohortAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CohortAggregateArgs>(args: Subset<T, CohortAggregateArgs>): Prisma.PrismaPromise<GetCohortAggregateType<T>>

    /**
     * Group by Cohort.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CohortGroupByArgs} args - Group by arguments.
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
      T extends CohortGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CohortGroupByArgs['orderBy'] }
        : { orderBy?: CohortGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CohortGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCohortGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cohort model
   */
  readonly fields: CohortFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cohort.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CohortClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    students<T extends Cohort$studentsArgs<ExtArgs> = {}>(args?: Subset<T, Cohort$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentCohortPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    groups<T extends Cohort$groupsArgs<ExtArgs> = {}>(args?: Subset<T, Cohort$groupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Cohort model
   */
  interface CohortFieldRefs {
    readonly id: FieldRef<"Cohort", 'String'>
    readonly name: FieldRef<"Cohort", 'String'>
    readonly description: FieldRef<"Cohort", 'String'>
    readonly startDate: FieldRef<"Cohort", 'DateTime'>
    readonly createdAt: FieldRef<"Cohort", 'DateTime'>
    readonly updatedAt: FieldRef<"Cohort", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cohort findUnique
   */
  export type CohortFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cohort
     */
    select?: CohortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cohort
     */
    omit?: CohortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CohortInclude<ExtArgs> | null
    /**
     * Filter, which Cohort to fetch.
     */
    where: CohortWhereUniqueInput
  }

  /**
   * Cohort findUniqueOrThrow
   */
  export type CohortFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cohort
     */
    select?: CohortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cohort
     */
    omit?: CohortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CohortInclude<ExtArgs> | null
    /**
     * Filter, which Cohort to fetch.
     */
    where: CohortWhereUniqueInput
  }

  /**
   * Cohort findFirst
   */
  export type CohortFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cohort
     */
    select?: CohortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cohort
     */
    omit?: CohortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CohortInclude<ExtArgs> | null
    /**
     * Filter, which Cohort to fetch.
     */
    where?: CohortWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cohorts to fetch.
     */
    orderBy?: CohortOrderByWithRelationInput | CohortOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cohorts.
     */
    cursor?: CohortWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cohorts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cohorts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cohorts.
     */
    distinct?: CohortScalarFieldEnum | CohortScalarFieldEnum[]
  }

  /**
   * Cohort findFirstOrThrow
   */
  export type CohortFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cohort
     */
    select?: CohortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cohort
     */
    omit?: CohortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CohortInclude<ExtArgs> | null
    /**
     * Filter, which Cohort to fetch.
     */
    where?: CohortWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cohorts to fetch.
     */
    orderBy?: CohortOrderByWithRelationInput | CohortOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cohorts.
     */
    cursor?: CohortWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cohorts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cohorts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cohorts.
     */
    distinct?: CohortScalarFieldEnum | CohortScalarFieldEnum[]
  }

  /**
   * Cohort findMany
   */
  export type CohortFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cohort
     */
    select?: CohortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cohort
     */
    omit?: CohortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CohortInclude<ExtArgs> | null
    /**
     * Filter, which Cohorts to fetch.
     */
    where?: CohortWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cohorts to fetch.
     */
    orderBy?: CohortOrderByWithRelationInput | CohortOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cohorts.
     */
    cursor?: CohortWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cohorts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cohorts.
     */
    skip?: number
    distinct?: CohortScalarFieldEnum | CohortScalarFieldEnum[]
  }

  /**
   * Cohort create
   */
  export type CohortCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cohort
     */
    select?: CohortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cohort
     */
    omit?: CohortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CohortInclude<ExtArgs> | null
    /**
     * The data needed to create a Cohort.
     */
    data: XOR<CohortCreateInput, CohortUncheckedCreateInput>
  }

  /**
   * Cohort createMany
   */
  export type CohortCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cohorts.
     */
    data: CohortCreateManyInput | CohortCreateManyInput[]
  }

  /**
   * Cohort update
   */
  export type CohortUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cohort
     */
    select?: CohortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cohort
     */
    omit?: CohortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CohortInclude<ExtArgs> | null
    /**
     * The data needed to update a Cohort.
     */
    data: XOR<CohortUpdateInput, CohortUncheckedUpdateInput>
    /**
     * Choose, which Cohort to update.
     */
    where: CohortWhereUniqueInput
  }

  /**
   * Cohort updateMany
   */
  export type CohortUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cohorts.
     */
    data: XOR<CohortUpdateManyMutationInput, CohortUncheckedUpdateManyInput>
    /**
     * Filter which Cohorts to update
     */
    where?: CohortWhereInput
    /**
     * Limit how many Cohorts to update.
     */
    limit?: number
  }

  /**
   * Cohort upsert
   */
  export type CohortUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cohort
     */
    select?: CohortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cohort
     */
    omit?: CohortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CohortInclude<ExtArgs> | null
    /**
     * The filter to search for the Cohort to update in case it exists.
     */
    where: CohortWhereUniqueInput
    /**
     * In case the Cohort found by the `where` argument doesn't exist, create a new Cohort with this data.
     */
    create: XOR<CohortCreateInput, CohortUncheckedCreateInput>
    /**
     * In case the Cohort was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CohortUpdateInput, CohortUncheckedUpdateInput>
  }

  /**
   * Cohort delete
   */
  export type CohortDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cohort
     */
    select?: CohortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cohort
     */
    omit?: CohortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CohortInclude<ExtArgs> | null
    /**
     * Filter which Cohort to delete.
     */
    where: CohortWhereUniqueInput
  }

  /**
   * Cohort deleteMany
   */
  export type CohortDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cohorts to delete
     */
    where?: CohortWhereInput
    /**
     * Limit how many Cohorts to delete.
     */
    limit?: number
  }

  /**
   * Cohort findRaw
   */
  export type CohortFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Cohort aggregateRaw
   */
  export type CohortAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Cohort.students
   */
  export type Cohort$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCohort
     */
    select?: StudentCohortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentCohort
     */
    omit?: StudentCohortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentCohortInclude<ExtArgs> | null
    where?: StudentCohortWhereInput
    orderBy?: StudentCohortOrderByWithRelationInput | StudentCohortOrderByWithRelationInput[]
    cursor?: StudentCohortWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentCohortScalarFieldEnum | StudentCohortScalarFieldEnum[]
  }

  /**
   * Cohort.groups
   */
  export type Cohort$groupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    cursor?: GroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Cohort without action
   */
  export type CohortDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cohort
     */
    select?: CohortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cohort
     */
    omit?: CohortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CohortInclude<ExtArgs> | null
  }


  /**
   * Model Group
   */

  export type AggregateGroup = {
    _count: GroupCountAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  export type GroupMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    status: $Enums.GroupStatus | null
    adminId: string | null
    cohortId: string | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GroupMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    status: $Enums.GroupStatus | null
    adminId: string | null
    cohortId: string | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GroupCountAggregateOutputType = {
    id: number
    name: number
    description: number
    status: number
    adminId: number
    cohortId: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GroupMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    status?: true
    adminId?: true
    cohortId?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GroupMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    status?: true
    adminId?: true
    cohortId?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GroupCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    status?: true
    adminId?: true
    cohortId?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Group to aggregate.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Groups
    **/
    _count?: true | GroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMaxAggregateInputType
  }

  export type GetGroupAggregateType<T extends GroupAggregateArgs> = {
        [P in keyof T & keyof AggregateGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroup[P]>
      : GetScalarType<T[P], AggregateGroup[P]>
  }




  export type GroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithAggregationInput | GroupOrderByWithAggregationInput[]
    by: GroupScalarFieldEnum[] | GroupScalarFieldEnum
    having?: GroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupCountAggregateInputType | true
    _min?: GroupMinAggregateInputType
    _max?: GroupMaxAggregateInputType
  }

  export type GroupGroupByOutputType = {
    id: string
    name: string
    description: string | null
    status: $Enums.GroupStatus
    adminId: string | null
    cohortId: string | null
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: GroupCountAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  type GetGroupGroupByPayload<T extends GroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupGroupByOutputType[P]>
            : GetScalarType<T[P], GroupGroupByOutputType[P]>
        }
      >
    >


  export type GroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    adminId?: boolean
    cohortId?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    groupLogs?: boolean | Group$groupLogsArgs<ExtArgs>
    admin?: boolean | Group$adminArgs<ExtArgs>
    members?: boolean | Group$membersArgs<ExtArgs>
    cohort?: boolean | Group$cohortArgs<ExtArgs>
    groupJoinRequests?: boolean | Group$groupJoinRequestsArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>



  export type GroupSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    adminId?: boolean
    cohortId?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "status" | "adminId" | "cohortId" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["group"]>
  export type GroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groupLogs?: boolean | Group$groupLogsArgs<ExtArgs>
    admin?: boolean | Group$adminArgs<ExtArgs>
    members?: boolean | Group$membersArgs<ExtArgs>
    cohort?: boolean | Group$cohortArgs<ExtArgs>
    groupJoinRequests?: boolean | Group$groupJoinRequestsArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $GroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Group"
    objects: {
      groupLogs: Prisma.$GroupLogPayload<ExtArgs>[]
      admin: Prisma.$StudentPayload<ExtArgs> | null
      members: Prisma.$GroupMemberPayload<ExtArgs>[]
      cohort: Prisma.$CohortPayload<ExtArgs> | null
      groupJoinRequests: Prisma.$GroupJoinRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      status: $Enums.GroupStatus
      adminId: string | null
      cohortId: string | null
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["group"]>
    composites: {}
  }

  type GroupGetPayload<S extends boolean | null | undefined | GroupDefaultArgs> = $Result.GetResult<Prisma.$GroupPayload, S>

  type GroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupCountAggregateInputType | true
    }

  export interface GroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Group'], meta: { name: 'Group' } }
    /**
     * Find zero or one Group that matches the filter.
     * @param {GroupFindUniqueArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupFindUniqueArgs>(args: SelectSubset<T, GroupFindUniqueArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Group that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupFindUniqueOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupFindFirstArgs>(args?: SelectSubset<T, GroupFindFirstArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Groups
     * const groups = await prisma.group.findMany()
     * 
     * // Get first 10 Groups
     * const groups = await prisma.group.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupWithIdOnly = await prisma.group.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupFindManyArgs>(args?: SelectSubset<T, GroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Group.
     * @param {GroupCreateArgs} args - Arguments to create a Group.
     * @example
     * // Create one Group
     * const Group = await prisma.group.create({
     *   data: {
     *     // ... data to create a Group
     *   }
     * })
     * 
     */
    create<T extends GroupCreateArgs>(args: SelectSubset<T, GroupCreateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Groups.
     * @param {GroupCreateManyArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupCreateManyArgs>(args?: SelectSubset<T, GroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Group.
     * @param {GroupDeleteArgs} args - Arguments to delete one Group.
     * @example
     * // Delete one Group
     * const Group = await prisma.group.delete({
     *   where: {
     *     // ... filter to delete one Group
     *   }
     * })
     * 
     */
    delete<T extends GroupDeleteArgs>(args: SelectSubset<T, GroupDeleteArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Group.
     * @param {GroupUpdateArgs} args - Arguments to update one Group.
     * @example
     * // Update one Group
     * const group = await prisma.group.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupUpdateArgs>(args: SelectSubset<T, GroupUpdateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Groups.
     * @param {GroupDeleteManyArgs} args - Arguments to filter Groups to delete.
     * @example
     * // Delete a few Groups
     * const { count } = await prisma.group.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupDeleteManyArgs>(args?: SelectSubset<T, GroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupUpdateManyArgs>(args: SelectSubset<T, GroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Group.
     * @param {GroupUpsertArgs} args - Arguments to update or create a Group.
     * @example
     * // Update or create a Group
     * const group = await prisma.group.upsert({
     *   create: {
     *     // ... data to create a Group
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Group we want to update
     *   }
     * })
     */
    upsert<T extends GroupUpsertArgs>(args: SelectSubset<T, GroupUpsertArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Groups that matches the filter.
     * @param {GroupFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const group = await prisma.group.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: GroupFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Group.
     * @param {GroupAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const group = await prisma.group.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: GroupAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupCountArgs} args - Arguments to filter Groups to count.
     * @example
     * // Count the number of Groups
     * const count = await prisma.group.count({
     *   where: {
     *     // ... the filter for the Groups we want to count
     *   }
     * })
    **/
    count<T extends GroupCountArgs>(
      args?: Subset<T, GroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GroupAggregateArgs>(args: Subset<T, GroupAggregateArgs>): Prisma.PrismaPromise<GetGroupAggregateType<T>>

    /**
     * Group by Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupGroupByArgs} args - Group by arguments.
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
      T extends GroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupGroupByArgs['orderBy'] }
        : { orderBy?: GroupGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Group model
   */
  readonly fields: GroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Group.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    groupLogs<T extends Group$groupLogsArgs<ExtArgs> = {}>(args?: Subset<T, Group$groupLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    admin<T extends Group$adminArgs<ExtArgs> = {}>(args?: Subset<T, Group$adminArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    members<T extends Group$membersArgs<ExtArgs> = {}>(args?: Subset<T, Group$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cohort<T extends Group$cohortArgs<ExtArgs> = {}>(args?: Subset<T, Group$cohortArgs<ExtArgs>>): Prisma__CohortClient<$Result.GetResult<Prisma.$CohortPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    groupJoinRequests<T extends Group$groupJoinRequestsArgs<ExtArgs> = {}>(args?: Subset<T, Group$groupJoinRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupJoinRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Group model
   */
  interface GroupFieldRefs {
    readonly id: FieldRef<"Group", 'String'>
    readonly name: FieldRef<"Group", 'String'>
    readonly description: FieldRef<"Group", 'String'>
    readonly status: FieldRef<"Group", 'GroupStatus'>
    readonly adminId: FieldRef<"Group", 'String'>
    readonly cohortId: FieldRef<"Group", 'String'>
    readonly deletedAt: FieldRef<"Group", 'DateTime'>
    readonly createdAt: FieldRef<"Group", 'DateTime'>
    readonly updatedAt: FieldRef<"Group", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Group findUnique
   */
  export type GroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findUniqueOrThrow
   */
  export type GroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findFirst
   */
  export type GroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findFirstOrThrow
   */
  export type GroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findMany
   */
  export type GroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Groups to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group create
   */
  export type GroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to create a Group.
     */
    data: XOR<GroupCreateInput, GroupUncheckedCreateInput>
  }

  /**
   * Group createMany
   */
  export type GroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
  }

  /**
   * Group update
   */
  export type GroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to update a Group.
     */
    data: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
    /**
     * Choose, which Group to update.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group updateMany
   */
  export type GroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to update.
     */
    limit?: number
  }

  /**
   * Group upsert
   */
  export type GroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The filter to search for the Group to update in case it exists.
     */
    where: GroupWhereUniqueInput
    /**
     * In case the Group found by the `where` argument doesn't exist, create a new Group with this data.
     */
    create: XOR<GroupCreateInput, GroupUncheckedCreateInput>
    /**
     * In case the Group was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
  }

  /**
   * Group delete
   */
  export type GroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter which Group to delete.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group deleteMany
   */
  export type GroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Groups to delete
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to delete.
     */
    limit?: number
  }

  /**
   * Group findRaw
   */
  export type GroupFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Group aggregateRaw
   */
  export type GroupAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Group.groupLogs
   */
  export type Group$groupLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupLog
     */
    select?: GroupLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupLog
     */
    omit?: GroupLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupLogInclude<ExtArgs> | null
    where?: GroupLogWhereInput
    orderBy?: GroupLogOrderByWithRelationInput | GroupLogOrderByWithRelationInput[]
    cursor?: GroupLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupLogScalarFieldEnum | GroupLogScalarFieldEnum[]
  }

  /**
   * Group.admin
   */
  export type Group$adminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
  }

  /**
   * Group.members
   */
  export type Group$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    where?: GroupMemberWhereInput
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    cursor?: GroupMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupMemberScalarFieldEnum | GroupMemberScalarFieldEnum[]
  }

  /**
   * Group.cohort
   */
  export type Group$cohortArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cohort
     */
    select?: CohortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cohort
     */
    omit?: CohortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CohortInclude<ExtArgs> | null
    where?: CohortWhereInput
  }

  /**
   * Group.groupJoinRequests
   */
  export type Group$groupJoinRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupJoinRequest
     */
    select?: GroupJoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupJoinRequest
     */
    omit?: GroupJoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupJoinRequestInclude<ExtArgs> | null
    where?: GroupJoinRequestWhereInput
    orderBy?: GroupJoinRequestOrderByWithRelationInput | GroupJoinRequestOrderByWithRelationInput[]
    cursor?: GroupJoinRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupJoinRequestScalarFieldEnum | GroupJoinRequestScalarFieldEnum[]
  }

  /**
   * Group without action
   */
  export type GroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
  }


  /**
   * Model GroupJoinRequest
   */

  export type AggregateGroupJoinRequest = {
    _count: GroupJoinRequestCountAggregateOutputType | null
    _min: GroupJoinRequestMinAggregateOutputType | null
    _max: GroupJoinRequestMaxAggregateOutputType | null
  }

  export type GroupJoinRequestMinAggregateOutputType = {
    id: string | null
    status: $Enums.RequestStatus | null
    reason: string | null
    userId: string | null
    groupId: string | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GroupJoinRequestMaxAggregateOutputType = {
    id: string | null
    status: $Enums.RequestStatus | null
    reason: string | null
    userId: string | null
    groupId: string | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GroupJoinRequestCountAggregateOutputType = {
    id: number
    status: number
    reason: number
    userId: number
    groupId: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GroupJoinRequestMinAggregateInputType = {
    id?: true
    status?: true
    reason?: true
    userId?: true
    groupId?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GroupJoinRequestMaxAggregateInputType = {
    id?: true
    status?: true
    reason?: true
    userId?: true
    groupId?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GroupJoinRequestCountAggregateInputType = {
    id?: true
    status?: true
    reason?: true
    userId?: true
    groupId?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GroupJoinRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupJoinRequest to aggregate.
     */
    where?: GroupJoinRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupJoinRequests to fetch.
     */
    orderBy?: GroupJoinRequestOrderByWithRelationInput | GroupJoinRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupJoinRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupJoinRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupJoinRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GroupJoinRequests
    **/
    _count?: true | GroupJoinRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupJoinRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupJoinRequestMaxAggregateInputType
  }

  export type GetGroupJoinRequestAggregateType<T extends GroupJoinRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateGroupJoinRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroupJoinRequest[P]>
      : GetScalarType<T[P], AggregateGroupJoinRequest[P]>
  }




  export type GroupJoinRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupJoinRequestWhereInput
    orderBy?: GroupJoinRequestOrderByWithAggregationInput | GroupJoinRequestOrderByWithAggregationInput[]
    by: GroupJoinRequestScalarFieldEnum[] | GroupJoinRequestScalarFieldEnum
    having?: GroupJoinRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupJoinRequestCountAggregateInputType | true
    _min?: GroupJoinRequestMinAggregateInputType
    _max?: GroupJoinRequestMaxAggregateInputType
  }

  export type GroupJoinRequestGroupByOutputType = {
    id: string
    status: $Enums.RequestStatus
    reason: string
    userId: string
    groupId: string
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: GroupJoinRequestCountAggregateOutputType | null
    _min: GroupJoinRequestMinAggregateOutputType | null
    _max: GroupJoinRequestMaxAggregateOutputType | null
  }

  type GetGroupJoinRequestGroupByPayload<T extends GroupJoinRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupJoinRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupJoinRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupJoinRequestGroupByOutputType[P]>
            : GetScalarType<T[P], GroupJoinRequestGroupByOutputType[P]>
        }
      >
    >


  export type GroupJoinRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    reason?: boolean
    userId?: boolean
    groupId?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | GroupJoinRequest$userArgs<ExtArgs>
    group?: boolean | GroupJoinRequest$groupArgs<ExtArgs>
  }, ExtArgs["result"]["groupJoinRequest"]>



  export type GroupJoinRequestSelectScalar = {
    id?: boolean
    status?: boolean
    reason?: boolean
    userId?: boolean
    groupId?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GroupJoinRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "reason" | "userId" | "groupId" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["groupJoinRequest"]>
  export type GroupJoinRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | GroupJoinRequest$userArgs<ExtArgs>
    group?: boolean | GroupJoinRequest$groupArgs<ExtArgs>
  }

  export type $GroupJoinRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GroupJoinRequest"
    objects: {
      user: Prisma.$StudentPayload<ExtArgs> | null
      group: Prisma.$GroupPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      status: $Enums.RequestStatus
      reason: string
      userId: string
      groupId: string
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["groupJoinRequest"]>
    composites: {}
  }

  type GroupJoinRequestGetPayload<S extends boolean | null | undefined | GroupJoinRequestDefaultArgs> = $Result.GetResult<Prisma.$GroupJoinRequestPayload, S>

  type GroupJoinRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupJoinRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupJoinRequestCountAggregateInputType | true
    }

  export interface GroupJoinRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GroupJoinRequest'], meta: { name: 'GroupJoinRequest' } }
    /**
     * Find zero or one GroupJoinRequest that matches the filter.
     * @param {GroupJoinRequestFindUniqueArgs} args - Arguments to find a GroupJoinRequest
     * @example
     * // Get one GroupJoinRequest
     * const groupJoinRequest = await prisma.groupJoinRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupJoinRequestFindUniqueArgs>(args: SelectSubset<T, GroupJoinRequestFindUniqueArgs<ExtArgs>>): Prisma__GroupJoinRequestClient<$Result.GetResult<Prisma.$GroupJoinRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GroupJoinRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupJoinRequestFindUniqueOrThrowArgs} args - Arguments to find a GroupJoinRequest
     * @example
     * // Get one GroupJoinRequest
     * const groupJoinRequest = await prisma.groupJoinRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupJoinRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupJoinRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupJoinRequestClient<$Result.GetResult<Prisma.$GroupJoinRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupJoinRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupJoinRequestFindFirstArgs} args - Arguments to find a GroupJoinRequest
     * @example
     * // Get one GroupJoinRequest
     * const groupJoinRequest = await prisma.groupJoinRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupJoinRequestFindFirstArgs>(args?: SelectSubset<T, GroupJoinRequestFindFirstArgs<ExtArgs>>): Prisma__GroupJoinRequestClient<$Result.GetResult<Prisma.$GroupJoinRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupJoinRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupJoinRequestFindFirstOrThrowArgs} args - Arguments to find a GroupJoinRequest
     * @example
     * // Get one GroupJoinRequest
     * const groupJoinRequest = await prisma.groupJoinRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupJoinRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupJoinRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupJoinRequestClient<$Result.GetResult<Prisma.$GroupJoinRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GroupJoinRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupJoinRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GroupJoinRequests
     * const groupJoinRequests = await prisma.groupJoinRequest.findMany()
     * 
     * // Get first 10 GroupJoinRequests
     * const groupJoinRequests = await prisma.groupJoinRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupJoinRequestWithIdOnly = await prisma.groupJoinRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupJoinRequestFindManyArgs>(args?: SelectSubset<T, GroupJoinRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupJoinRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GroupJoinRequest.
     * @param {GroupJoinRequestCreateArgs} args - Arguments to create a GroupJoinRequest.
     * @example
     * // Create one GroupJoinRequest
     * const GroupJoinRequest = await prisma.groupJoinRequest.create({
     *   data: {
     *     // ... data to create a GroupJoinRequest
     *   }
     * })
     * 
     */
    create<T extends GroupJoinRequestCreateArgs>(args: SelectSubset<T, GroupJoinRequestCreateArgs<ExtArgs>>): Prisma__GroupJoinRequestClient<$Result.GetResult<Prisma.$GroupJoinRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GroupJoinRequests.
     * @param {GroupJoinRequestCreateManyArgs} args - Arguments to create many GroupJoinRequests.
     * @example
     * // Create many GroupJoinRequests
     * const groupJoinRequest = await prisma.groupJoinRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupJoinRequestCreateManyArgs>(args?: SelectSubset<T, GroupJoinRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GroupJoinRequest.
     * @param {GroupJoinRequestDeleteArgs} args - Arguments to delete one GroupJoinRequest.
     * @example
     * // Delete one GroupJoinRequest
     * const GroupJoinRequest = await prisma.groupJoinRequest.delete({
     *   where: {
     *     // ... filter to delete one GroupJoinRequest
     *   }
     * })
     * 
     */
    delete<T extends GroupJoinRequestDeleteArgs>(args: SelectSubset<T, GroupJoinRequestDeleteArgs<ExtArgs>>): Prisma__GroupJoinRequestClient<$Result.GetResult<Prisma.$GroupJoinRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GroupJoinRequest.
     * @param {GroupJoinRequestUpdateArgs} args - Arguments to update one GroupJoinRequest.
     * @example
     * // Update one GroupJoinRequest
     * const groupJoinRequest = await prisma.groupJoinRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupJoinRequestUpdateArgs>(args: SelectSubset<T, GroupJoinRequestUpdateArgs<ExtArgs>>): Prisma__GroupJoinRequestClient<$Result.GetResult<Prisma.$GroupJoinRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GroupJoinRequests.
     * @param {GroupJoinRequestDeleteManyArgs} args - Arguments to filter GroupJoinRequests to delete.
     * @example
     * // Delete a few GroupJoinRequests
     * const { count } = await prisma.groupJoinRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupJoinRequestDeleteManyArgs>(args?: SelectSubset<T, GroupJoinRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupJoinRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupJoinRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GroupJoinRequests
     * const groupJoinRequest = await prisma.groupJoinRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupJoinRequestUpdateManyArgs>(args: SelectSubset<T, GroupJoinRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GroupJoinRequest.
     * @param {GroupJoinRequestUpsertArgs} args - Arguments to update or create a GroupJoinRequest.
     * @example
     * // Update or create a GroupJoinRequest
     * const groupJoinRequest = await prisma.groupJoinRequest.upsert({
     *   create: {
     *     // ... data to create a GroupJoinRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GroupJoinRequest we want to update
     *   }
     * })
     */
    upsert<T extends GroupJoinRequestUpsertArgs>(args: SelectSubset<T, GroupJoinRequestUpsertArgs<ExtArgs>>): Prisma__GroupJoinRequestClient<$Result.GetResult<Prisma.$GroupJoinRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GroupJoinRequests that matches the filter.
     * @param {GroupJoinRequestFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const groupJoinRequest = await prisma.groupJoinRequest.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: GroupJoinRequestFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a GroupJoinRequest.
     * @param {GroupJoinRequestAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const groupJoinRequest = await prisma.groupJoinRequest.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: GroupJoinRequestAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of GroupJoinRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupJoinRequestCountArgs} args - Arguments to filter GroupJoinRequests to count.
     * @example
     * // Count the number of GroupJoinRequests
     * const count = await prisma.groupJoinRequest.count({
     *   where: {
     *     // ... the filter for the GroupJoinRequests we want to count
     *   }
     * })
    **/
    count<T extends GroupJoinRequestCountArgs>(
      args?: Subset<T, GroupJoinRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupJoinRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GroupJoinRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupJoinRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GroupJoinRequestAggregateArgs>(args: Subset<T, GroupJoinRequestAggregateArgs>): Prisma.PrismaPromise<GetGroupJoinRequestAggregateType<T>>

    /**
     * Group by GroupJoinRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupJoinRequestGroupByArgs} args - Group by arguments.
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
      T extends GroupJoinRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupJoinRequestGroupByArgs['orderBy'] }
        : { orderBy?: GroupJoinRequestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GroupJoinRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupJoinRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GroupJoinRequest model
   */
  readonly fields: GroupJoinRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GroupJoinRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupJoinRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends GroupJoinRequest$userArgs<ExtArgs> = {}>(args?: Subset<T, GroupJoinRequest$userArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    group<T extends GroupJoinRequest$groupArgs<ExtArgs> = {}>(args?: Subset<T, GroupJoinRequest$groupArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the GroupJoinRequest model
   */
  interface GroupJoinRequestFieldRefs {
    readonly id: FieldRef<"GroupJoinRequest", 'String'>
    readonly status: FieldRef<"GroupJoinRequest", 'RequestStatus'>
    readonly reason: FieldRef<"GroupJoinRequest", 'String'>
    readonly userId: FieldRef<"GroupJoinRequest", 'String'>
    readonly groupId: FieldRef<"GroupJoinRequest", 'String'>
    readonly deletedAt: FieldRef<"GroupJoinRequest", 'DateTime'>
    readonly createdAt: FieldRef<"GroupJoinRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"GroupJoinRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GroupJoinRequest findUnique
   */
  export type GroupJoinRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupJoinRequest
     */
    select?: GroupJoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupJoinRequest
     */
    omit?: GroupJoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupJoinRequestInclude<ExtArgs> | null
    /**
     * Filter, which GroupJoinRequest to fetch.
     */
    where: GroupJoinRequestWhereUniqueInput
  }

  /**
   * GroupJoinRequest findUniqueOrThrow
   */
  export type GroupJoinRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupJoinRequest
     */
    select?: GroupJoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupJoinRequest
     */
    omit?: GroupJoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupJoinRequestInclude<ExtArgs> | null
    /**
     * Filter, which GroupJoinRequest to fetch.
     */
    where: GroupJoinRequestWhereUniqueInput
  }

  /**
   * GroupJoinRequest findFirst
   */
  export type GroupJoinRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupJoinRequest
     */
    select?: GroupJoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupJoinRequest
     */
    omit?: GroupJoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupJoinRequestInclude<ExtArgs> | null
    /**
     * Filter, which GroupJoinRequest to fetch.
     */
    where?: GroupJoinRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupJoinRequests to fetch.
     */
    orderBy?: GroupJoinRequestOrderByWithRelationInput | GroupJoinRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupJoinRequests.
     */
    cursor?: GroupJoinRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupJoinRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupJoinRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupJoinRequests.
     */
    distinct?: GroupJoinRequestScalarFieldEnum | GroupJoinRequestScalarFieldEnum[]
  }

  /**
   * GroupJoinRequest findFirstOrThrow
   */
  export type GroupJoinRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupJoinRequest
     */
    select?: GroupJoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupJoinRequest
     */
    omit?: GroupJoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupJoinRequestInclude<ExtArgs> | null
    /**
     * Filter, which GroupJoinRequest to fetch.
     */
    where?: GroupJoinRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupJoinRequests to fetch.
     */
    orderBy?: GroupJoinRequestOrderByWithRelationInput | GroupJoinRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupJoinRequests.
     */
    cursor?: GroupJoinRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupJoinRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupJoinRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupJoinRequests.
     */
    distinct?: GroupJoinRequestScalarFieldEnum | GroupJoinRequestScalarFieldEnum[]
  }

  /**
   * GroupJoinRequest findMany
   */
  export type GroupJoinRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupJoinRequest
     */
    select?: GroupJoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupJoinRequest
     */
    omit?: GroupJoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupJoinRequestInclude<ExtArgs> | null
    /**
     * Filter, which GroupJoinRequests to fetch.
     */
    where?: GroupJoinRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupJoinRequests to fetch.
     */
    orderBy?: GroupJoinRequestOrderByWithRelationInput | GroupJoinRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GroupJoinRequests.
     */
    cursor?: GroupJoinRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupJoinRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupJoinRequests.
     */
    skip?: number
    distinct?: GroupJoinRequestScalarFieldEnum | GroupJoinRequestScalarFieldEnum[]
  }

  /**
   * GroupJoinRequest create
   */
  export type GroupJoinRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupJoinRequest
     */
    select?: GroupJoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupJoinRequest
     */
    omit?: GroupJoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupJoinRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a GroupJoinRequest.
     */
    data: XOR<GroupJoinRequestCreateInput, GroupJoinRequestUncheckedCreateInput>
  }

  /**
   * GroupJoinRequest createMany
   */
  export type GroupJoinRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GroupJoinRequests.
     */
    data: GroupJoinRequestCreateManyInput | GroupJoinRequestCreateManyInput[]
  }

  /**
   * GroupJoinRequest update
   */
  export type GroupJoinRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupJoinRequest
     */
    select?: GroupJoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupJoinRequest
     */
    omit?: GroupJoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupJoinRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a GroupJoinRequest.
     */
    data: XOR<GroupJoinRequestUpdateInput, GroupJoinRequestUncheckedUpdateInput>
    /**
     * Choose, which GroupJoinRequest to update.
     */
    where: GroupJoinRequestWhereUniqueInput
  }

  /**
   * GroupJoinRequest updateMany
   */
  export type GroupJoinRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GroupJoinRequests.
     */
    data: XOR<GroupJoinRequestUpdateManyMutationInput, GroupJoinRequestUncheckedUpdateManyInput>
    /**
     * Filter which GroupJoinRequests to update
     */
    where?: GroupJoinRequestWhereInput
    /**
     * Limit how many GroupJoinRequests to update.
     */
    limit?: number
  }

  /**
   * GroupJoinRequest upsert
   */
  export type GroupJoinRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupJoinRequest
     */
    select?: GroupJoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupJoinRequest
     */
    omit?: GroupJoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupJoinRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the GroupJoinRequest to update in case it exists.
     */
    where: GroupJoinRequestWhereUniqueInput
    /**
     * In case the GroupJoinRequest found by the `where` argument doesn't exist, create a new GroupJoinRequest with this data.
     */
    create: XOR<GroupJoinRequestCreateInput, GroupJoinRequestUncheckedCreateInput>
    /**
     * In case the GroupJoinRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupJoinRequestUpdateInput, GroupJoinRequestUncheckedUpdateInput>
  }

  /**
   * GroupJoinRequest delete
   */
  export type GroupJoinRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupJoinRequest
     */
    select?: GroupJoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupJoinRequest
     */
    omit?: GroupJoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupJoinRequestInclude<ExtArgs> | null
    /**
     * Filter which GroupJoinRequest to delete.
     */
    where: GroupJoinRequestWhereUniqueInput
  }

  /**
   * GroupJoinRequest deleteMany
   */
  export type GroupJoinRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupJoinRequests to delete
     */
    where?: GroupJoinRequestWhereInput
    /**
     * Limit how many GroupJoinRequests to delete.
     */
    limit?: number
  }

  /**
   * GroupJoinRequest findRaw
   */
  export type GroupJoinRequestFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * GroupJoinRequest aggregateRaw
   */
  export type GroupJoinRequestAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * GroupJoinRequest.user
   */
  export type GroupJoinRequest$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
  }

  /**
   * GroupJoinRequest.group
   */
  export type GroupJoinRequest$groupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    where?: GroupWhereInput
  }

  /**
   * GroupJoinRequest without action
   */
  export type GroupJoinRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupJoinRequest
     */
    select?: GroupJoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupJoinRequest
     */
    omit?: GroupJoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupJoinRequestInclude<ExtArgs> | null
  }


  /**
   * Model GroupLog
   */

  export type AggregateGroupLog = {
    _count: GroupLogCountAggregateOutputType | null
    _min: GroupLogMinAggregateOutputType | null
    _max: GroupLogMaxAggregateOutputType | null
  }

  export type GroupLogMinAggregateOutputType = {
    id: string | null
    content: string | null
    type: $Enums.LogType | null
    groupId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GroupLogMaxAggregateOutputType = {
    id: string | null
    content: string | null
    type: $Enums.LogType | null
    groupId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GroupLogCountAggregateOutputType = {
    id: number
    content: number
    type: number
    groupId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GroupLogMinAggregateInputType = {
    id?: true
    content?: true
    type?: true
    groupId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GroupLogMaxAggregateInputType = {
    id?: true
    content?: true
    type?: true
    groupId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GroupLogCountAggregateInputType = {
    id?: true
    content?: true
    type?: true
    groupId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GroupLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupLog to aggregate.
     */
    where?: GroupLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupLogs to fetch.
     */
    orderBy?: GroupLogOrderByWithRelationInput | GroupLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GroupLogs
    **/
    _count?: true | GroupLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupLogMaxAggregateInputType
  }

  export type GetGroupLogAggregateType<T extends GroupLogAggregateArgs> = {
        [P in keyof T & keyof AggregateGroupLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroupLog[P]>
      : GetScalarType<T[P], AggregateGroupLog[P]>
  }




  export type GroupLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupLogWhereInput
    orderBy?: GroupLogOrderByWithAggregationInput | GroupLogOrderByWithAggregationInput[]
    by: GroupLogScalarFieldEnum[] | GroupLogScalarFieldEnum
    having?: GroupLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupLogCountAggregateInputType | true
    _min?: GroupLogMinAggregateInputType
    _max?: GroupLogMaxAggregateInputType
  }

  export type GroupLogGroupByOutputType = {
    id: string
    content: string
    type: $Enums.LogType
    groupId: string
    createdAt: Date
    updatedAt: Date
    _count: GroupLogCountAggregateOutputType | null
    _min: GroupLogMinAggregateOutputType | null
    _max: GroupLogMaxAggregateOutputType | null
  }

  type GetGroupLogGroupByPayload<T extends GroupLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupLogGroupByOutputType[P]>
            : GetScalarType<T[P], GroupLogGroupByOutputType[P]>
        }
      >
    >


  export type GroupLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    type?: boolean
    groupId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    group?: boolean | GroupLog$groupArgs<ExtArgs>
  }, ExtArgs["result"]["groupLog"]>



  export type GroupLogSelectScalar = {
    id?: boolean
    content?: boolean
    type?: boolean
    groupId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GroupLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "type" | "groupId" | "createdAt" | "updatedAt", ExtArgs["result"]["groupLog"]>
  export type GroupLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupLog$groupArgs<ExtArgs>
  }

  export type $GroupLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GroupLog"
    objects: {
      group: Prisma.$GroupPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      type: $Enums.LogType
      groupId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["groupLog"]>
    composites: {}
  }

  type GroupLogGetPayload<S extends boolean | null | undefined | GroupLogDefaultArgs> = $Result.GetResult<Prisma.$GroupLogPayload, S>

  type GroupLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupLogCountAggregateInputType | true
    }

  export interface GroupLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GroupLog'], meta: { name: 'GroupLog' } }
    /**
     * Find zero or one GroupLog that matches the filter.
     * @param {GroupLogFindUniqueArgs} args - Arguments to find a GroupLog
     * @example
     * // Get one GroupLog
     * const groupLog = await prisma.groupLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupLogFindUniqueArgs>(args: SelectSubset<T, GroupLogFindUniqueArgs<ExtArgs>>): Prisma__GroupLogClient<$Result.GetResult<Prisma.$GroupLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GroupLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupLogFindUniqueOrThrowArgs} args - Arguments to find a GroupLog
     * @example
     * // Get one GroupLog
     * const groupLog = await prisma.groupLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupLogFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupLogClient<$Result.GetResult<Prisma.$GroupLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupLogFindFirstArgs} args - Arguments to find a GroupLog
     * @example
     * // Get one GroupLog
     * const groupLog = await prisma.groupLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupLogFindFirstArgs>(args?: SelectSubset<T, GroupLogFindFirstArgs<ExtArgs>>): Prisma__GroupLogClient<$Result.GetResult<Prisma.$GroupLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupLogFindFirstOrThrowArgs} args - Arguments to find a GroupLog
     * @example
     * // Get one GroupLog
     * const groupLog = await prisma.groupLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupLogFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupLogClient<$Result.GetResult<Prisma.$GroupLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GroupLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GroupLogs
     * const groupLogs = await prisma.groupLog.findMany()
     * 
     * // Get first 10 GroupLogs
     * const groupLogs = await prisma.groupLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupLogWithIdOnly = await prisma.groupLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupLogFindManyArgs>(args?: SelectSubset<T, GroupLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GroupLog.
     * @param {GroupLogCreateArgs} args - Arguments to create a GroupLog.
     * @example
     * // Create one GroupLog
     * const GroupLog = await prisma.groupLog.create({
     *   data: {
     *     // ... data to create a GroupLog
     *   }
     * })
     * 
     */
    create<T extends GroupLogCreateArgs>(args: SelectSubset<T, GroupLogCreateArgs<ExtArgs>>): Prisma__GroupLogClient<$Result.GetResult<Prisma.$GroupLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GroupLogs.
     * @param {GroupLogCreateManyArgs} args - Arguments to create many GroupLogs.
     * @example
     * // Create many GroupLogs
     * const groupLog = await prisma.groupLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupLogCreateManyArgs>(args?: SelectSubset<T, GroupLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GroupLog.
     * @param {GroupLogDeleteArgs} args - Arguments to delete one GroupLog.
     * @example
     * // Delete one GroupLog
     * const GroupLog = await prisma.groupLog.delete({
     *   where: {
     *     // ... filter to delete one GroupLog
     *   }
     * })
     * 
     */
    delete<T extends GroupLogDeleteArgs>(args: SelectSubset<T, GroupLogDeleteArgs<ExtArgs>>): Prisma__GroupLogClient<$Result.GetResult<Prisma.$GroupLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GroupLog.
     * @param {GroupLogUpdateArgs} args - Arguments to update one GroupLog.
     * @example
     * // Update one GroupLog
     * const groupLog = await prisma.groupLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupLogUpdateArgs>(args: SelectSubset<T, GroupLogUpdateArgs<ExtArgs>>): Prisma__GroupLogClient<$Result.GetResult<Prisma.$GroupLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GroupLogs.
     * @param {GroupLogDeleteManyArgs} args - Arguments to filter GroupLogs to delete.
     * @example
     * // Delete a few GroupLogs
     * const { count } = await prisma.groupLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupLogDeleteManyArgs>(args?: SelectSubset<T, GroupLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GroupLogs
     * const groupLog = await prisma.groupLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupLogUpdateManyArgs>(args: SelectSubset<T, GroupLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GroupLog.
     * @param {GroupLogUpsertArgs} args - Arguments to update or create a GroupLog.
     * @example
     * // Update or create a GroupLog
     * const groupLog = await prisma.groupLog.upsert({
     *   create: {
     *     // ... data to create a GroupLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GroupLog we want to update
     *   }
     * })
     */
    upsert<T extends GroupLogUpsertArgs>(args: SelectSubset<T, GroupLogUpsertArgs<ExtArgs>>): Prisma__GroupLogClient<$Result.GetResult<Prisma.$GroupLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GroupLogs that matches the filter.
     * @param {GroupLogFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const groupLog = await prisma.groupLog.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: GroupLogFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a GroupLog.
     * @param {GroupLogAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const groupLog = await prisma.groupLog.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: GroupLogAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of GroupLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupLogCountArgs} args - Arguments to filter GroupLogs to count.
     * @example
     * // Count the number of GroupLogs
     * const count = await prisma.groupLog.count({
     *   where: {
     *     // ... the filter for the GroupLogs we want to count
     *   }
     * })
    **/
    count<T extends GroupLogCountArgs>(
      args?: Subset<T, GroupLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GroupLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GroupLogAggregateArgs>(args: Subset<T, GroupLogAggregateArgs>): Prisma.PrismaPromise<GetGroupLogAggregateType<T>>

    /**
     * Group by GroupLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupLogGroupByArgs} args - Group by arguments.
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
      T extends GroupLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupLogGroupByArgs['orderBy'] }
        : { orderBy?: GroupLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GroupLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GroupLog model
   */
  readonly fields: GroupLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GroupLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    group<T extends GroupLog$groupArgs<ExtArgs> = {}>(args?: Subset<T, GroupLog$groupArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the GroupLog model
   */
  interface GroupLogFieldRefs {
    readonly id: FieldRef<"GroupLog", 'String'>
    readonly content: FieldRef<"GroupLog", 'String'>
    readonly type: FieldRef<"GroupLog", 'LogType'>
    readonly groupId: FieldRef<"GroupLog", 'String'>
    readonly createdAt: FieldRef<"GroupLog", 'DateTime'>
    readonly updatedAt: FieldRef<"GroupLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GroupLog findUnique
   */
  export type GroupLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupLog
     */
    select?: GroupLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupLog
     */
    omit?: GroupLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupLogInclude<ExtArgs> | null
    /**
     * Filter, which GroupLog to fetch.
     */
    where: GroupLogWhereUniqueInput
  }

  /**
   * GroupLog findUniqueOrThrow
   */
  export type GroupLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupLog
     */
    select?: GroupLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupLog
     */
    omit?: GroupLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupLogInclude<ExtArgs> | null
    /**
     * Filter, which GroupLog to fetch.
     */
    where: GroupLogWhereUniqueInput
  }

  /**
   * GroupLog findFirst
   */
  export type GroupLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupLog
     */
    select?: GroupLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupLog
     */
    omit?: GroupLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupLogInclude<ExtArgs> | null
    /**
     * Filter, which GroupLog to fetch.
     */
    where?: GroupLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupLogs to fetch.
     */
    orderBy?: GroupLogOrderByWithRelationInput | GroupLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupLogs.
     */
    cursor?: GroupLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupLogs.
     */
    distinct?: GroupLogScalarFieldEnum | GroupLogScalarFieldEnum[]
  }

  /**
   * GroupLog findFirstOrThrow
   */
  export type GroupLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupLog
     */
    select?: GroupLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupLog
     */
    omit?: GroupLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupLogInclude<ExtArgs> | null
    /**
     * Filter, which GroupLog to fetch.
     */
    where?: GroupLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupLogs to fetch.
     */
    orderBy?: GroupLogOrderByWithRelationInput | GroupLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupLogs.
     */
    cursor?: GroupLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupLogs.
     */
    distinct?: GroupLogScalarFieldEnum | GroupLogScalarFieldEnum[]
  }

  /**
   * GroupLog findMany
   */
  export type GroupLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupLog
     */
    select?: GroupLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupLog
     */
    omit?: GroupLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupLogInclude<ExtArgs> | null
    /**
     * Filter, which GroupLogs to fetch.
     */
    where?: GroupLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupLogs to fetch.
     */
    orderBy?: GroupLogOrderByWithRelationInput | GroupLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GroupLogs.
     */
    cursor?: GroupLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupLogs.
     */
    skip?: number
    distinct?: GroupLogScalarFieldEnum | GroupLogScalarFieldEnum[]
  }

  /**
   * GroupLog create
   */
  export type GroupLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupLog
     */
    select?: GroupLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupLog
     */
    omit?: GroupLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupLogInclude<ExtArgs> | null
    /**
     * The data needed to create a GroupLog.
     */
    data: XOR<GroupLogCreateInput, GroupLogUncheckedCreateInput>
  }

  /**
   * GroupLog createMany
   */
  export type GroupLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GroupLogs.
     */
    data: GroupLogCreateManyInput | GroupLogCreateManyInput[]
  }

  /**
   * GroupLog update
   */
  export type GroupLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupLog
     */
    select?: GroupLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupLog
     */
    omit?: GroupLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupLogInclude<ExtArgs> | null
    /**
     * The data needed to update a GroupLog.
     */
    data: XOR<GroupLogUpdateInput, GroupLogUncheckedUpdateInput>
    /**
     * Choose, which GroupLog to update.
     */
    where: GroupLogWhereUniqueInput
  }

  /**
   * GroupLog updateMany
   */
  export type GroupLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GroupLogs.
     */
    data: XOR<GroupLogUpdateManyMutationInput, GroupLogUncheckedUpdateManyInput>
    /**
     * Filter which GroupLogs to update
     */
    where?: GroupLogWhereInput
    /**
     * Limit how many GroupLogs to update.
     */
    limit?: number
  }

  /**
   * GroupLog upsert
   */
  export type GroupLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupLog
     */
    select?: GroupLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupLog
     */
    omit?: GroupLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupLogInclude<ExtArgs> | null
    /**
     * The filter to search for the GroupLog to update in case it exists.
     */
    where: GroupLogWhereUniqueInput
    /**
     * In case the GroupLog found by the `where` argument doesn't exist, create a new GroupLog with this data.
     */
    create: XOR<GroupLogCreateInput, GroupLogUncheckedCreateInput>
    /**
     * In case the GroupLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupLogUpdateInput, GroupLogUncheckedUpdateInput>
  }

  /**
   * GroupLog delete
   */
  export type GroupLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupLog
     */
    select?: GroupLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupLog
     */
    omit?: GroupLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupLogInclude<ExtArgs> | null
    /**
     * Filter which GroupLog to delete.
     */
    where: GroupLogWhereUniqueInput
  }

  /**
   * GroupLog deleteMany
   */
  export type GroupLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupLogs to delete
     */
    where?: GroupLogWhereInput
    /**
     * Limit how many GroupLogs to delete.
     */
    limit?: number
  }

  /**
   * GroupLog findRaw
   */
  export type GroupLogFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * GroupLog aggregateRaw
   */
  export type GroupLogAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * GroupLog.group
   */
  export type GroupLog$groupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    where?: GroupWhereInput
  }

  /**
   * GroupLog without action
   */
  export type GroupLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupLog
     */
    select?: GroupLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupLog
     */
    omit?: GroupLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupLogInclude<ExtArgs> | null
  }


  /**
   * Model GroupMember
   */

  export type AggregateGroupMember = {
    _count: GroupMemberCountAggregateOutputType | null
    _min: GroupMemberMinAggregateOutputType | null
    _max: GroupMemberMaxAggregateOutputType | null
  }

  export type GroupMemberMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    groupId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GroupMemberMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    groupId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GroupMemberCountAggregateOutputType = {
    id: number
    studentId: number
    groupId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GroupMemberMinAggregateInputType = {
    id?: true
    studentId?: true
    groupId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GroupMemberMaxAggregateInputType = {
    id?: true
    studentId?: true
    groupId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GroupMemberCountAggregateInputType = {
    id?: true
    studentId?: true
    groupId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GroupMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupMember to aggregate.
     */
    where?: GroupMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMembers to fetch.
     */
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GroupMembers
    **/
    _count?: true | GroupMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMemberMaxAggregateInputType
  }

  export type GetGroupMemberAggregateType<T extends GroupMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateGroupMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroupMember[P]>
      : GetScalarType<T[P], AggregateGroupMember[P]>
  }




  export type GroupMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupMemberWhereInput
    orderBy?: GroupMemberOrderByWithAggregationInput | GroupMemberOrderByWithAggregationInput[]
    by: GroupMemberScalarFieldEnum[] | GroupMemberScalarFieldEnum
    having?: GroupMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupMemberCountAggregateInputType | true
    _min?: GroupMemberMinAggregateInputType
    _max?: GroupMemberMaxAggregateInputType
  }

  export type GroupMemberGroupByOutputType = {
    id: string
    studentId: string
    groupId: string
    createdAt: Date
    updatedAt: Date
    _count: GroupMemberCountAggregateOutputType | null
    _min: GroupMemberMinAggregateOutputType | null
    _max: GroupMemberMaxAggregateOutputType | null
  }

  type GetGroupMemberGroupByPayload<T extends GroupMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupMemberGroupByOutputType[P]>
            : GetScalarType<T[P], GroupMemberGroupByOutputType[P]>
        }
      >
    >


  export type GroupMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    groupId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupMember"]>



  export type GroupMemberSelectScalar = {
    id?: boolean
    studentId?: boolean
    groupId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GroupMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "groupId" | "createdAt" | "updatedAt", ExtArgs["result"]["groupMember"]>
  export type GroupMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }

  export type $GroupMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GroupMember"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
      group: Prisma.$GroupPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      groupId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["groupMember"]>
    composites: {}
  }

  type GroupMemberGetPayload<S extends boolean | null | undefined | GroupMemberDefaultArgs> = $Result.GetResult<Prisma.$GroupMemberPayload, S>

  type GroupMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupMemberCountAggregateInputType | true
    }

  export interface GroupMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GroupMember'], meta: { name: 'GroupMember' } }
    /**
     * Find zero or one GroupMember that matches the filter.
     * @param {GroupMemberFindUniqueArgs} args - Arguments to find a GroupMember
     * @example
     * // Get one GroupMember
     * const groupMember = await prisma.groupMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupMemberFindUniqueArgs>(args: SelectSubset<T, GroupMemberFindUniqueArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GroupMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupMemberFindUniqueOrThrowArgs} args - Arguments to find a GroupMember
     * @example
     * // Get one GroupMember
     * const groupMember = await prisma.groupMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberFindFirstArgs} args - Arguments to find a GroupMember
     * @example
     * // Get one GroupMember
     * const groupMember = await prisma.groupMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupMemberFindFirstArgs>(args?: SelectSubset<T, GroupMemberFindFirstArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberFindFirstOrThrowArgs} args - Arguments to find a GroupMember
     * @example
     * // Get one GroupMember
     * const groupMember = await prisma.groupMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GroupMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GroupMembers
     * const groupMembers = await prisma.groupMember.findMany()
     * 
     * // Get first 10 GroupMembers
     * const groupMembers = await prisma.groupMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupMemberWithIdOnly = await prisma.groupMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupMemberFindManyArgs>(args?: SelectSubset<T, GroupMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GroupMember.
     * @param {GroupMemberCreateArgs} args - Arguments to create a GroupMember.
     * @example
     * // Create one GroupMember
     * const GroupMember = await prisma.groupMember.create({
     *   data: {
     *     // ... data to create a GroupMember
     *   }
     * })
     * 
     */
    create<T extends GroupMemberCreateArgs>(args: SelectSubset<T, GroupMemberCreateArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GroupMembers.
     * @param {GroupMemberCreateManyArgs} args - Arguments to create many GroupMembers.
     * @example
     * // Create many GroupMembers
     * const groupMember = await prisma.groupMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupMemberCreateManyArgs>(args?: SelectSubset<T, GroupMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GroupMember.
     * @param {GroupMemberDeleteArgs} args - Arguments to delete one GroupMember.
     * @example
     * // Delete one GroupMember
     * const GroupMember = await prisma.groupMember.delete({
     *   where: {
     *     // ... filter to delete one GroupMember
     *   }
     * })
     * 
     */
    delete<T extends GroupMemberDeleteArgs>(args: SelectSubset<T, GroupMemberDeleteArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GroupMember.
     * @param {GroupMemberUpdateArgs} args - Arguments to update one GroupMember.
     * @example
     * // Update one GroupMember
     * const groupMember = await prisma.groupMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupMemberUpdateArgs>(args: SelectSubset<T, GroupMemberUpdateArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GroupMembers.
     * @param {GroupMemberDeleteManyArgs} args - Arguments to filter GroupMembers to delete.
     * @example
     * // Delete a few GroupMembers
     * const { count } = await prisma.groupMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupMemberDeleteManyArgs>(args?: SelectSubset<T, GroupMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GroupMembers
     * const groupMember = await prisma.groupMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupMemberUpdateManyArgs>(args: SelectSubset<T, GroupMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GroupMember.
     * @param {GroupMemberUpsertArgs} args - Arguments to update or create a GroupMember.
     * @example
     * // Update or create a GroupMember
     * const groupMember = await prisma.groupMember.upsert({
     *   create: {
     *     // ... data to create a GroupMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GroupMember we want to update
     *   }
     * })
     */
    upsert<T extends GroupMemberUpsertArgs>(args: SelectSubset<T, GroupMemberUpsertArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GroupMembers that matches the filter.
     * @param {GroupMemberFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const groupMember = await prisma.groupMember.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: GroupMemberFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a GroupMember.
     * @param {GroupMemberAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const groupMember = await prisma.groupMember.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: GroupMemberAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of GroupMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberCountArgs} args - Arguments to filter GroupMembers to count.
     * @example
     * // Count the number of GroupMembers
     * const count = await prisma.groupMember.count({
     *   where: {
     *     // ... the filter for the GroupMembers we want to count
     *   }
     * })
    **/
    count<T extends GroupMemberCountArgs>(
      args?: Subset<T, GroupMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GroupMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GroupMemberAggregateArgs>(args: Subset<T, GroupMemberAggregateArgs>): Prisma.PrismaPromise<GetGroupMemberAggregateType<T>>

    /**
     * Group by GroupMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberGroupByArgs} args - Group by arguments.
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
      T extends GroupMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupMemberGroupByArgs['orderBy'] }
        : { orderBy?: GroupMemberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GroupMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GroupMember model
   */
  readonly fields: GroupMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GroupMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    group<T extends GroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupDefaultArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the GroupMember model
   */
  interface GroupMemberFieldRefs {
    readonly id: FieldRef<"GroupMember", 'String'>
    readonly studentId: FieldRef<"GroupMember", 'String'>
    readonly groupId: FieldRef<"GroupMember", 'String'>
    readonly createdAt: FieldRef<"GroupMember", 'DateTime'>
    readonly updatedAt: FieldRef<"GroupMember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GroupMember findUnique
   */
  export type GroupMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which GroupMember to fetch.
     */
    where: GroupMemberWhereUniqueInput
  }

  /**
   * GroupMember findUniqueOrThrow
   */
  export type GroupMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which GroupMember to fetch.
     */
    where: GroupMemberWhereUniqueInput
  }

  /**
   * GroupMember findFirst
   */
  export type GroupMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which GroupMember to fetch.
     */
    where?: GroupMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMembers to fetch.
     */
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupMembers.
     */
    cursor?: GroupMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupMembers.
     */
    distinct?: GroupMemberScalarFieldEnum | GroupMemberScalarFieldEnum[]
  }

  /**
   * GroupMember findFirstOrThrow
   */
  export type GroupMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which GroupMember to fetch.
     */
    where?: GroupMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMembers to fetch.
     */
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupMembers.
     */
    cursor?: GroupMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupMembers.
     */
    distinct?: GroupMemberScalarFieldEnum | GroupMemberScalarFieldEnum[]
  }

  /**
   * GroupMember findMany
   */
  export type GroupMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which GroupMembers to fetch.
     */
    where?: GroupMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMembers to fetch.
     */
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GroupMembers.
     */
    cursor?: GroupMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMembers.
     */
    skip?: number
    distinct?: GroupMemberScalarFieldEnum | GroupMemberScalarFieldEnum[]
  }

  /**
   * GroupMember create
   */
  export type GroupMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a GroupMember.
     */
    data: XOR<GroupMemberCreateInput, GroupMemberUncheckedCreateInput>
  }

  /**
   * GroupMember createMany
   */
  export type GroupMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GroupMembers.
     */
    data: GroupMemberCreateManyInput | GroupMemberCreateManyInput[]
  }

  /**
   * GroupMember update
   */
  export type GroupMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a GroupMember.
     */
    data: XOR<GroupMemberUpdateInput, GroupMemberUncheckedUpdateInput>
    /**
     * Choose, which GroupMember to update.
     */
    where: GroupMemberWhereUniqueInput
  }

  /**
   * GroupMember updateMany
   */
  export type GroupMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GroupMembers.
     */
    data: XOR<GroupMemberUpdateManyMutationInput, GroupMemberUncheckedUpdateManyInput>
    /**
     * Filter which GroupMembers to update
     */
    where?: GroupMemberWhereInput
    /**
     * Limit how many GroupMembers to update.
     */
    limit?: number
  }

  /**
   * GroupMember upsert
   */
  export type GroupMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the GroupMember to update in case it exists.
     */
    where: GroupMemberWhereUniqueInput
    /**
     * In case the GroupMember found by the `where` argument doesn't exist, create a new GroupMember with this data.
     */
    create: XOR<GroupMemberCreateInput, GroupMemberUncheckedCreateInput>
    /**
     * In case the GroupMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupMemberUpdateInput, GroupMemberUncheckedUpdateInput>
  }

  /**
   * GroupMember delete
   */
  export type GroupMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter which GroupMember to delete.
     */
    where: GroupMemberWhereUniqueInput
  }

  /**
   * GroupMember deleteMany
   */
  export type GroupMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupMembers to delete
     */
    where?: GroupMemberWhereInput
    /**
     * Limit how many GroupMembers to delete.
     */
    limit?: number
  }

  /**
   * GroupMember findRaw
   */
  export type GroupMemberFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * GroupMember aggregateRaw
   */
  export type GroupMemberAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * GroupMember without action
   */
  export type GroupMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
  }


  /**
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentMinAggregateOutputType = {
    id: string | null
    bio: string | null
    linkedIn: string | null
    github: string | null
    twitter: string | null
    website: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentMaxAggregateOutputType = {
    id: string | null
    bio: string | null
    linkedIn: string | null
    github: string | null
    twitter: string | null
    website: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    bio: number
    linkedIn: number
    github: number
    twitter: number
    website: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StudentMinAggregateInputType = {
    id?: true
    bio?: true
    linkedIn?: true
    github?: true
    twitter?: true
    website?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    bio?: true
    linkedIn?: true
    github?: true
    twitter?: true
    website?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    bio?: true
    linkedIn?: true
    github?: true
    twitter?: true
    website?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    id: string
    bio: string | null
    linkedIn: string | null
    github: string | null
    twitter: string | null
    website: string | null
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: StudentCountAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bio?: boolean
    linkedIn?: boolean
    github?: boolean
    twitter?: boolean
    website?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    studentLogs?: boolean | Student$studentLogsArgs<ExtArgs>
    user?: boolean | Student$userArgs<ExtArgs>
    cohorts?: boolean | Student$cohortsArgs<ExtArgs>
    groups?: boolean | Student$groupsArgs<ExtArgs>
    adminOfGroups?: boolean | Student$adminOfGroupsArgs<ExtArgs>
    groupJoinRequests?: boolean | Student$groupJoinRequestsArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>



  export type StudentSelectScalar = {
    id?: boolean
    bio?: boolean
    linkedIn?: boolean
    github?: boolean
    twitter?: boolean
    website?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StudentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bio" | "linkedIn" | "github" | "twitter" | "website" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["student"]>
  export type StudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studentLogs?: boolean | Student$studentLogsArgs<ExtArgs>
    user?: boolean | Student$userArgs<ExtArgs>
    cohorts?: boolean | Student$cohortsArgs<ExtArgs>
    groups?: boolean | Student$groupsArgs<ExtArgs>
    adminOfGroups?: boolean | Student$adminOfGroupsArgs<ExtArgs>
    groupJoinRequests?: boolean | Student$groupJoinRequestsArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {
      studentLogs: Prisma.$StudentLogPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs> | null
      cohorts: Prisma.$StudentCohortPayload<ExtArgs>[]
      groups: Prisma.$GroupMemberPayload<ExtArgs>[]
      adminOfGroups: Prisma.$GroupPayload<ExtArgs>[]
      groupJoinRequests: Prisma.$GroupJoinRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bio: string | null
      linkedIn: string | null
      github: string | null
      twitter: string | null
      website: string | null
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentFindUniqueArgs>(args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentFindFirstArgs>(args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentFindManyArgs>(args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends StudentCreateArgs>(args: SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {StudentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentCreateManyArgs>(args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends StudentDeleteArgs>(args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentUpdateArgs>(args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentDeleteManyArgs>(args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentUpdateManyArgs>(args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends StudentUpsertArgs>(args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * @param {StudentFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const student = await prisma.student.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: StudentFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Student.
     * @param {StudentAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const student = await prisma.student.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: StudentAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
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
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    studentLogs<T extends Student$studentLogsArgs<ExtArgs> = {}>(args?: Subset<T, Student$studentLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends Student$userArgs<ExtArgs> = {}>(args?: Subset<T, Student$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    cohorts<T extends Student$cohortsArgs<ExtArgs> = {}>(args?: Subset<T, Student$cohortsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentCohortPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    groups<T extends Student$groupsArgs<ExtArgs> = {}>(args?: Subset<T, Student$groupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    adminOfGroups<T extends Student$adminOfGroupsArgs<ExtArgs> = {}>(args?: Subset<T, Student$adminOfGroupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    groupJoinRequests<T extends Student$groupJoinRequestsArgs<ExtArgs> = {}>(args?: Subset<T, Student$groupJoinRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupJoinRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Student model
   */
  interface StudentFieldRefs {
    readonly id: FieldRef<"Student", 'String'>
    readonly bio: FieldRef<"Student", 'String'>
    readonly linkedIn: FieldRef<"Student", 'String'>
    readonly github: FieldRef<"Student", 'String'>
    readonly twitter: FieldRef<"Student", 'String'>
    readonly website: FieldRef<"Student", 'String'>
    readonly userId: FieldRef<"Student", 'String'>
    readonly createdAt: FieldRef<"Student", 'DateTime'>
    readonly updatedAt: FieldRef<"Student", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }

  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
  }

  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }

  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to delete.
     */
    limit?: number
  }

  /**
   * Student findRaw
   */
  export type StudentFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Student aggregateRaw
   */
  export type StudentAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Student.studentLogs
   */
  export type Student$studentLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentLog
     */
    select?: StudentLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentLog
     */
    omit?: StudentLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentLogInclude<ExtArgs> | null
    where?: StudentLogWhereInput
    orderBy?: StudentLogOrderByWithRelationInput | StudentLogOrderByWithRelationInput[]
    cursor?: StudentLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentLogScalarFieldEnum | StudentLogScalarFieldEnum[]
  }

  /**
   * Student.user
   */
  export type Student$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Student.cohorts
   */
  export type Student$cohortsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCohort
     */
    select?: StudentCohortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentCohort
     */
    omit?: StudentCohortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentCohortInclude<ExtArgs> | null
    where?: StudentCohortWhereInput
    orderBy?: StudentCohortOrderByWithRelationInput | StudentCohortOrderByWithRelationInput[]
    cursor?: StudentCohortWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentCohortScalarFieldEnum | StudentCohortScalarFieldEnum[]
  }

  /**
   * Student.groups
   */
  export type Student$groupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    where?: GroupMemberWhereInput
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    cursor?: GroupMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupMemberScalarFieldEnum | GroupMemberScalarFieldEnum[]
  }

  /**
   * Student.adminOfGroups
   */
  export type Student$adminOfGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    cursor?: GroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Student.groupJoinRequests
   */
  export type Student$groupJoinRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupJoinRequest
     */
    select?: GroupJoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupJoinRequest
     */
    omit?: GroupJoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupJoinRequestInclude<ExtArgs> | null
    where?: GroupJoinRequestWhereInput
    orderBy?: GroupJoinRequestOrderByWithRelationInput | GroupJoinRequestOrderByWithRelationInput[]
    cursor?: GroupJoinRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupJoinRequestScalarFieldEnum | GroupJoinRequestScalarFieldEnum[]
  }

  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
  }


  /**
   * Model StudentCohort
   */

  export type AggregateStudentCohort = {
    _count: StudentCohortCountAggregateOutputType | null
    _min: StudentCohortMinAggregateOutputType | null
    _max: StudentCohortMaxAggregateOutputType | null
  }

  export type StudentCohortMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    cohortId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentCohortMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    cohortId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentCohortCountAggregateOutputType = {
    id: number
    studentId: number
    cohortId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StudentCohortMinAggregateInputType = {
    id?: true
    studentId?: true
    cohortId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentCohortMaxAggregateInputType = {
    id?: true
    studentId?: true
    cohortId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentCohortCountAggregateInputType = {
    id?: true
    studentId?: true
    cohortId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StudentCohortAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentCohort to aggregate.
     */
    where?: StudentCohortWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentCohorts to fetch.
     */
    orderBy?: StudentCohortOrderByWithRelationInput | StudentCohortOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentCohortWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentCohorts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentCohorts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudentCohorts
    **/
    _count?: true | StudentCohortCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentCohortMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentCohortMaxAggregateInputType
  }

  export type GetStudentCohortAggregateType<T extends StudentCohortAggregateArgs> = {
        [P in keyof T & keyof AggregateStudentCohort]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudentCohort[P]>
      : GetScalarType<T[P], AggregateStudentCohort[P]>
  }




  export type StudentCohortGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentCohortWhereInput
    orderBy?: StudentCohortOrderByWithAggregationInput | StudentCohortOrderByWithAggregationInput[]
    by: StudentCohortScalarFieldEnum[] | StudentCohortScalarFieldEnum
    having?: StudentCohortScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCohortCountAggregateInputType | true
    _min?: StudentCohortMinAggregateInputType
    _max?: StudentCohortMaxAggregateInputType
  }

  export type StudentCohortGroupByOutputType = {
    id: string
    studentId: string
    cohortId: string
    createdAt: Date
    updatedAt: Date
    _count: StudentCohortCountAggregateOutputType | null
    _min: StudentCohortMinAggregateOutputType | null
    _max: StudentCohortMaxAggregateOutputType | null
  }

  type GetStudentCohortGroupByPayload<T extends StudentCohortGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentCohortGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentCohortGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentCohortGroupByOutputType[P]>
            : GetScalarType<T[P], StudentCohortGroupByOutputType[P]>
        }
      >
    >


  export type StudentCohortSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    cohortId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    cohort?: boolean | CohortDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentCohort"]>



  export type StudentCohortSelectScalar = {
    id?: boolean
    studentId?: boolean
    cohortId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StudentCohortOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "cohortId" | "createdAt" | "updatedAt", ExtArgs["result"]["studentCohort"]>
  export type StudentCohortInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    cohort?: boolean | CohortDefaultArgs<ExtArgs>
  }

  export type $StudentCohortPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudentCohort"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
      cohort: Prisma.$CohortPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      cohortId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["studentCohort"]>
    composites: {}
  }

  type StudentCohortGetPayload<S extends boolean | null | undefined | StudentCohortDefaultArgs> = $Result.GetResult<Prisma.$StudentCohortPayload, S>

  type StudentCohortCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentCohortFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCohortCountAggregateInputType | true
    }

  export interface StudentCohortDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudentCohort'], meta: { name: 'StudentCohort' } }
    /**
     * Find zero or one StudentCohort that matches the filter.
     * @param {StudentCohortFindUniqueArgs} args - Arguments to find a StudentCohort
     * @example
     * // Get one StudentCohort
     * const studentCohort = await prisma.studentCohort.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentCohortFindUniqueArgs>(args: SelectSubset<T, StudentCohortFindUniqueArgs<ExtArgs>>): Prisma__StudentCohortClient<$Result.GetResult<Prisma.$StudentCohortPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StudentCohort that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentCohortFindUniqueOrThrowArgs} args - Arguments to find a StudentCohort
     * @example
     * // Get one StudentCohort
     * const studentCohort = await prisma.studentCohort.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentCohortFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentCohortFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentCohortClient<$Result.GetResult<Prisma.$StudentCohortPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentCohort that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCohortFindFirstArgs} args - Arguments to find a StudentCohort
     * @example
     * // Get one StudentCohort
     * const studentCohort = await prisma.studentCohort.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentCohortFindFirstArgs>(args?: SelectSubset<T, StudentCohortFindFirstArgs<ExtArgs>>): Prisma__StudentCohortClient<$Result.GetResult<Prisma.$StudentCohortPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentCohort that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCohortFindFirstOrThrowArgs} args - Arguments to find a StudentCohort
     * @example
     * // Get one StudentCohort
     * const studentCohort = await prisma.studentCohort.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentCohortFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentCohortFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentCohortClient<$Result.GetResult<Prisma.$StudentCohortPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudentCohorts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCohortFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudentCohorts
     * const studentCohorts = await prisma.studentCohort.findMany()
     * 
     * // Get first 10 StudentCohorts
     * const studentCohorts = await prisma.studentCohort.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentCohortWithIdOnly = await prisma.studentCohort.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentCohortFindManyArgs>(args?: SelectSubset<T, StudentCohortFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentCohortPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StudentCohort.
     * @param {StudentCohortCreateArgs} args - Arguments to create a StudentCohort.
     * @example
     * // Create one StudentCohort
     * const StudentCohort = await prisma.studentCohort.create({
     *   data: {
     *     // ... data to create a StudentCohort
     *   }
     * })
     * 
     */
    create<T extends StudentCohortCreateArgs>(args: SelectSubset<T, StudentCohortCreateArgs<ExtArgs>>): Prisma__StudentCohortClient<$Result.GetResult<Prisma.$StudentCohortPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StudentCohorts.
     * @param {StudentCohortCreateManyArgs} args - Arguments to create many StudentCohorts.
     * @example
     * // Create many StudentCohorts
     * const studentCohort = await prisma.studentCohort.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentCohortCreateManyArgs>(args?: SelectSubset<T, StudentCohortCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a StudentCohort.
     * @param {StudentCohortDeleteArgs} args - Arguments to delete one StudentCohort.
     * @example
     * // Delete one StudentCohort
     * const StudentCohort = await prisma.studentCohort.delete({
     *   where: {
     *     // ... filter to delete one StudentCohort
     *   }
     * })
     * 
     */
    delete<T extends StudentCohortDeleteArgs>(args: SelectSubset<T, StudentCohortDeleteArgs<ExtArgs>>): Prisma__StudentCohortClient<$Result.GetResult<Prisma.$StudentCohortPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StudentCohort.
     * @param {StudentCohortUpdateArgs} args - Arguments to update one StudentCohort.
     * @example
     * // Update one StudentCohort
     * const studentCohort = await prisma.studentCohort.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentCohortUpdateArgs>(args: SelectSubset<T, StudentCohortUpdateArgs<ExtArgs>>): Prisma__StudentCohortClient<$Result.GetResult<Prisma.$StudentCohortPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StudentCohorts.
     * @param {StudentCohortDeleteManyArgs} args - Arguments to filter StudentCohorts to delete.
     * @example
     * // Delete a few StudentCohorts
     * const { count } = await prisma.studentCohort.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentCohortDeleteManyArgs>(args?: SelectSubset<T, StudentCohortDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentCohorts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCohortUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudentCohorts
     * const studentCohort = await prisma.studentCohort.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentCohortUpdateManyArgs>(args: SelectSubset<T, StudentCohortUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StudentCohort.
     * @param {StudentCohortUpsertArgs} args - Arguments to update or create a StudentCohort.
     * @example
     * // Update or create a StudentCohort
     * const studentCohort = await prisma.studentCohort.upsert({
     *   create: {
     *     // ... data to create a StudentCohort
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudentCohort we want to update
     *   }
     * })
     */
    upsert<T extends StudentCohortUpsertArgs>(args: SelectSubset<T, StudentCohortUpsertArgs<ExtArgs>>): Prisma__StudentCohortClient<$Result.GetResult<Prisma.$StudentCohortPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudentCohorts that matches the filter.
     * @param {StudentCohortFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const studentCohort = await prisma.studentCohort.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: StudentCohortFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a StudentCohort.
     * @param {StudentCohortAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const studentCohort = await prisma.studentCohort.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: StudentCohortAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of StudentCohorts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCohortCountArgs} args - Arguments to filter StudentCohorts to count.
     * @example
     * // Count the number of StudentCohorts
     * const count = await prisma.studentCohort.count({
     *   where: {
     *     // ... the filter for the StudentCohorts we want to count
     *   }
     * })
    **/
    count<T extends StudentCohortCountArgs>(
      args?: Subset<T, StudentCohortCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCohortCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudentCohort.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCohortAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentCohortAggregateArgs>(args: Subset<T, StudentCohortAggregateArgs>): Prisma.PrismaPromise<GetStudentCohortAggregateType<T>>

    /**
     * Group by StudentCohort.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCohortGroupByArgs} args - Group by arguments.
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
      T extends StudentCohortGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentCohortGroupByArgs['orderBy'] }
        : { orderBy?: StudentCohortGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentCohortGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentCohortGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudentCohort model
   */
  readonly fields: StudentCohortFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudentCohort.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentCohortClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cohort<T extends CohortDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CohortDefaultArgs<ExtArgs>>): Prisma__CohortClient<$Result.GetResult<Prisma.$CohortPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the StudentCohort model
   */
  interface StudentCohortFieldRefs {
    readonly id: FieldRef<"StudentCohort", 'String'>
    readonly studentId: FieldRef<"StudentCohort", 'String'>
    readonly cohortId: FieldRef<"StudentCohort", 'String'>
    readonly createdAt: FieldRef<"StudentCohort", 'DateTime'>
    readonly updatedAt: FieldRef<"StudentCohort", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StudentCohort findUnique
   */
  export type StudentCohortFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCohort
     */
    select?: StudentCohortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentCohort
     */
    omit?: StudentCohortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentCohortInclude<ExtArgs> | null
    /**
     * Filter, which StudentCohort to fetch.
     */
    where: StudentCohortWhereUniqueInput
  }

  /**
   * StudentCohort findUniqueOrThrow
   */
  export type StudentCohortFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCohort
     */
    select?: StudentCohortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentCohort
     */
    omit?: StudentCohortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentCohortInclude<ExtArgs> | null
    /**
     * Filter, which StudentCohort to fetch.
     */
    where: StudentCohortWhereUniqueInput
  }

  /**
   * StudentCohort findFirst
   */
  export type StudentCohortFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCohort
     */
    select?: StudentCohortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentCohort
     */
    omit?: StudentCohortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentCohortInclude<ExtArgs> | null
    /**
     * Filter, which StudentCohort to fetch.
     */
    where?: StudentCohortWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentCohorts to fetch.
     */
    orderBy?: StudentCohortOrderByWithRelationInput | StudentCohortOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentCohorts.
     */
    cursor?: StudentCohortWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentCohorts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentCohorts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentCohorts.
     */
    distinct?: StudentCohortScalarFieldEnum | StudentCohortScalarFieldEnum[]
  }

  /**
   * StudentCohort findFirstOrThrow
   */
  export type StudentCohortFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCohort
     */
    select?: StudentCohortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentCohort
     */
    omit?: StudentCohortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentCohortInclude<ExtArgs> | null
    /**
     * Filter, which StudentCohort to fetch.
     */
    where?: StudentCohortWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentCohorts to fetch.
     */
    orderBy?: StudentCohortOrderByWithRelationInput | StudentCohortOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentCohorts.
     */
    cursor?: StudentCohortWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentCohorts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentCohorts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentCohorts.
     */
    distinct?: StudentCohortScalarFieldEnum | StudentCohortScalarFieldEnum[]
  }

  /**
   * StudentCohort findMany
   */
  export type StudentCohortFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCohort
     */
    select?: StudentCohortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentCohort
     */
    omit?: StudentCohortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentCohortInclude<ExtArgs> | null
    /**
     * Filter, which StudentCohorts to fetch.
     */
    where?: StudentCohortWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentCohorts to fetch.
     */
    orderBy?: StudentCohortOrderByWithRelationInput | StudentCohortOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudentCohorts.
     */
    cursor?: StudentCohortWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentCohorts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentCohorts.
     */
    skip?: number
    distinct?: StudentCohortScalarFieldEnum | StudentCohortScalarFieldEnum[]
  }

  /**
   * StudentCohort create
   */
  export type StudentCohortCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCohort
     */
    select?: StudentCohortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentCohort
     */
    omit?: StudentCohortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentCohortInclude<ExtArgs> | null
    /**
     * The data needed to create a StudentCohort.
     */
    data: XOR<StudentCohortCreateInput, StudentCohortUncheckedCreateInput>
  }

  /**
   * StudentCohort createMany
   */
  export type StudentCohortCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudentCohorts.
     */
    data: StudentCohortCreateManyInput | StudentCohortCreateManyInput[]
  }

  /**
   * StudentCohort update
   */
  export type StudentCohortUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCohort
     */
    select?: StudentCohortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentCohort
     */
    omit?: StudentCohortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentCohortInclude<ExtArgs> | null
    /**
     * The data needed to update a StudentCohort.
     */
    data: XOR<StudentCohortUpdateInput, StudentCohortUncheckedUpdateInput>
    /**
     * Choose, which StudentCohort to update.
     */
    where: StudentCohortWhereUniqueInput
  }

  /**
   * StudentCohort updateMany
   */
  export type StudentCohortUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudentCohorts.
     */
    data: XOR<StudentCohortUpdateManyMutationInput, StudentCohortUncheckedUpdateManyInput>
    /**
     * Filter which StudentCohorts to update
     */
    where?: StudentCohortWhereInput
    /**
     * Limit how many StudentCohorts to update.
     */
    limit?: number
  }

  /**
   * StudentCohort upsert
   */
  export type StudentCohortUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCohort
     */
    select?: StudentCohortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentCohort
     */
    omit?: StudentCohortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentCohortInclude<ExtArgs> | null
    /**
     * The filter to search for the StudentCohort to update in case it exists.
     */
    where: StudentCohortWhereUniqueInput
    /**
     * In case the StudentCohort found by the `where` argument doesn't exist, create a new StudentCohort with this data.
     */
    create: XOR<StudentCohortCreateInput, StudentCohortUncheckedCreateInput>
    /**
     * In case the StudentCohort was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentCohortUpdateInput, StudentCohortUncheckedUpdateInput>
  }

  /**
   * StudentCohort delete
   */
  export type StudentCohortDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCohort
     */
    select?: StudentCohortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentCohort
     */
    omit?: StudentCohortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentCohortInclude<ExtArgs> | null
    /**
     * Filter which StudentCohort to delete.
     */
    where: StudentCohortWhereUniqueInput
  }

  /**
   * StudentCohort deleteMany
   */
  export type StudentCohortDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentCohorts to delete
     */
    where?: StudentCohortWhereInput
    /**
     * Limit how many StudentCohorts to delete.
     */
    limit?: number
  }

  /**
   * StudentCohort findRaw
   */
  export type StudentCohortFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * StudentCohort aggregateRaw
   */
  export type StudentCohortAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * StudentCohort without action
   */
  export type StudentCohortDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCohort
     */
    select?: StudentCohortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentCohort
     */
    omit?: StudentCohortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentCohortInclude<ExtArgs> | null
  }


  /**
   * Model StudentLog
   */

  export type AggregateStudentLog = {
    _count: StudentLogCountAggregateOutputType | null
    _min: StudentLogMinAggregateOutputType | null
    _max: StudentLogMaxAggregateOutputType | null
  }

  export type StudentLogMinAggregateOutputType = {
    id: string | null
    log: string | null
    studentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentLogMaxAggregateOutputType = {
    id: string | null
    log: string | null
    studentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentLogCountAggregateOutputType = {
    id: number
    log: number
    studentId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StudentLogMinAggregateInputType = {
    id?: true
    log?: true
    studentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentLogMaxAggregateInputType = {
    id?: true
    log?: true
    studentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentLogCountAggregateInputType = {
    id?: true
    log?: true
    studentId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StudentLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentLog to aggregate.
     */
    where?: StudentLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentLogs to fetch.
     */
    orderBy?: StudentLogOrderByWithRelationInput | StudentLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudentLogs
    **/
    _count?: true | StudentLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentLogMaxAggregateInputType
  }

  export type GetStudentLogAggregateType<T extends StudentLogAggregateArgs> = {
        [P in keyof T & keyof AggregateStudentLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudentLog[P]>
      : GetScalarType<T[P], AggregateStudentLog[P]>
  }




  export type StudentLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentLogWhereInput
    orderBy?: StudentLogOrderByWithAggregationInput | StudentLogOrderByWithAggregationInput[]
    by: StudentLogScalarFieldEnum[] | StudentLogScalarFieldEnum
    having?: StudentLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentLogCountAggregateInputType | true
    _min?: StudentLogMinAggregateInputType
    _max?: StudentLogMaxAggregateInputType
  }

  export type StudentLogGroupByOutputType = {
    id: string
    log: string
    studentId: string
    createdAt: Date
    updatedAt: Date
    _count: StudentLogCountAggregateOutputType | null
    _min: StudentLogMinAggregateOutputType | null
    _max: StudentLogMaxAggregateOutputType | null
  }

  type GetStudentLogGroupByPayload<T extends StudentLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentLogGroupByOutputType[P]>
            : GetScalarType<T[P], StudentLogGroupByOutputType[P]>
        }
      >
    >


  export type StudentLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    log?: boolean
    studentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | StudentLog$studentArgs<ExtArgs>
  }, ExtArgs["result"]["studentLog"]>



  export type StudentLogSelectScalar = {
    id?: boolean
    log?: boolean
    studentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StudentLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "log" | "studentId" | "createdAt" | "updatedAt", ExtArgs["result"]["studentLog"]>
  export type StudentLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentLog$studentArgs<ExtArgs>
  }

  export type $StudentLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudentLog"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      log: string
      studentId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["studentLog"]>
    composites: {}
  }

  type StudentLogGetPayload<S extends boolean | null | undefined | StudentLogDefaultArgs> = $Result.GetResult<Prisma.$StudentLogPayload, S>

  type StudentLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentLogCountAggregateInputType | true
    }

  export interface StudentLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudentLog'], meta: { name: 'StudentLog' } }
    /**
     * Find zero or one StudentLog that matches the filter.
     * @param {StudentLogFindUniqueArgs} args - Arguments to find a StudentLog
     * @example
     * // Get one StudentLog
     * const studentLog = await prisma.studentLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentLogFindUniqueArgs>(args: SelectSubset<T, StudentLogFindUniqueArgs<ExtArgs>>): Prisma__StudentLogClient<$Result.GetResult<Prisma.$StudentLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StudentLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentLogFindUniqueOrThrowArgs} args - Arguments to find a StudentLog
     * @example
     * // Get one StudentLog
     * const studentLog = await prisma.studentLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentLogFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentLogClient<$Result.GetResult<Prisma.$StudentLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentLogFindFirstArgs} args - Arguments to find a StudentLog
     * @example
     * // Get one StudentLog
     * const studentLog = await prisma.studentLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentLogFindFirstArgs>(args?: SelectSubset<T, StudentLogFindFirstArgs<ExtArgs>>): Prisma__StudentLogClient<$Result.GetResult<Prisma.$StudentLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentLogFindFirstOrThrowArgs} args - Arguments to find a StudentLog
     * @example
     * // Get one StudentLog
     * const studentLog = await prisma.studentLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentLogFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentLogClient<$Result.GetResult<Prisma.$StudentLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudentLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudentLogs
     * const studentLogs = await prisma.studentLog.findMany()
     * 
     * // Get first 10 StudentLogs
     * const studentLogs = await prisma.studentLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentLogWithIdOnly = await prisma.studentLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentLogFindManyArgs>(args?: SelectSubset<T, StudentLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StudentLog.
     * @param {StudentLogCreateArgs} args - Arguments to create a StudentLog.
     * @example
     * // Create one StudentLog
     * const StudentLog = await prisma.studentLog.create({
     *   data: {
     *     // ... data to create a StudentLog
     *   }
     * })
     * 
     */
    create<T extends StudentLogCreateArgs>(args: SelectSubset<T, StudentLogCreateArgs<ExtArgs>>): Prisma__StudentLogClient<$Result.GetResult<Prisma.$StudentLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StudentLogs.
     * @param {StudentLogCreateManyArgs} args - Arguments to create many StudentLogs.
     * @example
     * // Create many StudentLogs
     * const studentLog = await prisma.studentLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentLogCreateManyArgs>(args?: SelectSubset<T, StudentLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a StudentLog.
     * @param {StudentLogDeleteArgs} args - Arguments to delete one StudentLog.
     * @example
     * // Delete one StudentLog
     * const StudentLog = await prisma.studentLog.delete({
     *   where: {
     *     // ... filter to delete one StudentLog
     *   }
     * })
     * 
     */
    delete<T extends StudentLogDeleteArgs>(args: SelectSubset<T, StudentLogDeleteArgs<ExtArgs>>): Prisma__StudentLogClient<$Result.GetResult<Prisma.$StudentLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StudentLog.
     * @param {StudentLogUpdateArgs} args - Arguments to update one StudentLog.
     * @example
     * // Update one StudentLog
     * const studentLog = await prisma.studentLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentLogUpdateArgs>(args: SelectSubset<T, StudentLogUpdateArgs<ExtArgs>>): Prisma__StudentLogClient<$Result.GetResult<Prisma.$StudentLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StudentLogs.
     * @param {StudentLogDeleteManyArgs} args - Arguments to filter StudentLogs to delete.
     * @example
     * // Delete a few StudentLogs
     * const { count } = await prisma.studentLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentLogDeleteManyArgs>(args?: SelectSubset<T, StudentLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudentLogs
     * const studentLog = await prisma.studentLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentLogUpdateManyArgs>(args: SelectSubset<T, StudentLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StudentLog.
     * @param {StudentLogUpsertArgs} args - Arguments to update or create a StudentLog.
     * @example
     * // Update or create a StudentLog
     * const studentLog = await prisma.studentLog.upsert({
     *   create: {
     *     // ... data to create a StudentLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudentLog we want to update
     *   }
     * })
     */
    upsert<T extends StudentLogUpsertArgs>(args: SelectSubset<T, StudentLogUpsertArgs<ExtArgs>>): Prisma__StudentLogClient<$Result.GetResult<Prisma.$StudentLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudentLogs that matches the filter.
     * @param {StudentLogFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const studentLog = await prisma.studentLog.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: StudentLogFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a StudentLog.
     * @param {StudentLogAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const studentLog = await prisma.studentLog.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: StudentLogAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of StudentLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentLogCountArgs} args - Arguments to filter StudentLogs to count.
     * @example
     * // Count the number of StudentLogs
     * const count = await prisma.studentLog.count({
     *   where: {
     *     // ... the filter for the StudentLogs we want to count
     *   }
     * })
    **/
    count<T extends StudentLogCountArgs>(
      args?: Subset<T, StudentLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudentLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentLogAggregateArgs>(args: Subset<T, StudentLogAggregateArgs>): Prisma.PrismaPromise<GetStudentLogAggregateType<T>>

    /**
     * Group by StudentLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentLogGroupByArgs} args - Group by arguments.
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
      T extends StudentLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentLogGroupByArgs['orderBy'] }
        : { orderBy?: StudentLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudentLog model
   */
  readonly fields: StudentLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudentLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentLog$studentArgs<ExtArgs> = {}>(args?: Subset<T, StudentLog$studentArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the StudentLog model
   */
  interface StudentLogFieldRefs {
    readonly id: FieldRef<"StudentLog", 'String'>
    readonly log: FieldRef<"StudentLog", 'String'>
    readonly studentId: FieldRef<"StudentLog", 'String'>
    readonly createdAt: FieldRef<"StudentLog", 'DateTime'>
    readonly updatedAt: FieldRef<"StudentLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StudentLog findUnique
   */
  export type StudentLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentLog
     */
    select?: StudentLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentLog
     */
    omit?: StudentLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentLogInclude<ExtArgs> | null
    /**
     * Filter, which StudentLog to fetch.
     */
    where: StudentLogWhereUniqueInput
  }

  /**
   * StudentLog findUniqueOrThrow
   */
  export type StudentLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentLog
     */
    select?: StudentLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentLog
     */
    omit?: StudentLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentLogInclude<ExtArgs> | null
    /**
     * Filter, which StudentLog to fetch.
     */
    where: StudentLogWhereUniqueInput
  }

  /**
   * StudentLog findFirst
   */
  export type StudentLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentLog
     */
    select?: StudentLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentLog
     */
    omit?: StudentLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentLogInclude<ExtArgs> | null
    /**
     * Filter, which StudentLog to fetch.
     */
    where?: StudentLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentLogs to fetch.
     */
    orderBy?: StudentLogOrderByWithRelationInput | StudentLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentLogs.
     */
    cursor?: StudentLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentLogs.
     */
    distinct?: StudentLogScalarFieldEnum | StudentLogScalarFieldEnum[]
  }

  /**
   * StudentLog findFirstOrThrow
   */
  export type StudentLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentLog
     */
    select?: StudentLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentLog
     */
    omit?: StudentLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentLogInclude<ExtArgs> | null
    /**
     * Filter, which StudentLog to fetch.
     */
    where?: StudentLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentLogs to fetch.
     */
    orderBy?: StudentLogOrderByWithRelationInput | StudentLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentLogs.
     */
    cursor?: StudentLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentLogs.
     */
    distinct?: StudentLogScalarFieldEnum | StudentLogScalarFieldEnum[]
  }

  /**
   * StudentLog findMany
   */
  export type StudentLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentLog
     */
    select?: StudentLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentLog
     */
    omit?: StudentLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentLogInclude<ExtArgs> | null
    /**
     * Filter, which StudentLogs to fetch.
     */
    where?: StudentLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentLogs to fetch.
     */
    orderBy?: StudentLogOrderByWithRelationInput | StudentLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudentLogs.
     */
    cursor?: StudentLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentLogs.
     */
    skip?: number
    distinct?: StudentLogScalarFieldEnum | StudentLogScalarFieldEnum[]
  }

  /**
   * StudentLog create
   */
  export type StudentLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentLog
     */
    select?: StudentLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentLog
     */
    omit?: StudentLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentLogInclude<ExtArgs> | null
    /**
     * The data needed to create a StudentLog.
     */
    data: XOR<StudentLogCreateInput, StudentLogUncheckedCreateInput>
  }

  /**
   * StudentLog createMany
   */
  export type StudentLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudentLogs.
     */
    data: StudentLogCreateManyInput | StudentLogCreateManyInput[]
  }

  /**
   * StudentLog update
   */
  export type StudentLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentLog
     */
    select?: StudentLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentLog
     */
    omit?: StudentLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentLogInclude<ExtArgs> | null
    /**
     * The data needed to update a StudentLog.
     */
    data: XOR<StudentLogUpdateInput, StudentLogUncheckedUpdateInput>
    /**
     * Choose, which StudentLog to update.
     */
    where: StudentLogWhereUniqueInput
  }

  /**
   * StudentLog updateMany
   */
  export type StudentLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudentLogs.
     */
    data: XOR<StudentLogUpdateManyMutationInput, StudentLogUncheckedUpdateManyInput>
    /**
     * Filter which StudentLogs to update
     */
    where?: StudentLogWhereInput
    /**
     * Limit how many StudentLogs to update.
     */
    limit?: number
  }

  /**
   * StudentLog upsert
   */
  export type StudentLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentLog
     */
    select?: StudentLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentLog
     */
    omit?: StudentLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentLogInclude<ExtArgs> | null
    /**
     * The filter to search for the StudentLog to update in case it exists.
     */
    where: StudentLogWhereUniqueInput
    /**
     * In case the StudentLog found by the `where` argument doesn't exist, create a new StudentLog with this data.
     */
    create: XOR<StudentLogCreateInput, StudentLogUncheckedCreateInput>
    /**
     * In case the StudentLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentLogUpdateInput, StudentLogUncheckedUpdateInput>
  }

  /**
   * StudentLog delete
   */
  export type StudentLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentLog
     */
    select?: StudentLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentLog
     */
    omit?: StudentLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentLogInclude<ExtArgs> | null
    /**
     * Filter which StudentLog to delete.
     */
    where: StudentLogWhereUniqueInput
  }

  /**
   * StudentLog deleteMany
   */
  export type StudentLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentLogs to delete
     */
    where?: StudentLogWhereInput
    /**
     * Limit how many StudentLogs to delete.
     */
    limit?: number
  }

  /**
   * StudentLog findRaw
   */
  export type StudentLogFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * StudentLog aggregateRaw
   */
  export type StudentLogAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * StudentLog.student
   */
  export type StudentLog$studentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
  }

  /**
   * StudentLog without action
   */
  export type StudentLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentLog
     */
    select?: StudentLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentLog
     */
    omit?: StudentLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentLogInclude<ExtArgs> | null
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
    role: $Enums.UserRole | null
    email: string | null
    password: string | null
    status: $Enums.UserStatus | null
    bannedAt: Date | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    role: $Enums.UserRole | null
    email: string | null
    password: string | null
    status: $Enums.UserStatus | null
    bannedAt: Date | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    role: number
    email: number
    password: number
    status: number
    bannedAt: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    role?: true
    email?: true
    password?: true
    status?: true
    bannedAt?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    role?: true
    email?: true
    password?: true
    status?: true
    bannedAt?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    role?: true
    email?: true
    password?: true
    status?: true
    bannedAt?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
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
    role: $Enums.UserRole
    email: string
    password: string
    status: $Enums.UserStatus
    bannedAt: Date | null
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
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
    role?: boolean
    email?: boolean
    password?: boolean
    status?: boolean
    bannedAt?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | User$studentArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    role?: boolean
    email?: boolean
    password?: boolean
    status?: boolean
    bannedAt?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "role" | "email" | "password" | "status" | "bannedAt" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | User$studentArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      role: $Enums.UserRole
      email: string
      password: string
      status: $Enums.UserStatus
      bannedAt: Date | null
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
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
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


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
    student<T extends User$studentArgs<ExtArgs> = {}>(args?: Subset<T, User$studentArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly role: FieldRef<"User", 'UserRole'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly status: FieldRef<"User", 'UserStatus'>
    readonly bannedAt: FieldRef<"User", 'DateTime'>
    readonly deletedAt: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User.student
   */
  export type User$studentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const CohortScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    startDate: 'startDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CohortScalarFieldEnum = (typeof CohortScalarFieldEnum)[keyof typeof CohortScalarFieldEnum]


  export const GroupScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    status: 'status',
    adminId: 'adminId',
    cohortId: 'cohortId',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GroupScalarFieldEnum = (typeof GroupScalarFieldEnum)[keyof typeof GroupScalarFieldEnum]


  export const GroupJoinRequestScalarFieldEnum: {
    id: 'id',
    status: 'status',
    reason: 'reason',
    userId: 'userId',
    groupId: 'groupId',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GroupJoinRequestScalarFieldEnum = (typeof GroupJoinRequestScalarFieldEnum)[keyof typeof GroupJoinRequestScalarFieldEnum]


  export const GroupLogScalarFieldEnum: {
    id: 'id',
    content: 'content',
    type: 'type',
    groupId: 'groupId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GroupLogScalarFieldEnum = (typeof GroupLogScalarFieldEnum)[keyof typeof GroupLogScalarFieldEnum]


  export const GroupMemberScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    groupId: 'groupId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GroupMemberScalarFieldEnum = (typeof GroupMemberScalarFieldEnum)[keyof typeof GroupMemberScalarFieldEnum]


  export const StudentScalarFieldEnum: {
    id: 'id',
    bio: 'bio',
    linkedIn: 'linkedIn',
    github: 'github',
    twitter: 'twitter',
    website: 'website',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const StudentCohortScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    cohortId: 'cohortId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StudentCohortScalarFieldEnum = (typeof StudentCohortScalarFieldEnum)[keyof typeof StudentCohortScalarFieldEnum]


  export const StudentLogScalarFieldEnum: {
    id: 'id',
    log: 'log',
    studentId: 'studentId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StudentLogScalarFieldEnum = (typeof StudentLogScalarFieldEnum)[keyof typeof StudentLogScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    role: 'role',
    email: 'email',
    password: 'password',
    status: 'status',
    bannedAt: 'bannedAt',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'GroupStatus'
   */
  export type EnumGroupStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GroupStatus'>
    


  /**
   * Reference to a field of type 'GroupStatus[]'
   */
  export type ListEnumGroupStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GroupStatus[]'>
    


  /**
   * Reference to a field of type 'RequestStatus'
   */
  export type EnumRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestStatus'>
    


  /**
   * Reference to a field of type 'RequestStatus[]'
   */
  export type ListEnumRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestStatus[]'>
    


  /**
   * Reference to a field of type 'LogType'
   */
  export type EnumLogTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LogType'>
    


  /**
   * Reference to a field of type 'LogType[]'
   */
  export type ListEnumLogTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LogType[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'UserStatus'
   */
  export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>
    


  /**
   * Reference to a field of type 'UserStatus[]'
   */
  export type ListEnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type CohortWhereInput = {
    AND?: CohortWhereInput | CohortWhereInput[]
    OR?: CohortWhereInput[]
    NOT?: CohortWhereInput | CohortWhereInput[]
    id?: StringFilter<"Cohort"> | string
    name?: StringFilter<"Cohort"> | string
    description?: StringNullableFilter<"Cohort"> | string | null
    startDate?: DateTimeFilter<"Cohort"> | Date | string
    createdAt?: DateTimeFilter<"Cohort"> | Date | string
    updatedAt?: DateTimeFilter<"Cohort"> | Date | string
    students?: StudentCohortListRelationFilter
    groups?: GroupListRelationFilter
  }

  export type CohortOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    students?: StudentCohortOrderByRelationAggregateInput
    groups?: GroupOrderByRelationAggregateInput
  }

  export type CohortWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CohortWhereInput | CohortWhereInput[]
    OR?: CohortWhereInput[]
    NOT?: CohortWhereInput | CohortWhereInput[]
    name?: StringFilter<"Cohort"> | string
    description?: StringNullableFilter<"Cohort"> | string | null
    startDate?: DateTimeFilter<"Cohort"> | Date | string
    createdAt?: DateTimeFilter<"Cohort"> | Date | string
    updatedAt?: DateTimeFilter<"Cohort"> | Date | string
    students?: StudentCohortListRelationFilter
    groups?: GroupListRelationFilter
  }, "id">

  export type CohortOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CohortCountOrderByAggregateInput
    _max?: CohortMaxOrderByAggregateInput
    _min?: CohortMinOrderByAggregateInput
  }

  export type CohortScalarWhereWithAggregatesInput = {
    AND?: CohortScalarWhereWithAggregatesInput | CohortScalarWhereWithAggregatesInput[]
    OR?: CohortScalarWhereWithAggregatesInput[]
    NOT?: CohortScalarWhereWithAggregatesInput | CohortScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Cohort"> | string
    name?: StringWithAggregatesFilter<"Cohort"> | string
    description?: StringNullableWithAggregatesFilter<"Cohort"> | string | null
    startDate?: DateTimeWithAggregatesFilter<"Cohort"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Cohort"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Cohort"> | Date | string
  }

  export type GroupWhereInput = {
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    id?: StringFilter<"Group"> | string
    name?: StringFilter<"Group"> | string
    description?: StringNullableFilter<"Group"> | string | null
    status?: EnumGroupStatusFilter<"Group"> | $Enums.GroupStatus
    adminId?: StringNullableFilter<"Group"> | string | null
    cohortId?: StringNullableFilter<"Group"> | string | null
    deletedAt?: DateTimeNullableFilter<"Group"> | Date | string | null
    createdAt?: DateTimeFilter<"Group"> | Date | string
    updatedAt?: DateTimeFilter<"Group"> | Date | string
    groupLogs?: GroupLogListRelationFilter
    admin?: XOR<StudentNullableScalarRelationFilter, StudentWhereInput> | null
    members?: GroupMemberListRelationFilter
    cohort?: XOR<CohortNullableScalarRelationFilter, CohortWhereInput> | null
    groupJoinRequests?: GroupJoinRequestListRelationFilter
  }

  export type GroupOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    adminId?: SortOrder
    cohortId?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    groupLogs?: GroupLogOrderByRelationAggregateInput
    admin?: StudentOrderByWithRelationInput
    members?: GroupMemberOrderByRelationAggregateInput
    cohort?: CohortOrderByWithRelationInput
    groupJoinRequests?: GroupJoinRequestOrderByRelationAggregateInput
  }

  export type GroupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    adminId?: string
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    name?: StringFilter<"Group"> | string
    description?: StringNullableFilter<"Group"> | string | null
    status?: EnumGroupStatusFilter<"Group"> | $Enums.GroupStatus
    cohortId?: StringNullableFilter<"Group"> | string | null
    deletedAt?: DateTimeNullableFilter<"Group"> | Date | string | null
    createdAt?: DateTimeFilter<"Group"> | Date | string
    updatedAt?: DateTimeFilter<"Group"> | Date | string
    groupLogs?: GroupLogListRelationFilter
    admin?: XOR<StudentNullableScalarRelationFilter, StudentWhereInput> | null
    members?: GroupMemberListRelationFilter
    cohort?: XOR<CohortNullableScalarRelationFilter, CohortWhereInput> | null
    groupJoinRequests?: GroupJoinRequestListRelationFilter
  }, "id" | "adminId">

  export type GroupOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    adminId?: SortOrder
    cohortId?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GroupCountOrderByAggregateInput
    _max?: GroupMaxOrderByAggregateInput
    _min?: GroupMinOrderByAggregateInput
  }

  export type GroupScalarWhereWithAggregatesInput = {
    AND?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    OR?: GroupScalarWhereWithAggregatesInput[]
    NOT?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Group"> | string
    name?: StringWithAggregatesFilter<"Group"> | string
    description?: StringNullableWithAggregatesFilter<"Group"> | string | null
    status?: EnumGroupStatusWithAggregatesFilter<"Group"> | $Enums.GroupStatus
    adminId?: StringNullableWithAggregatesFilter<"Group"> | string | null
    cohortId?: StringNullableWithAggregatesFilter<"Group"> | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Group"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Group"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Group"> | Date | string
  }

  export type GroupJoinRequestWhereInput = {
    AND?: GroupJoinRequestWhereInput | GroupJoinRequestWhereInput[]
    OR?: GroupJoinRequestWhereInput[]
    NOT?: GroupJoinRequestWhereInput | GroupJoinRequestWhereInput[]
    id?: StringFilter<"GroupJoinRequest"> | string
    status?: EnumRequestStatusFilter<"GroupJoinRequest"> | $Enums.RequestStatus
    reason?: StringFilter<"GroupJoinRequest"> | string
    userId?: StringFilter<"GroupJoinRequest"> | string
    groupId?: StringFilter<"GroupJoinRequest"> | string
    deletedAt?: DateTimeNullableFilter<"GroupJoinRequest"> | Date | string | null
    createdAt?: DateTimeFilter<"GroupJoinRequest"> | Date | string
    updatedAt?: DateTimeFilter<"GroupJoinRequest"> | Date | string
    user?: XOR<StudentNullableScalarRelationFilter, StudentWhereInput> | null
    group?: XOR<GroupNullableScalarRelationFilter, GroupWhereInput> | null
  }

  export type GroupJoinRequestOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    reason?: SortOrder
    userId?: SortOrder
    groupId?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: StudentOrderByWithRelationInput
    group?: GroupOrderByWithRelationInput
  }

  export type GroupJoinRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GroupJoinRequestWhereInput | GroupJoinRequestWhereInput[]
    OR?: GroupJoinRequestWhereInput[]
    NOT?: GroupJoinRequestWhereInput | GroupJoinRequestWhereInput[]
    status?: EnumRequestStatusFilter<"GroupJoinRequest"> | $Enums.RequestStatus
    reason?: StringFilter<"GroupJoinRequest"> | string
    userId?: StringFilter<"GroupJoinRequest"> | string
    groupId?: StringFilter<"GroupJoinRequest"> | string
    deletedAt?: DateTimeNullableFilter<"GroupJoinRequest"> | Date | string | null
    createdAt?: DateTimeFilter<"GroupJoinRequest"> | Date | string
    updatedAt?: DateTimeFilter<"GroupJoinRequest"> | Date | string
    user?: XOR<StudentNullableScalarRelationFilter, StudentWhereInput> | null
    group?: XOR<GroupNullableScalarRelationFilter, GroupWhereInput> | null
  }, "id">

  export type GroupJoinRequestOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    reason?: SortOrder
    userId?: SortOrder
    groupId?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GroupJoinRequestCountOrderByAggregateInput
    _max?: GroupJoinRequestMaxOrderByAggregateInput
    _min?: GroupJoinRequestMinOrderByAggregateInput
  }

  export type GroupJoinRequestScalarWhereWithAggregatesInput = {
    AND?: GroupJoinRequestScalarWhereWithAggregatesInput | GroupJoinRequestScalarWhereWithAggregatesInput[]
    OR?: GroupJoinRequestScalarWhereWithAggregatesInput[]
    NOT?: GroupJoinRequestScalarWhereWithAggregatesInput | GroupJoinRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GroupJoinRequest"> | string
    status?: EnumRequestStatusWithAggregatesFilter<"GroupJoinRequest"> | $Enums.RequestStatus
    reason?: StringWithAggregatesFilter<"GroupJoinRequest"> | string
    userId?: StringWithAggregatesFilter<"GroupJoinRequest"> | string
    groupId?: StringWithAggregatesFilter<"GroupJoinRequest"> | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"GroupJoinRequest"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"GroupJoinRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GroupJoinRequest"> | Date | string
  }

  export type GroupLogWhereInput = {
    AND?: GroupLogWhereInput | GroupLogWhereInput[]
    OR?: GroupLogWhereInput[]
    NOT?: GroupLogWhereInput | GroupLogWhereInput[]
    id?: StringFilter<"GroupLog"> | string
    content?: StringFilter<"GroupLog"> | string
    type?: EnumLogTypeFilter<"GroupLog"> | $Enums.LogType
    groupId?: StringFilter<"GroupLog"> | string
    createdAt?: DateTimeFilter<"GroupLog"> | Date | string
    updatedAt?: DateTimeFilter<"GroupLog"> | Date | string
    group?: XOR<GroupNullableScalarRelationFilter, GroupWhereInput> | null
  }

  export type GroupLogOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    type?: SortOrder
    groupId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    group?: GroupOrderByWithRelationInput
  }

  export type GroupLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GroupLogWhereInput | GroupLogWhereInput[]
    OR?: GroupLogWhereInput[]
    NOT?: GroupLogWhereInput | GroupLogWhereInput[]
    content?: StringFilter<"GroupLog"> | string
    type?: EnumLogTypeFilter<"GroupLog"> | $Enums.LogType
    groupId?: StringFilter<"GroupLog"> | string
    createdAt?: DateTimeFilter<"GroupLog"> | Date | string
    updatedAt?: DateTimeFilter<"GroupLog"> | Date | string
    group?: XOR<GroupNullableScalarRelationFilter, GroupWhereInput> | null
  }, "id">

  export type GroupLogOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    type?: SortOrder
    groupId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GroupLogCountOrderByAggregateInput
    _max?: GroupLogMaxOrderByAggregateInput
    _min?: GroupLogMinOrderByAggregateInput
  }

  export type GroupLogScalarWhereWithAggregatesInput = {
    AND?: GroupLogScalarWhereWithAggregatesInput | GroupLogScalarWhereWithAggregatesInput[]
    OR?: GroupLogScalarWhereWithAggregatesInput[]
    NOT?: GroupLogScalarWhereWithAggregatesInput | GroupLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GroupLog"> | string
    content?: StringWithAggregatesFilter<"GroupLog"> | string
    type?: EnumLogTypeWithAggregatesFilter<"GroupLog"> | $Enums.LogType
    groupId?: StringWithAggregatesFilter<"GroupLog"> | string
    createdAt?: DateTimeWithAggregatesFilter<"GroupLog"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GroupLog"> | Date | string
  }

  export type GroupMemberWhereInput = {
    AND?: GroupMemberWhereInput | GroupMemberWhereInput[]
    OR?: GroupMemberWhereInput[]
    NOT?: GroupMemberWhereInput | GroupMemberWhereInput[]
    id?: StringFilter<"GroupMember"> | string
    studentId?: StringFilter<"GroupMember"> | string
    groupId?: StringFilter<"GroupMember"> | string
    createdAt?: DateTimeFilter<"GroupMember"> | Date | string
    updatedAt?: DateTimeFilter<"GroupMember"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
  }

  export type GroupMemberOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    groupId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    student?: StudentOrderByWithRelationInput
    group?: GroupOrderByWithRelationInput
  }

  export type GroupMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GroupMemberWhereInput | GroupMemberWhereInput[]
    OR?: GroupMemberWhereInput[]
    NOT?: GroupMemberWhereInput | GroupMemberWhereInput[]
    studentId?: StringFilter<"GroupMember"> | string
    groupId?: StringFilter<"GroupMember"> | string
    createdAt?: DateTimeFilter<"GroupMember"> | Date | string
    updatedAt?: DateTimeFilter<"GroupMember"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
  }, "id">

  export type GroupMemberOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    groupId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GroupMemberCountOrderByAggregateInput
    _max?: GroupMemberMaxOrderByAggregateInput
    _min?: GroupMemberMinOrderByAggregateInput
  }

  export type GroupMemberScalarWhereWithAggregatesInput = {
    AND?: GroupMemberScalarWhereWithAggregatesInput | GroupMemberScalarWhereWithAggregatesInput[]
    OR?: GroupMemberScalarWhereWithAggregatesInput[]
    NOT?: GroupMemberScalarWhereWithAggregatesInput | GroupMemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GroupMember"> | string
    studentId?: StringWithAggregatesFilter<"GroupMember"> | string
    groupId?: StringWithAggregatesFilter<"GroupMember"> | string
    createdAt?: DateTimeWithAggregatesFilter<"GroupMember"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GroupMember"> | Date | string
  }

  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    id?: StringFilter<"Student"> | string
    bio?: StringNullableFilter<"Student"> | string | null
    linkedIn?: StringNullableFilter<"Student"> | string | null
    github?: StringNullableFilter<"Student"> | string | null
    twitter?: StringNullableFilter<"Student"> | string | null
    website?: StringNullableFilter<"Student"> | string | null
    userId?: StringFilter<"Student"> | string
    createdAt?: DateTimeFilter<"Student"> | Date | string
    updatedAt?: DateTimeFilter<"Student"> | Date | string
    studentLogs?: StudentLogListRelationFilter
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    cohorts?: StudentCohortListRelationFilter
    groups?: GroupMemberListRelationFilter
    adminOfGroups?: GroupListRelationFilter
    groupJoinRequests?: GroupJoinRequestListRelationFilter
  }

  export type StudentOrderByWithRelationInput = {
    id?: SortOrder
    bio?: SortOrder
    linkedIn?: SortOrder
    github?: SortOrder
    twitter?: SortOrder
    website?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    studentLogs?: StudentLogOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
    cohorts?: StudentCohortOrderByRelationAggregateInput
    groups?: GroupMemberOrderByRelationAggregateInput
    adminOfGroups?: GroupOrderByRelationAggregateInput
    groupJoinRequests?: GroupJoinRequestOrderByRelationAggregateInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    bio?: StringNullableFilter<"Student"> | string | null
    linkedIn?: StringNullableFilter<"Student"> | string | null
    github?: StringNullableFilter<"Student"> | string | null
    twitter?: StringNullableFilter<"Student"> | string | null
    website?: StringNullableFilter<"Student"> | string | null
    createdAt?: DateTimeFilter<"Student"> | Date | string
    updatedAt?: DateTimeFilter<"Student"> | Date | string
    studentLogs?: StudentLogListRelationFilter
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    cohorts?: StudentCohortListRelationFilter
    groups?: GroupMemberListRelationFilter
    adminOfGroups?: GroupListRelationFilter
    groupJoinRequests?: GroupJoinRequestListRelationFilter
  }, "id" | "userId">

  export type StudentOrderByWithAggregationInput = {
    id?: SortOrder
    bio?: SortOrder
    linkedIn?: SortOrder
    github?: SortOrder
    twitter?: SortOrder
    website?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StudentCountOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Student"> | string
    bio?: StringNullableWithAggregatesFilter<"Student"> | string | null
    linkedIn?: StringNullableWithAggregatesFilter<"Student"> | string | null
    github?: StringNullableWithAggregatesFilter<"Student"> | string | null
    twitter?: StringNullableWithAggregatesFilter<"Student"> | string | null
    website?: StringNullableWithAggregatesFilter<"Student"> | string | null
    userId?: StringWithAggregatesFilter<"Student"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Student"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Student"> | Date | string
  }

  export type StudentCohortWhereInput = {
    AND?: StudentCohortWhereInput | StudentCohortWhereInput[]
    OR?: StudentCohortWhereInput[]
    NOT?: StudentCohortWhereInput | StudentCohortWhereInput[]
    id?: StringFilter<"StudentCohort"> | string
    studentId?: StringFilter<"StudentCohort"> | string
    cohortId?: StringFilter<"StudentCohort"> | string
    createdAt?: DateTimeFilter<"StudentCohort"> | Date | string
    updatedAt?: DateTimeFilter<"StudentCohort"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    cohort?: XOR<CohortScalarRelationFilter, CohortWhereInput>
  }

  export type StudentCohortOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    cohortId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    student?: StudentOrderByWithRelationInput
    cohort?: CohortOrderByWithRelationInput
  }

  export type StudentCohortWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StudentCohortWhereInput | StudentCohortWhereInput[]
    OR?: StudentCohortWhereInput[]
    NOT?: StudentCohortWhereInput | StudentCohortWhereInput[]
    studentId?: StringFilter<"StudentCohort"> | string
    cohortId?: StringFilter<"StudentCohort"> | string
    createdAt?: DateTimeFilter<"StudentCohort"> | Date | string
    updatedAt?: DateTimeFilter<"StudentCohort"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    cohort?: XOR<CohortScalarRelationFilter, CohortWhereInput>
  }, "id">

  export type StudentCohortOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    cohortId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StudentCohortCountOrderByAggregateInput
    _max?: StudentCohortMaxOrderByAggregateInput
    _min?: StudentCohortMinOrderByAggregateInput
  }

  export type StudentCohortScalarWhereWithAggregatesInput = {
    AND?: StudentCohortScalarWhereWithAggregatesInput | StudentCohortScalarWhereWithAggregatesInput[]
    OR?: StudentCohortScalarWhereWithAggregatesInput[]
    NOT?: StudentCohortScalarWhereWithAggregatesInput | StudentCohortScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StudentCohort"> | string
    studentId?: StringWithAggregatesFilter<"StudentCohort"> | string
    cohortId?: StringWithAggregatesFilter<"StudentCohort"> | string
    createdAt?: DateTimeWithAggregatesFilter<"StudentCohort"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StudentCohort"> | Date | string
  }

  export type StudentLogWhereInput = {
    AND?: StudentLogWhereInput | StudentLogWhereInput[]
    OR?: StudentLogWhereInput[]
    NOT?: StudentLogWhereInput | StudentLogWhereInput[]
    id?: StringFilter<"StudentLog"> | string
    log?: StringFilter<"StudentLog"> | string
    studentId?: StringFilter<"StudentLog"> | string
    createdAt?: DateTimeFilter<"StudentLog"> | Date | string
    updatedAt?: DateTimeFilter<"StudentLog"> | Date | string
    student?: XOR<StudentNullableScalarRelationFilter, StudentWhereInput> | null
  }

  export type StudentLogOrderByWithRelationInput = {
    id?: SortOrder
    log?: SortOrder
    studentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    student?: StudentOrderByWithRelationInput
  }

  export type StudentLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StudentLogWhereInput | StudentLogWhereInput[]
    OR?: StudentLogWhereInput[]
    NOT?: StudentLogWhereInput | StudentLogWhereInput[]
    log?: StringFilter<"StudentLog"> | string
    studentId?: StringFilter<"StudentLog"> | string
    createdAt?: DateTimeFilter<"StudentLog"> | Date | string
    updatedAt?: DateTimeFilter<"StudentLog"> | Date | string
    student?: XOR<StudentNullableScalarRelationFilter, StudentWhereInput> | null
  }, "id">

  export type StudentLogOrderByWithAggregationInput = {
    id?: SortOrder
    log?: SortOrder
    studentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StudentLogCountOrderByAggregateInput
    _max?: StudentLogMaxOrderByAggregateInput
    _min?: StudentLogMinOrderByAggregateInput
  }

  export type StudentLogScalarWhereWithAggregatesInput = {
    AND?: StudentLogScalarWhereWithAggregatesInput | StudentLogScalarWhereWithAggregatesInput[]
    OR?: StudentLogScalarWhereWithAggregatesInput[]
    NOT?: StudentLogScalarWhereWithAggregatesInput | StudentLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StudentLog"> | string
    log?: StringWithAggregatesFilter<"StudentLog"> | string
    studentId?: StringWithAggregatesFilter<"StudentLog"> | string
    createdAt?: DateTimeWithAggregatesFilter<"StudentLog"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StudentLog"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    bannedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    student?: XOR<StudentNullableScalarRelationFilter, StudentWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    email?: SortOrder
    password?: SortOrder
    status?: SortOrder
    bannedAt?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    student?: StudentOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    password?: StringFilter<"User"> | string
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    bannedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    student?: XOR<StudentNullableScalarRelationFilter, StudentWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    email?: SortOrder
    password?: SortOrder
    status?: SortOrder
    bannedAt?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    status?: EnumUserStatusWithAggregatesFilter<"User"> | $Enums.UserStatus
    bannedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CohortCreateInput = {
    id?: string
    name: string
    description?: string | null
    startDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    students?: StudentCohortCreateNestedManyWithoutCohortInput
    groups?: GroupCreateNestedManyWithoutCohortInput
  }

  export type CohortUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    startDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    students?: StudentCohortUncheckedCreateNestedManyWithoutCohortInput
    groups?: GroupUncheckedCreateNestedManyWithoutCohortInput
  }

  export type CohortUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentCohortUpdateManyWithoutCohortNestedInput
    groups?: GroupUpdateManyWithoutCohortNestedInput
  }

  export type CohortUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentCohortUncheckedUpdateManyWithoutCohortNestedInput
    groups?: GroupUncheckedUpdateManyWithoutCohortNestedInput
  }

  export type CohortCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    startDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CohortUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CohortUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupCreateInput = {
    id?: string
    name: string
    description?: string | null
    status: $Enums.GroupStatus
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    groupLogs?: GroupLogCreateNestedManyWithoutGroupInput
    admin?: StudentCreateNestedOneWithoutAdminOfGroupsInput
    members?: GroupMemberCreateNestedManyWithoutGroupInput
    cohort?: CohortCreateNestedOneWithoutGroupsInput
    groupJoinRequests?: GroupJoinRequestCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    status: $Enums.GroupStatus
    adminId?: string | null
    cohortId?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    groupLogs?: GroupLogUncheckedCreateNestedManyWithoutGroupInput
    members?: GroupMemberUncheckedCreateNestedManyWithoutGroupInput
    groupJoinRequests?: GroupJoinRequestUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGroupStatusFieldUpdateOperationsInput | $Enums.GroupStatus
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupLogs?: GroupLogUpdateManyWithoutGroupNestedInput
    admin?: StudentUpdateOneWithoutAdminOfGroupsNestedInput
    members?: GroupMemberUpdateManyWithoutGroupNestedInput
    cohort?: CohortUpdateOneWithoutGroupsNestedInput
    groupJoinRequests?: GroupJoinRequestUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGroupStatusFieldUpdateOperationsInput | $Enums.GroupStatus
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    cohortId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupLogs?: GroupLogUncheckedUpdateManyWithoutGroupNestedInput
    members?: GroupMemberUncheckedUpdateManyWithoutGroupNestedInput
    groupJoinRequests?: GroupJoinRequestUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    status: $Enums.GroupStatus
    adminId?: string | null
    cohortId?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGroupStatusFieldUpdateOperationsInput | $Enums.GroupStatus
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGroupStatusFieldUpdateOperationsInput | $Enums.GroupStatus
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    cohortId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupJoinRequestCreateInput = {
    id?: string
    status: $Enums.RequestStatus
    reason: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: StudentCreateNestedOneWithoutGroupJoinRequestsInput
    group?: GroupCreateNestedOneWithoutGroupJoinRequestsInput
  }

  export type GroupJoinRequestUncheckedCreateInput = {
    id?: string
    status: $Enums.RequestStatus
    reason: string
    userId: string
    groupId: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupJoinRequestUpdateInput = {
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    reason?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: StudentUpdateOneWithoutGroupJoinRequestsNestedInput
    group?: GroupUpdateOneWithoutGroupJoinRequestsNestedInput
  }

  export type GroupJoinRequestUncheckedUpdateInput = {
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    reason?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupJoinRequestCreateManyInput = {
    id?: string
    status: $Enums.RequestStatus
    reason: string
    userId: string
    groupId: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupJoinRequestUpdateManyMutationInput = {
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    reason?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupJoinRequestUncheckedUpdateManyInput = {
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    reason?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupLogCreateInput = {
    id?: string
    content: string
    type: $Enums.LogType
    createdAt?: Date | string
    updatedAt?: Date | string
    group?: GroupCreateNestedOneWithoutGroupLogsInput
  }

  export type GroupLogUncheckedCreateInput = {
    id?: string
    content: string
    type: $Enums.LogType
    groupId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupLogUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumLogTypeFieldUpdateOperationsInput | $Enums.LogType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneWithoutGroupLogsNestedInput
  }

  export type GroupLogUncheckedUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumLogTypeFieldUpdateOperationsInput | $Enums.LogType
    groupId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupLogCreateManyInput = {
    id?: string
    content: string
    type: $Enums.LogType
    groupId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupLogUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumLogTypeFieldUpdateOperationsInput | $Enums.LogType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupLogUncheckedUpdateManyInput = {
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumLogTypeFieldUpdateOperationsInput | $Enums.LogType
    groupId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMemberCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    student: StudentCreateNestedOneWithoutGroupsInput
    group: GroupCreateNestedOneWithoutMembersInput
  }

  export type GroupMemberUncheckedCreateInput = {
    id?: string
    studentId: string
    groupId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupMemberUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutGroupsNestedInput
    group?: GroupUpdateOneRequiredWithoutMembersNestedInput
  }

  export type GroupMemberUncheckedUpdateInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMemberCreateManyInput = {
    id?: string
    studentId: string
    groupId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupMemberUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMemberUncheckedUpdateManyInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentCreateInput = {
    id?: string
    bio?: string | null
    linkedIn?: string | null
    github?: string | null
    twitter?: string | null
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    studentLogs?: StudentLogCreateNestedManyWithoutStudentInput
    user?: UserCreateNestedOneWithoutStudentInput
    cohorts?: StudentCohortCreateNestedManyWithoutStudentInput
    groups?: GroupMemberCreateNestedManyWithoutStudentInput
    adminOfGroups?: GroupCreateNestedManyWithoutAdminInput
    groupJoinRequests?: GroupJoinRequestCreateNestedManyWithoutUserInput
  }

  export type StudentUncheckedCreateInput = {
    id?: string
    bio?: string | null
    linkedIn?: string | null
    github?: string | null
    twitter?: string | null
    website?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    studentLogs?: StudentLogUncheckedCreateNestedManyWithoutStudentInput
    cohorts?: StudentCohortUncheckedCreateNestedManyWithoutStudentInput
    groups?: GroupMemberUncheckedCreateNestedManyWithoutStudentInput
    adminOfGroups?: GroupUncheckedCreateNestedManyWithoutAdminInput
    groupJoinRequests?: GroupJoinRequestUncheckedCreateNestedManyWithoutUserInput
  }

  export type StudentUpdateInput = {
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentLogs?: StudentLogUpdateManyWithoutStudentNestedInput
    user?: UserUpdateOneWithoutStudentNestedInput
    cohorts?: StudentCohortUpdateManyWithoutStudentNestedInput
    groups?: GroupMemberUpdateManyWithoutStudentNestedInput
    adminOfGroups?: GroupUpdateManyWithoutAdminNestedInput
    groupJoinRequests?: GroupJoinRequestUpdateManyWithoutUserNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentLogs?: StudentLogUncheckedUpdateManyWithoutStudentNestedInput
    cohorts?: StudentCohortUncheckedUpdateManyWithoutStudentNestedInput
    groups?: GroupMemberUncheckedUpdateManyWithoutStudentNestedInput
    adminOfGroups?: GroupUncheckedUpdateManyWithoutAdminNestedInput
    groupJoinRequests?: GroupJoinRequestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type StudentCreateManyInput = {
    id?: string
    bio?: string | null
    linkedIn?: string | null
    github?: string | null
    twitter?: string | null
    website?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentUpdateManyMutationInput = {
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentUncheckedUpdateManyInput = {
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentCohortCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    student: StudentCreateNestedOneWithoutCohortsInput
    cohort: CohortCreateNestedOneWithoutStudentsInput
  }

  export type StudentCohortUncheckedCreateInput = {
    id?: string
    studentId: string
    cohortId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentCohortUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutCohortsNestedInput
    cohort?: CohortUpdateOneRequiredWithoutStudentsNestedInput
  }

  export type StudentCohortUncheckedUpdateInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    cohortId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentCohortCreateManyInput = {
    id?: string
    studentId: string
    cohortId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentCohortUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentCohortUncheckedUpdateManyInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    cohortId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentLogCreateInput = {
    id?: string
    log: string
    createdAt?: Date | string
    updatedAt?: Date | string
    student?: StudentCreateNestedOneWithoutStudentLogsInput
  }

  export type StudentLogUncheckedCreateInput = {
    id?: string
    log: string
    studentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentLogUpdateInput = {
    log?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneWithoutStudentLogsNestedInput
  }

  export type StudentLogUncheckedUpdateInput = {
    log?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentLogCreateManyInput = {
    id?: string
    log: string
    studentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentLogUpdateManyMutationInput = {
    log?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentLogUncheckedUpdateManyInput = {
    log?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    role?: $Enums.UserRole
    email: string
    password: string
    status?: $Enums.UserStatus
    bannedAt?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    student?: StudentCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    role?: $Enums.UserRole
    email: string
    password: string
    status?: $Enums.UserStatus
    bannedAt?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    student?: StudentUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    bannedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    bannedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    role?: $Enums.UserRole
    email: string
    password: string
    status?: $Enums.UserStatus
    bannedAt?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    bannedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    bannedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    isSet?: boolean
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

  export type StudentCohortListRelationFilter = {
    every?: StudentCohortWhereInput
    some?: StudentCohortWhereInput
    none?: StudentCohortWhereInput
  }

  export type GroupListRelationFilter = {
    every?: GroupWhereInput
    some?: GroupWhereInput
    none?: GroupWhereInput
  }

  export type StudentCohortOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CohortCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CohortMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CohortMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    isSet?: boolean
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

  export type EnumGroupStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.GroupStatus | EnumGroupStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GroupStatus[] | ListEnumGroupStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GroupStatus[] | ListEnumGroupStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGroupStatusFilter<$PrismaModel> | $Enums.GroupStatus
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
    isSet?: boolean
  }

  export type GroupLogListRelationFilter = {
    every?: GroupLogWhereInput
    some?: GroupLogWhereInput
    none?: GroupLogWhereInput
  }

  export type StudentNullableScalarRelationFilter = {
    is?: StudentWhereInput | null
    isNot?: StudentWhereInput | null
  }

  export type GroupMemberListRelationFilter = {
    every?: GroupMemberWhereInput
    some?: GroupMemberWhereInput
    none?: GroupMemberWhereInput
  }

  export type CohortNullableScalarRelationFilter = {
    is?: CohortWhereInput | null
    isNot?: CohortWhereInput | null
  }

  export type GroupJoinRequestListRelationFilter = {
    every?: GroupJoinRequestWhereInput
    some?: GroupJoinRequestWhereInput
    none?: GroupJoinRequestWhereInput
  }

  export type GroupLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupJoinRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    adminId?: SortOrder
    cohortId?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    adminId?: SortOrder
    cohortId?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    adminId?: SortOrder
    cohortId?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumGroupStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GroupStatus | EnumGroupStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GroupStatus[] | ListEnumGroupStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GroupStatus[] | ListEnumGroupStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGroupStatusWithAggregatesFilter<$PrismaModel> | $Enums.GroupStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGroupStatusFilter<$PrismaModel>
    _max?: NestedEnumGroupStatusFilter<$PrismaModel>
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
    isSet?: boolean
  }

  export type EnumRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusFilter<$PrismaModel> | $Enums.RequestStatus
  }

  export type GroupNullableScalarRelationFilter = {
    is?: GroupWhereInput | null
    isNot?: GroupWhereInput | null
  }

  export type GroupJoinRequestCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    reason?: SortOrder
    userId?: SortOrder
    groupId?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupJoinRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    reason?: SortOrder
    userId?: SortOrder
    groupId?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupJoinRequestMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    reason?: SortOrder
    userId?: SortOrder
    groupId?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.RequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumRequestStatusFilter<$PrismaModel>
  }

  export type EnumLogTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LogType | EnumLogTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LogType[] | ListEnumLogTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LogType[] | ListEnumLogTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLogTypeFilter<$PrismaModel> | $Enums.LogType
  }

  export type GroupLogCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    type?: SortOrder
    groupId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupLogMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    type?: SortOrder
    groupId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupLogMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    type?: SortOrder
    groupId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumLogTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LogType | EnumLogTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LogType[] | ListEnumLogTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LogType[] | ListEnumLogTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLogTypeWithAggregatesFilter<$PrismaModel> | $Enums.LogType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLogTypeFilter<$PrismaModel>
    _max?: NestedEnumLogTypeFilter<$PrismaModel>
  }

  export type StudentScalarRelationFilter = {
    is?: StudentWhereInput
    isNot?: StudentWhereInput
  }

  export type GroupScalarRelationFilter = {
    is?: GroupWhereInput
    isNot?: GroupWhereInput
  }

  export type GroupMemberCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    groupId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    groupId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupMemberMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    groupId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentLogListRelationFilter = {
    every?: StudentLogWhereInput
    some?: StudentLogWhereInput
    none?: StudentLogWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type StudentLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentCountOrderByAggregateInput = {
    id?: SortOrder
    bio?: SortOrder
    linkedIn?: SortOrder
    github?: SortOrder
    twitter?: SortOrder
    website?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    id?: SortOrder
    bio?: SortOrder
    linkedIn?: SortOrder
    github?: SortOrder
    twitter?: SortOrder
    website?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    id?: SortOrder
    bio?: SortOrder
    linkedIn?: SortOrder
    github?: SortOrder
    twitter?: SortOrder
    website?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CohortScalarRelationFilter = {
    is?: CohortWhereInput
    isNot?: CohortWhereInput
  }

  export type StudentCohortCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    cohortId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentCohortMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    cohortId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentCohortMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    cohortId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentLogCountOrderByAggregateInput = {
    id?: SortOrder
    log?: SortOrder
    studentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentLogMaxOrderByAggregateInput = {
    id?: SortOrder
    log?: SortOrder
    studentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentLogMinOrderByAggregateInput = {
    id?: SortOrder
    log?: SortOrder
    studentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    email?: SortOrder
    password?: SortOrder
    status?: SortOrder
    bannedAt?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    email?: SortOrder
    password?: SortOrder
    status?: SortOrder
    bannedAt?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    email?: SortOrder
    password?: SortOrder
    status?: SortOrder
    bannedAt?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type StudentCohortCreateNestedManyWithoutCohortInput = {
    create?: XOR<StudentCohortCreateWithoutCohortInput, StudentCohortUncheckedCreateWithoutCohortInput> | StudentCohortCreateWithoutCohortInput[] | StudentCohortUncheckedCreateWithoutCohortInput[]
    connectOrCreate?: StudentCohortCreateOrConnectWithoutCohortInput | StudentCohortCreateOrConnectWithoutCohortInput[]
    createMany?: StudentCohortCreateManyCohortInputEnvelope
    connect?: StudentCohortWhereUniqueInput | StudentCohortWhereUniqueInput[]
  }

  export type GroupCreateNestedManyWithoutCohortInput = {
    create?: XOR<GroupCreateWithoutCohortInput, GroupUncheckedCreateWithoutCohortInput> | GroupCreateWithoutCohortInput[] | GroupUncheckedCreateWithoutCohortInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutCohortInput | GroupCreateOrConnectWithoutCohortInput[]
    createMany?: GroupCreateManyCohortInputEnvelope
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type StudentCohortUncheckedCreateNestedManyWithoutCohortInput = {
    create?: XOR<StudentCohortCreateWithoutCohortInput, StudentCohortUncheckedCreateWithoutCohortInput> | StudentCohortCreateWithoutCohortInput[] | StudentCohortUncheckedCreateWithoutCohortInput[]
    connectOrCreate?: StudentCohortCreateOrConnectWithoutCohortInput | StudentCohortCreateOrConnectWithoutCohortInput[]
    createMany?: StudentCohortCreateManyCohortInputEnvelope
    connect?: StudentCohortWhereUniqueInput | StudentCohortWhereUniqueInput[]
  }

  export type GroupUncheckedCreateNestedManyWithoutCohortInput = {
    create?: XOR<GroupCreateWithoutCohortInput, GroupUncheckedCreateWithoutCohortInput> | GroupCreateWithoutCohortInput[] | GroupUncheckedCreateWithoutCohortInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutCohortInput | GroupCreateOrConnectWithoutCohortInput[]
    createMany?: GroupCreateManyCohortInputEnvelope
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StudentCohortUpdateManyWithoutCohortNestedInput = {
    create?: XOR<StudentCohortCreateWithoutCohortInput, StudentCohortUncheckedCreateWithoutCohortInput> | StudentCohortCreateWithoutCohortInput[] | StudentCohortUncheckedCreateWithoutCohortInput[]
    connectOrCreate?: StudentCohortCreateOrConnectWithoutCohortInput | StudentCohortCreateOrConnectWithoutCohortInput[]
    upsert?: StudentCohortUpsertWithWhereUniqueWithoutCohortInput | StudentCohortUpsertWithWhereUniqueWithoutCohortInput[]
    createMany?: StudentCohortCreateManyCohortInputEnvelope
    set?: StudentCohortWhereUniqueInput | StudentCohortWhereUniqueInput[]
    disconnect?: StudentCohortWhereUniqueInput | StudentCohortWhereUniqueInput[]
    delete?: StudentCohortWhereUniqueInput | StudentCohortWhereUniqueInput[]
    connect?: StudentCohortWhereUniqueInput | StudentCohortWhereUniqueInput[]
    update?: StudentCohortUpdateWithWhereUniqueWithoutCohortInput | StudentCohortUpdateWithWhereUniqueWithoutCohortInput[]
    updateMany?: StudentCohortUpdateManyWithWhereWithoutCohortInput | StudentCohortUpdateManyWithWhereWithoutCohortInput[]
    deleteMany?: StudentCohortScalarWhereInput | StudentCohortScalarWhereInput[]
  }

  export type GroupUpdateManyWithoutCohortNestedInput = {
    create?: XOR<GroupCreateWithoutCohortInput, GroupUncheckedCreateWithoutCohortInput> | GroupCreateWithoutCohortInput[] | GroupUncheckedCreateWithoutCohortInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutCohortInput | GroupCreateOrConnectWithoutCohortInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutCohortInput | GroupUpsertWithWhereUniqueWithoutCohortInput[]
    createMany?: GroupCreateManyCohortInputEnvelope
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutCohortInput | GroupUpdateWithWhereUniqueWithoutCohortInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutCohortInput | GroupUpdateManyWithWhereWithoutCohortInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type StudentCohortUncheckedUpdateManyWithoutCohortNestedInput = {
    create?: XOR<StudentCohortCreateWithoutCohortInput, StudentCohortUncheckedCreateWithoutCohortInput> | StudentCohortCreateWithoutCohortInput[] | StudentCohortUncheckedCreateWithoutCohortInput[]
    connectOrCreate?: StudentCohortCreateOrConnectWithoutCohortInput | StudentCohortCreateOrConnectWithoutCohortInput[]
    upsert?: StudentCohortUpsertWithWhereUniqueWithoutCohortInput | StudentCohortUpsertWithWhereUniqueWithoutCohortInput[]
    createMany?: StudentCohortCreateManyCohortInputEnvelope
    set?: StudentCohortWhereUniqueInput | StudentCohortWhereUniqueInput[]
    disconnect?: StudentCohortWhereUniqueInput | StudentCohortWhereUniqueInput[]
    delete?: StudentCohortWhereUniqueInput | StudentCohortWhereUniqueInput[]
    connect?: StudentCohortWhereUniqueInput | StudentCohortWhereUniqueInput[]
    update?: StudentCohortUpdateWithWhereUniqueWithoutCohortInput | StudentCohortUpdateWithWhereUniqueWithoutCohortInput[]
    updateMany?: StudentCohortUpdateManyWithWhereWithoutCohortInput | StudentCohortUpdateManyWithWhereWithoutCohortInput[]
    deleteMany?: StudentCohortScalarWhereInput | StudentCohortScalarWhereInput[]
  }

  export type GroupUncheckedUpdateManyWithoutCohortNestedInput = {
    create?: XOR<GroupCreateWithoutCohortInput, GroupUncheckedCreateWithoutCohortInput> | GroupCreateWithoutCohortInput[] | GroupUncheckedCreateWithoutCohortInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutCohortInput | GroupCreateOrConnectWithoutCohortInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutCohortInput | GroupUpsertWithWhereUniqueWithoutCohortInput[]
    createMany?: GroupCreateManyCohortInputEnvelope
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutCohortInput | GroupUpdateWithWhereUniqueWithoutCohortInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutCohortInput | GroupUpdateManyWithWhereWithoutCohortInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type GroupLogCreateNestedManyWithoutGroupInput = {
    create?: XOR<GroupLogCreateWithoutGroupInput, GroupLogUncheckedCreateWithoutGroupInput> | GroupLogCreateWithoutGroupInput[] | GroupLogUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupLogCreateOrConnectWithoutGroupInput | GroupLogCreateOrConnectWithoutGroupInput[]
    createMany?: GroupLogCreateManyGroupInputEnvelope
    connect?: GroupLogWhereUniqueInput | GroupLogWhereUniqueInput[]
  }

  export type StudentCreateNestedOneWithoutAdminOfGroupsInput = {
    create?: XOR<StudentCreateWithoutAdminOfGroupsInput, StudentUncheckedCreateWithoutAdminOfGroupsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutAdminOfGroupsInput
    connect?: StudentWhereUniqueInput
  }

  export type GroupMemberCreateNestedManyWithoutGroupInput = {
    create?: XOR<GroupMemberCreateWithoutGroupInput, GroupMemberUncheckedCreateWithoutGroupInput> | GroupMemberCreateWithoutGroupInput[] | GroupMemberUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutGroupInput | GroupMemberCreateOrConnectWithoutGroupInput[]
    createMany?: GroupMemberCreateManyGroupInputEnvelope
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
  }

  export type CohortCreateNestedOneWithoutGroupsInput = {
    create?: XOR<CohortCreateWithoutGroupsInput, CohortUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: CohortCreateOrConnectWithoutGroupsInput
    connect?: CohortWhereUniqueInput
  }

  export type GroupJoinRequestCreateNestedManyWithoutGroupInput = {
    create?: XOR<GroupJoinRequestCreateWithoutGroupInput, GroupJoinRequestUncheckedCreateWithoutGroupInput> | GroupJoinRequestCreateWithoutGroupInput[] | GroupJoinRequestUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupJoinRequestCreateOrConnectWithoutGroupInput | GroupJoinRequestCreateOrConnectWithoutGroupInput[]
    createMany?: GroupJoinRequestCreateManyGroupInputEnvelope
    connect?: GroupJoinRequestWhereUniqueInput | GroupJoinRequestWhereUniqueInput[]
  }

  export type GroupLogUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<GroupLogCreateWithoutGroupInput, GroupLogUncheckedCreateWithoutGroupInput> | GroupLogCreateWithoutGroupInput[] | GroupLogUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupLogCreateOrConnectWithoutGroupInput | GroupLogCreateOrConnectWithoutGroupInput[]
    createMany?: GroupLogCreateManyGroupInputEnvelope
    connect?: GroupLogWhereUniqueInput | GroupLogWhereUniqueInput[]
  }

  export type GroupMemberUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<GroupMemberCreateWithoutGroupInput, GroupMemberUncheckedCreateWithoutGroupInput> | GroupMemberCreateWithoutGroupInput[] | GroupMemberUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutGroupInput | GroupMemberCreateOrConnectWithoutGroupInput[]
    createMany?: GroupMemberCreateManyGroupInputEnvelope
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
  }

  export type GroupJoinRequestUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<GroupJoinRequestCreateWithoutGroupInput, GroupJoinRequestUncheckedCreateWithoutGroupInput> | GroupJoinRequestCreateWithoutGroupInput[] | GroupJoinRequestUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupJoinRequestCreateOrConnectWithoutGroupInput | GroupJoinRequestCreateOrConnectWithoutGroupInput[]
    createMany?: GroupJoinRequestCreateManyGroupInputEnvelope
    connect?: GroupJoinRequestWhereUniqueInput | GroupJoinRequestWhereUniqueInput[]
  }

  export type EnumGroupStatusFieldUpdateOperationsInput = {
    set?: $Enums.GroupStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type GroupLogUpdateManyWithoutGroupNestedInput = {
    create?: XOR<GroupLogCreateWithoutGroupInput, GroupLogUncheckedCreateWithoutGroupInput> | GroupLogCreateWithoutGroupInput[] | GroupLogUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupLogCreateOrConnectWithoutGroupInput | GroupLogCreateOrConnectWithoutGroupInput[]
    upsert?: GroupLogUpsertWithWhereUniqueWithoutGroupInput | GroupLogUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: GroupLogCreateManyGroupInputEnvelope
    set?: GroupLogWhereUniqueInput | GroupLogWhereUniqueInput[]
    disconnect?: GroupLogWhereUniqueInput | GroupLogWhereUniqueInput[]
    delete?: GroupLogWhereUniqueInput | GroupLogWhereUniqueInput[]
    connect?: GroupLogWhereUniqueInput | GroupLogWhereUniqueInput[]
    update?: GroupLogUpdateWithWhereUniqueWithoutGroupInput | GroupLogUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: GroupLogUpdateManyWithWhereWithoutGroupInput | GroupLogUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: GroupLogScalarWhereInput | GroupLogScalarWhereInput[]
  }

  export type StudentUpdateOneWithoutAdminOfGroupsNestedInput = {
    create?: XOR<StudentCreateWithoutAdminOfGroupsInput, StudentUncheckedCreateWithoutAdminOfGroupsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutAdminOfGroupsInput
    upsert?: StudentUpsertWithoutAdminOfGroupsInput
    disconnect?: boolean
    delete?: StudentWhereInput | boolean
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutAdminOfGroupsInput, StudentUpdateWithoutAdminOfGroupsInput>, StudentUncheckedUpdateWithoutAdminOfGroupsInput>
  }

  export type GroupMemberUpdateManyWithoutGroupNestedInput = {
    create?: XOR<GroupMemberCreateWithoutGroupInput, GroupMemberUncheckedCreateWithoutGroupInput> | GroupMemberCreateWithoutGroupInput[] | GroupMemberUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutGroupInput | GroupMemberCreateOrConnectWithoutGroupInput[]
    upsert?: GroupMemberUpsertWithWhereUniqueWithoutGroupInput | GroupMemberUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: GroupMemberCreateManyGroupInputEnvelope
    set?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    disconnect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    delete?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    update?: GroupMemberUpdateWithWhereUniqueWithoutGroupInput | GroupMemberUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: GroupMemberUpdateManyWithWhereWithoutGroupInput | GroupMemberUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
  }

  export type CohortUpdateOneWithoutGroupsNestedInput = {
    create?: XOR<CohortCreateWithoutGroupsInput, CohortUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: CohortCreateOrConnectWithoutGroupsInput
    upsert?: CohortUpsertWithoutGroupsInput
    disconnect?: boolean
    delete?: CohortWhereInput | boolean
    connect?: CohortWhereUniqueInput
    update?: XOR<XOR<CohortUpdateToOneWithWhereWithoutGroupsInput, CohortUpdateWithoutGroupsInput>, CohortUncheckedUpdateWithoutGroupsInput>
  }

  export type GroupJoinRequestUpdateManyWithoutGroupNestedInput = {
    create?: XOR<GroupJoinRequestCreateWithoutGroupInput, GroupJoinRequestUncheckedCreateWithoutGroupInput> | GroupJoinRequestCreateWithoutGroupInput[] | GroupJoinRequestUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupJoinRequestCreateOrConnectWithoutGroupInput | GroupJoinRequestCreateOrConnectWithoutGroupInput[]
    upsert?: GroupJoinRequestUpsertWithWhereUniqueWithoutGroupInput | GroupJoinRequestUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: GroupJoinRequestCreateManyGroupInputEnvelope
    set?: GroupJoinRequestWhereUniqueInput | GroupJoinRequestWhereUniqueInput[]
    disconnect?: GroupJoinRequestWhereUniqueInput | GroupJoinRequestWhereUniqueInput[]
    delete?: GroupJoinRequestWhereUniqueInput | GroupJoinRequestWhereUniqueInput[]
    connect?: GroupJoinRequestWhereUniqueInput | GroupJoinRequestWhereUniqueInput[]
    update?: GroupJoinRequestUpdateWithWhereUniqueWithoutGroupInput | GroupJoinRequestUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: GroupJoinRequestUpdateManyWithWhereWithoutGroupInput | GroupJoinRequestUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: GroupJoinRequestScalarWhereInput | GroupJoinRequestScalarWhereInput[]
  }

  export type GroupLogUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<GroupLogCreateWithoutGroupInput, GroupLogUncheckedCreateWithoutGroupInput> | GroupLogCreateWithoutGroupInput[] | GroupLogUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupLogCreateOrConnectWithoutGroupInput | GroupLogCreateOrConnectWithoutGroupInput[]
    upsert?: GroupLogUpsertWithWhereUniqueWithoutGroupInput | GroupLogUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: GroupLogCreateManyGroupInputEnvelope
    set?: GroupLogWhereUniqueInput | GroupLogWhereUniqueInput[]
    disconnect?: GroupLogWhereUniqueInput | GroupLogWhereUniqueInput[]
    delete?: GroupLogWhereUniqueInput | GroupLogWhereUniqueInput[]
    connect?: GroupLogWhereUniqueInput | GroupLogWhereUniqueInput[]
    update?: GroupLogUpdateWithWhereUniqueWithoutGroupInput | GroupLogUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: GroupLogUpdateManyWithWhereWithoutGroupInput | GroupLogUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: GroupLogScalarWhereInput | GroupLogScalarWhereInput[]
  }

  export type GroupMemberUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<GroupMemberCreateWithoutGroupInput, GroupMemberUncheckedCreateWithoutGroupInput> | GroupMemberCreateWithoutGroupInput[] | GroupMemberUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutGroupInput | GroupMemberCreateOrConnectWithoutGroupInput[]
    upsert?: GroupMemberUpsertWithWhereUniqueWithoutGroupInput | GroupMemberUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: GroupMemberCreateManyGroupInputEnvelope
    set?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    disconnect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    delete?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    update?: GroupMemberUpdateWithWhereUniqueWithoutGroupInput | GroupMemberUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: GroupMemberUpdateManyWithWhereWithoutGroupInput | GroupMemberUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
  }

  export type GroupJoinRequestUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<GroupJoinRequestCreateWithoutGroupInput, GroupJoinRequestUncheckedCreateWithoutGroupInput> | GroupJoinRequestCreateWithoutGroupInput[] | GroupJoinRequestUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupJoinRequestCreateOrConnectWithoutGroupInput | GroupJoinRequestCreateOrConnectWithoutGroupInput[]
    upsert?: GroupJoinRequestUpsertWithWhereUniqueWithoutGroupInput | GroupJoinRequestUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: GroupJoinRequestCreateManyGroupInputEnvelope
    set?: GroupJoinRequestWhereUniqueInput | GroupJoinRequestWhereUniqueInput[]
    disconnect?: GroupJoinRequestWhereUniqueInput | GroupJoinRequestWhereUniqueInput[]
    delete?: GroupJoinRequestWhereUniqueInput | GroupJoinRequestWhereUniqueInput[]
    connect?: GroupJoinRequestWhereUniqueInput | GroupJoinRequestWhereUniqueInput[]
    update?: GroupJoinRequestUpdateWithWhereUniqueWithoutGroupInput | GroupJoinRequestUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: GroupJoinRequestUpdateManyWithWhereWithoutGroupInput | GroupJoinRequestUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: GroupJoinRequestScalarWhereInput | GroupJoinRequestScalarWhereInput[]
  }

  export type StudentCreateNestedOneWithoutGroupJoinRequestsInput = {
    create?: XOR<StudentCreateWithoutGroupJoinRequestsInput, StudentUncheckedCreateWithoutGroupJoinRequestsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutGroupJoinRequestsInput
    connect?: StudentWhereUniqueInput
  }

  export type GroupCreateNestedOneWithoutGroupJoinRequestsInput = {
    create?: XOR<GroupCreateWithoutGroupJoinRequestsInput, GroupUncheckedCreateWithoutGroupJoinRequestsInput>
    connectOrCreate?: GroupCreateOrConnectWithoutGroupJoinRequestsInput
    connect?: GroupWhereUniqueInput
  }

  export type EnumRequestStatusFieldUpdateOperationsInput = {
    set?: $Enums.RequestStatus
  }

  export type StudentUpdateOneWithoutGroupJoinRequestsNestedInput = {
    create?: XOR<StudentCreateWithoutGroupJoinRequestsInput, StudentUncheckedCreateWithoutGroupJoinRequestsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutGroupJoinRequestsInput
    upsert?: StudentUpsertWithoutGroupJoinRequestsInput
    disconnect?: boolean
    delete?: StudentWhereInput | boolean
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutGroupJoinRequestsInput, StudentUpdateWithoutGroupJoinRequestsInput>, StudentUncheckedUpdateWithoutGroupJoinRequestsInput>
  }

  export type GroupUpdateOneWithoutGroupJoinRequestsNestedInput = {
    create?: XOR<GroupCreateWithoutGroupJoinRequestsInput, GroupUncheckedCreateWithoutGroupJoinRequestsInput>
    connectOrCreate?: GroupCreateOrConnectWithoutGroupJoinRequestsInput
    upsert?: GroupUpsertWithoutGroupJoinRequestsInput
    disconnect?: boolean
    delete?: GroupWhereInput | boolean
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutGroupJoinRequestsInput, GroupUpdateWithoutGroupJoinRequestsInput>, GroupUncheckedUpdateWithoutGroupJoinRequestsInput>
  }

  export type GroupCreateNestedOneWithoutGroupLogsInput = {
    create?: XOR<GroupCreateWithoutGroupLogsInput, GroupUncheckedCreateWithoutGroupLogsInput>
    connectOrCreate?: GroupCreateOrConnectWithoutGroupLogsInput
    connect?: GroupWhereUniqueInput
  }

  export type EnumLogTypeFieldUpdateOperationsInput = {
    set?: $Enums.LogType
  }

  export type GroupUpdateOneWithoutGroupLogsNestedInput = {
    create?: XOR<GroupCreateWithoutGroupLogsInput, GroupUncheckedCreateWithoutGroupLogsInput>
    connectOrCreate?: GroupCreateOrConnectWithoutGroupLogsInput
    upsert?: GroupUpsertWithoutGroupLogsInput
    disconnect?: boolean
    delete?: GroupWhereInput | boolean
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutGroupLogsInput, GroupUpdateWithoutGroupLogsInput>, GroupUncheckedUpdateWithoutGroupLogsInput>
  }

  export type StudentCreateNestedOneWithoutGroupsInput = {
    create?: XOR<StudentCreateWithoutGroupsInput, StudentUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutGroupsInput
    connect?: StudentWhereUniqueInput
  }

  export type GroupCreateNestedOneWithoutMembersInput = {
    create?: XOR<GroupCreateWithoutMembersInput, GroupUncheckedCreateWithoutMembersInput>
    connectOrCreate?: GroupCreateOrConnectWithoutMembersInput
    connect?: GroupWhereUniqueInput
  }

  export type StudentUpdateOneRequiredWithoutGroupsNestedInput = {
    create?: XOR<StudentCreateWithoutGroupsInput, StudentUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutGroupsInput
    upsert?: StudentUpsertWithoutGroupsInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutGroupsInput, StudentUpdateWithoutGroupsInput>, StudentUncheckedUpdateWithoutGroupsInput>
  }

  export type GroupUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<GroupCreateWithoutMembersInput, GroupUncheckedCreateWithoutMembersInput>
    connectOrCreate?: GroupCreateOrConnectWithoutMembersInput
    upsert?: GroupUpsertWithoutMembersInput
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutMembersInput, GroupUpdateWithoutMembersInput>, GroupUncheckedUpdateWithoutMembersInput>
  }

  export type StudentLogCreateNestedManyWithoutStudentInput = {
    create?: XOR<StudentLogCreateWithoutStudentInput, StudentLogUncheckedCreateWithoutStudentInput> | StudentLogCreateWithoutStudentInput[] | StudentLogUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentLogCreateOrConnectWithoutStudentInput | StudentLogCreateOrConnectWithoutStudentInput[]
    createMany?: StudentLogCreateManyStudentInputEnvelope
    connect?: StudentLogWhereUniqueInput | StudentLogWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutStudentInput = {
    create?: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentInput
    connect?: UserWhereUniqueInput
  }

  export type StudentCohortCreateNestedManyWithoutStudentInput = {
    create?: XOR<StudentCohortCreateWithoutStudentInput, StudentCohortUncheckedCreateWithoutStudentInput> | StudentCohortCreateWithoutStudentInput[] | StudentCohortUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentCohortCreateOrConnectWithoutStudentInput | StudentCohortCreateOrConnectWithoutStudentInput[]
    createMany?: StudentCohortCreateManyStudentInputEnvelope
    connect?: StudentCohortWhereUniqueInput | StudentCohortWhereUniqueInput[]
  }

  export type GroupMemberCreateNestedManyWithoutStudentInput = {
    create?: XOR<GroupMemberCreateWithoutStudentInput, GroupMemberUncheckedCreateWithoutStudentInput> | GroupMemberCreateWithoutStudentInput[] | GroupMemberUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutStudentInput | GroupMemberCreateOrConnectWithoutStudentInput[]
    createMany?: GroupMemberCreateManyStudentInputEnvelope
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
  }

  export type GroupCreateNestedManyWithoutAdminInput = {
    create?: XOR<GroupCreateWithoutAdminInput, GroupUncheckedCreateWithoutAdminInput> | GroupCreateWithoutAdminInput[] | GroupUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutAdminInput | GroupCreateOrConnectWithoutAdminInput[]
    createMany?: GroupCreateManyAdminInputEnvelope
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type GroupJoinRequestCreateNestedManyWithoutUserInput = {
    create?: XOR<GroupJoinRequestCreateWithoutUserInput, GroupJoinRequestUncheckedCreateWithoutUserInput> | GroupJoinRequestCreateWithoutUserInput[] | GroupJoinRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupJoinRequestCreateOrConnectWithoutUserInput | GroupJoinRequestCreateOrConnectWithoutUserInput[]
    createMany?: GroupJoinRequestCreateManyUserInputEnvelope
    connect?: GroupJoinRequestWhereUniqueInput | GroupJoinRequestWhereUniqueInput[]
  }

  export type StudentLogUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<StudentLogCreateWithoutStudentInput, StudentLogUncheckedCreateWithoutStudentInput> | StudentLogCreateWithoutStudentInput[] | StudentLogUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentLogCreateOrConnectWithoutStudentInput | StudentLogCreateOrConnectWithoutStudentInput[]
    createMany?: StudentLogCreateManyStudentInputEnvelope
    connect?: StudentLogWhereUniqueInput | StudentLogWhereUniqueInput[]
  }

  export type StudentCohortUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<StudentCohortCreateWithoutStudentInput, StudentCohortUncheckedCreateWithoutStudentInput> | StudentCohortCreateWithoutStudentInput[] | StudentCohortUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentCohortCreateOrConnectWithoutStudentInput | StudentCohortCreateOrConnectWithoutStudentInput[]
    createMany?: StudentCohortCreateManyStudentInputEnvelope
    connect?: StudentCohortWhereUniqueInput | StudentCohortWhereUniqueInput[]
  }

  export type GroupMemberUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<GroupMemberCreateWithoutStudentInput, GroupMemberUncheckedCreateWithoutStudentInput> | GroupMemberCreateWithoutStudentInput[] | GroupMemberUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutStudentInput | GroupMemberCreateOrConnectWithoutStudentInput[]
    createMany?: GroupMemberCreateManyStudentInputEnvelope
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
  }

  export type GroupUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<GroupCreateWithoutAdminInput, GroupUncheckedCreateWithoutAdminInput> | GroupCreateWithoutAdminInput[] | GroupUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutAdminInput | GroupCreateOrConnectWithoutAdminInput[]
    createMany?: GroupCreateManyAdminInputEnvelope
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type GroupJoinRequestUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GroupJoinRequestCreateWithoutUserInput, GroupJoinRequestUncheckedCreateWithoutUserInput> | GroupJoinRequestCreateWithoutUserInput[] | GroupJoinRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupJoinRequestCreateOrConnectWithoutUserInput | GroupJoinRequestCreateOrConnectWithoutUserInput[]
    createMany?: GroupJoinRequestCreateManyUserInputEnvelope
    connect?: GroupJoinRequestWhereUniqueInput | GroupJoinRequestWhereUniqueInput[]
  }

  export type StudentLogUpdateManyWithoutStudentNestedInput = {
    create?: XOR<StudentLogCreateWithoutStudentInput, StudentLogUncheckedCreateWithoutStudentInput> | StudentLogCreateWithoutStudentInput[] | StudentLogUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentLogCreateOrConnectWithoutStudentInput | StudentLogCreateOrConnectWithoutStudentInput[]
    upsert?: StudentLogUpsertWithWhereUniqueWithoutStudentInput | StudentLogUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: StudentLogCreateManyStudentInputEnvelope
    set?: StudentLogWhereUniqueInput | StudentLogWhereUniqueInput[]
    disconnect?: StudentLogWhereUniqueInput | StudentLogWhereUniqueInput[]
    delete?: StudentLogWhereUniqueInput | StudentLogWhereUniqueInput[]
    connect?: StudentLogWhereUniqueInput | StudentLogWhereUniqueInput[]
    update?: StudentLogUpdateWithWhereUniqueWithoutStudentInput | StudentLogUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: StudentLogUpdateManyWithWhereWithoutStudentInput | StudentLogUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: StudentLogScalarWhereInput | StudentLogScalarWhereInput[]
  }

  export type UserUpdateOneWithoutStudentNestedInput = {
    create?: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentInput
    upsert?: UserUpsertWithoutStudentInput
    disconnect?: boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStudentInput, UserUpdateWithoutStudentInput>, UserUncheckedUpdateWithoutStudentInput>
  }

  export type StudentCohortUpdateManyWithoutStudentNestedInput = {
    create?: XOR<StudentCohortCreateWithoutStudentInput, StudentCohortUncheckedCreateWithoutStudentInput> | StudentCohortCreateWithoutStudentInput[] | StudentCohortUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentCohortCreateOrConnectWithoutStudentInput | StudentCohortCreateOrConnectWithoutStudentInput[]
    upsert?: StudentCohortUpsertWithWhereUniqueWithoutStudentInput | StudentCohortUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: StudentCohortCreateManyStudentInputEnvelope
    set?: StudentCohortWhereUniqueInput | StudentCohortWhereUniqueInput[]
    disconnect?: StudentCohortWhereUniqueInput | StudentCohortWhereUniqueInput[]
    delete?: StudentCohortWhereUniqueInput | StudentCohortWhereUniqueInput[]
    connect?: StudentCohortWhereUniqueInput | StudentCohortWhereUniqueInput[]
    update?: StudentCohortUpdateWithWhereUniqueWithoutStudentInput | StudentCohortUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: StudentCohortUpdateManyWithWhereWithoutStudentInput | StudentCohortUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: StudentCohortScalarWhereInput | StudentCohortScalarWhereInput[]
  }

  export type GroupMemberUpdateManyWithoutStudentNestedInput = {
    create?: XOR<GroupMemberCreateWithoutStudentInput, GroupMemberUncheckedCreateWithoutStudentInput> | GroupMemberCreateWithoutStudentInput[] | GroupMemberUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutStudentInput | GroupMemberCreateOrConnectWithoutStudentInput[]
    upsert?: GroupMemberUpsertWithWhereUniqueWithoutStudentInput | GroupMemberUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: GroupMemberCreateManyStudentInputEnvelope
    set?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    disconnect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    delete?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    update?: GroupMemberUpdateWithWhereUniqueWithoutStudentInput | GroupMemberUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: GroupMemberUpdateManyWithWhereWithoutStudentInput | GroupMemberUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
  }

  export type GroupUpdateManyWithoutAdminNestedInput = {
    create?: XOR<GroupCreateWithoutAdminInput, GroupUncheckedCreateWithoutAdminInput> | GroupCreateWithoutAdminInput[] | GroupUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutAdminInput | GroupCreateOrConnectWithoutAdminInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutAdminInput | GroupUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: GroupCreateManyAdminInputEnvelope
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutAdminInput | GroupUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutAdminInput | GroupUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type GroupJoinRequestUpdateManyWithoutUserNestedInput = {
    create?: XOR<GroupJoinRequestCreateWithoutUserInput, GroupJoinRequestUncheckedCreateWithoutUserInput> | GroupJoinRequestCreateWithoutUserInput[] | GroupJoinRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupJoinRequestCreateOrConnectWithoutUserInput | GroupJoinRequestCreateOrConnectWithoutUserInput[]
    upsert?: GroupJoinRequestUpsertWithWhereUniqueWithoutUserInput | GroupJoinRequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GroupJoinRequestCreateManyUserInputEnvelope
    set?: GroupJoinRequestWhereUniqueInput | GroupJoinRequestWhereUniqueInput[]
    disconnect?: GroupJoinRequestWhereUniqueInput | GroupJoinRequestWhereUniqueInput[]
    delete?: GroupJoinRequestWhereUniqueInput | GroupJoinRequestWhereUniqueInput[]
    connect?: GroupJoinRequestWhereUniqueInput | GroupJoinRequestWhereUniqueInput[]
    update?: GroupJoinRequestUpdateWithWhereUniqueWithoutUserInput | GroupJoinRequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GroupJoinRequestUpdateManyWithWhereWithoutUserInput | GroupJoinRequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GroupJoinRequestScalarWhereInput | GroupJoinRequestScalarWhereInput[]
  }

  export type StudentLogUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<StudentLogCreateWithoutStudentInput, StudentLogUncheckedCreateWithoutStudentInput> | StudentLogCreateWithoutStudentInput[] | StudentLogUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentLogCreateOrConnectWithoutStudentInput | StudentLogCreateOrConnectWithoutStudentInput[]
    upsert?: StudentLogUpsertWithWhereUniqueWithoutStudentInput | StudentLogUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: StudentLogCreateManyStudentInputEnvelope
    set?: StudentLogWhereUniqueInput | StudentLogWhereUniqueInput[]
    disconnect?: StudentLogWhereUniqueInput | StudentLogWhereUniqueInput[]
    delete?: StudentLogWhereUniqueInput | StudentLogWhereUniqueInput[]
    connect?: StudentLogWhereUniqueInput | StudentLogWhereUniqueInput[]
    update?: StudentLogUpdateWithWhereUniqueWithoutStudentInput | StudentLogUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: StudentLogUpdateManyWithWhereWithoutStudentInput | StudentLogUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: StudentLogScalarWhereInput | StudentLogScalarWhereInput[]
  }

  export type StudentCohortUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<StudentCohortCreateWithoutStudentInput, StudentCohortUncheckedCreateWithoutStudentInput> | StudentCohortCreateWithoutStudentInput[] | StudentCohortUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentCohortCreateOrConnectWithoutStudentInput | StudentCohortCreateOrConnectWithoutStudentInput[]
    upsert?: StudentCohortUpsertWithWhereUniqueWithoutStudentInput | StudentCohortUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: StudentCohortCreateManyStudentInputEnvelope
    set?: StudentCohortWhereUniqueInput | StudentCohortWhereUniqueInput[]
    disconnect?: StudentCohortWhereUniqueInput | StudentCohortWhereUniqueInput[]
    delete?: StudentCohortWhereUniqueInput | StudentCohortWhereUniqueInput[]
    connect?: StudentCohortWhereUniqueInput | StudentCohortWhereUniqueInput[]
    update?: StudentCohortUpdateWithWhereUniqueWithoutStudentInput | StudentCohortUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: StudentCohortUpdateManyWithWhereWithoutStudentInput | StudentCohortUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: StudentCohortScalarWhereInput | StudentCohortScalarWhereInput[]
  }

  export type GroupMemberUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<GroupMemberCreateWithoutStudentInput, GroupMemberUncheckedCreateWithoutStudentInput> | GroupMemberCreateWithoutStudentInput[] | GroupMemberUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutStudentInput | GroupMemberCreateOrConnectWithoutStudentInput[]
    upsert?: GroupMemberUpsertWithWhereUniqueWithoutStudentInput | GroupMemberUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: GroupMemberCreateManyStudentInputEnvelope
    set?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    disconnect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    delete?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    update?: GroupMemberUpdateWithWhereUniqueWithoutStudentInput | GroupMemberUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: GroupMemberUpdateManyWithWhereWithoutStudentInput | GroupMemberUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
  }

  export type GroupUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<GroupCreateWithoutAdminInput, GroupUncheckedCreateWithoutAdminInput> | GroupCreateWithoutAdminInput[] | GroupUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutAdminInput | GroupCreateOrConnectWithoutAdminInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutAdminInput | GroupUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: GroupCreateManyAdminInputEnvelope
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutAdminInput | GroupUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutAdminInput | GroupUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type GroupJoinRequestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GroupJoinRequestCreateWithoutUserInput, GroupJoinRequestUncheckedCreateWithoutUserInput> | GroupJoinRequestCreateWithoutUserInput[] | GroupJoinRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupJoinRequestCreateOrConnectWithoutUserInput | GroupJoinRequestCreateOrConnectWithoutUserInput[]
    upsert?: GroupJoinRequestUpsertWithWhereUniqueWithoutUserInput | GroupJoinRequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GroupJoinRequestCreateManyUserInputEnvelope
    set?: GroupJoinRequestWhereUniqueInput | GroupJoinRequestWhereUniqueInput[]
    disconnect?: GroupJoinRequestWhereUniqueInput | GroupJoinRequestWhereUniqueInput[]
    delete?: GroupJoinRequestWhereUniqueInput | GroupJoinRequestWhereUniqueInput[]
    connect?: GroupJoinRequestWhereUniqueInput | GroupJoinRequestWhereUniqueInput[]
    update?: GroupJoinRequestUpdateWithWhereUniqueWithoutUserInput | GroupJoinRequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GroupJoinRequestUpdateManyWithWhereWithoutUserInput | GroupJoinRequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GroupJoinRequestScalarWhereInput | GroupJoinRequestScalarWhereInput[]
  }

  export type StudentCreateNestedOneWithoutCohortsInput = {
    create?: XOR<StudentCreateWithoutCohortsInput, StudentUncheckedCreateWithoutCohortsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutCohortsInput
    connect?: StudentWhereUniqueInput
  }

  export type CohortCreateNestedOneWithoutStudentsInput = {
    create?: XOR<CohortCreateWithoutStudentsInput, CohortUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: CohortCreateOrConnectWithoutStudentsInput
    connect?: CohortWhereUniqueInput
  }

  export type StudentUpdateOneRequiredWithoutCohortsNestedInput = {
    create?: XOR<StudentCreateWithoutCohortsInput, StudentUncheckedCreateWithoutCohortsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutCohortsInput
    upsert?: StudentUpsertWithoutCohortsInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutCohortsInput, StudentUpdateWithoutCohortsInput>, StudentUncheckedUpdateWithoutCohortsInput>
  }

  export type CohortUpdateOneRequiredWithoutStudentsNestedInput = {
    create?: XOR<CohortCreateWithoutStudentsInput, CohortUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: CohortCreateOrConnectWithoutStudentsInput
    upsert?: CohortUpsertWithoutStudentsInput
    connect?: CohortWhereUniqueInput
    update?: XOR<XOR<CohortUpdateToOneWithWhereWithoutStudentsInput, CohortUpdateWithoutStudentsInput>, CohortUncheckedUpdateWithoutStudentsInput>
  }

  export type StudentCreateNestedOneWithoutStudentLogsInput = {
    create?: XOR<StudentCreateWithoutStudentLogsInput, StudentUncheckedCreateWithoutStudentLogsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutStudentLogsInput
    connect?: StudentWhereUniqueInput
  }

  export type StudentUpdateOneWithoutStudentLogsNestedInput = {
    create?: XOR<StudentCreateWithoutStudentLogsInput, StudentUncheckedCreateWithoutStudentLogsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutStudentLogsInput
    upsert?: StudentUpsertWithoutStudentLogsInput
    disconnect?: boolean
    delete?: StudentWhereInput | boolean
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutStudentLogsInput, StudentUpdateWithoutStudentLogsInput>, StudentUncheckedUpdateWithoutStudentLogsInput>
  }

  export type StudentCreateNestedOneWithoutUserInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput
    connect?: StudentWhereUniqueInput
  }

  export type StudentUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput
    connect?: StudentWhereUniqueInput
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus
  }

  export type StudentUpdateOneWithoutUserNestedInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput
    upsert?: StudentUpsertWithoutUserInput
    disconnect?: StudentWhereInput | boolean
    delete?: StudentWhereInput | boolean
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutUserInput, StudentUpdateWithoutUserInput>, StudentUncheckedUpdateWithoutUserInput>
  }

  export type StudentUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput
    upsert?: StudentUpsertWithoutUserInput
    disconnect?: StudentWhereInput | boolean
    delete?: StudentWhereInput | boolean
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutUserInput, StudentUpdateWithoutUserInput>, StudentUncheckedUpdateWithoutUserInput>
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
    isSet?: boolean
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
    isSet?: boolean
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
    isSet?: boolean
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

  export type NestedEnumGroupStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.GroupStatus | EnumGroupStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GroupStatus[] | ListEnumGroupStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GroupStatus[] | ListEnumGroupStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGroupStatusFilter<$PrismaModel> | $Enums.GroupStatus
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
    isSet?: boolean
  }

  export type NestedEnumGroupStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GroupStatus | EnumGroupStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GroupStatus[] | ListEnumGroupStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GroupStatus[] | ListEnumGroupStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGroupStatusWithAggregatesFilter<$PrismaModel> | $Enums.GroupStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGroupStatusFilter<$PrismaModel>
    _max?: NestedEnumGroupStatusFilter<$PrismaModel>
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
    isSet?: boolean
  }

  export type NestedEnumRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusFilter<$PrismaModel> | $Enums.RequestStatus
  }

  export type NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.RequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumRequestStatusFilter<$PrismaModel>
  }

  export type NestedEnumLogTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LogType | EnumLogTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LogType[] | ListEnumLogTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LogType[] | ListEnumLogTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLogTypeFilter<$PrismaModel> | $Enums.LogType
  }

  export type NestedEnumLogTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LogType | EnumLogTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LogType[] | ListEnumLogTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LogType[] | ListEnumLogTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLogTypeWithAggregatesFilter<$PrismaModel> | $Enums.LogType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLogTypeFilter<$PrismaModel>
    _max?: NestedEnumLogTypeFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type StudentCohortCreateWithoutCohortInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    student: StudentCreateNestedOneWithoutCohortsInput
  }

  export type StudentCohortUncheckedCreateWithoutCohortInput = {
    id?: string
    studentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentCohortCreateOrConnectWithoutCohortInput = {
    where: StudentCohortWhereUniqueInput
    create: XOR<StudentCohortCreateWithoutCohortInput, StudentCohortUncheckedCreateWithoutCohortInput>
  }

  export type StudentCohortCreateManyCohortInputEnvelope = {
    data: StudentCohortCreateManyCohortInput | StudentCohortCreateManyCohortInput[]
  }

  export type GroupCreateWithoutCohortInput = {
    id?: string
    name: string
    description?: string | null
    status: $Enums.GroupStatus
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    groupLogs?: GroupLogCreateNestedManyWithoutGroupInput
    admin?: StudentCreateNestedOneWithoutAdminOfGroupsInput
    members?: GroupMemberCreateNestedManyWithoutGroupInput
    groupJoinRequests?: GroupJoinRequestCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutCohortInput = {
    id?: string
    name: string
    description?: string | null
    status: $Enums.GroupStatus
    adminId?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    groupLogs?: GroupLogUncheckedCreateNestedManyWithoutGroupInput
    members?: GroupMemberUncheckedCreateNestedManyWithoutGroupInput
    groupJoinRequests?: GroupJoinRequestUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutCohortInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutCohortInput, GroupUncheckedCreateWithoutCohortInput>
  }

  export type GroupCreateManyCohortInputEnvelope = {
    data: GroupCreateManyCohortInput | GroupCreateManyCohortInput[]
  }

  export type StudentCohortUpsertWithWhereUniqueWithoutCohortInput = {
    where: StudentCohortWhereUniqueInput
    update: XOR<StudentCohortUpdateWithoutCohortInput, StudentCohortUncheckedUpdateWithoutCohortInput>
    create: XOR<StudentCohortCreateWithoutCohortInput, StudentCohortUncheckedCreateWithoutCohortInput>
  }

  export type StudentCohortUpdateWithWhereUniqueWithoutCohortInput = {
    where: StudentCohortWhereUniqueInput
    data: XOR<StudentCohortUpdateWithoutCohortInput, StudentCohortUncheckedUpdateWithoutCohortInput>
  }

  export type StudentCohortUpdateManyWithWhereWithoutCohortInput = {
    where: StudentCohortScalarWhereInput
    data: XOR<StudentCohortUpdateManyMutationInput, StudentCohortUncheckedUpdateManyWithoutCohortInput>
  }

  export type StudentCohortScalarWhereInput = {
    AND?: StudentCohortScalarWhereInput | StudentCohortScalarWhereInput[]
    OR?: StudentCohortScalarWhereInput[]
    NOT?: StudentCohortScalarWhereInput | StudentCohortScalarWhereInput[]
    id?: StringFilter<"StudentCohort"> | string
    studentId?: StringFilter<"StudentCohort"> | string
    cohortId?: StringFilter<"StudentCohort"> | string
    createdAt?: DateTimeFilter<"StudentCohort"> | Date | string
    updatedAt?: DateTimeFilter<"StudentCohort"> | Date | string
  }

  export type GroupUpsertWithWhereUniqueWithoutCohortInput = {
    where: GroupWhereUniqueInput
    update: XOR<GroupUpdateWithoutCohortInput, GroupUncheckedUpdateWithoutCohortInput>
    create: XOR<GroupCreateWithoutCohortInput, GroupUncheckedCreateWithoutCohortInput>
  }

  export type GroupUpdateWithWhereUniqueWithoutCohortInput = {
    where: GroupWhereUniqueInput
    data: XOR<GroupUpdateWithoutCohortInput, GroupUncheckedUpdateWithoutCohortInput>
  }

  export type GroupUpdateManyWithWhereWithoutCohortInput = {
    where: GroupScalarWhereInput
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyWithoutCohortInput>
  }

  export type GroupScalarWhereInput = {
    AND?: GroupScalarWhereInput | GroupScalarWhereInput[]
    OR?: GroupScalarWhereInput[]
    NOT?: GroupScalarWhereInput | GroupScalarWhereInput[]
    id?: StringFilter<"Group"> | string
    name?: StringFilter<"Group"> | string
    description?: StringNullableFilter<"Group"> | string | null
    status?: EnumGroupStatusFilter<"Group"> | $Enums.GroupStatus
    adminId?: StringNullableFilter<"Group"> | string | null
    cohortId?: StringNullableFilter<"Group"> | string | null
    deletedAt?: DateTimeNullableFilter<"Group"> | Date | string | null
    createdAt?: DateTimeFilter<"Group"> | Date | string
    updatedAt?: DateTimeFilter<"Group"> | Date | string
  }

  export type GroupLogCreateWithoutGroupInput = {
    id?: string
    content: string
    type: $Enums.LogType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupLogUncheckedCreateWithoutGroupInput = {
    id?: string
    content: string
    type: $Enums.LogType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupLogCreateOrConnectWithoutGroupInput = {
    where: GroupLogWhereUniqueInput
    create: XOR<GroupLogCreateWithoutGroupInput, GroupLogUncheckedCreateWithoutGroupInput>
  }

  export type GroupLogCreateManyGroupInputEnvelope = {
    data: GroupLogCreateManyGroupInput | GroupLogCreateManyGroupInput[]
  }

  export type StudentCreateWithoutAdminOfGroupsInput = {
    id?: string
    bio?: string | null
    linkedIn?: string | null
    github?: string | null
    twitter?: string | null
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    studentLogs?: StudentLogCreateNestedManyWithoutStudentInput
    user?: UserCreateNestedOneWithoutStudentInput
    cohorts?: StudentCohortCreateNestedManyWithoutStudentInput
    groups?: GroupMemberCreateNestedManyWithoutStudentInput
    groupJoinRequests?: GroupJoinRequestCreateNestedManyWithoutUserInput
  }

  export type StudentUncheckedCreateWithoutAdminOfGroupsInput = {
    id?: string
    bio?: string | null
    linkedIn?: string | null
    github?: string | null
    twitter?: string | null
    website?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    studentLogs?: StudentLogUncheckedCreateNestedManyWithoutStudentInput
    cohorts?: StudentCohortUncheckedCreateNestedManyWithoutStudentInput
    groups?: GroupMemberUncheckedCreateNestedManyWithoutStudentInput
    groupJoinRequests?: GroupJoinRequestUncheckedCreateNestedManyWithoutUserInput
  }

  export type StudentCreateOrConnectWithoutAdminOfGroupsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutAdminOfGroupsInput, StudentUncheckedCreateWithoutAdminOfGroupsInput>
  }

  export type GroupMemberCreateWithoutGroupInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    student: StudentCreateNestedOneWithoutGroupsInput
  }

  export type GroupMemberUncheckedCreateWithoutGroupInput = {
    id?: string
    studentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupMemberCreateOrConnectWithoutGroupInput = {
    where: GroupMemberWhereUniqueInput
    create: XOR<GroupMemberCreateWithoutGroupInput, GroupMemberUncheckedCreateWithoutGroupInput>
  }

  export type GroupMemberCreateManyGroupInputEnvelope = {
    data: GroupMemberCreateManyGroupInput | GroupMemberCreateManyGroupInput[]
  }

  export type CohortCreateWithoutGroupsInput = {
    id?: string
    name: string
    description?: string | null
    startDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    students?: StudentCohortCreateNestedManyWithoutCohortInput
  }

  export type CohortUncheckedCreateWithoutGroupsInput = {
    id?: string
    name: string
    description?: string | null
    startDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    students?: StudentCohortUncheckedCreateNestedManyWithoutCohortInput
  }

  export type CohortCreateOrConnectWithoutGroupsInput = {
    where: CohortWhereUniqueInput
    create: XOR<CohortCreateWithoutGroupsInput, CohortUncheckedCreateWithoutGroupsInput>
  }

  export type GroupJoinRequestCreateWithoutGroupInput = {
    id?: string
    status: $Enums.RequestStatus
    reason: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: StudentCreateNestedOneWithoutGroupJoinRequestsInput
  }

  export type GroupJoinRequestUncheckedCreateWithoutGroupInput = {
    id?: string
    status: $Enums.RequestStatus
    reason: string
    userId: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupJoinRequestCreateOrConnectWithoutGroupInput = {
    where: GroupJoinRequestWhereUniqueInput
    create: XOR<GroupJoinRequestCreateWithoutGroupInput, GroupJoinRequestUncheckedCreateWithoutGroupInput>
  }

  export type GroupJoinRequestCreateManyGroupInputEnvelope = {
    data: GroupJoinRequestCreateManyGroupInput | GroupJoinRequestCreateManyGroupInput[]
  }

  export type GroupLogUpsertWithWhereUniqueWithoutGroupInput = {
    where: GroupLogWhereUniqueInput
    update: XOR<GroupLogUpdateWithoutGroupInput, GroupLogUncheckedUpdateWithoutGroupInput>
    create: XOR<GroupLogCreateWithoutGroupInput, GroupLogUncheckedCreateWithoutGroupInput>
  }

  export type GroupLogUpdateWithWhereUniqueWithoutGroupInput = {
    where: GroupLogWhereUniqueInput
    data: XOR<GroupLogUpdateWithoutGroupInput, GroupLogUncheckedUpdateWithoutGroupInput>
  }

  export type GroupLogUpdateManyWithWhereWithoutGroupInput = {
    where: GroupLogScalarWhereInput
    data: XOR<GroupLogUpdateManyMutationInput, GroupLogUncheckedUpdateManyWithoutGroupInput>
  }

  export type GroupLogScalarWhereInput = {
    AND?: GroupLogScalarWhereInput | GroupLogScalarWhereInput[]
    OR?: GroupLogScalarWhereInput[]
    NOT?: GroupLogScalarWhereInput | GroupLogScalarWhereInput[]
    id?: StringFilter<"GroupLog"> | string
    content?: StringFilter<"GroupLog"> | string
    type?: EnumLogTypeFilter<"GroupLog"> | $Enums.LogType
    groupId?: StringFilter<"GroupLog"> | string
    createdAt?: DateTimeFilter<"GroupLog"> | Date | string
    updatedAt?: DateTimeFilter<"GroupLog"> | Date | string
  }

  export type StudentUpsertWithoutAdminOfGroupsInput = {
    update: XOR<StudentUpdateWithoutAdminOfGroupsInput, StudentUncheckedUpdateWithoutAdminOfGroupsInput>
    create: XOR<StudentCreateWithoutAdminOfGroupsInput, StudentUncheckedCreateWithoutAdminOfGroupsInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutAdminOfGroupsInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutAdminOfGroupsInput, StudentUncheckedUpdateWithoutAdminOfGroupsInput>
  }

  export type StudentUpdateWithoutAdminOfGroupsInput = {
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentLogs?: StudentLogUpdateManyWithoutStudentNestedInput
    user?: UserUpdateOneWithoutStudentNestedInput
    cohorts?: StudentCohortUpdateManyWithoutStudentNestedInput
    groups?: GroupMemberUpdateManyWithoutStudentNestedInput
    groupJoinRequests?: GroupJoinRequestUpdateManyWithoutUserNestedInput
  }

  export type StudentUncheckedUpdateWithoutAdminOfGroupsInput = {
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentLogs?: StudentLogUncheckedUpdateManyWithoutStudentNestedInput
    cohorts?: StudentCohortUncheckedUpdateManyWithoutStudentNestedInput
    groups?: GroupMemberUncheckedUpdateManyWithoutStudentNestedInput
    groupJoinRequests?: GroupJoinRequestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GroupMemberUpsertWithWhereUniqueWithoutGroupInput = {
    where: GroupMemberWhereUniqueInput
    update: XOR<GroupMemberUpdateWithoutGroupInput, GroupMemberUncheckedUpdateWithoutGroupInput>
    create: XOR<GroupMemberCreateWithoutGroupInput, GroupMemberUncheckedCreateWithoutGroupInput>
  }

  export type GroupMemberUpdateWithWhereUniqueWithoutGroupInput = {
    where: GroupMemberWhereUniqueInput
    data: XOR<GroupMemberUpdateWithoutGroupInput, GroupMemberUncheckedUpdateWithoutGroupInput>
  }

  export type GroupMemberUpdateManyWithWhereWithoutGroupInput = {
    where: GroupMemberScalarWhereInput
    data: XOR<GroupMemberUpdateManyMutationInput, GroupMemberUncheckedUpdateManyWithoutGroupInput>
  }

  export type GroupMemberScalarWhereInput = {
    AND?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
    OR?: GroupMemberScalarWhereInput[]
    NOT?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
    id?: StringFilter<"GroupMember"> | string
    studentId?: StringFilter<"GroupMember"> | string
    groupId?: StringFilter<"GroupMember"> | string
    createdAt?: DateTimeFilter<"GroupMember"> | Date | string
    updatedAt?: DateTimeFilter<"GroupMember"> | Date | string
  }

  export type CohortUpsertWithoutGroupsInput = {
    update: XOR<CohortUpdateWithoutGroupsInput, CohortUncheckedUpdateWithoutGroupsInput>
    create: XOR<CohortCreateWithoutGroupsInput, CohortUncheckedCreateWithoutGroupsInput>
    where?: CohortWhereInput
  }

  export type CohortUpdateToOneWithWhereWithoutGroupsInput = {
    where?: CohortWhereInput
    data: XOR<CohortUpdateWithoutGroupsInput, CohortUncheckedUpdateWithoutGroupsInput>
  }

  export type CohortUpdateWithoutGroupsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentCohortUpdateManyWithoutCohortNestedInput
  }

  export type CohortUncheckedUpdateWithoutGroupsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentCohortUncheckedUpdateManyWithoutCohortNestedInput
  }

  export type GroupJoinRequestUpsertWithWhereUniqueWithoutGroupInput = {
    where: GroupJoinRequestWhereUniqueInput
    update: XOR<GroupJoinRequestUpdateWithoutGroupInput, GroupJoinRequestUncheckedUpdateWithoutGroupInput>
    create: XOR<GroupJoinRequestCreateWithoutGroupInput, GroupJoinRequestUncheckedCreateWithoutGroupInput>
  }

  export type GroupJoinRequestUpdateWithWhereUniqueWithoutGroupInput = {
    where: GroupJoinRequestWhereUniqueInput
    data: XOR<GroupJoinRequestUpdateWithoutGroupInput, GroupJoinRequestUncheckedUpdateWithoutGroupInput>
  }

  export type GroupJoinRequestUpdateManyWithWhereWithoutGroupInput = {
    where: GroupJoinRequestScalarWhereInput
    data: XOR<GroupJoinRequestUpdateManyMutationInput, GroupJoinRequestUncheckedUpdateManyWithoutGroupInput>
  }

  export type GroupJoinRequestScalarWhereInput = {
    AND?: GroupJoinRequestScalarWhereInput | GroupJoinRequestScalarWhereInput[]
    OR?: GroupJoinRequestScalarWhereInput[]
    NOT?: GroupJoinRequestScalarWhereInput | GroupJoinRequestScalarWhereInput[]
    id?: StringFilter<"GroupJoinRequest"> | string
    status?: EnumRequestStatusFilter<"GroupJoinRequest"> | $Enums.RequestStatus
    reason?: StringFilter<"GroupJoinRequest"> | string
    userId?: StringFilter<"GroupJoinRequest"> | string
    groupId?: StringFilter<"GroupJoinRequest"> | string
    deletedAt?: DateTimeNullableFilter<"GroupJoinRequest"> | Date | string | null
    createdAt?: DateTimeFilter<"GroupJoinRequest"> | Date | string
    updatedAt?: DateTimeFilter<"GroupJoinRequest"> | Date | string
  }

  export type StudentCreateWithoutGroupJoinRequestsInput = {
    id?: string
    bio?: string | null
    linkedIn?: string | null
    github?: string | null
    twitter?: string | null
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    studentLogs?: StudentLogCreateNestedManyWithoutStudentInput
    user?: UserCreateNestedOneWithoutStudentInput
    cohorts?: StudentCohortCreateNestedManyWithoutStudentInput
    groups?: GroupMemberCreateNestedManyWithoutStudentInput
    adminOfGroups?: GroupCreateNestedManyWithoutAdminInput
  }

  export type StudentUncheckedCreateWithoutGroupJoinRequestsInput = {
    id?: string
    bio?: string | null
    linkedIn?: string | null
    github?: string | null
    twitter?: string | null
    website?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    studentLogs?: StudentLogUncheckedCreateNestedManyWithoutStudentInput
    cohorts?: StudentCohortUncheckedCreateNestedManyWithoutStudentInput
    groups?: GroupMemberUncheckedCreateNestedManyWithoutStudentInput
    adminOfGroups?: GroupUncheckedCreateNestedManyWithoutAdminInput
  }

  export type StudentCreateOrConnectWithoutGroupJoinRequestsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutGroupJoinRequestsInput, StudentUncheckedCreateWithoutGroupJoinRequestsInput>
  }

  export type GroupCreateWithoutGroupJoinRequestsInput = {
    id?: string
    name: string
    description?: string | null
    status: $Enums.GroupStatus
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    groupLogs?: GroupLogCreateNestedManyWithoutGroupInput
    admin?: StudentCreateNestedOneWithoutAdminOfGroupsInput
    members?: GroupMemberCreateNestedManyWithoutGroupInput
    cohort?: CohortCreateNestedOneWithoutGroupsInput
  }

  export type GroupUncheckedCreateWithoutGroupJoinRequestsInput = {
    id?: string
    name: string
    description?: string | null
    status: $Enums.GroupStatus
    adminId?: string | null
    cohortId?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    groupLogs?: GroupLogUncheckedCreateNestedManyWithoutGroupInput
    members?: GroupMemberUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutGroupJoinRequestsInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutGroupJoinRequestsInput, GroupUncheckedCreateWithoutGroupJoinRequestsInput>
  }

  export type StudentUpsertWithoutGroupJoinRequestsInput = {
    update: XOR<StudentUpdateWithoutGroupJoinRequestsInput, StudentUncheckedUpdateWithoutGroupJoinRequestsInput>
    create: XOR<StudentCreateWithoutGroupJoinRequestsInput, StudentUncheckedCreateWithoutGroupJoinRequestsInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutGroupJoinRequestsInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutGroupJoinRequestsInput, StudentUncheckedUpdateWithoutGroupJoinRequestsInput>
  }

  export type StudentUpdateWithoutGroupJoinRequestsInput = {
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentLogs?: StudentLogUpdateManyWithoutStudentNestedInput
    user?: UserUpdateOneWithoutStudentNestedInput
    cohorts?: StudentCohortUpdateManyWithoutStudentNestedInput
    groups?: GroupMemberUpdateManyWithoutStudentNestedInput
    adminOfGroups?: GroupUpdateManyWithoutAdminNestedInput
  }

  export type StudentUncheckedUpdateWithoutGroupJoinRequestsInput = {
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentLogs?: StudentLogUncheckedUpdateManyWithoutStudentNestedInput
    cohorts?: StudentCohortUncheckedUpdateManyWithoutStudentNestedInput
    groups?: GroupMemberUncheckedUpdateManyWithoutStudentNestedInput
    adminOfGroups?: GroupUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type GroupUpsertWithoutGroupJoinRequestsInput = {
    update: XOR<GroupUpdateWithoutGroupJoinRequestsInput, GroupUncheckedUpdateWithoutGroupJoinRequestsInput>
    create: XOR<GroupCreateWithoutGroupJoinRequestsInput, GroupUncheckedCreateWithoutGroupJoinRequestsInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutGroupJoinRequestsInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutGroupJoinRequestsInput, GroupUncheckedUpdateWithoutGroupJoinRequestsInput>
  }

  export type GroupUpdateWithoutGroupJoinRequestsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGroupStatusFieldUpdateOperationsInput | $Enums.GroupStatus
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupLogs?: GroupLogUpdateManyWithoutGroupNestedInput
    admin?: StudentUpdateOneWithoutAdminOfGroupsNestedInput
    members?: GroupMemberUpdateManyWithoutGroupNestedInput
    cohort?: CohortUpdateOneWithoutGroupsNestedInput
  }

  export type GroupUncheckedUpdateWithoutGroupJoinRequestsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGroupStatusFieldUpdateOperationsInput | $Enums.GroupStatus
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    cohortId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupLogs?: GroupLogUncheckedUpdateManyWithoutGroupNestedInput
    members?: GroupMemberUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupCreateWithoutGroupLogsInput = {
    id?: string
    name: string
    description?: string | null
    status: $Enums.GroupStatus
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    admin?: StudentCreateNestedOneWithoutAdminOfGroupsInput
    members?: GroupMemberCreateNestedManyWithoutGroupInput
    cohort?: CohortCreateNestedOneWithoutGroupsInput
    groupJoinRequests?: GroupJoinRequestCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutGroupLogsInput = {
    id?: string
    name: string
    description?: string | null
    status: $Enums.GroupStatus
    adminId?: string | null
    cohortId?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: GroupMemberUncheckedCreateNestedManyWithoutGroupInput
    groupJoinRequests?: GroupJoinRequestUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutGroupLogsInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutGroupLogsInput, GroupUncheckedCreateWithoutGroupLogsInput>
  }

  export type GroupUpsertWithoutGroupLogsInput = {
    update: XOR<GroupUpdateWithoutGroupLogsInput, GroupUncheckedUpdateWithoutGroupLogsInput>
    create: XOR<GroupCreateWithoutGroupLogsInput, GroupUncheckedCreateWithoutGroupLogsInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutGroupLogsInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutGroupLogsInput, GroupUncheckedUpdateWithoutGroupLogsInput>
  }

  export type GroupUpdateWithoutGroupLogsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGroupStatusFieldUpdateOperationsInput | $Enums.GroupStatus
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: StudentUpdateOneWithoutAdminOfGroupsNestedInput
    members?: GroupMemberUpdateManyWithoutGroupNestedInput
    cohort?: CohortUpdateOneWithoutGroupsNestedInput
    groupJoinRequests?: GroupJoinRequestUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutGroupLogsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGroupStatusFieldUpdateOperationsInput | $Enums.GroupStatus
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    cohortId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: GroupMemberUncheckedUpdateManyWithoutGroupNestedInput
    groupJoinRequests?: GroupJoinRequestUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type StudentCreateWithoutGroupsInput = {
    id?: string
    bio?: string | null
    linkedIn?: string | null
    github?: string | null
    twitter?: string | null
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    studentLogs?: StudentLogCreateNestedManyWithoutStudentInput
    user?: UserCreateNestedOneWithoutStudentInput
    cohorts?: StudentCohortCreateNestedManyWithoutStudentInput
    adminOfGroups?: GroupCreateNestedManyWithoutAdminInput
    groupJoinRequests?: GroupJoinRequestCreateNestedManyWithoutUserInput
  }

  export type StudentUncheckedCreateWithoutGroupsInput = {
    id?: string
    bio?: string | null
    linkedIn?: string | null
    github?: string | null
    twitter?: string | null
    website?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    studentLogs?: StudentLogUncheckedCreateNestedManyWithoutStudentInput
    cohorts?: StudentCohortUncheckedCreateNestedManyWithoutStudentInput
    adminOfGroups?: GroupUncheckedCreateNestedManyWithoutAdminInput
    groupJoinRequests?: GroupJoinRequestUncheckedCreateNestedManyWithoutUserInput
  }

  export type StudentCreateOrConnectWithoutGroupsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutGroupsInput, StudentUncheckedCreateWithoutGroupsInput>
  }

  export type GroupCreateWithoutMembersInput = {
    id?: string
    name: string
    description?: string | null
    status: $Enums.GroupStatus
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    groupLogs?: GroupLogCreateNestedManyWithoutGroupInput
    admin?: StudentCreateNestedOneWithoutAdminOfGroupsInput
    cohort?: CohortCreateNestedOneWithoutGroupsInput
    groupJoinRequests?: GroupJoinRequestCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutMembersInput = {
    id?: string
    name: string
    description?: string | null
    status: $Enums.GroupStatus
    adminId?: string | null
    cohortId?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    groupLogs?: GroupLogUncheckedCreateNestedManyWithoutGroupInput
    groupJoinRequests?: GroupJoinRequestUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutMembersInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutMembersInput, GroupUncheckedCreateWithoutMembersInput>
  }

  export type StudentUpsertWithoutGroupsInput = {
    update: XOR<StudentUpdateWithoutGroupsInput, StudentUncheckedUpdateWithoutGroupsInput>
    create: XOR<StudentCreateWithoutGroupsInput, StudentUncheckedCreateWithoutGroupsInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutGroupsInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutGroupsInput, StudentUncheckedUpdateWithoutGroupsInput>
  }

  export type StudentUpdateWithoutGroupsInput = {
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentLogs?: StudentLogUpdateManyWithoutStudentNestedInput
    user?: UserUpdateOneWithoutStudentNestedInput
    cohorts?: StudentCohortUpdateManyWithoutStudentNestedInput
    adminOfGroups?: GroupUpdateManyWithoutAdminNestedInput
    groupJoinRequests?: GroupJoinRequestUpdateManyWithoutUserNestedInput
  }

  export type StudentUncheckedUpdateWithoutGroupsInput = {
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentLogs?: StudentLogUncheckedUpdateManyWithoutStudentNestedInput
    cohorts?: StudentCohortUncheckedUpdateManyWithoutStudentNestedInput
    adminOfGroups?: GroupUncheckedUpdateManyWithoutAdminNestedInput
    groupJoinRequests?: GroupJoinRequestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GroupUpsertWithoutMembersInput = {
    update: XOR<GroupUpdateWithoutMembersInput, GroupUncheckedUpdateWithoutMembersInput>
    create: XOR<GroupCreateWithoutMembersInput, GroupUncheckedCreateWithoutMembersInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutMembersInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutMembersInput, GroupUncheckedUpdateWithoutMembersInput>
  }

  export type GroupUpdateWithoutMembersInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGroupStatusFieldUpdateOperationsInput | $Enums.GroupStatus
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupLogs?: GroupLogUpdateManyWithoutGroupNestedInput
    admin?: StudentUpdateOneWithoutAdminOfGroupsNestedInput
    cohort?: CohortUpdateOneWithoutGroupsNestedInput
    groupJoinRequests?: GroupJoinRequestUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutMembersInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGroupStatusFieldUpdateOperationsInput | $Enums.GroupStatus
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    cohortId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupLogs?: GroupLogUncheckedUpdateManyWithoutGroupNestedInput
    groupJoinRequests?: GroupJoinRequestUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type StudentLogCreateWithoutStudentInput = {
    id?: string
    log: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentLogUncheckedCreateWithoutStudentInput = {
    id?: string
    log: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentLogCreateOrConnectWithoutStudentInput = {
    where: StudentLogWhereUniqueInput
    create: XOR<StudentLogCreateWithoutStudentInput, StudentLogUncheckedCreateWithoutStudentInput>
  }

  export type StudentLogCreateManyStudentInputEnvelope = {
    data: StudentLogCreateManyStudentInput | StudentLogCreateManyStudentInput[]
  }

  export type UserCreateWithoutStudentInput = {
    id?: string
    name: string
    role?: $Enums.UserRole
    email: string
    password: string
    status?: $Enums.UserStatus
    bannedAt?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutStudentInput = {
    id?: string
    name: string
    role?: $Enums.UserRole
    email: string
    password: string
    status?: $Enums.UserStatus
    bannedAt?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutStudentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
  }

  export type StudentCohortCreateWithoutStudentInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cohort: CohortCreateNestedOneWithoutStudentsInput
  }

  export type StudentCohortUncheckedCreateWithoutStudentInput = {
    id?: string
    cohortId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentCohortCreateOrConnectWithoutStudentInput = {
    where: StudentCohortWhereUniqueInput
    create: XOR<StudentCohortCreateWithoutStudentInput, StudentCohortUncheckedCreateWithoutStudentInput>
  }

  export type StudentCohortCreateManyStudentInputEnvelope = {
    data: StudentCohortCreateManyStudentInput | StudentCohortCreateManyStudentInput[]
  }

  export type GroupMemberCreateWithoutStudentInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    group: GroupCreateNestedOneWithoutMembersInput
  }

  export type GroupMemberUncheckedCreateWithoutStudentInput = {
    id?: string
    groupId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupMemberCreateOrConnectWithoutStudentInput = {
    where: GroupMemberWhereUniqueInput
    create: XOR<GroupMemberCreateWithoutStudentInput, GroupMemberUncheckedCreateWithoutStudentInput>
  }

  export type GroupMemberCreateManyStudentInputEnvelope = {
    data: GroupMemberCreateManyStudentInput | GroupMemberCreateManyStudentInput[]
  }

  export type GroupCreateWithoutAdminInput = {
    id?: string
    name: string
    description?: string | null
    status: $Enums.GroupStatus
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    groupLogs?: GroupLogCreateNestedManyWithoutGroupInput
    members?: GroupMemberCreateNestedManyWithoutGroupInput
    cohort?: CohortCreateNestedOneWithoutGroupsInput
    groupJoinRequests?: GroupJoinRequestCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutAdminInput = {
    id?: string
    name: string
    description?: string | null
    status: $Enums.GroupStatus
    cohortId?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    groupLogs?: GroupLogUncheckedCreateNestedManyWithoutGroupInput
    members?: GroupMemberUncheckedCreateNestedManyWithoutGroupInput
    groupJoinRequests?: GroupJoinRequestUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutAdminInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutAdminInput, GroupUncheckedCreateWithoutAdminInput>
  }

  export type GroupCreateManyAdminInputEnvelope = {
    data: GroupCreateManyAdminInput | GroupCreateManyAdminInput[]
  }

  export type GroupJoinRequestCreateWithoutUserInput = {
    id?: string
    status: $Enums.RequestStatus
    reason: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    group?: GroupCreateNestedOneWithoutGroupJoinRequestsInput
  }

  export type GroupJoinRequestUncheckedCreateWithoutUserInput = {
    id?: string
    status: $Enums.RequestStatus
    reason: string
    groupId: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupJoinRequestCreateOrConnectWithoutUserInput = {
    where: GroupJoinRequestWhereUniqueInput
    create: XOR<GroupJoinRequestCreateWithoutUserInput, GroupJoinRequestUncheckedCreateWithoutUserInput>
  }

  export type GroupJoinRequestCreateManyUserInputEnvelope = {
    data: GroupJoinRequestCreateManyUserInput | GroupJoinRequestCreateManyUserInput[]
  }

  export type StudentLogUpsertWithWhereUniqueWithoutStudentInput = {
    where: StudentLogWhereUniqueInput
    update: XOR<StudentLogUpdateWithoutStudentInput, StudentLogUncheckedUpdateWithoutStudentInput>
    create: XOR<StudentLogCreateWithoutStudentInput, StudentLogUncheckedCreateWithoutStudentInput>
  }

  export type StudentLogUpdateWithWhereUniqueWithoutStudentInput = {
    where: StudentLogWhereUniqueInput
    data: XOR<StudentLogUpdateWithoutStudentInput, StudentLogUncheckedUpdateWithoutStudentInput>
  }

  export type StudentLogUpdateManyWithWhereWithoutStudentInput = {
    where: StudentLogScalarWhereInput
    data: XOR<StudentLogUpdateManyMutationInput, StudentLogUncheckedUpdateManyWithoutStudentInput>
  }

  export type StudentLogScalarWhereInput = {
    AND?: StudentLogScalarWhereInput | StudentLogScalarWhereInput[]
    OR?: StudentLogScalarWhereInput[]
    NOT?: StudentLogScalarWhereInput | StudentLogScalarWhereInput[]
    id?: StringFilter<"StudentLog"> | string
    log?: StringFilter<"StudentLog"> | string
    studentId?: StringFilter<"StudentLog"> | string
    createdAt?: DateTimeFilter<"StudentLog"> | Date | string
    updatedAt?: DateTimeFilter<"StudentLog"> | Date | string
  }

  export type UserUpsertWithoutStudentInput = {
    update: XOR<UserUpdateWithoutStudentInput, UserUncheckedUpdateWithoutStudentInput>
    create: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStudentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStudentInput, UserUncheckedUpdateWithoutStudentInput>
  }

  export type UserUpdateWithoutStudentInput = {
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    bannedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutStudentInput = {
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    bannedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentCohortUpsertWithWhereUniqueWithoutStudentInput = {
    where: StudentCohortWhereUniqueInput
    update: XOR<StudentCohortUpdateWithoutStudentInput, StudentCohortUncheckedUpdateWithoutStudentInput>
    create: XOR<StudentCohortCreateWithoutStudentInput, StudentCohortUncheckedCreateWithoutStudentInput>
  }

  export type StudentCohortUpdateWithWhereUniqueWithoutStudentInput = {
    where: StudentCohortWhereUniqueInput
    data: XOR<StudentCohortUpdateWithoutStudentInput, StudentCohortUncheckedUpdateWithoutStudentInput>
  }

  export type StudentCohortUpdateManyWithWhereWithoutStudentInput = {
    where: StudentCohortScalarWhereInput
    data: XOR<StudentCohortUpdateManyMutationInput, StudentCohortUncheckedUpdateManyWithoutStudentInput>
  }

  export type GroupMemberUpsertWithWhereUniqueWithoutStudentInput = {
    where: GroupMemberWhereUniqueInput
    update: XOR<GroupMemberUpdateWithoutStudentInput, GroupMemberUncheckedUpdateWithoutStudentInput>
    create: XOR<GroupMemberCreateWithoutStudentInput, GroupMemberUncheckedCreateWithoutStudentInput>
  }

  export type GroupMemberUpdateWithWhereUniqueWithoutStudentInput = {
    where: GroupMemberWhereUniqueInput
    data: XOR<GroupMemberUpdateWithoutStudentInput, GroupMemberUncheckedUpdateWithoutStudentInput>
  }

  export type GroupMemberUpdateManyWithWhereWithoutStudentInput = {
    where: GroupMemberScalarWhereInput
    data: XOR<GroupMemberUpdateManyMutationInput, GroupMemberUncheckedUpdateManyWithoutStudentInput>
  }

  export type GroupUpsertWithWhereUniqueWithoutAdminInput = {
    where: GroupWhereUniqueInput
    update: XOR<GroupUpdateWithoutAdminInput, GroupUncheckedUpdateWithoutAdminInput>
    create: XOR<GroupCreateWithoutAdminInput, GroupUncheckedCreateWithoutAdminInput>
  }

  export type GroupUpdateWithWhereUniqueWithoutAdminInput = {
    where: GroupWhereUniqueInput
    data: XOR<GroupUpdateWithoutAdminInput, GroupUncheckedUpdateWithoutAdminInput>
  }

  export type GroupUpdateManyWithWhereWithoutAdminInput = {
    where: GroupScalarWhereInput
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyWithoutAdminInput>
  }

  export type GroupJoinRequestUpsertWithWhereUniqueWithoutUserInput = {
    where: GroupJoinRequestWhereUniqueInput
    update: XOR<GroupJoinRequestUpdateWithoutUserInput, GroupJoinRequestUncheckedUpdateWithoutUserInput>
    create: XOR<GroupJoinRequestCreateWithoutUserInput, GroupJoinRequestUncheckedCreateWithoutUserInput>
  }

  export type GroupJoinRequestUpdateWithWhereUniqueWithoutUserInput = {
    where: GroupJoinRequestWhereUniqueInput
    data: XOR<GroupJoinRequestUpdateWithoutUserInput, GroupJoinRequestUncheckedUpdateWithoutUserInput>
  }

  export type GroupJoinRequestUpdateManyWithWhereWithoutUserInput = {
    where: GroupJoinRequestScalarWhereInput
    data: XOR<GroupJoinRequestUpdateManyMutationInput, GroupJoinRequestUncheckedUpdateManyWithoutUserInput>
  }

  export type StudentCreateWithoutCohortsInput = {
    id?: string
    bio?: string | null
    linkedIn?: string | null
    github?: string | null
    twitter?: string | null
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    studentLogs?: StudentLogCreateNestedManyWithoutStudentInput
    user?: UserCreateNestedOneWithoutStudentInput
    groups?: GroupMemberCreateNestedManyWithoutStudentInput
    adminOfGroups?: GroupCreateNestedManyWithoutAdminInput
    groupJoinRequests?: GroupJoinRequestCreateNestedManyWithoutUserInput
  }

  export type StudentUncheckedCreateWithoutCohortsInput = {
    id?: string
    bio?: string | null
    linkedIn?: string | null
    github?: string | null
    twitter?: string | null
    website?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    studentLogs?: StudentLogUncheckedCreateNestedManyWithoutStudentInput
    groups?: GroupMemberUncheckedCreateNestedManyWithoutStudentInput
    adminOfGroups?: GroupUncheckedCreateNestedManyWithoutAdminInput
    groupJoinRequests?: GroupJoinRequestUncheckedCreateNestedManyWithoutUserInput
  }

  export type StudentCreateOrConnectWithoutCohortsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutCohortsInput, StudentUncheckedCreateWithoutCohortsInput>
  }

  export type CohortCreateWithoutStudentsInput = {
    id?: string
    name: string
    description?: string | null
    startDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    groups?: GroupCreateNestedManyWithoutCohortInput
  }

  export type CohortUncheckedCreateWithoutStudentsInput = {
    id?: string
    name: string
    description?: string | null
    startDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    groups?: GroupUncheckedCreateNestedManyWithoutCohortInput
  }

  export type CohortCreateOrConnectWithoutStudentsInput = {
    where: CohortWhereUniqueInput
    create: XOR<CohortCreateWithoutStudentsInput, CohortUncheckedCreateWithoutStudentsInput>
  }

  export type StudentUpsertWithoutCohortsInput = {
    update: XOR<StudentUpdateWithoutCohortsInput, StudentUncheckedUpdateWithoutCohortsInput>
    create: XOR<StudentCreateWithoutCohortsInput, StudentUncheckedCreateWithoutCohortsInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutCohortsInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutCohortsInput, StudentUncheckedUpdateWithoutCohortsInput>
  }

  export type StudentUpdateWithoutCohortsInput = {
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentLogs?: StudentLogUpdateManyWithoutStudentNestedInput
    user?: UserUpdateOneWithoutStudentNestedInput
    groups?: GroupMemberUpdateManyWithoutStudentNestedInput
    adminOfGroups?: GroupUpdateManyWithoutAdminNestedInput
    groupJoinRequests?: GroupJoinRequestUpdateManyWithoutUserNestedInput
  }

  export type StudentUncheckedUpdateWithoutCohortsInput = {
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentLogs?: StudentLogUncheckedUpdateManyWithoutStudentNestedInput
    groups?: GroupMemberUncheckedUpdateManyWithoutStudentNestedInput
    adminOfGroups?: GroupUncheckedUpdateManyWithoutAdminNestedInput
    groupJoinRequests?: GroupJoinRequestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CohortUpsertWithoutStudentsInput = {
    update: XOR<CohortUpdateWithoutStudentsInput, CohortUncheckedUpdateWithoutStudentsInput>
    create: XOR<CohortCreateWithoutStudentsInput, CohortUncheckedCreateWithoutStudentsInput>
    where?: CohortWhereInput
  }

  export type CohortUpdateToOneWithWhereWithoutStudentsInput = {
    where?: CohortWhereInput
    data: XOR<CohortUpdateWithoutStudentsInput, CohortUncheckedUpdateWithoutStudentsInput>
  }

  export type CohortUpdateWithoutStudentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groups?: GroupUpdateManyWithoutCohortNestedInput
  }

  export type CohortUncheckedUpdateWithoutStudentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groups?: GroupUncheckedUpdateManyWithoutCohortNestedInput
  }

  export type StudentCreateWithoutStudentLogsInput = {
    id?: string
    bio?: string | null
    linkedIn?: string | null
    github?: string | null
    twitter?: string | null
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutStudentInput
    cohorts?: StudentCohortCreateNestedManyWithoutStudentInput
    groups?: GroupMemberCreateNestedManyWithoutStudentInput
    adminOfGroups?: GroupCreateNestedManyWithoutAdminInput
    groupJoinRequests?: GroupJoinRequestCreateNestedManyWithoutUserInput
  }

  export type StudentUncheckedCreateWithoutStudentLogsInput = {
    id?: string
    bio?: string | null
    linkedIn?: string | null
    github?: string | null
    twitter?: string | null
    website?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cohorts?: StudentCohortUncheckedCreateNestedManyWithoutStudentInput
    groups?: GroupMemberUncheckedCreateNestedManyWithoutStudentInput
    adminOfGroups?: GroupUncheckedCreateNestedManyWithoutAdminInput
    groupJoinRequests?: GroupJoinRequestUncheckedCreateNestedManyWithoutUserInput
  }

  export type StudentCreateOrConnectWithoutStudentLogsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutStudentLogsInput, StudentUncheckedCreateWithoutStudentLogsInput>
  }

  export type StudentUpsertWithoutStudentLogsInput = {
    update: XOR<StudentUpdateWithoutStudentLogsInput, StudentUncheckedUpdateWithoutStudentLogsInput>
    create: XOR<StudentCreateWithoutStudentLogsInput, StudentUncheckedCreateWithoutStudentLogsInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutStudentLogsInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutStudentLogsInput, StudentUncheckedUpdateWithoutStudentLogsInput>
  }

  export type StudentUpdateWithoutStudentLogsInput = {
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutStudentNestedInput
    cohorts?: StudentCohortUpdateManyWithoutStudentNestedInput
    groups?: GroupMemberUpdateManyWithoutStudentNestedInput
    adminOfGroups?: GroupUpdateManyWithoutAdminNestedInput
    groupJoinRequests?: GroupJoinRequestUpdateManyWithoutUserNestedInput
  }

  export type StudentUncheckedUpdateWithoutStudentLogsInput = {
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cohorts?: StudentCohortUncheckedUpdateManyWithoutStudentNestedInput
    groups?: GroupMemberUncheckedUpdateManyWithoutStudentNestedInput
    adminOfGroups?: GroupUncheckedUpdateManyWithoutAdminNestedInput
    groupJoinRequests?: GroupJoinRequestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type StudentCreateWithoutUserInput = {
    id?: string
    bio?: string | null
    linkedIn?: string | null
    github?: string | null
    twitter?: string | null
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    studentLogs?: StudentLogCreateNestedManyWithoutStudentInput
    cohorts?: StudentCohortCreateNestedManyWithoutStudentInput
    groups?: GroupMemberCreateNestedManyWithoutStudentInput
    adminOfGroups?: GroupCreateNestedManyWithoutAdminInput
    groupJoinRequests?: GroupJoinRequestCreateNestedManyWithoutUserInput
  }

  export type StudentUncheckedCreateWithoutUserInput = {
    id?: string
    bio?: string | null
    linkedIn?: string | null
    github?: string | null
    twitter?: string | null
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    studentLogs?: StudentLogUncheckedCreateNestedManyWithoutStudentInput
    cohorts?: StudentCohortUncheckedCreateNestedManyWithoutStudentInput
    groups?: GroupMemberUncheckedCreateNestedManyWithoutStudentInput
    adminOfGroups?: GroupUncheckedCreateNestedManyWithoutAdminInput
    groupJoinRequests?: GroupJoinRequestUncheckedCreateNestedManyWithoutUserInput
  }

  export type StudentCreateOrConnectWithoutUserInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
  }

  export type StudentUpsertWithoutUserInput = {
    update: XOR<StudentUpdateWithoutUserInput, StudentUncheckedUpdateWithoutUserInput>
    create: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutUserInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutUserInput, StudentUncheckedUpdateWithoutUserInput>
  }

  export type StudentUpdateWithoutUserInput = {
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentLogs?: StudentLogUpdateManyWithoutStudentNestedInput
    cohorts?: StudentCohortUpdateManyWithoutStudentNestedInput
    groups?: GroupMemberUpdateManyWithoutStudentNestedInput
    adminOfGroups?: GroupUpdateManyWithoutAdminNestedInput
    groupJoinRequests?: GroupJoinRequestUpdateManyWithoutUserNestedInput
  }

  export type StudentUncheckedUpdateWithoutUserInput = {
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentLogs?: StudentLogUncheckedUpdateManyWithoutStudentNestedInput
    cohorts?: StudentCohortUncheckedUpdateManyWithoutStudentNestedInput
    groups?: GroupMemberUncheckedUpdateManyWithoutStudentNestedInput
    adminOfGroups?: GroupUncheckedUpdateManyWithoutAdminNestedInput
    groupJoinRequests?: GroupJoinRequestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type StudentCohortCreateManyCohortInput = {
    id?: string
    studentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupCreateManyCohortInput = {
    id?: string
    name: string
    description?: string | null
    status: $Enums.GroupStatus
    adminId?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentCohortUpdateWithoutCohortInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutCohortsNestedInput
  }

  export type StudentCohortUncheckedUpdateWithoutCohortInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentCohortUncheckedUpdateManyWithoutCohortInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupUpdateWithoutCohortInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGroupStatusFieldUpdateOperationsInput | $Enums.GroupStatus
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupLogs?: GroupLogUpdateManyWithoutGroupNestedInput
    admin?: StudentUpdateOneWithoutAdminOfGroupsNestedInput
    members?: GroupMemberUpdateManyWithoutGroupNestedInput
    groupJoinRequests?: GroupJoinRequestUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutCohortInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGroupStatusFieldUpdateOperationsInput | $Enums.GroupStatus
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupLogs?: GroupLogUncheckedUpdateManyWithoutGroupNestedInput
    members?: GroupMemberUncheckedUpdateManyWithoutGroupNestedInput
    groupJoinRequests?: GroupJoinRequestUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateManyWithoutCohortInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGroupStatusFieldUpdateOperationsInput | $Enums.GroupStatus
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupLogCreateManyGroupInput = {
    id?: string
    content: string
    type: $Enums.LogType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupMemberCreateManyGroupInput = {
    id?: string
    studentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupJoinRequestCreateManyGroupInput = {
    id?: string
    status: $Enums.RequestStatus
    reason: string
    userId: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupLogUpdateWithoutGroupInput = {
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumLogTypeFieldUpdateOperationsInput | $Enums.LogType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupLogUncheckedUpdateWithoutGroupInput = {
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumLogTypeFieldUpdateOperationsInput | $Enums.LogType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupLogUncheckedUpdateManyWithoutGroupInput = {
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumLogTypeFieldUpdateOperationsInput | $Enums.LogType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMemberUpdateWithoutGroupInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutGroupsNestedInput
  }

  export type GroupMemberUncheckedUpdateWithoutGroupInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMemberUncheckedUpdateManyWithoutGroupInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupJoinRequestUpdateWithoutGroupInput = {
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    reason?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: StudentUpdateOneWithoutGroupJoinRequestsNestedInput
  }

  export type GroupJoinRequestUncheckedUpdateWithoutGroupInput = {
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    reason?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupJoinRequestUncheckedUpdateManyWithoutGroupInput = {
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    reason?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentLogCreateManyStudentInput = {
    id?: string
    log: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentCohortCreateManyStudentInput = {
    id?: string
    cohortId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupMemberCreateManyStudentInput = {
    id?: string
    groupId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupCreateManyAdminInput = {
    id?: string
    name: string
    description?: string | null
    status: $Enums.GroupStatus
    cohortId?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupJoinRequestCreateManyUserInput = {
    id?: string
    status: $Enums.RequestStatus
    reason: string
    groupId: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentLogUpdateWithoutStudentInput = {
    log?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentLogUncheckedUpdateWithoutStudentInput = {
    log?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentLogUncheckedUpdateManyWithoutStudentInput = {
    log?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentCohortUpdateWithoutStudentInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cohort?: CohortUpdateOneRequiredWithoutStudentsNestedInput
  }

  export type StudentCohortUncheckedUpdateWithoutStudentInput = {
    cohortId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentCohortUncheckedUpdateManyWithoutStudentInput = {
    cohortId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMemberUpdateWithoutStudentInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneRequiredWithoutMembersNestedInput
  }

  export type GroupMemberUncheckedUpdateWithoutStudentInput = {
    groupId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMemberUncheckedUpdateManyWithoutStudentInput = {
    groupId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupUpdateWithoutAdminInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGroupStatusFieldUpdateOperationsInput | $Enums.GroupStatus
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupLogs?: GroupLogUpdateManyWithoutGroupNestedInput
    members?: GroupMemberUpdateManyWithoutGroupNestedInput
    cohort?: CohortUpdateOneWithoutGroupsNestedInput
    groupJoinRequests?: GroupJoinRequestUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutAdminInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGroupStatusFieldUpdateOperationsInput | $Enums.GroupStatus
    cohortId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupLogs?: GroupLogUncheckedUpdateManyWithoutGroupNestedInput
    members?: GroupMemberUncheckedUpdateManyWithoutGroupNestedInput
    groupJoinRequests?: GroupJoinRequestUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateManyWithoutAdminInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGroupStatusFieldUpdateOperationsInput | $Enums.GroupStatus
    cohortId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupJoinRequestUpdateWithoutUserInput = {
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    reason?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneWithoutGroupJoinRequestsNestedInput
  }

  export type GroupJoinRequestUncheckedUpdateWithoutUserInput = {
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    reason?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupJoinRequestUncheckedUpdateManyWithoutUserInput = {
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    reason?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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