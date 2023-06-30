
## com.coolawchain.sdk.model

### Frontend

链外应用系统调用的前置节点对象。

#### 构造函数

    
~~~java    
    public Frontend(String systemPrivateKey,String frontendUrl); public Frontend();
~~~    

#### 属性

##### systemPrivateKey

要访问区块链系统内特定业务域中链上数据的链外应用系统的业务系统数字身份信息。

    
~~~java    
    public String systemID { set; get; }
~~~    

属性值

String

设置要进行链上操作的链外应用系统的业务系统数字身份信息私钥。相应的业务系统身份标识必须获得区块链中特定业务域的访问许可授权。

##### frontendUrl

设置链外应用系统要调用的前置节点的访问地址。链外应用系统必须通过前置节点与区块链节点服务器间建立的安全通道，方可与区块链系统进行数据交互。

    
~~~java    
    public String frontendUrl { set; get; }
~~~    

属性值

String

前置节点的访问地址。

示例：

    
~~~java    
    String systemPrivateKey = "3161be862236ae966004390908a5facb8f45763e38ce5cfb378e493f91a7873d";
    KeyPairs systemKeyPair = CryptoUtil.crypto.genAccountKey(systemPrivateKey);
~~~    

### FileTxStatus

链上文件相关交易事件回调对象。

#### 属性

##### status

文件上链操作的当前处理状态编码。

    
~~~java    
    public String status { set; get; }
~~~    

##### errorCode

错误码编号（具体请查看错误码详情）

    
~~~java    
    private int errorCode{ set; get; }
~~~    

##### message

错误码对应错误解释。

    
~~~java    
    private String message{ set; get; }
~~~    

##### txBlockData

链上交易结构化数据。

    
~~~java    
    public FileTxBlockInfo txBlockData{ set; get; }
~~~    

  * FileTxBlockInfo

文件链上信息。

  * 属性

    * fileID

文件链上唯一ID。

    
~~~java    
    private String fileID{ set; get; }
~~~    

  * versionID

文件链上版本ID。

    
~~~java    
    private String versionID{ set; get; }
~~~    

  * txHash

上链交易对应的Hash

    
~~~java    
    private String txHash{ set; get; }
~~~    

  * txExecTimestamp

上链交易被执行的时间

    
~~~java    
    private String txExecTimestamp{ set; get; }
~~~    

  * blockHash

上链交易所在区块的hash。

    
~~~java    
    private String blockHash{ set; get; }
~~~    

  * blockHeight

上链交易所在区块高度。

    
~~~java    
    private long blockHeight{ set; get; }
~~~    

  * blockedTimestamp

上链交易所在区块的生成时间戳

    
~~~java    
    private long currentBlockHeight{ set; get; }
~~~    

  * currentBlockHeight

区块链当前区块高度

    
~~~java    
    private long currentBlockHeight{ set; get; }
~~~    

### FileMetaFetchStatus

链上文件元数据查询事件回调对象。

#### 属性

##### status

文件元数据获取的处理状态编码。

    
~~~java    
    public String status { set; get; }
~~~    

状态编码列表：

状态取值 | 描述  
---|---  
FetchSuccess | 文件元数据获取成功。  
FetchFailure | 文件元数据获取失败。  
  
##### errorCode

错误码编号（具体请查看错误码详情）

    
~~~java    
    private int errorCode{ set; get; }
~~~    

##### message

错误码对应错误解释。

    
~~~java    
    private String message{ set; get; }
~~~    

##### fileMeta

链上文件元数据。

    
~~~java   
    public FileMeta fileMeta { set; get; }
~~~    

  * FileMeta

链上存储结构化信息。

  * 属性

    * fileID

文件链上唯一ID。

    
~~~java    
    private String fileID{ set; get; }
~~~    

  * versionID

结构化数据链上版本ID。

    
~~~java    
    private String versionID{ set; get; }
~~~    

  * fileName

文件名称

    
~~~java    
    private String fileName{ set; get; }
~~~    

  * fileSuffix

文件扩展名

    
~~~java    
    private String fileSuffix{ set; get; }
~~~    

  * fileSize

文件大小

    
~~~java    
    private long fileSize{ set; get; }
~~~    

  * fileDescription

文件描述

    
~~~java    
    private String fileDescription{ set; get; }
~~~    

  * fileProperty

文件附属属性

    
~~~java    
    private String fileProperty{ set; get; }
