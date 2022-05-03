import { OnApplicationBootstrap } from '@nestjs/common';
export declare class RedisService implements OnApplicationBootstrap {
    static client: any;
    static config(config?: {
        host: string;
        port: number;
        db: number;
    }): Promise<import("@node-redis/client").RedisClientType<{
        graph: {
            CONFIG_GET: typeof import("@node-redis/graph/dist/commands/CONFIG_GET");
            configGet: typeof import("@node-redis/graph/dist/commands/CONFIG_GET");
            CONFIG_SET: typeof import("@node-redis/graph/dist/commands/CONFIG_SET");
            configSet: typeof import("@node-redis/graph/dist/commands/CONFIG_SET");
            DELETE: typeof import("@node-redis/graph/dist/commands/DELETE");
            delete: typeof import("@node-redis/graph/dist/commands/DELETE");
            EXPLAIN: typeof import("@node-redis/graph/dist/commands/EXPLAIN");
            explain: typeof import("@node-redis/graph/dist/commands/EXPLAIN");
            LIST: typeof import("@node-redis/graph/dist/commands/LIST");
            list: typeof import("@node-redis/graph/dist/commands/LIST");
            PROFILE: typeof import("@node-redis/graph/dist/commands/PROFILE");
            profile: typeof import("@node-redis/graph/dist/commands/PROFILE");
            QUERY_RO: typeof import("@node-redis/graph/dist/commands/QUERY_RO");
            queryRo: typeof import("@node-redis/graph/dist/commands/QUERY_RO");
            QUERY: typeof import("@node-redis/graph/dist/commands/QUERY");
            query: typeof import("@node-redis/graph/dist/commands/QUERY");
            SLOWLOG: typeof import("@node-redis/graph/dist/commands/SLOWLOG");
            slowLog: typeof import("@node-redis/graph/dist/commands/SLOWLOG");
        };
        json: {
            ARRAPPEND: typeof import("@node-redis/json/dist/commands/ARRAPPEND");
            arrAppend: typeof import("@node-redis/json/dist/commands/ARRAPPEND");
            ARRINDEX: typeof import("@node-redis/json/dist/commands/ARRINDEX");
            arrIndex: typeof import("@node-redis/json/dist/commands/ARRINDEX");
            ARRINSERT: typeof import("@node-redis/json/dist/commands/ARRINSERT");
            arrInsert: typeof import("@node-redis/json/dist/commands/ARRINSERT");
            ARRLEN: typeof import("@node-redis/json/dist/commands/ARRLEN");
            arrLen: typeof import("@node-redis/json/dist/commands/ARRLEN");
            ARRPOP: typeof import("@node-redis/json/dist/commands/ARRPOP");
            arrPop: typeof import("@node-redis/json/dist/commands/ARRPOP");
            ARRTRIM: typeof import("@node-redis/json/dist/commands/ARRTRIM");
            arrTrim: typeof import("@node-redis/json/dist/commands/ARRTRIM");
            DEBUG_MEMORY: typeof import("@node-redis/json/dist/commands/DEBUG_MEMORY");
            debugMemory: typeof import("@node-redis/json/dist/commands/DEBUG_MEMORY");
            DEL: typeof import("@node-redis/json/dist/commands/DEL");
            del: typeof import("@node-redis/json/dist/commands/DEL");
            FORGET: typeof import("@node-redis/json/dist/commands/FORGET");
            forget: typeof import("@node-redis/json/dist/commands/FORGET");
            GET: typeof import("@node-redis/json/dist/commands/GET");
            get: typeof import("@node-redis/json/dist/commands/GET");
            MGET: typeof import("@node-redis/json/dist/commands/MGET");
            mGet: typeof import("@node-redis/json/dist/commands/MGET");
            NUMINCRBY: typeof import("@node-redis/json/dist/commands/NUMINCRBY");
            numIncrBy: typeof import("@node-redis/json/dist/commands/NUMINCRBY");
            NUMMULTBY: typeof import("@node-redis/json/dist/commands/NUMMULTBY");
            numMultBy: typeof import("@node-redis/json/dist/commands/NUMMULTBY");
            OBJKEYS: typeof import("@node-redis/json/dist/commands/OBJKEYS");
            objKeys: typeof import("@node-redis/json/dist/commands/OBJKEYS");
            OBJLEN: typeof import("@node-redis/json/dist/commands/OBJLEN");
            objLen: typeof import("@node-redis/json/dist/commands/OBJLEN");
            RESP: typeof import("@node-redis/json/dist/commands/RESP");
            resp: typeof import("@node-redis/json/dist/commands/RESP");
            SET: typeof import("@node-redis/json/dist/commands/SET");
            set: typeof import("@node-redis/json/dist/commands/SET");
            STRAPPEND: typeof import("@node-redis/json/dist/commands/STRAPPEND");
            strAppend: typeof import("@node-redis/json/dist/commands/STRAPPEND");
            STRLEN: typeof import("@node-redis/json/dist/commands/STRLEN");
            strLen: typeof import("@node-redis/json/dist/commands/STRLEN");
            TYPE: typeof import("@node-redis/json/dist/commands/TYPE");
            type: typeof import("@node-redis/json/dist/commands/TYPE");
        };
        ft: {
            _LIST: typeof import("@node-redis/search/dist/commands/_LIST");
            _list: typeof import("@node-redis/search/dist/commands/_LIST");
            ALTER: typeof import("@node-redis/search/dist/commands/ALTER");
            alter: typeof import("@node-redis/search/dist/commands/ALTER");
            AGGREGATE: typeof import("@node-redis/search/dist/commands/AGGREGATE");
            aggregate: typeof import("@node-redis/search/dist/commands/AGGREGATE");
            ALIASADD: typeof import("@node-redis/search/dist/commands/ALIASADD");
            aliasAdd: typeof import("@node-redis/search/dist/commands/ALIASADD");
            ALIASDEL: typeof import("@node-redis/search/dist/commands/ALIASDEL");
            aliasDel: typeof import("@node-redis/search/dist/commands/ALIASDEL");
            ALIASUPDATE: typeof import("@node-redis/search/dist/commands/ALIASUPDATE");
            aliasUpdate: typeof import("@node-redis/search/dist/commands/ALIASUPDATE");
            CONFIG_GET: typeof import("@node-redis/search/dist/commands/CONFIG_GET");
            configGet: typeof import("@node-redis/search/dist/commands/CONFIG_GET");
            CONFIG_SET: typeof import("@node-redis/search/dist/commands/CONFIG_SET");
            configSet: typeof import("@node-redis/search/dist/commands/CONFIG_SET");
            CREATE: typeof import("@node-redis/search/dist/commands/CREATE");
            create: typeof import("@node-redis/search/dist/commands/CREATE");
            DICTADD: typeof import("@node-redis/search/dist/commands/DICTADD");
            dictAdd: typeof import("@node-redis/search/dist/commands/DICTADD");
            DICTDEL: typeof import("@node-redis/search/dist/commands/DICTDEL");
            dictDel: typeof import("@node-redis/search/dist/commands/DICTDEL");
            DICTDUMP: typeof import("@node-redis/search/dist/commands/DICTDUMP");
            dictDump: typeof import("@node-redis/search/dist/commands/DICTDUMP");
            DROPINDEX: typeof import("@node-redis/search/dist/commands/DROPINDEX");
            dropIndex: typeof import("@node-redis/search/dist/commands/DROPINDEX");
            EXPLAIN: typeof import("@node-redis/search/dist/commands/EXPLAIN");
            explain: typeof import("@node-redis/search/dist/commands/EXPLAIN");
            EXPLAINCLI: typeof import("@node-redis/search/dist/commands/EXPLAINCLI");
            explainCli: typeof import("@node-redis/search/dist/commands/EXPLAINCLI");
            INFO: typeof import("@node-redis/search/dist/commands/INFO");
            info: typeof import("@node-redis/search/dist/commands/INFO");
            PROFILESEARCH: typeof import("@node-redis/search/dist/commands/PROFILE_SEARCH");
            profileSearch: typeof import("@node-redis/search/dist/commands/PROFILE_SEARCH");
            PROFILEAGGREGATE: typeof import("@node-redis/search/dist/commands/PROFILE_AGGREGATE");
            profileAggregate: typeof import("@node-redis/search/dist/commands/PROFILE_AGGREGATE");
            SEARCH: typeof import("@node-redis/search/dist/commands/SEARCH");
            search: typeof import("@node-redis/search/dist/commands/SEARCH");
            SPELLCHECK: typeof import("@node-redis/search/dist/commands/SPELLCHECK");
            spellCheck: typeof import("@node-redis/search/dist/commands/SPELLCHECK");
            SUGADD: typeof import("@node-redis/search/dist/commands/SUGADD");
            sugAdd: typeof import("@node-redis/search/dist/commands/SUGADD");
            SUGDEL: typeof import("@node-redis/search/dist/commands/SUGDEL");
            sugDel: typeof import("@node-redis/search/dist/commands/SUGDEL");
            SUGGET_WITHPAYLOADS: typeof import("@node-redis/search/dist/commands/SUGGET_WITHPAYLOADS");
            sugGetWithPayloads: typeof import("@node-redis/search/dist/commands/SUGGET_WITHPAYLOADS");
            SUGGET_WITHSCORES_WITHPAYLOADS: typeof import("@node-redis/search/dist/commands/SUGGET_WITHSCORES_WITHPAYLOADS");
            sugGetWithScoresWithPayloads: typeof import("@node-redis/search/dist/commands/SUGGET_WITHSCORES_WITHPAYLOADS");
            SUGGET_WITHSCORES: typeof import("@node-redis/search/dist/commands/SUGGET_WITHSCORES");
            sugGetWithScores: typeof import("@node-redis/search/dist/commands/SUGGET_WITHSCORES");
            SUGGET: typeof import("@node-redis/search/dist/commands/SUGGET");
            sugGet: typeof import("@node-redis/search/dist/commands/SUGGET");
            SUGLEN: typeof import("@node-redis/search/dist/commands/SUGLEN");
            sugLen: typeof import("@node-redis/search/dist/commands/SUGLEN");
            SYNDUMP: typeof import("@node-redis/search/dist/commands/SYNDUMP");
            synDump: typeof import("@node-redis/search/dist/commands/SYNDUMP");
            SYNUPDATE: typeof import("@node-redis/search/dist/commands/SYNUPDATE");
            synUpdate: typeof import("@node-redis/search/dist/commands/SYNUPDATE");
            TAGVALS: typeof import("@node-redis/search/dist/commands/TAGVALS");
            tagVals: typeof import("@node-redis/search/dist/commands/TAGVALS");
        };
        ts: {
            ADD: typeof import("@node-redis/time-series/dist/commands/ADD");
            add: typeof import("@node-redis/time-series/dist/commands/ADD");
            ALTER: typeof import("@node-redis/time-series/dist/commands/ALTER");
            alter: typeof import("@node-redis/time-series/dist/commands/ALTER");
            CREATE: typeof import("@node-redis/time-series/dist/commands/CREATE");
            create: typeof import("@node-redis/time-series/dist/commands/CREATE");
            CREATERULE: typeof import("@node-redis/time-series/dist/commands/CREATERULE");
            createRule: typeof import("@node-redis/time-series/dist/commands/CREATERULE");
            DECRBY: typeof import("@node-redis/time-series/dist/commands/DECRBY");
            decrBy: typeof import("@node-redis/time-series/dist/commands/DECRBY");
            DEL: typeof import("@node-redis/time-series/dist/commands/DEL");
            del: typeof import("@node-redis/time-series/dist/commands/DEL");
            DELETERULE: typeof import("@node-redis/time-series/dist/commands/DELETERULE");
            deleteRule: typeof import("@node-redis/time-series/dist/commands/DELETERULE");
            GET: typeof import("@node-redis/time-series/dist/commands/GET");
            get: typeof import("@node-redis/time-series/dist/commands/GET");
            INCRBY: typeof import("@node-redis/time-series/dist/commands/INCRBY");
            incrBy: typeof import("@node-redis/time-series/dist/commands/INCRBY");
            INFO_DEBUG: typeof import("@node-redis/time-series/dist/commands/INFO_DEBUG");
            infoDebug: typeof import("@node-redis/time-series/dist/commands/INFO_DEBUG");
            INFO: typeof import("@node-redis/time-series/dist/commands/INFO");
            info: typeof import("@node-redis/time-series/dist/commands/INFO");
            MADD: typeof import("@node-redis/time-series/dist/commands/MADD");
            mAdd: typeof import("@node-redis/time-series/dist/commands/MADD");
            MGET: typeof import("@node-redis/time-series/dist/commands/MGET");
            mGet: typeof import("@node-redis/time-series/dist/commands/MGET");
            MGET_WITHLABELS: typeof import("@node-redis/time-series/dist/commands/MGET_WITHLABELS");
            mGetWithLabels: typeof import("@node-redis/time-series/dist/commands/MGET_WITHLABELS");
            QUERYINDEX: typeof import("@node-redis/time-series/dist/commands/QUERYINDEX");
            queryIndex: typeof import("@node-redis/time-series/dist/commands/QUERYINDEX");
            RANGE: typeof import("@node-redis/time-series/dist/commands/RANGE");
            range: typeof import("@node-redis/time-series/dist/commands/RANGE");
            REVRANGE: typeof import("@node-redis/time-series/dist/commands/REVRANGE");
            revRange: typeof import("@node-redis/time-series/dist/commands/REVRANGE");
            MRANGE: typeof import("@node-redis/time-series/dist/commands/MRANGE");
            mRange: typeof import("@node-redis/time-series/dist/commands/MRANGE");
            MRANGE_WITHLABELS: typeof import("@node-redis/time-series/dist/commands/MRANGE_WITHLABELS");
            mRangeWithLabels: typeof import("@node-redis/time-series/dist/commands/MRANGE_WITHLABELS");
            MREVRANGE: typeof import("@node-redis/time-series/dist/commands/MREVRANGE");
            mRevRange: typeof import("@node-redis/time-series/dist/commands/MREVRANGE");
            MREVRANGE_WITHLABELS: typeof import("@node-redis/time-series/dist/commands/MREVRANGE_WITHLABELS");
            mRevRangeWithLabels: typeof import("@node-redis/time-series/dist/commands/MREVRANGE_WITHLABELS");
        };
        bf: {
            ADD: typeof import("@node-redis/bloom/dist/commands/bloom/ADD");
            add: typeof import("@node-redis/bloom/dist/commands/bloom/ADD");
            EXISTS: typeof import("@node-redis/bloom/dist/commands/bloom/EXISTS");
            exists: typeof import("@node-redis/bloom/dist/commands/bloom/EXISTS");
            INFO: typeof import("@node-redis/bloom/dist/commands/bloom/INFO");
            info: typeof import("@node-redis/bloom/dist/commands/bloom/INFO");
            INSERT: typeof import("@node-redis/bloom/dist/commands/bloom/INSERT");
            insert: typeof import("@node-redis/bloom/dist/commands/bloom/INSERT");
            LOADCHUNK: typeof import("@node-redis/bloom/dist/commands/bloom/LOADCHUNK");
            loadChunk: typeof import("@node-redis/bloom/dist/commands/bloom/LOADCHUNK");
            MADD: typeof import("@node-redis/bloom/dist/commands/bloom/MADD");
            mAdd: typeof import("@node-redis/bloom/dist/commands/bloom/MADD");
            MEXISTS: typeof import("@node-redis/bloom/dist/commands/bloom/MEXISTS");
            mExists: typeof import("@node-redis/bloom/dist/commands/bloom/MEXISTS");
            RESERVE: typeof import("@node-redis/bloom/dist/commands/bloom/RESERVE");
            reserve: typeof import("@node-redis/bloom/dist/commands/bloom/RESERVE");
            SCANDUMP: typeof import("@node-redis/bloom/dist/commands/bloom/SCANDUMP");
            scanDump: typeof import("@node-redis/bloom/dist/commands/bloom/SCANDUMP");
        };
        cms: {
            INCRBY: typeof import("@node-redis/bloom/dist/commands/count-min-sketch/INCRBY");
            incrBy: typeof import("@node-redis/bloom/dist/commands/count-min-sketch/INCRBY");
            INFO: typeof import("@node-redis/bloom/dist/commands/count-min-sketch/INFO");
            info: typeof import("@node-redis/bloom/dist/commands/count-min-sketch/INFO");
            INITBYDIM: typeof import("@node-redis/bloom/dist/commands/count-min-sketch/INITBYDIM");
            initByDim: typeof import("@node-redis/bloom/dist/commands/count-min-sketch/INITBYDIM");
            INITBYPROB: typeof import("@node-redis/bloom/dist/commands/count-min-sketch/INITBYPROB");
            initByProb: typeof import("@node-redis/bloom/dist/commands/count-min-sketch/INITBYPROB");
            MERGE: typeof import("@node-redis/bloom/dist/commands/count-min-sketch/MERGE");
            merge: typeof import("@node-redis/bloom/dist/commands/count-min-sketch/MERGE");
            QUERY: typeof import("@node-redis/bloom/dist/commands/count-min-sketch/QUERY");
            query: typeof import("@node-redis/bloom/dist/commands/count-min-sketch/QUERY");
        };
        cf: {
            ADD: typeof import("@node-redis/bloom/dist/commands/cuckoo/ADD");
            add: typeof import("@node-redis/bloom/dist/commands/cuckoo/ADD");
            ADDNX: typeof import("@node-redis/bloom/dist/commands/cuckoo/ADDNX");
            addNX: typeof import("@node-redis/bloom/dist/commands/cuckoo/ADDNX");
            COUNT: typeof import("@node-redis/bloom/dist/commands/cuckoo/COUNT");
            count: typeof import("@node-redis/bloom/dist/commands/cuckoo/COUNT");
            DEL: typeof import("@node-redis/bloom/dist/commands/cuckoo/DEL");
            del: typeof import("@node-redis/bloom/dist/commands/cuckoo/DEL");
            EXISTS: typeof import("@node-redis/bloom/dist/commands/cuckoo/EXISTS");
            exists: typeof import("@node-redis/bloom/dist/commands/cuckoo/EXISTS");
            INFO: typeof import("@node-redis/bloom/dist/commands/cuckoo/INFO");
            info: typeof import("@node-redis/bloom/dist/commands/cuckoo/INFO");
            INSERT: typeof import("@node-redis/bloom/dist/commands/cuckoo/INSERT");
            insert: typeof import("@node-redis/bloom/dist/commands/cuckoo/INSERT");
            INSERTNX: typeof import("@node-redis/bloom/dist/commands/cuckoo/INSERTNX");
            insertNX: typeof import("@node-redis/bloom/dist/commands/cuckoo/INSERTNX");
            LOADCHUNK: typeof import("@node-redis/bloom/dist/commands/cuckoo/LOADCHUNK");
            loadChunk: typeof import("@node-redis/bloom/dist/commands/cuckoo/LOADCHUNK");
            RESERVE: typeof import("@node-redis/bloom/dist/commands/cuckoo/RESERVE");
            reserve: typeof import("@node-redis/bloom/dist/commands/cuckoo/RESERVE");
            SCANDUMP: typeof import("@node-redis/bloom/dist/commands/cuckoo/SCANDUMP");
            scanDump: typeof import("@node-redis/bloom/dist/commands/cuckoo/SCANDUMP");
        };
        topK: {
            ADD: typeof import("@node-redis/bloom/dist/commands/top-k/ADD");
            add: typeof import("@node-redis/bloom/dist/commands/top-k/ADD");
            COUNT: typeof import("@node-redis/bloom/dist/commands/top-k/COUNT");
            count: typeof import("@node-redis/bloom/dist/commands/top-k/COUNT");
            INCRBY: typeof import("@node-redis/bloom/dist/commands/top-k/INCRBY");
            incrBy: typeof import("@node-redis/bloom/dist/commands/top-k/INCRBY");
            INFO: typeof import("@node-redis/bloom/dist/commands/top-k/INFO");
            info: typeof import("@node-redis/bloom/dist/commands/top-k/INFO");
            LIST: typeof import("@node-redis/bloom/dist/commands/top-k/LIST");
            list: typeof import("@node-redis/bloom/dist/commands/top-k/LIST");
            QUERY: typeof import("@node-redis/bloom/dist/commands/top-k/QUERY");
            query: typeof import("@node-redis/bloom/dist/commands/top-k/QUERY");
            RESERVE: typeof import("@node-redis/bloom/dist/commands/top-k/RESERVE");
            reserve: typeof import("@node-redis/bloom/dist/commands/top-k/RESERVE");
        };
    } & import("redis").RedisModules, import("redis").RedisScripts>>;
    onApplicationBootstrap(): void;
}
