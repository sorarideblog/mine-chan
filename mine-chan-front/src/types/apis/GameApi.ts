/* tslint:disable */
/* eslint-disable */
/**
 * FastAPI
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  CreateGame,
  DigSquare,
  FieldResult,
  FlagSquare,
  HTTPValidationError,
} from '../models/index';
import {
    CreateGameFromJSON,
    CreateGameToJSON,
    DigSquareFromJSON,
    DigSquareToJSON,
    FieldResultFromJSON,
    FieldResultToJSON,
    FlagSquareFromJSON,
    FlagSquareToJSON,
    HTTPValidationErrorFromJSON,
    HTTPValidationErrorToJSON,
} from '../models/index';

export interface ApiGameGameIdDigPostRequest {
    gameId: string;
    digSquare: DigSquare;
}

export interface ApiGameGameIdGetRequest {
    gameId: string;
}

export interface ApiGamePostRequest {
    createGame: CreateGame;
}

export interface ONOFFApiGameGameIdFlagPostRequest {
    gameId: string;
    flagSquare: FlagSquare;
}

/**
 * 
 */
export class GameApi extends runtime.BaseAPI {

    /**
     * マスを開ける
     */
    async apiGameGameIdDigPostRaw(requestParameters: ApiGameGameIdDigPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FieldResult>> {
        if (requestParameters['gameId'] == null) {
            throw new runtime.RequiredError(
                'gameId',
                'Required parameter "gameId" was null or undefined when calling apiGameGameIdDigPost().'
            );
        }

        if (requestParameters['digSquare'] == null) {
            throw new runtime.RequiredError(
                'digSquare',
                'Required parameter "digSquare" was null or undefined when calling apiGameGameIdDigPost().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/game/{game_id}/dig`.replace(`{${"game_id"}}`, encodeURIComponent(String(requestParameters['gameId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DigSquareToJSON(requestParameters['digSquare']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FieldResultFromJSON(jsonValue));
    }

    /**
     * マスを開ける
     */
    async apiGameGameIdDigPost(requestParameters: ApiGameGameIdDigPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FieldResult> {
        const response = await this.apiGameGameIdDigPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * ゲームを取得する
     */
    async apiGameGameIdGetRaw(requestParameters: ApiGameGameIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FieldResult>> {
        if (requestParameters['gameId'] == null) {
            throw new runtime.RequiredError(
                'gameId',
                'Required parameter "gameId" was null or undefined when calling apiGameGameIdGet().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/game/{game_id}`.replace(`{${"game_id"}}`, encodeURIComponent(String(requestParameters['gameId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FieldResultFromJSON(jsonValue));
    }

    /**
     * ゲームを取得する
     */
    async apiGameGameIdGet(requestParameters: ApiGameGameIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FieldResult> {
        const response = await this.apiGameGameIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * ゲーム一覧を取得する
     */
    async apiGameGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<string>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/game/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * ゲーム一覧を取得する
     */
    async apiGameGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<string>> {
        const response = await this.apiGameGetRaw(initOverrides);
        return await response.value();
    }

    /**
     * ゲームを作成する
     */
    async apiGamePostRaw(requestParameters: ApiGamePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        if (requestParameters['createGame'] == null) {
            throw new runtime.RequiredError(
                'createGame',
                'Required parameter "createGame" was null or undefined when calling apiGamePost().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/game/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateGameToJSON(requestParameters['createGame']),
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<string>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * ゲームを作成する
     */
    async apiGamePost(requestParameters: ApiGamePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.apiGamePostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * フラグをOn/Offする
     */
    async oNOFFApiGameGameIdFlagPostRaw(requestParameters: ONOFFApiGameGameIdFlagPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FieldResult>> {
        if (requestParameters['gameId'] == null) {
            throw new runtime.RequiredError(
                'gameId',
                'Required parameter "gameId" was null or undefined when calling oNOFFApiGameGameIdFlagPost().'
            );
        }

        if (requestParameters['flagSquare'] == null) {
            throw new runtime.RequiredError(
                'flagSquare',
                'Required parameter "flagSquare" was null or undefined when calling oNOFFApiGameGameIdFlagPost().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/game/{game_id}/flag`.replace(`{${"game_id"}}`, encodeURIComponent(String(requestParameters['gameId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: FlagSquareToJSON(requestParameters['flagSquare']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FieldResultFromJSON(jsonValue));
    }

    /**
     * フラグをOn/Offする
     */
    async oNOFFApiGameGameIdFlagPost(requestParameters: ONOFFApiGameGameIdFlagPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FieldResult> {
        const response = await this.oNOFFApiGameGameIdFlagPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