~~~    

  * fileCopy

文件副本数量

    
~~~java    
    private int fileCopy{ set; get; }
~~~    

  * fileSlice

文件切片数量

    
~~~java    
    private int fileSlice{ set; get; }
~~~    

  * fileDigest

文件本体指纹特征值

    
~~~java    
    private String fileDigest{ set; get; }
~~~    

  * uploadTime

文件上链保存时间

    
~~~java    
    private long uploadTime{ set; get; }
~~~    

  * delStatus

结构化数据删除状态 1=删除；0=有效。

    
~~~java    
    private int delStatus{ set; get; }
~~~    

  * metaTimestamp

当前版本元数据的生成时间戳

    
~~~java    
    private long metaTimestamp{ set; get; }
~~~    

### FileFetchStatus

链上文件下载事件回调对象。

#### 属性

##### status

文件本体获取的处理状态编码。

    
~~~java    
    public String status { set; get; }
~~~    

状态编码列表：

状态取值 | 描述  
---|---  
FetchSuccess | 文件本体获取成功。  
FetchFailure | 文件本体获取失败。  
  
##### errorCode

错误码编号（具体请查看错误码详情）

    
~~~java    
    private int errorCode{ set; get; }
~~~    

##### message

错误码对应错误解释。

    
~~~java    
    private String message{ set; get; }
~~~    

##### fileBody

链上文件。

    
~~~java    
    public File fileBody{ set; get; }
~~~    

### FileDigestCheckStatus

文件内容指纹与链上数据指纹一致性校验。

#### 属性

##### status

指纹特征值获取的处理状态编码。

    
~~~java    
    public String status { set; get; }
~~~    

状态编码列表：

状态取值 | 描述  
---|---  
FetchSuccess | 文件指纹特征值获取成功。  
FetchFailure | 文件指纹特征值获取失败。  
  
##### errorCode

错误码编号（具体请查看错误码详情）

    
~~~java    
    private int errorCode{ set; get; }
~~~    

##### message

错误码对应错误解释。

    
~~~java    
    private String message{ set; get; }
~~~    

##### verifyResult

数据是否一致。

    
~~~java    
    private boolean verifyResult{ set; get; }
~~~    

### FileVersionsFetchStatus

链上文件版本信息查询事件回调对象。

#### 属性

##### status

文件版本列表获取的处理状态编码。

    
~~~java    
    public String status { set; get; }
~~~    

状态编码列表：

状态取值 | 描述  
---|---  
FetchSuccess | 文件版本列表获取成功。  
FetchFailure | 文件版本列表获取失败。  
  
##### errorCode

错误码编号（具体请查看错误码详情）

    
~~~java    
    private int errorCode{ set; get; }
~~~    

##### message

错误码对应错误解释。

    
~~~java    
    private String message{ set; get; }
~~~    

##### versions

链上文件版本数据。

    
~~~java    
    public List\<FileVersionInfo\> versions{ set; get; }
~~~    

  * FileVersionInfo

链上存储文件版本信息。

  * 属性

    * versionID

文件在链上唯一版本ID。

    
~~~java    
    private String versionID{ set; get; }
~~~    

  * timestamp

文件上链保存时间戳。

    
~~~java    
    private long timestamp{ set; get; }
~~~    

### FileRightsFetchStatus

获取链上文件权限列表。

#### 属性

##### status

链上文件权限列表获取的处理状态编码。

    
~~~java    
    public String status { set; get; }
~~~    

状态编码列表：

状态取值 | 描述  
---|---  
FetchSuccess | 链上文件权限列表获取成功。  
FetchFailure | 链上文件权限列表获取失败。  
  
##### errorCode

错误码编号（具体请查看错误码详情）

    
~~~java    
    private int errorCode{ set; get; }
~~~    

##### message

错误码对应错误解释。

    
~~~java    
    private String message{ set; get; }
~~~    

##### fileRights

权限信息。

    
~~~java    
    public RightsInfo fileRights{ set; get; }
~~~    

  * RightsInfo

链上文件权限信息。

  * 属性

    * owners

文件所有者。

    
~~~java    
    private List\<RoleItem\> owners{ set; get; }
~~~    

  * sharers

文件被分享者。

    
~~~java    
    private List\<RoleItem\> sharers{ set; get; }
~~~    

  * readers

