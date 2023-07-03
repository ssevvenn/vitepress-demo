---
prev: false
next: false
---
# HTTP API参考

## 接口调用业务系统身份签名确认

链外应用系统通过前置节点向区块链上特定业务域发出链上操作请求时，需要进行业务系统身份确认，以便要访问的业务系统判断链外应用系统是否获得访问授权。

接口调用业务系统身份确认过程如下：

  1. 将接口输入参数按照相应的格式进行构造
  2. 分别将要访问的业务域身份标识、格式化的接口输入参数、当前时间戳（datetime.now）转换成Byte[]
  3. 依据如下顺序拼接成一个Byte[]：

➀业务域身份标识 \+ ➁接口输入参数 \+ ➂当前时间戳

  1. 用业务系统数字身份私钥，通过从法链提供的签名类库对第3步拼接好的Byte[]进行签名，并获得的签名结果即为sys_sign
  2. 在HTTP API调用时，在Header中进行如下设置

名称 | 类型 | 取值  
---|---|---  
sign_ts | long | 获取当前时间，并转换成long类型  
biz_id | string | 要访问链上业务域的唯一标识  
sys_sign | string | 第4步获得的签名结果  
  
## 接口说明

### 基础上链交易操作

#### pbST.do【SendTx】

  * 接口地址

clt/pbST.do

  * 功能描述

提交上链交易。

  * Header参数

名称 | 类型 | 取值  
---|---|---  
Content-Type | string | application/json  
sys_sign_ts | long | 获取当前时间，并转换成long类型。调用接口的业务系统数字身份签名时间戳  
biz_id | string | 要访问链上业务域的唯一标识  
sys_sign | string | 调用接口的业务系统身份确权签名结果 sys_sign的生成方法：
分别将biz_id、sys_sign_ts转换成Byte[] 将ReqSendTx通过Protobuf序列化成Byte[]
依据如下顺序拼接成一个Byte[]： ➀biz_id + ➁ReqSendTx + ➂sys_sign_ts
用业务系统数字身份私钥，通过从法链提供的签名类库对第3步拼接好的Byte[]进行签名，并获得的签名结果即为sys_sign  
  
  * 输入参数

