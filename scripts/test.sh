#!/usr/bin/env bash
BASEDIR=$(dirname "$0")
cd "${BASEDIR}"/../
echo "${BASEDIR}"

PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"
GRPC_TOOLS_NODE_PROTOC_PLUGIN="./node_modules/.bin/grpc_tools_node_protoc_plugin"
GRPC_TOOLS_NODE_PROTOC="./node_modules/.bin/grpc_tools_node_protoc"

for f in ./src/proto/*; do

    # skip the non proto files
    if [ "$(basename "$f")" == "index.ts" ]; then
        continue
    fi

    echo "$(basename "$f")"
    IFS='.' read -ra DIR_BIN <<<"$(basename "$f")"
    echo ${DIR_BIN[0]}

    mkdir -p "./proto_bin/${DIR_BIN[0]}"

    ${GRPC_TOOLS_NODE_PROTOC} \
        --js_out=import_style=commonjs,binary:"./proto_bin/${DIR_BIN[0]}" \
        --grpc_out="./proto_bin/${DIR_BIN[0]}" \
        --plugin=protoc-gen-grpc="${GRPC_TOOLS_NODE_PROTOC_PLUGIN}" \
        -I './src/proto/' \
        "${f}"

    ${GRPC_TOOLS_NODE_PROTOC} \
        --plugin=protoc-gen-ts="${PROTOC_GEN_TS_PATH}" \
        --ts_out="./proto_bin/${DIR_BIN[0]}" \
        -I './src/proto/' \
        "${f}"
done