文件读取者。

    
~~~java    
    private List\<RoleItem\> readers{ set; get; }
~~~    

  * readersBySharer

被分享者授权的读取者。

    
~~~java    
    private List\<Readers\> readerIDsBySharer{ set; get; }
~~~    

  * Readers

grantorID 授权人ID

    
~~~java   
    private String grantorID{ set; get; }
~~~    

Readers 读者对象

    
~~~java    
    private List\<RoleItem\> readers{ set; get; }
~~~    

### DataTxStatus

链上结构化数据相关交易事件回调对象。

#### 属性

##### status

结构化数据上链操作的当前处理状态编码。

    
~~~java    
    public String status { set; get; }
~~~    

##### errorCode

链上执行失败返回的错误代码。

    
~~~java    
    private int errorCode{ set; get; }
~~~    

##### message

链上执行失败返回的信息

    
~~~java    
    private String message{ set; get; }
~~~   

##### txBlockData

链上交易结构化数据。

    
~~~java    
    public DataTxBlockInfo txBlockData{ set; get; }
~~~    

  * DataTxBlockInfo

结构化数据链上信息。

  * 属性

    * dataID

结构化数据链上唯一ID。

    
~~~java    
    private String dataID{ set; get; }
~~~    

  * versionID

结构化数据链上版本ID。

    
~~~java    
    private String versionID{ set; get; }
~~~    

  * txHash

上链交易对应的Hash

    
~~~java    
    private String txHash{ set; get; }
~~~    

  * txExecTimestamp

上链交易被执行的时间

    
~~~java    
    private String txExecTimestamp{ set; get; }
~~~    

  * blockHash

交易所在区块hash。

    
~~~java    
    private String blockHash{ set; get; }
~~~    

  * blockHeight

上链交易所在区块高度。

    
~~~java    
    private long blockHeight{ set; get; }
~~~    

  * blockedTimestamp

上链交易所在区块的生成时间戳

    
~~~java    
    private long currentBlockHeight{ set; get; }
~~~    

  * currentBlockHeight

区块链当前区块高度

    
~~~java    
    private long currentBlockHeight{ set; get; }
~~~    

### DataFetchStatus

链上结构化数据查询事件回调对象。

#### 属性

##### status

结构数据获取的处理状态编码。

    
~~~java    
    public String status { set; get; }
~~~    

状态编码列表：

状态取值 | 描述  
---|---  
FetchSuccess | 结构数据获取成功。  
FetchFailure | 结构数据获取失败。  
  
##### errorCode

错误码编号（具体请查看错误码详情）

    
~~~java    
    private int errorCode{ set; get; }
~~~    

##### message

错误码对应错误解释。

    
~~~java    
    private String message{ set; get; }
~~~    

##### data

链上结构化数据。

    
~~~java    
    public StructData data{ set; get; }
~~~    

  * StructData

链上存储结构化信息。

  * 属性

    * dataID

结构化数据链上唯一ID。

    
~~~java    
    private String dataID{ set; get; }
~~~    

  * versionID

结构化数据链上版本ID。

    
~~~java    
    private String versionID{ set; get; }
~~~    

  * dataContent

结构化数据体。

    
~~~java    
    private String dataContent{ set; get; }
~~~    

  * dataProperty

结构化数据附属属性。

    
~~~java    
    private String dataProperty{ set; get; }
~~~    

  * dataDigest

结构化数据本体指纹。

    
~~~java    
    private String dataDigest{ set; get; }
~~~    

  * delStatus

结构化数据删除状态 1=删除；0=有效。

    
~~~java    
    private int delStatus{ set; get; }
~~~    

  * uploadTime

结构化数据上链保持时间戳。

    
~~~java    
    private long uploadTime{ set; get; }
~~~    

### DataDigestCheckStatus

结构化数据指纹与链上数据指纹一致性校验。

#### 属性

##### status

指纹特征值获取的处理状态编码。

    
~~~java    
    public String status { set; get; }
~~~    

状态编码列表：

状态取值 | 描述  
---|---  
FetchSuccess | 数据指纹特征值获取成功。  
FetchFailure | 数据指纹特征值获取失败。  
  
##### errorCode

错误码编号（具体请查看错误码详情）

    
~~~java    
    private int errorCode{ set; get; }
~~~    

##### message

错误码对应错误解释。

    
~~~java    
    private String message{ set; get; }
~~~    

##### verifyResult

