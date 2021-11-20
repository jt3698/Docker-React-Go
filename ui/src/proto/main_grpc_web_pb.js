/**
 * @fileoverview gRPC-Web generated client stub for proto
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.proto = require('./main_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.proto.MainServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.proto.MainServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.EchoRequest,
 *   !proto.proto.EchoResponse>}
 */
const methodDescriptor_MainService_Echo = new grpc.web.MethodDescriptor(
  '/proto.MainService/Echo',
  grpc.web.MethodType.UNARY,
  proto.proto.EchoRequest,
  proto.proto.EchoResponse,
  /**
   * @param {!proto.proto.EchoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.EchoResponse.deserializeBinary
);


/**
 * @param {!proto.proto.EchoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.proto.EchoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.EchoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.MainServiceClient.prototype.echo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.MainService/Echo',
      request,
      metadata || {},
      methodDescriptor_MainService_Echo,
      callback);
};


/**
 * @param {!proto.proto.EchoRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.EchoResponse>}
 *     Promise that resolves to the response
 */
proto.proto.MainServicePromiseClient.prototype.echo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.MainService/Echo',
      request,
      metadata || {},
      methodDescriptor_MainService_Echo);
};


module.exports = proto.proto;