参数构造格式 | Protobuf Message  
---|---  
message ReqSendTx { string txBody = 1; //上链交易体 string requesterSign = 2;
//上链操作申请者对txBody的签名结果，ownerID、grantorID 、approverID对应的私钥 string sysSign = 3;
//调用接口的业务系统数字身份对txBody的签名结果 string txSenderSign = 4;
//Tx发送者（senderID）对txBody的签名结果 } |  
requesterSign的生成方法 |  
将txBody通过Protobuf序列化成Byte[]
用上链交易操作申请者数字身份私钥（ownerID、grantorID、approverID），通过从法链提供的签名类库对第1步的Byte[]进行签名，并获得的签名结果即为requesterSign
|  
sysSign的生成方法 |  
将txBody通过Protobuf序列化成Byte[]
用调用接口的业务系统数字身份对应私钥，通过从法链提供的签名类库对第1步的Byte[]进行签名，并获得的签名结果即为sysSign |  
txSenderSign的生成方法 |  
将txBody通过Protobuf序列化成Byte[]
用上链交易操作发送者数字身份私钥，通过从法链提供的签名类库对第1步的Byte[]进行签名，并获得的签名结果即为txSenderSign  
  
  * 调用返回

返回信息格式 | Protobuf Message的JSON格式序列化结果  
---|---  
message RespSendTx { int32 retCode = 1; //返值码 string retMsg = 2; //描述信息 string
txHash = 3; //上链交易hash }  
  
  * 调用方法

    
~~~shell    
    curl --request POST 'http://localhost:8000/fbs/clt/pbST.do' \
    --header 'Content-Type: application/json' \
    --header 'sys_sign_ts: 1600328025054' \
    --header 'biz_id: 861e59478373702a9b8c7b848a22a32feed5d20a' \
    --header 'sys_sign: a7fef9d03b5b6e9fa5d9b3915aaecfb3c5f0197d833bc7b2513efc9533e16590868649b3a1a7605b6d2e78ac82932b98f5a75f51e67e48a8e31e539c3ee4007ebfb992aa4445d809a75fa773' \
    --data-raw '{
           "txBody": "9b3915aaecfb3c5f0197d833bc7b2513efc9533e16590868649b3a1a7605b6d2e78ac82932b98f5a2fc1bc4679bb2da513704",
           "senderSignTs":1600328025054,
           "txSenderSign": "a5d9b3915aaecfb3c5f0197d833bc7b2513efc9533e16590868649b3a1a7605b6d2e78ac82932b98f5a24679bb2da51370435292c7bdf934979b9c9c63d6"
        }'
~~~    

| "data-raw"为ReqSendTx（Protobuf Message）的JSON格式序列化结果 |

  * 异常信息

#### pbGFS.do【GetFileTxStatus】

  * 接口地址

clt/pbGFS.do

  * 功能描述

查询文件上链交易操作处理状态。

  * Header参数

名称 | 类型 | 取值  
---|---|---  
Content-Type | string | application/json  
sys_sign_ts | long | 获取当前时间，并转换成long类型。调用接口的业务系统数字身份签名时间戳  
biz_id | string | 要访问链上业务域的唯一标识  
sys_sign | string | 调用接口的业务系统身份确权签名结果 sys_sign的生成方法：
分别将biz_id、sys_sign_ts转换成Byte[] 将ReqFileTxStatus通过Protobuf序列化成Byte[]
依据如下顺序拼接成一个Byte[]： ➀biz_id + ➁ReqFileTxStatus + ➂sys_sign_ts
用业务系统数字身份私钥，通过从法链提供的签名类库对第3步拼接好的Byte[]进行签名，并获得的签名结果即为sys_sign  
  
  * 输入参数

参数构造格式 | Protobuf Message  
---|---  
message ReqFileTxStatus { string txHash = 1; //上链交易hash }  
  
  * 调用返回

返回信息格式 | Protobuf Message的JSON格式序列化结果  
---|---  
message RespFileTxStatus { int32 retStatus = 1; //处理状态编码 int32 retErrorCode =
2; //错误代码 string retMsg = 3; //描述信息 FileTxInfo fileTxInfo = 4;
//文件上链交易的交易链上生成信息 BlockInfo blockInfo = 5; //文件上链交易的所在区块信息 }  
  
  * retStatus取值

状态取值 | 描述 | 备注  
---|---|---  
1 | 上链交易发送成功。TxSendSuccess | 节点确认接收上链交易请求，等待区块链执行处理。  
2 | 上链交易发送失败。TxSendFailure | 节点接收上链交易请求失败，上链交易请求需重新提交。  
3 | 上链交易执行成功。TxExecSuccess | 上链交易执行成功，等待落块确认。  
4 | 上链交易执行失败。TxExecFailure | 上链交易执行失败。上链交易请求需重新提交。  
5 | 上链交易落块确认。TxBlockConfirm | 上链交易执行成功，并获得落块确认。  
6 | 上链交易落块确认失败。TxBlkCfmFailure | 因落块确认失败，上链交易执行结果被链回滚。上链交易请求需重新提交。  
7 | 文件成功上链保存。FileUploadAccomplish | 文件保存链上操作处理彻底完成，文件元数据和文件本体均成功上链保存。  
8 | 文件上链保存失败。FileUploadFailure | 文件本体上链保存因超过重复尝试次数而超时失败，文件上链交易请求需重新提交。  
  
  * FileTxInfo返回信息

返回信息格式 | Protobuf Message的JSON格式序列化结果  
---|---  
message FileTxInfo { string txHash = 1; //在链上生成的上链交易Hash int64 txExecTimestamp
= 2; //上链交易被执行的时间，datetime对应的int64类型 string fileID = 3; //文件上链交易处理的文件链上ID
string versionID = 4; //文件上链交易处理的文件版本ID }  
  
  * BlockInfo返回信息

返回信息格式 | Protobuf Message的JSON格式序列化结果  
---|---  
message BlockInfo { string blockHash = 1; //上链交易所在区块的区块hash int64
blockTimestamp = 2; //上链交易所在区块的生成时间戳，datetime对应的int64类型 int64 blockHeight = 3;
//上链交易所在区块高度 int64 currentBlockHeight = 4; //区块链当前区块高度 }  
  
  * 调用方法

    
~~~shell     
    curl --request POST 'http://localhost:8000/fbs/clt/pbGFS.do' \
    --header 'Content-Type: application/json' \
    --header 'sys_sign_ts: 1600328025054' \
    --header 'biz_id: 861e59478373702a9b8c7b848a22a32feed5d20a' \
    --header 'sys_sign: a7fef9d03b5b6e9fa5d9b3915aaecfb3c5f0197d833bc7b2513efc9533e16590868649b3a1a7605b6d2e78ac82932b98f5a75f51e67e48a8e31e539c3ee4007ebfb992aa4445d809a75fa773' \
    --data-raw '{
           "txHash":"9b3915aaecfb3c5f0197d833e16590868649b3a1a7605b6d2e78ac82932b9c1bc4679bb2da513704"
        }'
~~~    

| "data-raw"为ReqFileTxStatus（Protobuf Message）的JSON格式序列化结果 |

  * 异常信息

#### pbGDS.do【GetDataTxStatus】

  * 接口地址

clt/pbGDS.do

  * 功能描述

查询结构数据上链交易操作处理状态。

  * Header参数

名称 | 类型 | 取值  
---|---|---  
Content-Type | string | application/json  
sys_sign_ts | long | 获取当前时间，并转换成long类型。调用接口的业务系统数字身份签名时间戳  
biz_id | string | 要访问链上业务域的唯一标识  
sys_sign | string | 调用接口的业务系统身份确权签名结果 sys_sign的生成方法：
分别将biz_id、sys_sign_ts转换成Byte[] 将ReqDataTxStatus通过Protobuf序列化成Byte[]
依据如下顺序拼接成一个Byte[]： ➀biz_id + ➁ReqDataTxStatus + ➂sys_sign_ts
用业务系统数字身份私钥，通过从法链提供的签名类库对第3步拼接好的Byte[]进行签名，并获得的签名结果即为sys_sign  
  
  * 输入参数

参数构造格式 | Protobuf Message  
---|---  
message ReqDataTxStatus { string txHash = 1; //上链交易hash }  
  
  * 调用返回

返回信息格式 | Protobuf Message的JSON格式序列化结果  
---|---  
message RespDataTxStatus { int32 retStatus = 1; //处理状态编码 int32 retErrorCode =
2; //错误代码 string retMsg = 3; //描述信息 DataTxInfo dataTxInfo = 4;
//结构数据上链交易的交易链上生成信息 BlockInfo blockInfo = 5; //结构数据上链交易的所在区块信息 }  
  
  * retStatus取值

状态取值 | 描述 | 备注  
---|---|---  
1 | 上链交易发送成功。TxSendSuccess | 节点确认接收上链交易请求，等待区块链执行处理。  
2 | 上链交易发送失败。TxSendFailure | 节点接收上链交易请求失败，上链交易请求需重新提交。  
3 | 上链交易执行成功。TxExecSuccess | 上链交易执行成功，等待落块确认。  
4 | 上链交易执行失败。TxExecFailure | 上链交易执行失败。上链交易请求需重新提交。  
5 | 上链交易落块确认。TxBlockConfirm | 上链交易执行成功，并获得落块确认。  
6 | 上链交易落块确认失败。TxBlkCfmFailure | 因落块确认失败，上链交易执行结果被链回滚。上链交易请求需重新提交。  
  
  * DataTxInfo返回信息

返回信息格式 | Protobuf Message的JSON格式序列化结果  
---|---  
message DataTxInfo { string txHash = 1; //在链上生成的上链交易Hash int64 txExecTimestamp
= 2; //上链交易被执行的时间，datetime对应的int64类型 string dataID = 3; //结构数据上链交易处理的数据链上ID
string versionID = 4; //结构数据上链交易处理的数据版本ID }  
  
  * BlockInfo返回信息

返回信息格式 | Protobuf Message的JSON格式序列化结果  
---|---  
message BlockInfo { string blockHash = 1; //上链交易所在区块的区块hash int64
blockTimestamp = 2; //上链交易所在区块的生成时间戳，datetime对应的int64类型 int64 blockHeight = 3;
//上链交易所在区块高度 int64 currentBlockHeight = 4; //区块链当前区块高度 }  
  
  * 调用方法

    
~~~shell     
    curl --request POST 'http://localhost:8000/fbs/clt/pbGDS.do' \
    --header 'Content-Type: application/json' \
    --header 'sys_sign_ts: 1600328025054' \
    --header 'biz_id: 861e59478373702a9b8c7b848a22a32feed5d20a' \
    --header 'sys_sign: a7fef9d03b5b6e9fa5d9b3915aaecfb3c5f0197d833bc7b2513efc9533e16590868649b3a1a7605b6d2e78ac82932b98f5a75f51e67e48a8e31e539c3ee4007ebfb992aa4445d809a75fa773' \
    --data-raw '{
           "txHash":"9b3915aaecfb3c5f0197d833e16590868649b3a1a7605b6d2e78ac82932b9c1bc4679bb2da513704"
        }'
~~~    

| "data-raw"为ReqDataTxStatus（Protobuf Message）的JSON格式序列化结果 |

  * 异常信息

#### pbGCS.do【GetContractTxStatus】

  * 接口地址

clt/pbGCS.do

  * 功能描述

查询智能合约调用处理状态。

  * Header参数

名称 | 类型 | 取值  
---|---|---  
Content-Type | string | application/json  
sys_sign_ts | long | 获取当前时间，并转换成long类型。调用接口的业务系统数字身份签名时间戳  
biz_id | string | 要访问链上业务域的唯一标识  
sys_sign | string | 调用接口的业务系统身份确权签名结果 sys_sign的生成方法：
分别将biz_id、sys_sign_ts转换成Byte[] 将ReqContractTxStatus通过Protobuf序列化成Byte[]
依据如下顺序拼接成一个Byte[]： ➀biz_id + ➁ReqContractTxStatus + ➂sys_sign_ts
用业务系统数字身份私钥，通过从法链提供的签名类库对第3步拼接好的Byte[]进行签名，并获得的签名结果即为sys_sign  
  
  * 输入参数

参数构造格式 | Protobuf Message  
---|---  
message ReqContractTxStatus { string txHash = 1; //上链交易hash }  
  
  * 调用返回

返回信息格式 | Protobuf Message的JSON格式序列化结果  
---|---  
message RespContractTxStatus { int32 retStatus = 1; //处理状态编码 int32
retErrorCode = 2; //错误代码 string retMsg = 3; //描述信息 ContractTxInfo
contractTxInfo = 4; //合约调用上链交易的交易链上生成信息 BlockInfo blockInfo = 5;
//合约调用上链交易的所在区块信息 }  
  
  * retStatus取值

状态取值 | 描述 | 备注  
---|---|---  
1 | 上链交易发送成功。TxSendSuccess | 节点确认接收上链交易请求，等待区块链执行处理。  
2 | 上链交易发送失败。TxSendFailure | 节点接收上链交易请求失败，上链交易请求需重新提交。  
3 | 上链交易执行成功。TxExecSuccess | 上链交易执行成功，等待落块确认。  
4 | 上链交易执行失败。TxExecFailure | 上链交易执行失败。上链交易请求需重新提交。  
5 | 上链交易落块确认。TxBlockConfirm | 上链交易执行成功，并获得落块确认。  
6 | 上链交易落块确认失败。TxBlkCfmFailure | 因落块确认失败，上链交易执行结果被链回滚。上链交易请求需重新提交。  
  
  * ContractTxInfo返回信息

返回信息格式 | Protobuf Message的JSON格式序列化结果  
---|---  
message ContractTxInfo { string txHash = 1; //在链上生成的上链交易Hash int64
txExecTimestamp = 2; //上链交易被执行的时间，datetime对应的int64类型 string scResult = 3;
//合约调用成功后的返回结构数据，返回结构遵循合约定义。此字段会在TxExecSuccess和TxBlockConfirm状态时返回。 }  
  
  * BlockInfo返回信息

返回信息格式 | Protobuf Message的JSON格式序列化结果  
---|---  
message BlockInfo { string blockHash = 1; //上链交易所在区块的区块hash int64
blockTimestamp = 2; //上链交易所在区块的生成时间戳，datetime对应的int64类型 int64 blockHeight = 3;
//上链交易所在区块高度 int64 currentBlockHeight = 4; //区块链当前区块高度 }  
  
  * 调用方法

    
~~~shell     
    curl --request POST 'http://localhost:8000/fbs/clt/pbGCS.do' \
    --header 'Content-Type: application/json' \
    --header 'sys_sign_ts: 1600328025054' \
    --header 'biz_id: 861e59478373702a9b8c7b848a22a32feed5d20a' \
    --header 'sys_sign: a7fef9d03b5b6e9fa5d9b3915aaecfb3c5f0197d833bc7b2513efc9533e16590868649b3a1a7605b6d2e78ac82932b98f5a75f51e67e48a8e31e539c3ee4007ebfb992aa4445d809a75fa773' \
    --data-raw '{
           "txHash":"9b3915aaecfb3c5f0197d833e16590868649b3a1a7605b6d2e78ac82932b9c1bc4679bb2da513704"
        }'
~~~    

| "data-raw"为ReqContractTxStatus（Protobuf Message）的JSON格式序列化结果 |

  * 异常信息

### 文件操作

#### pbFUT.do【FileUploadTxBody】

  * 接口地址

clt/pbFUT.do

  * 功能描述

构建文件保存上链交易体。构建好的交易体使用pbUF.do完成真正的提交操作。

  * Header参数

名称 | 类型 | 取值  
---|---|---  
Content-Type | string | application/json  
sys_sign_ts | long | 获取当前时间，并转换成long类型。调用接口的业务系统数字身份签名时间戳  
biz_id | string | 要访问链上业务域的唯一标识  
sys_sign | string | 调用接口的业务系统身份确权签名结果 sys_sign的生成方法：
分别将biz_id、sys_sign_ts转换成Byte[] 将ReqGenFileUploadTxBody通过Protobuf序列化成Byte[]
依据如下顺序拼接成一个Byte[]： ➀biz_id + ➁ReqGenFileUploadTxBody + ➂sys_sign_ts
用业务系统数字身份私钥，通过从法链提供的签名类库对第3步拼接好的Byte[]进行签名，并获得的签名结果即为sys_sign  
  
  * 输入参数

参数构造格式 | Protobuf Message  
---|---  
message ReqGenFileUploadTxBody { string senderID = 1;
//Tx发送者地址，为提高上链效率，可以随机生成的临时账户地址 string ownerID = 2;
//进行文件上传操作的文件所有者身份标识，ownerIDs中的一个 string fileName = 3; //文件名 int64 fileSize =
4; //文件大小，单位为Byte string fileDescription = 5; //文件描述 int32 fileCopy = 6;
//文件副本数量 int32 fileSlice = 7; //文件切片数量 string fileDigest = 8;
//文件指纹特征值，即文件本体内容的指纹特征值 string fileProperty = 9; //附属属性 string fileSuffix =
10; //文件扩展名，如pdf,xlsx等 repeated string ownerIDs = 11; //文件所有者地址列表 repeated
string sharerIDs = 12; //分享者地址列表 repeated string readerIDs = 13; //读取者地址列表 }  
  
  * 调用返回

返回信息格式 | Protobuf Message的JSON格式序列化结果  
---|---  
message RespGenFileUploadTxBody{ int32 retCode = 1; //返值码 string retMsg = 2;
//描述信息 string txBody = 3; //上链交易体 }  
  
  * 调用方法

    
~~~shell     
    curl --request POST 'http://localhost:8000/fbs/clt/pbFUT.do' \
    --header 'Content-Type: application/json' \
    --header 'sys_sign_ts: 1600328025054' \
    --header 'biz_id: 861e59478373702a9b8c7b848a22a32feed5d20a' \
    --header 'sys_sign: a7fef9d03b5b6e9a6b6613b2f7960be403dc964194fd4f4d375f51e67e48a8e31e539c3ee4007ebfb992aa4445d809a75fa773' \
    --data-raw '{
           "senderID":"0d64ad368ebc37ddb80424376408cb7bb88ff328",
           "ownerID":"73bacb28962e51eb48b2896288021b8a43778c04",
           "fileName":"申请表.doc",
           "fileSize":1024,
           "fileDescription":"这是一个赋强公证申请表",
           "fileCopy":3,
           "fileSlice":5,
           "fileDigest":"2e52896288021b73",
           "fileProperty":"{\"赋强公证流程\":\"启动阶段文书\",\"接收单位\":\"公证处\"}",
           "fileSuffix":"doc",
           "ownerIDs":["73bacb28962e51eb48b2896288021b8a43778c04", 
                      "896288b1eb48b228962e50214a437878c0b73bac"],
           "sharerIDs":["bc37ddb80420d64ad368e4376408cb7bb2888ff3", 
                      "896281eb48b28b28962e5021b73b7878c0 ac4a43"],
           "readerIDs":["ebc370d64ad368ddb804b88ff3224376408cb7b8", 
                      "1eb48b2896288b28962e5021b73bac4a437878c0"]
    }'
~~~    

| "data-raw"为ReqGenFileUploadTxBody（Protobuf Message）的JSON格式序列化结果 |

  * 异常信息

#### pbUF.do【UploadFile】

  * 接口地址

clt/pbUF.do

  * 功能描述

提交文件保存上链交易。

  * Header参数

名称 | 类型 | 取值  
---|---|---  
Content-Type | string | multipart/form-data  
  
  * 输入参数

Form组成元素名称 | 类型 | 取值  
---|---|---  
fileData | string | 文件本地全路径。以"@"开头  
txBody | string | 文件保存上链交易体，pbFUT.do返回值  
ownerSign | string | ownerSign的生成方法： 将txBody通过Protobuf序列化成Byte[]
用当前上链保存操作的文件所有者的数字身份私钥，ownerID对应的私钥，通过从法链提供的签名类库对第1步的Byte[]进行签名，并获得的签名结果即为ownerSign  
sysSign | string | sysSign的生成方法： 将txBody通过Protobuf序列化成Byte[]
用调用接口的业务系统数字身份对应私钥，通过从法链提供的签名类库对第1步的Byte[]进行签名，并获得的签名结果即为sysSign  
txSenderSign | string | txSenderSign的生成方法： 将txBody通过Protobuf序列化成Byte[]
用上链交易操作发送者数字身份私钥，通过从法链提供的签名类库对第1步的Byte[]进行签名，并获得的签名结果即为txSenderSign  
  
  * 调用返回

返回信息格式 | Protobuf Message的JSON格式序列化结果  
---|---  
message RespFileUpload{ int32 retCode = 1; //返值码 string retMsg = 2; //描述信息
string fileID = 3; //文件链上ID string txHash = 4; //交易hash }  
  
  * 调用方法

    
~~~shell     
    curl --request POST 'http://localhost:8000/fbs/clt/pbUF.do' \
    --header 'Content-Type: multipart/form-data' \
    --form 'fileData=@文件本地全路径' \
    --form ownerSign = 当前上链保存操作的文件所有者对文件保存上链交易体的签名结果' \
    --form sysSign = 调用接口的业务系统数字身份对文件保存上链交易体的签名结果' \
    --form 'txSenderSign = Tx发送者对文件保存上链交易体的签名结果' \
    --form 'txBody=文件保存上链交易体'
~~~    

  * 异常信息

#### pbFMT.do【FileModifyTxBody】

  * 接口地址

clt/pbFMT.do

  * 功能描述

构建文件更新上链交易体。构建好的交易体使用pbUF.do完成真正的提交操作。

  * Header参数

名称 | 类型 | 取值  
---|---|---  
Content-Type | string | application/json  
sys_sign_ts | long | 获取当前时间，并转换成long类型。调用接口的业务系统数字身份签名时间戳  
biz_id | string | 要访问链上业务域的唯一标识  
sys_sign | string | 调用接口的业务系统身份确权签名结果 sys_sign的生成方法：
分别将biz_id、sys_sign_ts转换成Byte[] 将ReqGenFileModifyTxBody通过Protobuf序列化成Byte[]
依据如下顺序拼接成一个Byte[]： ➀biz_id + ➁ReqGenFileModifyTxBody + ➂sys_sign_ts
用业务系统数字身份私钥，通过从法链提供的签名类库对第3步拼接好的Byte[]进行签名，并获得的签名结果即为sys_sign  
  
  * 输入参数

参数构造格式 | Protobuf Message  
---|---  
message ReqGenFileModifyTxBody { string senderID = 1;
//Tx发送者地址，为提高上链效率，可以随机生成的临时账户地址 string ownerID = 2; //文件所有者列表中的一个 string
fileName = 3; //文件名 int64 fileSize = 4; //文件大小，单位为Byte string fileDescription
= 5; //文件描述 int32 fileCopy = 6; //文件副本数量 int32 fileSlice = 7; //文件切片数量 string
fileDigest = 8; //文件指纹特征值，即文件本体内容的指纹特征值 string fileProperty = 9; //附属属性 string
fileSuffix = 10; //文件扩展名，如pdf,xlsx等 string fileID = 11; //需要修改的文件ID }  
  
  * 调用返回

返回信息格式 | Protobuf Message的JSON格式序列化结果  
---|---  
message RespGenFileModifyTxBody{ int32 retCode = 1; //返值码 string retMsg = 2;
//描述信息 string txBody = 3; //上链交易体 }  
  
  * 调用方法

    
~~~shell     
    curl --request POST 'http://localhost:8000/fbs/clt/pbFMT.do' \
    --header 'Content-Type: application/json' \
    --header 'sys_sign_ts: 1600328025054' \
    --header 'biz_id: 861e59478373702a9b8c7b848a22a32feed5d20a' \
    --header 'sys_sign: a7fef9d03b5b6e9a6b6613b2f7960be403dc964194fd4f4d375f51e67e48a8e31e539c3ee4007ebfb992aa4445d809a75fa773' \
    --data-raw '{
           "senderID":"0d64ad368ebc37ddb80424376408cb7bb88ff328",
           "ownerD":"4ad368ebc37d 0d6db80424376b88ff328408cb7b",
           "fileName":"申请表.doc",
           "fileSize":1024,
           "fileDescription":"这是一个赋强公证申请表",
           "fileCopy":3,
           "fileSlice":5,
           "fileDigest":"2e52896288021b73",
           "fileProperty":"{\"赋强公证流程\":\"启动阶段文书\",\"接收单位\":\"公证处\"}",
           "fileSuffix":"doc",
           "fileID":" b48b289628b28962e51e80bac878c04a43721b73"
    }'
~~~    

| "data-raw"为ReqGenFileModifyTxBody（Protobuf Message）的JSON格式序列化结果 |

  * 异常信息

#### pbFMU.do【FileMetaUpdateTxBody】

  * 接口地址

clt/pbFMU.do

  * 功能描述

构建文件元数据更新上链交易体。构建好的交易体使用pbST.do完成真正的提交操作。

  * Header参数

名称 | 类型 | 取值  
---|---|---  
Content-Type | string | application/json  
sys_sign_ts | long | 获取当前时间，并转换成long类型。调用接口的业务系统数字身份签名时间戳  
biz_id | string | 要访问链上业务域的唯一标识  
sys_sign | string | 调用接口的业务系统身份确权签名结果 sys_sign的生成方法：
分别将biz_id、sys_sign_ts转换成Byte[] 将ReqGenFileMetaUpdateTxBody通过Protobuf序列化成Byte[]
依据如下顺序拼接成一个Byte[]： ➀biz_id + ➁ReqGenFileMetaUpdateTxBody + ➂sys_sign_ts
用业务系统数字身份私钥，通过从法链提供的签名类库对第3步拼接好的Byte[]进行签名，并获得的签名结果即为sys_sign  
  
  * 输入参数

参数构造格式 | Protobuf Message  
---|---  
message ReqGenFileMetaUpdateTxBody { string senderID = 1;
//Tx发送者地址，为提高上链效率，可以随机生成的临时账户地址 string ownerID = 2; //文件所有者列表中的一个 string
fileID = 3; //要更新元数据的文件ID string fileName = 4; //文件名 string fileDescription =
5; //文件描述 string fileProperty = 6; //附属属性 string fileSuffix = 7;
//文件扩展名，如pdf,xlsx等 }  
  
  * 调用返回

返回信息格式 | Protobuf Message的JSON格式序列化结果  
---|---  
message RespGenFileMetaUpdateTxBody { int32 retCode = 1; //返值码 string retMsg =
2; //描述信息 string txBody = 3; //上链交易体 }  
  
  * 调用方法

    
~~~shell     
    curl --request POST 'http://localhost:8000/fbs/clt/pbFMU.do' \
    --header 'Content-Type: application/json' \
    --header 'sys_sign_ts: 1600328025054' \
    --header 'biz_id: 861e59478373702a9b8c7b848a22a32feed5d20a' \
    --header 'sys_sign: a7fef9d03b5b6e9a6b6613b2f7960be403dc964194fd4f4d375f51e67e48a8e31e539c3ee4007ebfb992aa4445d809a75fa773' \
    --data-raw '{
           "senderID":"0d64ad368ebc37ddb80424376408cb7bb88ff328",
           "ownerD":"4ad368ebc37d 0d6db80424376b88ff328408cb7b",
           "fileID":" b48b289628b28962e51e80bac878c04a43721b73",
           "fileName":"申请表-更新.pdf",
           "fileDescription":"这是一个赋强公证申请表-更新",
           "fileProperty":"{\"赋强公证流程\":\"启动阶段文书\"}",
           "fileSuffix":"pdf"
    }'
~~~    

| "data-raw"为ReqGenFileMetaUpdateTxBody（Protobuf Message）的JSON格式序列化结果 |

  * 异常信息

#### pbFMF.do【FileMetaFetchRq】

  * 接口地址

clt/pbFMF.do

  * 功能描述

提交文件元数据获取链上操作请求。

  * Header参数

名称 | 类型 | 取值  
---|---|---  
Content-Type | string | application/json  
sys_sign_ts | long | 获取当前时间，并转换成long类型。调用接口的业务系统数字身份签名时间戳  
biz_id | string | 要访问链上业务域的唯一标识  
sys_sign | string | 调用接口的业务系统身份确权签名结果 sys_sign的生成方法：
分别将biz_id、sys_sign_ts转换成Byte[] 将ReqFileMetaFetch通过Protobuf序列化成Byte[]
依据如下顺序拼接成一个Byte[]： ➀biz_id + ➁ReqFileMetaFetch + ➂sys_sign_ts
用业务系统数字身份私钥，通过从法链提供的签名类库对第3步拼接好的Byte[]进行签名，并获得的签名结果即为sys_sign  
  
  * 输入参数

参数构造格式 | Protobuf Message  
---|---  
message ReqFileMetaFetch{ string fileID = 1; //文件链上ID string versionID = 2;
//版本ID，如果不赋值，则返回最新版本的文件元数据 int64 fetcherSignTs = 3;
//文件元数据获取者签名时间戳，获取当前时间，并转换成int64类型 string rqFetcherSign = 4;
//文件元数据获取者对之前序号组成的参数集合的签名结果 } |  
rqFetcherSign的生成方法 |  
分别将fileID、versionID、fetcherSignTs转换成Byte[] 依据如下顺序拼接成一个Byte[]： ➀fileID +
➁versionID + ➂fetcherSignTs
用文件元数据获取者数字身份私钥，通过从法链提供的签名类库对第2步拼接好的Byte[]进行签名，并获得的签名结果即为rqFetcherSign  
  
  * 调用返回

返回信息格式 | Protobuf Message的JSON格式序列化结果  
---|---  
message RespFileMetaFetch { int32 retStatus = 1; //处理状态编码 int32 retErrorCode =
2; //错误代码 string retMsg = 3; //描述信息 FileMetadata fMetadata = 4; //返回的文件元数据 }
message FileMetadata { string fileID = 1; //文件链上ID string versionID = 2;
//文件当前版本ID string fileName = 3; //文件名称 string fileSuffix = 4; //文件扩展名 int64
fileSize = 5; //文件尺寸，单位为Byte string fileDescription = 6; //文件描述 string
fileProperty = 7; //文件附属属性 int32 fileCopy = 8; //文件副本数量 int32 fileSlice =
9//文件切片数量 string fileDigest = 10; //文件本体指纹特征值 int64 uploadTime = 11;
//文件上链保存时间，datetime对应的int64类型 int32 delStatus = 12; //文件的删除状态，取值1=删除；0=有效
int64 metaTimestamp = 13; //当前版本元数据的生成时间戳，datetime对应的int64类型 }  
  
  * retStatus取值

状态取值 | 描述  
---|---  
1 | 文件元数据获取成功。FetchSuccess  
2 | 文件元数据获取失败。FetchFailure  
  
  * 调用方法

    
~~~shell     
    curl --request POST 'http://localhost:8000/fbs/clt/pbFMF.do' \
    --header 'Content-Type: application/json' \
    --header 'sys_sign_ts: 1600328025054' \
    --header 'biz_id: 861e59478373702a9b8c7b848a22a32feed5d20a' \
    --header 'sys_sign: a7fef9d03b5b6e9fa5816afe38f0a6b6613b2f7960be403dc964194fd4f4d375f51e67e48a8e31e539c3ee4007ebfb992aa4445d809a75fa773' \
    --data-raw '{
           "fileID":"0d64ad368ebc37ddb80424376408cb7bb88ff328",
           "versionID":"1eb48bb28962e52896288021b73c04a437bac878", 
           "fetcherSignTs":1600328025054,
    "rqFetcherSign":"8962e521d03b5b6e9fa5816afe38f0a6b6613b2f7960be403dc964194fd4f4d375f51e67e48a8e31e539c3ee4007ebfb992aa4445d809a75fa77b73c04a1eb9628802437bac8784288bb"
        }'
~~~    

| "data-raw"为ReqFileMetaFetch（Protobuf Message）的JSON格式序列化结果 |

  * 异常信息

#### pbFBF.do【FileBodyFetchRq】

  * 接口地址

clt/pbFBF.do

  * 功能描述

文件本体获取链上操作请求。

  * Header参数

名称 | 类型 | 取值  
---|---|---  
Content-Type | string | application/json  
sys_sign_ts | long | 获取当前时间，并转换成long类型。调用接口的业务系统数字身份签名时间戳  
biz_id | string | 要访问链上业务域的唯一标识  
sys_sign | string | 调用接口的业务系统身份确权签名结果 sys_sign的生成方法：
分别将biz_id、sys_sign_ts转换成Byte[] 将ReqFileBodyFetch通过Protobuf序列化成Byte[]
依据如下顺序拼接成一个Byte[]： ➀biz_id + ➁ReqFileBodyFetch + ➂sys_sign_ts
用业务系统数字身份私钥，通过从法链提供的签名类库对第3步拼接好的Byte[]进行签名，并获得的签名结果即为sys_sign  
  
  * 输入参数

参数构造格式 | Protobuf Message  
---|---  
message ReqFileBodyFetch { string fileID = 1; //文件链上ID string versionID = 2;
//版本ID，如果不赋值，则返回最新版本的文件 int64 fetcherSignTs = 3;
//文件本体获取者签名时间戳，获取当前时间，并转换成int64类型 string rqFetcherSign = 4;
//文件本体获取者对之前序号组成的参数集合的签名结果 } |  
rqFetcherSign的生成方法 |  
分别将fileID、versionID、fetcherSignTs转换成Byte[] 依据如下顺序拼接成一个Byte[]： ➀fileID +
➁versionID + ➂fetcherSignTs
用文件本体获取者数字身份私钥，通过从法链提供的签名类库对第2步拼接好的Byte[]进行签名，并获得的签名结果即为rqFetcherSign  
  
  * 调用返回

返回类型 | 返回类型判断方式 | 返回信息格式  
---|---|---  
返回文件本体 | Content-Type: application/octet-stream | 文件流  
返回错误信息 | Content-Type: application/json | Protobuf Message的JSON格式序列化结果 返回信息组成：
message RespFileBodyFetch { int32 retCode = 1; //返值码 string retMsg = 2; //描述信息
}  
  
  * 调用方法

    
~~~shell     
    curl --request POST 'http://localhost:8000/fbs/clt/pbFBF.do' \
    --header 'Content-Type: application/json' \
    --header 'sys_sign_ts: 1600328025054' \
    --header 'biz_id: 861e59478373702a9b8c7b848a22a32feed5d20a' \
    --header 'sys_sign: a7fef9d03b5b6e9fa5d9b3912e0816afe38f0a6b6613b2f7960be403dc964194fd4f4d375f51e67e48a8e31e539c3ee4007ebfb992aa4445d809a75fa773' \
    --data-raw '{
           "fileID":"0d64ad368ebc37ddb80424376408cb7bb88ff328",
           "versionID":"1eb48bb28962e52896288021b73c04a437bac878", 
           "fetcherSignTs":1600328025054,
    "rqFetcherSign":"8962e521d03b5b6e9fa5816afe38f0a6b6613b2f7960be403dc964194fd4f4d375f51e67e48a8e31e539c3ee4007ebfb992aa4445d809a75fa77b73c04a1eb9628802437bac8784288bb"
        }'
~~~    

| "data-raw"为ReqFileBodyFetch（Protobuf Message）的JSON格式序列化结果 |

  * 异常信息

#### pbFAT.do【FileAuthoriseTxBody】

  * 接口地址

clt/pbFAT.do

  * 功能描述

构建文件授权上链交易体。构建好的交易体使用pbST.do完成真正的提交操作。

  * Header参数

名称 | 类型 | 取值  
---|---|---  
Content-Type | string | application/json  
sys_sign_ts | long | 获取当前时间，并转换成long类型。调用接口的业务系统数字身份签名时间戳  
biz_id | string | 要访问链上业务域的唯一标识  
sys_sign | string | 调用接口的业务系统身份确权签名结果 sys_sign的生成方法：
分别将biz_id、sys_sign_ts转换成Byte[] 将ReqGenFileAuthoriseTxBody通过Protobuf序列化成Byte[]
依据如下顺序拼接成一个Byte[]： ➀biz_id + ➁ReqGenFileAuthoriseTxBody + ➂sys_sign_ts
用业务系统数字身份私钥，通过从法链提供的签名类库对第3步拼接好的Byte[]进行签名，并获得的签名结果即为sys_sign  
  
  * 输入参数

参数构造格式 | Protobuf Message  
---|---  
message ReqGenFileAuthoriseTxBody { string senderID = 1;
//Tx发送者地址，为提高上链效率，可以随机生成的临时账户地址 string grantorID = 2;
//提交文件授权操作的申请者身份标识，必须是Owners或Sharers中的一个数字身份标识 string fileID = 3; //文件链上ID
repeated string addOwnerIDs = 4; //要添加成所有者的地址列表。不赋值，则不处理。 repeated string
addSharerIDs = 5; //要添加成分享者的地址列表。不赋值，则不处理。 repeated string addReaderIDs = 6;
//要添加成读取者的地址列表。不赋值，则不处理。 repeated string removeOwnerIDs = 7;
//要删除的所有者的地址列表。不赋值，则不处理。 repeated string removeSharerIDs = 8;
//要删除的分享者的地址列表。不赋值，则不处理。 repeated string removeReaderIDs = 9;
//要删除的读取者的地址列表。不赋值，则不处理。 }  
  
  * 调用返回

返回信息格式 | Protobuf Message的JSON格式序列化结果  
---|---  
message RespGenFileAuthoriseTxBody { int32 retCode = 1; //返值码 string retMsg =
2; //描述信息 string txBody = 3; //上链交易体 }  
  
  * 调用方法

    
~~~shell     
    curl --request POST 'http://localhost:8000/fbs/clt/pbFAT.do' \
    --header 'Content-Type: application/json' \
    --header 'sys_sign_ts: 1600328025054' \
    --header 'biz_id: 861e59478373702a9b8c7b848a22a32feed5d20a' \
    --header 'sys_sign: a7fef9d03b5b6e9fa5d9b32e0816afe38f0a6b6613b2f7960be403dc964194fd4f4d375f51e67e48a8e31e539c3ee4007ebfb992aa4445d809a75fa773' \
    --data-raw '{
        "senderID":"368ebc37dd0d64adb8cb7bb88ff3280424376408",
        "grantorID":"0d64ad368ebc37ddb80424376408cb7bb88ff328",
        "fileID":"1eb48bb28962e52896288021b73c04a437bac878",
        "addOwnerIDs": [
            "73bacb28962e51eb48b2896288021b8a43778c04",
            "896288b1eb48b228962e50214a437878c0b73bac"
        ],
        "addReaderIDs": [
            "c37ddb8040d64ad368eb243b7bb88ff32876408c",
            "b28962e1eb48b2885021b73bac4a437878c09628"
        ]
    }'
~~~    

| "data-raw"为ReqGenFileAuthoriseTxBody（Protobuf Message）的JSON格式序列化结果 |

  * 异常信息

#### pbFDT.do【FileDeleteTxBody】

  * 接口地址

clt/pbFDT.do

  * 功能描述

构建文件删除上链交易体。构建好的交易体使用pbST.do完成真正的提交操作。

  * Header参数

名称 | 类型 | 取值  
---|---|---  
Content-Type | string | application/json  
sys_sign_ts | long | 获取当前时间，并转换成long类型。调用接口的业务系统数字身份签名时间戳  
biz_id | string | 要访问链上业务域的唯一标识  
sys_sign | string | 调用接口的业务系统身份确权签名结果 sys_sign的生成方法：
分别将biz_id、sys_sign_ts转换成Byte[] 将ReqGenFileDeleteTxBody通过Protobuf序列化成Byte[]
依据如下顺序拼接成一个Byte[]： ➀biz_id + ➁ReqGenFileDeleteTxBody + ➂sys_sign_ts
用业务系统数字身份私钥，通过从法链提供的签名类库对第3步拼接好的Byte[]进行签名，并获得的签名结果即为sys_sign  
  
  * 输入参数

参数构造格式 | Protobuf Message  
---|---  
message ReqGenFileDeleteTxBody { string senderID = 1;
//Tx发送者地址，为提高上链效率，可以随机生成的临时账户地址 string ownerID = 2; //文件所有者列表中的一个 string
fileID = 3; //文件链上ID }  
  
  * 调用返回

返回信息格式 | Protobuf Message的JSON格式序列化结果  
---|---  
message RespGenFileDeleteTxBody { int32 retCode = 1; //返值码 string retMsg = 2;
//描述信息 string txBody = 3; //上链交易体 }  
  
  * 调用方法

    
~~~shell     
    curl --request POST 'http://localhost:8000/fbs/clt/pbFDT.do' \
    --header 'Content-Type: application/json' \
    --header 'sys_sign_ts: 1600328025054' \
    --header 'biz_id: 861e59478373702a9b8c7b848a22a32feed5d20a' \
    --header 'sys_sign: a7fef9d03b5b6e9fa5d90816afe38f0a6b6613b2f7960be403dc964194fd4f4d375f51e67e48a8e31e539c3ee4007ebfb992aa4445d809a75fa773' \
    --data-raw '{
        "senderID":"368ebc37dd0d64adb8cb7bb88ff3280424376408",
        "ownerID":"0d64ad368ebc37ddb80424376408cb7bb88ff328",
        "fileID":"1eb48bb28962e52896288021b73c04a437bac878"
    }'
~~~    

| "data-raw"为ReqGenFileDeleteTxBody（Protobuf Message）的JSON格式序列化结果 |

  * 异常信息

#### pbFEA.do【FileEmptyApplyTxBody】

  * 接口地址

clt/pbFEA.do

  * 功能描述

构建文件本体审批清空申请上链交易体。构建好的交易体使用pbST.do完成真正的提交操作。

  * Header参数

名称 | 类型 | 取值  
---|---|---  
Content-Type | string | application/json  
sys_sign_ts | long | 获取当前时间，并转换成long类型。调用接口的业务系统数字身份签名时间戳  
biz_id | string | 要访问链上业务域的唯一标识  
sys_sign | string | 调用接口的业务系统身份确权签名结果 sys_sign的生成方法：
分别将biz_id、sys_sign_ts转换成Byte[] 将ReqGenFileEmptyApplyTxBody通过Protobuf序列化成Byte[]
依据如下顺序拼接成一个Byte[]： ➀biz_id + ➁ReqGenFileEmptyApplyTxBody + ➂sys_sign_ts
用业务系统数字身份私钥，通过从法链提供的签名类库对第3步拼接好的Byte[]进行签名，并获得的签名结果即为sys_sign  
  
  * 输入参数

参数构造格式 | Protobuf Message  
---|---  
message ReqGenFileEmptyApplyTxBody { string senderID = 1;
//Tx发送者地址，为提高上链效率，可以随机生成的临时账户地址 string ownerID = 2 //文件所有者列表中的一个 string fileID
= 3; //文件链上ID repeated string approverIDs = 4; //文件本体清空审批人数字身份列表 }  
  
  * 调用返回

返回信息格式 | Protobuf Message的JSON格式序列化结果  
---|---  
message RespGenFileEmptyApplyTxBody { int32 retCode = 1; //返值码 string retMsg =
2; //描述信息 string txBody = 3; //上链交易体 }  
  
  * 调用方法

    
~~~shell     
    curl --request POST 'http://localhost:8000/fbs/clt/pbFEA.do' \
    --header 'Content-Type: application/json' \
    --header 'sys_sign_ts: 1600328025054' \
    --header 'biz_id: 861e59478373702a9b8c7b848a22a32feed5d20a' \
    --header 'sys_sign: a7fef9d03b5b6e9fa5d9b432e0816afe38f0a6b6613b2f7960be403dc964194fd4f4d375f51e67e48a8e31e539c3ee4007ebfb992aa4445d809a75fa773' \
    --data-raw '{
        "senderID":"368ebc37dd0d64adb8cb7bb88ff3280424376408",
        "ownerID":"0d64ad368ebc37ddb80424376408cb7bb88ff328",
        "fileID":"1eb48bb28962e52896288021b73c04a437bac878",
        "approverIDs":["0d64ad368ebc37ddb80424376408cb7bb88ff328", 
                   "1eb48b2896288b28962e5021b73bac4a437878c0"]
    }'
~~~    

| "data-raw"为ReqGenFileEmptyApplyTxBody（Protobuf Message）的JSON格式序列化结果 |

  * 异常信息

#### pbFEP.do【FileEmptyApproveTxBody】

  * 接口地址

clt/pbFEP.do

  * 功能描述

构建文件删除审批上链交易体。构建好的交易体使用pbST.do完成真正的提交操作。

  * Header参数

名称 | 类型 | 取值  
---|---|---  
Content-Type | string | application/json  
sys_sign_ts | long | 获取当前时间，并转换成long类型。调用接口的业务系统数字身份签名时间戳  
biz_id | string | 要访问链上业务域的唯一标识  
sys_sign | string | 调用接口的业务系统身份确权签名结果 sys_sign的生成方法：
分别将biz_id、sys_sign_ts转换成Byte[]
将ReqGenFileEmptyApproveTxBody通过Protobuf序列化成Byte[] 依据如下顺序拼接成一个Byte[]： ➀biz_id +
➁ReqGenFileEmptyApproveTxBody + ➂sys_sign_ts
用业务系统数字身份私钥，通过从法链提供的签名类库对第3步拼接好的Byte[]进行签名，并获得的签名结果即为sys_sign  
  
  * 输入参数

参数构造格式 | Protobuf Message  
---|---  
message ReqGenFileEmptyApproveTxBody { string senderID = 1;
//Tx发送者地址，为提高上链效率，可以随机生成的临时账户地址 string approverID = 2; //文件本体清空审批人数字身份标识
string fileID = 3; //文件链上ID Int32 reply=4; // 审批意见。1=同意删除 2=拒绝删除 }  
  
  * 调用返回

返回信息格式 | Protobuf Message的JSON格式序列化结果  
---|---  
message RespGenFileEmptyApproveTxBody { int32 retCode = 1; //返值码 string retMsg
= 2; //描述信息 string txBody = 3; //上链交易体 }  
  
  * 调用方法

    
~~~shell     
    curl --request POST 'http://localhost:8000/fbs/clt/pbFEP.do' \
    --header 'Content-Type: application/json' \
    --header 'sys_sign_ts: 1600328025054' \
    --header 'biz_id: 861e59478373702a9b8c7b848a22a32feed5d20a' \
    --header 'sys_sign: a7fef9d03b5b6e9fa5d9b54b432e0816afe38f0a6b6613b2f7960be403dc964194fd4f4d375f51e67e48a8e31e539c3ee4007ebfb992aa4445d809a75fa773' \
    --data-raw '{
        "senderID":"368ebc37dd0d64adb8cb7bb88ff3280424376408",
        "approverID":"0d64ad368ebc37ddb80424376408cb7bb88ff328",
        "fileID":"1eb48bb28962e52896288021b73c04a437bac878"
    }'
~~~    

| "data-raw"为ReqGenFileEmptyApproveTxBody（Protobuf Message）的JSON格式序列化结果 |

  * 异常信息

#### pbFDC.do【FileDigestCheckRq】

  * 接口地址

clt/pbFDC.do

  * 功能描述

提交文件特定版本的指纹特征值链上操作请求。

  * Header参数

名称 | 类型 | 取值  
---|---|---  
Content-Type | string | application/json  
sys_sign_ts | long | 获取当前时间，并转换成long类型。调用接口的业务系统数字身份签名时间戳  
biz_id | string | 要访问链上业务域的唯一标识  
sys_sign | string | 调用接口的业务系统身份确权签名结果 sys_sign的生成方法：
分别将biz_id、sys_sign_ts转换成Byte[] 将ReqFileDigestCheck通过Protobuf序列化成Byte[]
依据如下顺序拼接成一个Byte[]： ➀biz_id + ➁ReqFileDigestCheck + ➂sys_sign_ts
用业务系统数字身份私钥，通过从法链提供的签名类库对第3步拼接好的Byte[]进行签名，并获得的签名结果即为sys_sign  
  
  * 输入参数

参数构造格式 | Protobuf Message  
---|---  
message ReqFileDigestCheck { string fileID = 1; //文件链上ID string versionID = 2;
//文件版本ID。如果不赋值，则直接返回最新版本的文件 string fileDigest = 3; //本地文件的指纹特征值，用于和链上文件进行比对 }  
  
  * 调用返回

返回信息格式 | Protobuf Message的JSON格式序列化结果  
---|---  
message RespFileDigestCheck { int32 retStatus = 1; //处理状态编码 int32 retErrorCode
= 2; //错误代码 string retMsg = 3; //描述信息 int32 verifyResult = 4;
//验证结果，1=一致；-1=不一致 }  
  
  * retStatus取值

状态取值 | 描述  
---|---  
1 | 指纹特征值校验成功。DigestCheckSuccess  
2 | 指纹特征值校验失败。DigestCheckFailure  
  
  * 调用方法

    
~~~shell     
    curl --request POST 'http://localhost:8000/fbs/clt/pbFDC.do' \
    --header 'Content-Type: application/json' \
    --header 'sys_sign_ts: 1600328025054' \
    --header 'biz_id: 861e59478373702a9b8c7b848a22a32feed5d20a' \
    --header 'sys_sign: a7fef9d03b5b6e9432e0816afe38f0a6b6613b2f7960be403dc964194fd4f4d375f51e67e48a8e31e539c3ee4007ebfb992aa4445d809a75fa773' \
    --data-raw '{
        "fileID":"1eb48bb28962e52896288021b73c04a437bac878",
        "versionID":"89621eb48bb2e52896288021b73c7bac87804a43",
        "fileDigest":"2e528962889621eb48bb2e52896288021b73c7bac87804a43"
    }'
~~~    

| "data-raw"为ReqFileDigestCheck（Protobuf Message）的JSON格式序列化结果 |

  * 异常信息

#### pbFVF.do【FileVersionsFetchRq】

  * 接口地址

clt/pbFVF.do

  * 功能描述

提交文件获取版本列表链上操作请求。

  * Header参数

名称 | 类型 | 取值  
---|---|---  
Content-Type | string | application/json  
sys_sign_ts | long | 获取当前时间，并转换成long类型。调用接口的业务系统数字身份签名时间戳  
biz_id | string | 要访问链上业务域的唯一标识  
sys_sign | string | 调用接口的业务系统身份确权签名结果 sys_sign的生成方法：
分别将biz_id、sys_sign_ts转换成Byte[] 将ReqFileVersionsFetch通过Protobuf序列化成Byte[]
依据如下顺序拼接成一个Byte[]： ➀biz_id + ➁ReqFileVersionsFetch + ➂sys_sign_ts
用业务系统数字身份私钥，通过从法链提供的签名类库对第3步拼接好的Byte[]进行签名，并获得的签名结果即为sys_sign  
  
  * 输入参数

参数构造格式 | Protobuf Message  
---|---  
message ReqFileVersionsFetch { string fileID = 1; //文件链上ID int64 fetcherSignTs
= 2; //文件版本获取者签名时间戳，获取当前时间，并转换成int64类型 string rqFetcherSign = 3;
//文件版本获取者对之前序号组成的参数集合的签名结果 } |  
rqFetcherSign的生成方法 |  
分别将fileID、fetcherSignTs转换成Byte[] 依据如下顺序拼接成一个Byte[]： ➀fileID + ➁fetcherSignTs
用文件版本获取者数字身份私钥，通过从法链提供的签名类库对第2步拼接好的Byte[]进行签名，并获得的签名结果即为rqFetcherSign  
  
  * 调用返回

返回信息格式 | Protobuf Message的JSON格式序列化结果  
---|---  
message RespFileVersionsFetch { int32 retStatus = 1; //处理状态编码 int32
retErrorCode = 2; //错误代码 string retMsg = 3; //描述信息 repeated FileVersionInfo
versions = 4; //全部文件版本信息 } message FileVersionInfo { string versionID = 1;
//文件版本ID int64 timestamp = 2; //文件版本生成时间戳，datetime对应int64 long类型 }  
  
  * retStatus取值

状态取值 | 描述  
---|---  
1 | 文件版本列表获取成功。VersionsFetchSuccess  
2 | 文件版本列表获取失败。VersionsFetchFailure  
  
  * 调用方法

    
~~~shell     
    curl --request POST 'http://localhost:8000/fbs/clt/pbFVF.do' \
    --header 'Content-Type: application/json' \
    --header 'sys_sign_ts: 1600328025054' \
    --header 'biz_id: 861e59478373702a9b8c7b848a22a32feed5d20a' \
    --header 'sys_sign: a7fef9d03b5b6e9fa5d9b7e66618564a972da96aae9e05c85ab6bb1fdf2caf63b54b432e0816afe38f0a6b6613b2f7960be403dc964194fd4f4d375f51e67e48a8e307ebfb992aa4445d809a75fa773' \
    --data-raw '{
           "fileID":"0d64ad368ebc37ddb80424376408cb7bb88ff328", 
           "fetcherSignTs":1600328025054,
    "rqFetcherSign":"8962e521d03b5b6e9fa5816afe38f0a6b6613b2f7960be403dc964194fd4f4d375f51e67e48a8e31e539c3ee4007ebfb992aa4445d809a75fa77b73c04a1eb9628802437bac8784288bb"
    }'
~~~    

| "data-raw"为ReqFileVersionsFetch（Protobuf Message）的JSON格式序列化结果 |

  * 异常信息

#### pbFRF.do【FileRightsFetchRq】

  * 接口地址

clt/pbFRF.do

  * 功能描述

提交文件权限列表获取链上操作请求。

  * Header参数

名称 | 类型 | 取值  
---|---|---  
Content-Type | string | application/json  
sys_sign_ts | long | 获取当前时间，并转换成long类型。调用接口的业务系统数字身份签名时间戳  
biz_id | string | 要访问链上业务域的唯一标识  
sys_sign | string | 调用接口的业务系统身份确权签名结果 sys_sign的生成方法：
分别将biz_id、sys_sign_ts转换成Byte[] 将ReqFileRightsFetch通过Protobuf序列化成Byte[]
依据如下顺序拼接成一个Byte[]： ➀biz_id + ➁ReqFileRightsFetch + ➂sys_sign_ts
用业务系统数字身份私钥，通过从法链提供的签名类库对第3步拼接好的Byte[]进行签名，并获得的签名结果即为sys_sign  
  
  * 输入参数

参数构造格式 | Protobuf Message  
---|---  
message ReqFileRightsFetch { string fileID = 1; //文件链上ID int64 fetcherSignTs =
2; //文件权限获取者签名时间戳，获取当前时间，并转换成int64类型 string rqFetcherSign = 3;
//文件权限获取者对之前序号组成的参数集合的签名结果 } |  
rqFetcherSign的生成方法 |  
分别将fileID、fetcherSignTs转换成Byte[] 依据如下顺序拼接成一个Byte[]： ➀fileID + ➁fetcherSignTs
用文件权限获取者数字身份私钥，通过从法链提供的签名类库对第2步拼接好的Byte[]进行签名，并获得的签名结果即为rqFetcherSign  
  
  * 调用返回

返回信息格式 | Protobuf Message的JSON格式序列化结果  
---|---  
message RespFileRightsFetch { int32 retStatus = 1; //处理状态编码 int32 retErrorCode
= 2; //错误代码 string retMsg = 3; //描述信息 RightsInfo fRights = 4; //文件权限列表信息 }
message ReaderList{ string grantorID = 1; //授权者数字身份标识 repeated string
readerIDs = 2; //授权的读取者数字身份标识列表 } message RightsInfo { repeated string
ownerIDs = 1; //所有者列表 repeated string sharerIDs = 2; //分享者列表 repeated string
readerIDs = 3; //读取者列表 repeated ReaderList readerIDsBySharer = 6;
//分享者和读取者授权关系列表 }  
  
  * retStatus取值

状态取值 | 描述  
---|---  
1 | 文件权限列表获取成功。RightsFetchSuccess  
2 | 文件权限列表获取失败。RightsFetchFailure  
  
  * 调用方法

    
~~~shell     
    curl --request POST 'http://localhost:8000/fbs/clt/pbFRF.do' \
    --header 'Content-Type: application/json' \
    --header 'sys_sign_ts: 1600328025054' \
    --header 'biz_id: 861e59478373702a9b8c7b848a22a32feed5d20a' \
    --header 'sys_sign: 4679bb2da51370435292cb98f5a2fc1bc6afe38f0a6b6613b2f7960be403dc964194fd4f4d375f51e67e48a8e31e539c3ee4007ebfb992aa4445d809a75fa773' \
    --data-raw '{
           "fileID":"0d64ad368ebc37ddb80424376408cb7bb88ff328", 
           "fetcherSignTs":1600328025054,
    "rqFetcherSign":"8962e521d03b5b6e9fa5816afe38f0a6b6613b2f7960be403dc964194fd4f4d375f51e67e48a8e31e539c3ee4007ebfb992aa4445d809a75fa77b73c04a1eb9628802437bac8784288bb"
    }'
~~~    

| "data-raw"为ReqFileRightsFetch（Protobuf Message）的JSON格式序列化结果 |

  * 异常信息

### 结构数据操作

#### pbDUT.do【DataUploadTxBody】

  * 接口地址

clt/pbDUT.do

  * 功能描述

构建结构数据保存上链交易体。构建好的交易体使用pbST.do完成真正的提交操作。

  * Header参数

名称 | 类型 | 取值  
---|---|---  
Content-Type | string | application/json  
sys_sign_ts | long | 获取当前时间，并转换成long类型。调用接口的业务系统数字身份签名时间戳  
biz_id | string | 要访问链上业务域的唯一标识  
sys_sign | string | 调用接口的业务系统身份确权签名结果 sys_sign的生成方法：
分别将biz_id、sys_sign_ts转换成Byte[] 将ReqGenDataUploadTxBody通过Protobuf序列化成Byte[]
依据如下顺序拼接成一个Byte[]： ➀biz_id + ➁ReqGenDataUploadTxBody + ➂sys_sign_ts
用业务系统数字身份私钥，通过从法链提供的签名类库对第3步拼接好的Byte[]进行签名，并获得的签名结果即为sys_sign  
  
  * 输入参数

参数构造格式 | Protobuf Message  
---|---  
message ReqGenDataUploadTxBody { string senderID = 1;
//Tx发送者地址，为提高上链效率，可以随机生成的临时账户地址 RoleItem owner = 2;
//进行结构数据上传操作的结构数据所有者身份标识，owners中的一个 string dataContent = 3; //结构数据体 string
dataProperty = 4; //结构数据附属属性 string dataDigest = 5;
//结构数据指纹特征值，即dataContent内容的指纹特征值 string encName = 7; // 密钥加密方式（新增） repeated
RoleItem owners = 8; // 文件所有者的对象列表 repeated RoleItem readers = 9; //
授予文件读取权限的对象列表 repeated RoleItem sharers = 10; // 授予文件分享权限的对象列表 bool autoVerify
= 11; // 是否需要做签名验证 } message RoleItem { string addr = 1; // 用户身份链上唯一标识 string
encKey = 2; // 密钥加密结果 }  
  
  * 调用返回

返回信息格式 | Protobuf Message的JSON格式序列化结果  
---|---  
message RespGenDataUploadTxBody { int32 retCode = 1; //返值码 string retMsg = 2;
//描述信息 string txBody = 3; //上链交易体 }  
  
  * 调用方法

    
~~~shell     
    curl --request POST 'http://localhost:8000/fbs/clt/pbDUT.do' \
    --header 'Content-Type: application/json' \
    --header 'sys_sign_ts: 1600328025054' \
    --header 'biz_id: 861e59478373702a9b8c7b848a22a32feed5d20a' \
    --header 'sys_sign: a7fef9d03b5b6e9fa5b54b432e0816afe38f0a6b6613b2f7960be403dc964194fd4f4d375f51e67e48a8e31e539c3ee4007ebfb992aa4445d809a75fa773' \
    --data-raw '{
           "senderID":"68ebc37d0d64ad3db80428cb7bb88ff328437640",
           "ownerID":"73bacb28962e51eb48b2896288021b8a43778c04",
           "dataContent":"{'\''姓名'\'': '\''张三'\'','\''性别'\'': '\''男'\''}",
           "dataProperty":"{'\''赋强公证流程'\'': '\''启动阶段文书'\'','\''接收单位'\'': '\''公证处'\''}",
           "dataDigest":"2e52896288021b73", 
           "ownerIDs":["73bacb28962e51eb48b2896288021b8a43778c04", 
                      "896288b1eb48b228962e50214a437878c0b73bac"],
           "sharerIDs":["ebc37ddb0d64ad368876408cb7bb88ff32804243", 
                      "62e5021b73b1eb48b289ac4a437878c0b2896288"]
           "readerIDs":["0d64ad368ebc37ddb80424376408cb7bb88ff328", 
                      "1eb48b2896288b28962e5021b73bac4a437878c0"]
        }'
~~~    

| "data-raw"为ReqGenDataUploadTxBody（Protobuf Message）的JSON格式序列化结果 |

  * 异常信息

#### pbDMT.do【DataModifyTxBody】

  * 接口地址

clt/pbDMT.do

  * 功能描述

构建结构数据更新上链交易体。构建好的交易体使用pbST.do完成真正的提交操作。

  * Header参数

名称 | 类型 | 取值  
---|---|---  
Content-Type | string | application/json  
sys_sign_ts | long | 获取当前时间，并转换成long类型。调用接口的业务系统数字身份签名时间戳  
biz_id | string | 要访问链上业务域的唯一标识  
sys_sign | string | 调用接口的业务系统身份确权签名结果 sys_sign的生成方法：
分别将biz_id、sys_sign_ts转换成Byte[] 将ReqGenDataModifyTxBody通过Protobuf序列化成Byte[]
依据如下顺序拼接成一个Byte[]： ➀biz_id + ➁ReqGenDataModifyTxBody + ➂sys_sign_ts
用业务系统数字身份私钥，通过从法链提供的签名类库对第3步拼接好的Byte[]进行签名，并获得的签名结果即为sys_sign  
  
  * 输入参数

参数构造格式 | Protobuf Message  
---|---  
message ReqGenDataModifyTxBody { string senderID = 1;
//Tx发送者地址，为提高上链效率，可以随机生成的临时账户地址 string ownerID = 2; //结构数据所有者列表中的一个 string
dataContent = 3; //结构数据体 string dataProperty = 4; //结构数据附属属性 string dataDigest
= 5; //结构数据指纹特征值，即dataContent内容的指纹特征值 string dataID = 6; //要修改的数据ID }  
  
  * 调用返回

返回信息格式 | Protobuf Message的JSON格式序列化结果  
---|---  
message RespGenDataModifyTxBody { int32 retCode = 1; //返值码 string retMsg = 2;
//描述信息 string txBody = 3; //上链交易体 }  
  
  * 调用方法

    
~~~shell     
    curl --request POST 'http://localhost:8000/fbs/clt/pbDMT.do' \
    --header 'Content-Type: application/json' \
    --header 'sys_sign_ts: 1600328025054' \
    --header 'biz_id: 861e59478373702a9b8c7b848a22a32feed5d20a' \
    --header 'sys_sign: a7fef9d03b5b6e9fa5b54b432e0816afe38f0a6b6613b2f7960be403dc964194fd4f4d375f51e67e48a8e31e539c3ee4007ebfb992aa4445d809a75fa773' \
    --data-raw '{
           "senderID":"0d64ad368ebc37ddb80424376408cb7bb88ff328",
           "ownerID":"bc37ddb800d64ad368e48cb7bb88ff3282437640",
           "dataContent":"{'\''姓名'\'': '\''张三'\'','\''性别'\'': '\''男'\''}",
           "dataProperty":"{'\''赋强公证流程'\'': '\''启动阶段文书'\'','\''接收单位'\'': '\''公证处'\''}",
           "dataDigest ":"2e52896288021b73", 
           "dataID":"1eb48bb28962e52896288021b73c04a437bac878",
        }'
~~~    

| "data-raw"为ReqGenDataModifyTxBody（Protobuf Message）的JSON格式序列化结果 |

  * 异常信息

#### pbDAT.do【DataAuthoriseTxBody】

  * 接口地址

clt/pbDAT.do

  * 功能描述

构建结构数据授权上链交易体。构建好的交易体使用pbST.do完成真正的提交操作。

  * Header参数

名称 | 类型 | 取值  
---|---|---  
Content-Type | string | application/json  
sys_sign_ts | long | 获取当前时间，并转换成long类型。调用接口的业务系统数字身份签名时间戳  
biz_id | string | 要访问链上业务域的唯一标识  
sys_sign | string | 调用接口的业务系统身份确权签名结果 sys_sign的生成方法：
分别将biz_id、sys_sign_ts转换成Byte[] 将ReqGenDataAuthoriseTxBody通过Protobuf序列化成Byte[]
依据如下顺序拼接成一个Byte[]： ➀biz_id + ➁ReqGenDataAuthoriseTxBody + ➂sys_sign_ts
用业务系统数字身份私钥，通过从法链提供的签名类库对第3步拼接好的Byte[]进行签名，并获得的签名结果即为sys_sign  
  
  * 输入参数

参数构造格式 | Protobuf Message  
---|---  
message ReqGenDataAuthoriseTxBody { string senderID = 1;
//Tx发送者地址，为提高上链效率，可以随机生成的临时账户地址 string grantorID = 2;
//提交数据结构授权操作的申请者身份标识，必须是Owners或Sharers中的一个数字身份标识 string dataID = 3; //结构数据链上ID
repeated RoleItem addOwners = 4; //要添加成的对象列表。不赋值，则不处理。 repeated RoleItem
addSharers = 5; //要添加成分享者的对象列表。不赋值，则不处理。 repeated RoleItem addReaders = 6;
//要添加成读取者的对象列表。不赋值，则不处理。 repeated string removeOwnerIDs = 7;
//要删除的所有者的地址列表。不赋值，则不处理。 repeated string removeSharerIDs = 8;
//要删除的分享者的地址列表。不赋值，则不处理。 repeated string removeReaderIDs = 9;
//要删除的读取者的地址列表。不赋值，则不处理。 }  
  
  * 调用返回

返回信息格式 | Protobuf Message的JSON格式序列化结果  
---|---  
message RespGenDataAuthoriseTxBody { int32 retCode = 1; //返值码 string retMsg =
2; //描述信息 string txBody = 3; //上链交易体 }  
  
  * 调用方法

    
~~~shell     
    curl --request POST 'http://localhost:8000/fbs/clt/pbDAT.do' \
    --header 'Content-Type: application/json' \
    --header 'sys_sign_ts: 1600328025054' \
    --header 'biz_id: 861e59478373702a9b8c7b848a22a32feed5d20a' \
    --header 'sys_sign: a7fef9d03b5b6eb432e0816afe38f0a6b6613b2f7960be403dc964194fd4f4d375f51e67e48a8e31e539c3ee4007ebfb992aa4445d809a75fa773' \
    --data-raw '{
        "ownerID":"0d64ad368ebc37ddb80424376408cb7bb88ff328",
        "dataID":"1eb48bb28962e52896288021b73c04a437bac878",
        "addOwnerIDs": [
            "73bacb28962e51eb48b2896288021b8a43778c04",
            "896288b1eb48b228962e50214a437878c0b73bac"
        ],
        "addReaderIDs": [
            "d368ebc37ddb0d64a804243764088ff3288cb7bb",
            "8b2896281eb48b28962e5021b7437878c03bac4a"
        ]
    }'
~~~    

| "data-raw"为ReqGenDataAuthoriseTxBody（Protobuf Message）的JSON格式序列化结果 |

  * 异常信息

#### pbDFR.do【DataFetchRq】

  * 接口地址

clt/pbDFR.do

  * 功能描述

提交结构数据获取链上操作请求。

  * Header参数

名称 | 类型 | 取值  
---|---|---  
Content-Type | string | application/json  
sys_sign_ts | long | 获取当前时间，并转换成long类型。调用接口的业务系统数字身份签名时间戳  
biz_id | string | 要访问链上业务域的唯一标识  
sys_sign | string | 调用接口的业务系统身份确权签名结果 sys_sign的生成方法：
分别将biz_id、sys_sign_ts转换成Byte[] 将ReqDataFetch通过Protobuf序列化成Byte[]
依据如下顺序拼接成一个Byte[]： ➀biz_id + ➁ReqDataFetch + ➂sys_sign_ts
用业务系统数字身份私钥，通过从法链提供的签名类库对第3步拼接好的Byte[]进行签名，并获得的签名结果即为sys_sign  
  
  * 输入参数

参数构造格式 | Protobuf Message  
---|---  
message ReqDataFetch { string dataID = 1; //结构数据链上ID string versionID = 2;
//版本ID，如果不赋值，则返回最新版本的结构数据 int64 fetcherSignTs = 3;
//结构数据获取者签名时间戳，获取当前时间，并转换成int64类型 string rqFetcherSign = 4;
//结构数据获取者对之前序号组成的参数集合的签名结果 } |  
rqReaderSign的生成方法 |  
分别将fileID、versionID、fetcherSignTs转换成Byte[] 依据如下顺序拼接成一个Byte[]： ➀dataID +
➁versionID + ➂fetcherSignTs
用结构数据获取者数字身份私钥，通过从法链提供的签名类库对第2步拼接好的Byte[]进行签名，并获得的签名结果即为rqFetcherSign  
  
  * 调用返回

返回信息格式 | Protobuf Message的JSON格式序列化结果  
---|---  
message RespDataFetch { int32 retStatus = 1; //处理状态编码 int32 retErrorCode = 2;
//错误代码 string retMsg = 3; //描述信息 StructData structData = 4; //返回的结构数据体及元数据信息 }
message StructData{ string dataID = 1; //数据链上ID string versionID = 2;
//数据当前版本ID string dataContent = 3; //数据的数据体 string dataProperty = 4; //数据附属属性
string dataDigest = 5; //数据本体指纹特征值 int32 delStatus = 6; //数据的删除状态，取值1=删除；0=有效
long uploadTime = 7; //数据上链保存时间，datetime对应的long类型 string encName= 8;
//敏感数据加密方式名称 }  
  
  * retStatus取值

状态取值 | 描述  
---|---  
1 | 结构数据获取成功。FetchSuccess  
2 | 结构元数据获取失败。FetchFailure  
  
  * 调用方法

    
~~~shell     
    curl --request POST 'http://localhost:8000/fbs/clt/pbDFR.do' \
    --header 'Content-Type: application/json' \
    --header 'sys_sign_ts: 1600328025054' \
    --header 'biz_id: 861e59478373702a9b8c7b848a22a32feed5d20a' \
    --header 'sys_sign: a7fef9d03b5b6e9fa5d9b3916afe38f0a6b6613b2f7960be403dc964194fd4f4d375f51e67e48a8e31e539c3ee4007ebfb992aa4445d809a75fa773' \
    --data-raw '{
           "dataID":"1eb48bb28962e52896288021b73c04a437bac878",
           "versionID":"8962e521b73c04a1eb9628802437bac8784288bb",
           "fetcherSignTs":1600328025054,
    "rqFetcherSign":"8962e521d03b5b6e9fa5816afe38f0a6b6613b2f7960be403dc964194fd4f4d375f51e67e48a8e31e539c3ee4007ebfb992aa4445d809a75fa77b73c04a1eb9628802437bac8784288bb"
        }'
~~~    

| "data-raw"为ReqDataFetch（Protobuf Message）的JSON格式序列化结果 |

  * 异常信息

#### pbDDT.do【DataDeleteTxBody】

  * 接口地址

clt/pbDDT.do

  * 功能描述

构建结构数据删除上链交易体。构建好的交易体使用pbST.do完成真正的提交操作。

  * Header参数

名称 | 类型 | 取值  
---|---|---  
Content-Type | string | application/json  
sys_sign_ts | long | 获取当前时间，并转换成long类型。调用接口的业务系统数字身份签名时间戳  
biz_id | string | 要访问链上业务域的唯一标识  
sys_sign | string | 调用接口的业务系统身份确权签名结果 sys_sign的生成方法：
分别将biz_id、sys_sign_ts转换成Byte[] 将ReqGenDataDeleteTxBody通过Protobuf序列化成Byte[]
依据如下顺序拼接成一个Byte[]： ➀biz_id + ➁ReqGenDataDeleteTxBody + ➂sys_sign_ts
用业务系统数字身份私钥，通过从法链提供的签名类库对第3步拼接好的Byte[]进行签名，并获得的签名结果即为sys_sign  
  
  * 输入参数

参数构造格式 | Protobuf Message  
---|---  
message ReqGenDataDeleteTxBody { string senderID = 1;
//Tx发送者地址，为提高上链效率，可以随机生成的临时账户地址 string ownerID = 2; //进行结构数据删除操作的结构数据所有者身份标识
string dataID = 3; //结构数据链上ID }  
  
  * 调用返回

返回信息格式 | Protobuf Message的JSON格式序列化结果  
---|---  
message RespGenDataDeleteTxBody { int32 retCode = 1; //返值码 string retMsg = 2;
//描述信息 string txBody = 3; //上链交易体 }  
  
  * 调用方法

    
~~~shell     
    curl --request POST 'http://localhost:8000/fbs/clt/pbDDT.do' \
    --header 'Content-Type: application/json' \
    --header 'sys_sign_ts: 1600328025054' \
    --header 'biz_id: 861e59478373702a9b8c7b848a22a32feed5d20a' \
    --header 'sys_sign: a7fef9d03b5b6e9fa5d90816afe38f0a6b6613b2f7960be403dc964194fd4f4d375f51e67e48a8e31e539c3ee4007ebfb992aa4445d809a75fa773' \
    --data-raw '{
        "senderID":"68ebc37d0d64ad3db80428cb7bb88ff328437640",
        "ownerID":"0d64ad368ebc37ddb80424376408cb7bb88ff328",
        "dataID":"1eb48bb28962e52896288021b73c04a437bac878"
    }'
~~~    

| "data-raw"为ReqGenDataDeleteTxBody（Protobuf Message）的JSON格式序列化结果 |

  * 异常信息

#### pbDDC.do【DataDigestCheckRq】

  * 接口地址

clt/pbDDC.do

  * 功能描述

提交结构数据特定版本的指纹特征值链上操作请求。

  * Header参数

名称 | 类型 | 取值  
---|---|---  
Content-Type | string | application/json  
sys_sign_ts | long | 获取当前时间，并转换成long类型。调用接口的业务系统数字身份签名时间戳  
biz_id | string | 要访问链上业务域的唯一标识  
sys_sign | string | 调用接口的业务系统身份确权签名结果 sys_sign的生成方法：
分别将biz_id、sys_sign_ts转换成Byte[] 将ReqDataDigestCheck通过Protobuf序列化成Byte[]
依据如下顺序拼接成一个Byte[]： ➀biz_id + ➁ReqDataDigestCheck + ➂sys_sign_ts
用业务系统数字身份私钥，通过从法链提供的签名类库对第3步拼接好的Byte[]进行签名，并获得的签名结果即为sys_sign  
  
  * 输入参数

参数构造格式 | Protobuf Message  
---|---  
message ReqDataDigestCheck { string dataID = 1; //结构数据链上ID string versionID =
2; //结构数据版本ID。如果不赋值，则直接返回最新版本的结构数据 string dataDigest = 3;
//本地结构数据的指纹特征值，用于和链上数据进行比对 }  
  
  * 调用返回

返回信息格式 | Protobuf Message的JSON格式序列化结果  
---|---  
message RespDataDigestCheck { int32 retStatus = 1; //处理状态编码 int32 retErrorCode
= 2; //错误代码 string retMsg = 3; //描述信息 int32 verifyResult = 4;
//验证结果，1=一致；-1=不一致 }  
  
  * retStatus取值

状态取值 | 描述  
---|---  
1 | 指纹特征值校验成功。DigestCheckSuccess  
2 | 指纹特征值校验失败。DigestCheckFailure  
  
  * 调用方法

    
~~~shell     
    curl --request POST 'http://localhost:8000/fbs/clt/pbDDC.do' \
    --header 'Content-Type: application/json' \
    --header 'sys_sign_ts: 1600328025054' \
    --header 'biz_id: 861e59478373702a9b8c7b848a22a32feed5d20a' \
    --header 'sys_sign: a7fef9d03b5b6e9fa53b54b432e0816afe38f0a6b6613b2f7960be403dc964194fd4f4d375f51e67e48a8e31e539c3ee4007ebfb992aa4445d809a75fa773' \
    --data-raw '{
        "dataID":"1eb48bb28962e52896288021b73c04a437bac878",
        "versionID":"89621eb48bb2e52896288021b73c7bac87804a43",
        "dataDigest":"48bb2e5289689621eb48bb2e52896288021b73c7bac87804a43"
    }'
~~~    

| "data-raw"为ReqDataDigestCheck（Protobuf Message）的JSON格式序列化结果 |

  * 异常信息

#### pbDVF.do【DataVersionsFetchRq】

  * 接口地址

clt/pbDVF.do

  * 功能描述

提交结构数据获取版本列表链上操作请求。

  * Header参数

名称 | 类型 | 取值  
---|---|---  
Content-Type | string | application/json  
sys_sign_ts | long | 获取当前时间，并转换成long类型。调用接口的业务系统数字身份签名时间戳  
biz_id | string | 要访问链上业务域的唯一标识  
sys_sign | string | 调用接口的业务系统身份确权签名结果 sys_sign的生成方法：
分别将biz_id、sys_sign_ts转换成Byte[] 将ReqDataVersionsFetch通过Protobuf序列化成Byte[]
依据如下顺序拼接成一个Byte[]： ➀biz_id + ➁ReqDataVersionsFetch+ ➂sys_sign_ts
用业务系统数字身份私钥，通过从法链提供的签名类库对第3步拼接好的Byte[]进行签名，并获得的签名结果即为sys_sign  
  
  * 输入参数

参数构造格式 | Protobuf Message  
---|---  
message ReqDataVersionsFetch { string dataID = 1; //结构数据链上ID int64
fetcherSignTs = 2; //版本信息获取者签名时间戳，获取当前时间，并转换成int64类型 string rqFetcherSign = 3;
//版本信息获取者对之前序号组成的参数集合的签名结果 } |  
rqFetcherSign的生成方法 |  
分别将dataID、fetcherSignTs转换成Byte[] 依据如下顺序拼接成一个Byte[]： ➀dataID + ➁fetcherSignTs
用版本信息获取者数字身份私钥，通过从法链提供的签名类库对第2步拼接好的Byte[]进行签名，并获得的签名结果即为rqFetcherSign  
  
  * 调用返回

返回信息格式 | Protobuf Message的JSON格式序列化结果  
---|---  
message RespDataVersionsFetch { int32 retStatus = 1; //处理状态编码 int32
retErrorCode = 2; //错误代码 string retMsg = 3; //描述信息 repeated DataVersionInfo
versions= 4; //全部结构数据版本信息 } message DataVersionInfo { string versionID = 1;
//数据版本ID int64 timestamp = 2; //数据版本生成时间戳，datetime对应的int64类型 }  
  
  * retStatus取值

状态取值 | 描述  
---|---  
1 | 结构数据版本列表获取成功。VersionsFetchSuccess  
2 | 结构数据版本列表获取失败。VersionsFetchFailure  
  
  * 调用方法

    
~~~shell     
    curl --request POST 'http://localhost:8000/fbs/clt/pbDVF.do' \
    --header 'Content-Type: application/json' \
    --header 'sys_sign_ts: 1600328025054' \
    --header 'biz_id: 861e59478373702a9b8c7b848a22a32feed5d20a' \
    --header 'sys_sign: a7fef9d03b5b6e9fa5d432e0816afe38f0a6b6613b2f7960be403dc964194fd4f4d375f51e67e48a8e31e539c3ee4007ebfb992aa4445d809a75fa773' \
    --data-raw '{
           "dataID":"0d64ad368ebc37ddb80424376408cb7bb88ff328", 
           "fetcherSignTs":1600328025054,
    "rqFetcherSign":"8962e521d03b5b6e9fa5816afe38f0a6b6613b2f7960be403dc964194fd4f4d375f51e67e48a8e31e539c3ee4007ebfb992aa4445d809a75fa77b73c04a1eb9628802437bac8784288bb"
    }'
~~~    

| "data-raw"为ReqDataVersionsFetch（Protobuf Message）的JSON格式序列化结果 |

  * 异常信息

#### pbDRF.do【DataRightsFetchRq】

  * 接口地址

clt/pbDRF.do

  * 功能描述

提交结构数据权限列表获取链上操作请求。

  * Header参数

名称 | 类型 | 取值  
---|---|---  
Content-Type | string | application/json  
sys_sign_ts | long | 获取当前时间，并转换成long类型。调用接口的业务系统数字身份签名时间戳  
biz_id | string | 要访问链上业务域的唯一标识  
sys_sign | string | 调用接口的业务系统身份确权签名结果 sys_sign的生成方法：
分别将biz_id、sys_sign_ts转换成Byte[] 将ReqDataRightsFetch通过Protobuf序列化成Byte[]
依据如下顺序拼接成一个Byte[]： ➀biz_id + ➁ReqDataRightsFetch + ➂sys_sign_ts
用业务系统数字身份私钥，通过从法链提供的签名类库对第3步拼接好的Byte[]进行签名，并获得的签名结果即为sys_sign  
  
  * 输入参数

参数构造格式 | Protobuf Message  
---|---  
message ReqDataRightsFetch { string dataID = 1; //结构数据链上ID int64 fetcherSignTs
= 2; //权限信息获取者签名时间戳，获取当前时间，并转换成int64类型 string rqFetcherSign = 3;
//权限信息获取者对之前序号组成的参数集合的签名结果 } |  
rqFetcherSign的生成方法 |  
分别将fileID、fetcherSignTs转换成Byte[] 依据如下顺序拼接成一个Byte[]： ➀fileID + ➁fetcherSignTs
用权限信息获取者数字身份私钥，通过从法链提供的签名类库对第2步拼接好的Byte[]进行签名，并获得的签名结果即为rqFetcherSign  
  
  * 调用返回

返回信息格式 | Protobuf Message的JSON格式序列化结果  
---|---  
message RespDataRightsFetch { int32 retStatus = 1; //处理状态编码 int32 retErrorCode
= 2; //错误代码 string retMsg = 3; //描述信息 RightsInfo dRights = 4; //结构数据权限列表信息 }
message ReaderList{ string grantorID = 1; //授权者数字身份标识 repeated RoleItem
readers = 2; //授权的读取者数字身份标识列表 } message RightsInfo { repeated RoleItem owners
= 1; //所有者列表 repeated RoleItem sharers = 2; //分享者列表 repeated RoleItem readers
= 3; //读取者列表 repeated ReaderList readersBySharer = 6; //分享者和读取者授权关系列表 }  
  
  * retStatus取值

状态取值 | 描述  
---|---  
1 | 结构数据权限列表获取成功。RightsFetchSuccess  
2 | 结构数据权限列表获取失败。RightsFetchFailure  
  
  * 调用方法

    
~~~shell     
    curl --request POST 'http://localhost:8000/fbs/clt/pbDRF.do' \
    --header 'Content-Type: application/json' \
    --header 'sys_sign_ts: 1600328025054' \
    --header 'biz_id: 861e59478373702a9b8c7b848a22a32feed5d20a' \
    --header 'sys_sign: 7fef9d03b5b6e9faa2fc1bc6afe38f0a6b6613b2f7960be403dc964194fd4f4d375f51e67e48a8e31e539c3ee4007ebfb992aa4445d809a75fa773' \
    --data-raw '{
           "dataID":"0d64ad368ebc37ddb80424376408cb7bb88ff328", 
           "fetcherSignTs ":1600328025054,
    "rqFetcherSign":"8962e521d03b5b6e9fa5816afe38f0a6b6613b2f7960be403dc964194fd4f4d375f51e67e48a8e31e539c3ee4007ebfb992aa4445d809a75fa77b73c04a1eb9628802437bac8784288bb"
    }'
~~~    

| "data-raw"为ReqDataRightsFetch（Protobuf Message）的JSON格式序列化结果 |

  * 异常信息
