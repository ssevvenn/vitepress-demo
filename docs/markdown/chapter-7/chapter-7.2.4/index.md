---
prev: false
next: false
---
### 合约调用

#### pbCCT.do【ContractCallTxBody】

  * 接口地址

clt/pbCCT.do

  * 功能描述

构建合约调用上链交易体。构建好的交易体使用pbST.do完成真正的提交操作。

  * Header参数

名称 | 类型 | 取值  
---|---|---  
Content-Type | string | application/json  
sys_sign_ts | long | 获取当前时间，并转换成long类型。调用接口的业务系统数字身份签名时间戳  
biz_id | string | 要访问链上业务域的唯一标识  
sys_sign | string | 调用接口的业务系统身份确权签名结果 sys_sign的生成方法：
分别将biz_id、sys_sign_ts转换成Byte[] 将ReqGenContractCallTxBody通过Protobuf序列化成Byte[]
依据如下顺序拼接成一个Byte[]： ➀biz_id + ➁ReqGenContractCallTxBody + ➂sys_sign_ts
用业务系统数字身份私钥，通过从法链提供的签名类库对第3步拼接好的Byte[]进行签名，并获得的签名结果即为sys_sign  
  
  * 输入参数

参数构造格式 | Protobuf Message  
---|---  
message ReqGenContractCallTxBody { string callerID = 1; //合约调用者数字身份标识 string
scAddress = 2; //要调用的链上合约地址 string scParam = 3; //合约方法调用参数，按照合约定义的格式进行调用参数构造 }  
  
  * 调用返回

返回信息格式 | Protobuf Message的JSON格式序列化结果  
---|---  
message RespGenContractCallTxBody { int32 retCode = 1; //返值码 string retMsg =
2; //描述信息 string txBody = 3; //上链交易体 }  
  
  * 调用方法

    
~~~shell     
    curl --request POST 'http://localhost:8000/fbs/clt/pbCCT.do' \
    --header 'Content-Type: application/json' \
    --header 'sys_sign_ts: 1600328025054' \
    --header 'biz_id: 861e59478373702a9b8c7b848a22a32feed5d20a' \
    --header 'sys_sign: fb992aa4445d80a7fef9d03b5b6ea6b6613b2f7960be403dc964194fd4f4d375f51e67e48a8e31e539c3ee4007eb9a75fa7739fa5d9b32e0816afe38f0' \
    --data-raw '{
        "callerID":"0d64ad368ebc37ddb80424376408cb7bb88ff328",
        "scAddress":"1eb48bb28962e52896288021b73c04a437bac878",
        "scParam":"{\"参数1\":\"参数值1\",\"参数2\":\"参数值2\"}"
    }'
~~~    

| "data-raw"为ReqGenContractCallTxBody（Protobuf Message）的JSON格式序列化结果 |

  * 异常信息