数据是否一致。

    
~~~java    
    private boolean verifyResult{ set; get; }
~~~    

### DataVersionsFetchStatus

链上结构化数据版本信息查询事件回调对象。

#### 属性

##### status

数据版本列表获取的处理状态编码。

    
~~~java    
    public String status { set; get; }
~~~    

状态编码列表：

状态取值 | 描述  
---|---  
FetchSuccess | 数据版本列表获取成功。  
FetchFailure | 数据版本列表获取失败。  
  
##### errorCode

错误码编号（具体请查看错误码详情）

    
~~~java    
    private int errorCode{ set; get; }
~~~    

##### message

错误码对应错误解释。

    
~~~java    
    private String message{ set; get; }
~~~    

##### versions

链上结构化版本数据。

    
~~~java    
    public List\<DataVersionInfo\> versions{ set; get; }
~~~    

  * DataVersionInfo

链上存储结构化数据版本信息。

  * 属性

    * versionID

结构化数据链上唯一版本ID。

    
~~~java    
    private String versionID{ set; get; }
~~~    

  * timestamp

结构化数据上链保存时间戳。

    
~~~java    
    private long timestamp{ set; get; }
~~~    

### DataRightsFetchStatus

获取链上结构化数据权限列表。

#### 属性

##### status

链上结构数据权限列表获取的处理状态编码。

    
~~~java    
    public String status { set; get; }
~~~    

状态编码列表：

状态取值 | 描述  
---|---  
FetchSuccess | 链上结构数据权限列表获取成功。  
FetchFailure | 链上结构数据权限列表获取失败。  
  
##### errorCode

错误码编号（具体请查看错误码详情）

    
~~~java    
    private int errorCode{ set; get; }
~~~    

##### message

错误码对应错误解释。

    
~~~java     
    private String message{ set; get; }
~~~    

##### dataRights

权限信息。

    
~~~java    
    public RightsInfo dataRights{ set; get; }
~~~    

  * RightsInfo

链上结构化数据权限信息。

  * 属性

    * ownerIDs

结构数据所有者。

    
~~~java    
    private List\<String\> ownerIDs{ set; get; }
~~~    

  * sharerIDs

结构数据被分享者。

    
~~~java    
    private List\<String\> sharerIDs{ set; get; }
~~~    

  * readerIDs

结构数据读取者。

    
~~~java    
    private List\<String\> readerIDs{ set; get; }
~~~    

  * readerIDsBySharer

被分享者授权的读取者。

    
~~~java    
    private List\<Readers\> readerIDsBySharer{ set; get; }
~~~    

  * Readers

grantorID 授权人ID

    
~~~java    
    private String grantorID{ set; get; }
~~~    

ReaderIDs 读取者ID


~~~java    
    private List\<String\> readerIDs{ set; get; }
~~~    

### ContractCallStatus

链上合约信息对象。合约事件回调对象。

#### 属性

##### status

合约调用的处理状态编码。

    
~~~java    
    public String status { set; get; }
~~~    

状态编码列表：

状态取值 | 描述  
---|---  
FetchSuccess | 合约调用执行成功。  
FetchFailure | 合约调用执行失败。  
  
##### errorCode

错误码编号（具体请查看错误码详情）

    
~~~java    
    private int errorCode{ set; get; }
~~~    

##### message

错误码对应错误解释。

    
~~~java    
    private String message{ set; get; }
~~~    

##### scHexReturnData

链上合约调用结果。

    
~~~java    
    public ContractTxInfo scHexReturnData{ set; get; }
~~~    

  * ContractTxInfo

链上合约信息。

  * 属性

    * txhash

上链交易对应的Hash。

    
~~~java    
    private String txHash{ set; get; }
~~~    

  * txExecTimestamp

上链交易被执行的时间。

    
~~~java    
    private long txExecTimestamp{ set; get; }
~~~    

  * scResult

合约调用成功后的返回结构数据，返回结构遵循合约定义。

    
~~~java    
    private String scResult{ set; get; }
~~~    

##### scTxBlockInfoTxBlockData

链上合约相关交易块信息。

    
~~~java    
    public TxBlockData scTxBlockInfoTxBlockData{ set; get; }
~~~    

  * TxBlockData

链上合约相关交易块儿信息。

  * 属性

    * blockHash

上链交易所在区块的hash。

    
~~~java    
    private String blockHash{ set; get; }
