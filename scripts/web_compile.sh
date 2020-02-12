BASEDIR=$(dirname "$0")
cd "${BASEDIR}"/../

for f in ./src/proto/*; do

    echo "$(basename "$f")"
    IFS='.' read -ra DIR_BIN <<<"$(basename "$f")"
    echo ${DIR_BIN[0]}

    mkdir -p "./proto_bin_web/${DIR_BIN[0]}"

    protoc \
        --js_out=import_style=commonjs,binary:"./proto_bin_web/${DIR_BIN[0]}" \
        --grpc-web_out=import_style=commonjs,mode=grpcwebtext:"./proto_bin_web/${DIR_BIN[0]}" \
        -I="./src/proto/" \
        "${f}"

    protoc \
        --js_out=import_style=commonjs,binary:"./proto_bin_web/${DIR_BIN[0]}" \
        --grpc-web_out=import_style=typescript,mode=grpcwebtext:"./proto_bin_web/${DIR_BIN[0]}" \
        -I="./src/proto/" \
        "${f}"
done