~~~    

  * currentBlockHeight

区块链当前区块高度。

    
~~~java    
    private long currentBlockHeight{ set; get; }
~~~    

  * blockedTimestamp

上链交易所在区块的生成时间戳

    
~~~java    
    private long currentBlockHeight{ set; get; }
~~~    

  * blockHeight

上链交易所在区块高度。

    
~~~java    
    private long blockHeight{ set; get; }
~~~    

## com.coolawchain.sdk.exceptions

### HttpCodeErrorException

包含链上数据获取返回http状态码不为200。

#### 属性

##### code

返回的异常信息。

    
~~~java    
    public int code { set; get; }
~~~    

### FetchException

包含链上数据获取异常信息的对象。

#### 属性

##### exc

返回的异常信息。

    
~~~java    
    public Exception exc { set; get; }
~~~    

### TxException

包含上链交易处理异常信息的对象。

#### 属性

##### state

上链交易操作中出现异常状态编码。

    
~~~java    
    public String state { set; get; }
~~~    

状态编码列表：

状态取值 | 含义描述  
---|---  
TxSendSuccess | 上链交易发送成功。  
TxSendFailure | 上链交易发送失败。  
TxExecSuccess | 上链交易执行成功。  
TxExecFailure | 上链交易执行失败。  
TxBlockConfirm | 上链交易落块确认。  
TxBlkCfmFailure | 上链交易落块确认失败。  
UploadAccomplish | 文件成功上链保存。  
UploadFailure | 文件上链保存失败。  
  
##### exc

返回的异常信息。

    
~~~java    
    public Exception exc { set; get; }
~~~    

## com.coolawchain.sdk.utils

### CryptoUtil

数字身份信息加解密、签名等相关方法。

#### hexStrToBytes

将十六进制字符转换为字节数组。

    
~~~java    
    public byte[] hexStrToBytes(String hexStr);
~~~    

**示例：**

    
~~~java    
    String ownerPrivateKey = "3161be862236ae966004390908a5facb8f45763e38ce5cfb378e493f91a7873d";
    byte[] byteOwner = CryptoUtil.crypto.hexStrToBytes(ownerPrivateKey);
~~~    

#### genAccountKey

根据私钥（十六进制）生成数字身份信息，包含对应的数字身份标识、公钥。

    
~~~java    
    public static KeyPairs genAccountKey (String privateKey);
~~~    

**示例：**

    
~~~java    
    String ownerPrivateKey = "3161be862236ae966004390908a5facb8f45763e38ce5cfb378e493f91a7873d";
    KeyPairs owner = CryptoUtil.crypto.genAccountKey(ownerPrivateKey );
~~~    

#### signature

使用私钥对数据进行签名并生成签名结果。

    
~~~java    
    public static String signature (String privateKey,String content);
~~~    

**参数**

content String

要进行签名的数据内容。

privateKey String

用于签名的私钥。

**返回**

String

生成的签名结果。

**示例：**

    
~~~java    
    String ownerPrivateKey = "3161be862236ae966004390908a5facb8f45763e38ce5cfb378e493f91a7873d";
    
    String signResult = CryptoUtil.crypto.signature(ownerPrivateKey,"要进行签名的内容");
~~~    

### SM4Util

提供国密SM4相关的方法。

#### generateKey

随机生成一个对称密钥。

    
~~~java    
    public static String generateKey();
~~~    

**返回**

String

生成的对称密钥。

**示例：**

    
~~~java    
    String key = SM4Util.generateKey();
~~~    

#### encrypt

使用对称密钥对原文进行加密。

    
~~~java    
    public static byte[] encrypt(byte[] data,String key);
~~~    

**参数**

data byte[]

需要加密的原文数据。

key String

对称密钥。

**返回**

byte[]

加密后的密文。

**示例：**

    
~~~java    
    String key = "对称密钥";
    byte[] encData = encrypt("你好".getBytes(),key);
~~~    

#### decrypt

使用对称密钥对密文数据进行解密。

    
~~~java    
    public static byte[] decrypt(byte[] data, String key);
~~~    

**参数**

data byte[]

需要解密的密文数据。

key String

对称密钥。

**返回**

byte[]

解密后的原文。

**示例：**

    
~~~java    
    byte[] encData = new byte[0];
    String key = "对称密钥";
    byte[] decDatas = decrypt(encData,key);
~~~