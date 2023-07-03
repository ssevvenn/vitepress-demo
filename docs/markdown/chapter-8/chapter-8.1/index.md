---
prev: false
next: false
---
# CoolawChain Java SDK参考

## com.coolawchain.sdk.file

### FileUpload

用于进行文件上链保存的操作对象。

#### 构造函数

##### FileUpload (Frontend, String)

    
~~~java    
    public FileUpload (Frontend frontendServer, String businessDomainID);
~~~    

**参数**

frontendServer Frontend

前置节点服务器对象。

businessDomainID String

设置要访问的业务域标识。初始化时可以为空，后续可通过bizDomain属性赋值。businessDomainID在提交上链交易前必须赋值。

示例：

    
~~~java    
    //初始化前置节点对象（即链上操作发送对象）
    //--业务系统数字身份标识
    String systemID = "0d64ad368ebc37ddb80424376408cb7bb88ff328";
    //--业务系统数字身份私钥
    String systemPrivateKey = "8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc";
    //--前置节点调用接口地址
    String frontendUrl = "http://127.1.1.1:9000/fbs/";
    //创建前置节点对象
    Frontend oFrontend = new Frontend(systemID, systemPrivateKey, frontendUrl);
    //设置要访问的业务域标识
    String businessDomainID = "51eb48b51eb48b2896288021b73bac878c48b289";
    
    FileUpload oFileUpload = new FileUpload(oFrontend, businessDomainID);
~~~    

##### FileUpload ()

构造一个FileUpload对象。后续需赋值要访问前置节点对象和要访问的业务域。

    
~~~java    
    public FileUpload ();
~~~    

#### 属性

##### frontend

设置要访问的前置节点服务器对象。

    
~~~java    
    public Frontend frontend { set; get; }
~~~    

##### bizDomain

设置要保存文件的链上业务域的唯一标识。

    
~~~java    
    public String bizDomain { set; get; }
~~~    

##### file

设置上链保存的文件的文件对象。

    
~~~java    
    public File file { set; get; }
~~~    

示例：

    
~~~java    
    //待上传的文件本体对应的文件对象
    File oLocalFile = new File("/storage/申请表.doc");
    oFileUpload.file = oLocalFile;
~~~    

##### fileName

设置上链保存的文件的文件名称。

    
~~~java    
    public String fileName { set; get; }
~~~    

##### fileSuffix

设置上链保存的文件的文件扩展名。如："doc"，"pdf"，"mp3"等。

    
~~~java    
    public String fileSuffix { set; get; }
~~~    

##### fileDescription

设置文件在链上保存时一并保存的文件描述信息。fileDescription的信息将被区块链加密保存。

如果想要对链上已保存的fileDescription进行清空处理，则此属性需设置NULL。

    
~~~java    
    public String fileDescription { set; get; }
~~~    

##### fileProperty

设置文件在链上保存时一并保存的附属属性信息。附属属性建议使用JSON或XML等格式构建，然后序列化成String的类型进行存储。fileProperty的信息将被区块链加密保存。

如果想要对链上已保存的fileProperty进行清空处理，则此属性需设置NULL。

    
~~~java    
    public String fileProperty { set; get; }
~~~    

##### fileCopy

设置文件在链上保存时文件副本数量。文件副本是指文件本体在区块链节点网络中保存同时保存多少份拷贝。

    
~~~java    
    public int fileCopy { set; get; }
~~~    

##### fileSlice

设置文件在链上保存时文件切片数量。为了提高文件上链的保存，以及区块链中文件自我修复的效率，同时确保链上保存文件的安全性和隐私性，文件被区块链系统切分成若干碎片，然后随机分散保存于区块链节点网络中。

    
~~~java    
    public int fileSlice { set; get; }
~~~    

##### ownerID

设置提交上链交易的文件所有者数字身份标识，必须是owners中的一个数字身份标识。

    
~~~java    
    public String ownerID { set; get; }
~~~    

##### owners

设置在链上保存的文件所有者的数字身份标识列表。文件所有者有权添加和删除文件分享者列表和文件读取者列表中的数字身份标识。

    
~~~java    
    public String[] owners { set; get; }
~~~    

示例：

    
~~~java    
    String[] ownerIDs = {"e51eb48b57bee72896288021bcfc78c0bac87374",
    "8962857bee7b48b28021b7374cfc78c0bac8e51e",
    "374cfc78c0ba57bee78b2896288021b7c8 e51eb4"
    };
    
    oFileUpload.owners = ownerIDs;
~~~    

##### sharers

设置要授予文件分享权限的数字身份标识列表。文件分享者有权添加文件读取者和删除自己添加的读取者数字身份标识。可以后续通过"文件授权"链上操作进行授权（FileAuthorise）。

如果fileID属性设置了已保存于链上的文件链上ID，此属性区块链做无效处理。即文件更新时，不会进行文件分享权限更新处理。

    
~~~java    
    public String[] sharers { set; get; }
~~~    

**示例：**

    
~~~java    
    //设置要授予文件分享权限的数字身份标识列表
    String[] sharerIDs = {"e51eb48b57bee72896288021bcfc78c0bac87374",
    "8962857bee7b48b28021b7374cfc78c0bac8e51e",
    "374cfc78c0ba57bee78b2896288021b7c8 e51eb4"
    };
    oFileUpload.sharers = sahrerIDs;
~~~    

##### readers

设置要授予文件读取权限的数字身份标识列表。可以后续通过"文件授权"链上操作进行授权（FileAuthorise）。

如果fileID属性设置了已保存于链上的文件链上ID，此属性区块链做无效处理。即文件更新时，不会进行文件读取权限更新处理。

    
~~~java    
    public String[] readers { set; get; }
~~~    

**示例：**

    
~~~java    
    //设置要授予文件读取权限的数字身份标识列表
    String[] readerIDs = {"e51eb48b57bee72896288021bcfc78c0bac87374",
    "8962857bee7b48b28021b7374cfc78c0bac8e51e",
    "374cfc78c0ba57bee78b2896288021b7c8 e51eb4"
    };
    oFileUpload.readers = readerIDs;
~~~    

##### eventContext

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。

    
~~~java    
    public Object eventContext { set; get; }
~~~    

示例：

    
~~~java    
    //上链保存文件在链外应用系统数据库中的唯一标识
    String fileIDFromCaller = "57bee7e51eb48b2896288021b7374cfc78c0bac8";
    oFileUpload.eventContext =fileIDFromCaller;
~~~    

#### 方法

##### submit

向指定的前置节点服务器提交文件上链交易请求，开始进行文件上链保存操作。调用此方法，将会通过onTxBlockConfirm、onTxSendSuccess等事件返回链上处理结果。

    
~~~java    
    public void submit(String ownerPrivateKey);
~~~    

**参数**

ownerPrivateKey String

设置进行当前上链保存操作的文件所有者的数字身份私钥，ownerID对应的私钥。私钥用于对文件上链交易进行签名确权。

**示例：**

    
~~~java    
    //--文件所有者数字身份私钥
    String ownerPrivateKey = "8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc";
    //进行文件元数据和本体上链操作提交
    oFileUpload.submit (ownerPrivateKey);
~~~    

##### createTxBody

和前置节点进行交互，生成文件上链操作对应的上链交易体，以便使用ownerID对应的私钥对上链交易体进行确权签名。

    
~~~java    
    public String createTxBody();
~~~    

**返回**

String

序列化的文件上链交易体。

**示例：**

    
~~~java    
    //生成文件上链交易体
    String fileUploadTxBody= oFileUpload.createTxBody();
    //用文件所有者数字身份对文件上链交易体进行签名
    String ownerPrivateKey = "3161be862236ae966004390908a5facb8f45763e38ce5cfb378e493f91a7873d";
    
    //--对文件上链交易体进行签名，并生成签名结果
    String txSign = CryptoUtil.crypto.signature(fileUploadTxBody, ownerPrivateKey);
~~~    

##### submitTxBody

使用文件上链交易体原文和ownerID中数字身份对上链交易体的签名结果信息，向指定的前置节点服务器提交文件上链交易请求，开始进行文件上链保存操作。调用此方法，onTxBlockConfirm、onTxSendSuccess等事件不会被触发。

    
~~~java    
    public void submitTxBody(String fileUploadTxBody, String txSign);
~~~    

**参数**

fileUploadTxBody String

文件上链交易体原文

txSign String

文件上链交易体签名结果信息

**示例：**

    
~~~java    
    //【程序A】准备文件保存上链交易体
    FileUpload oPrepareFileUploadTxBody = new FileUpload();
    File oLocalFile = new File("/storage/申请表.doc");
    oPrepareFileUploadTxBody.file = oLocalFile; 
    oPrepareFileUploadTxBody.ownerID = "0d64ad368ebc37ddb80424376408cb7bb88ff328"; 
    String[] ownersList = {"0d64ad368ebc37ddb80424376408cb7bb88ff328"};
    oPrepareFileUploadTxBody.owners = ownersList;
    oPrepareFileUploadTxBody.fileCopy = 3;
    oPrepareFileUploadTxBody.fileSlice = 5;
    String fileUploadTxBody = oPrepareFileUploadTxBody.createTxBody();
    
    //【程序B】在外部使用数字身份签名应用进行fileUploadTxBody签名
    String ownerPrivateKey = "8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc";
    String txSign = CryptoUtil.crypto.signature(fileUploadTxBody, ownerPrivateKey);
    
    //【程序A】提交文件上链交易，并跟踪上传状态
    FileUpload oFiledUpload = new FileUpload (frontendServer, businessDomainID);
    File oLocalFile = new File("/storage/申请表.doc");
    oFileUpload.file = oLocalFile; 
    oFileUpload.eventContext =fileIDFromCaller;
    oFiledUpload.submitTxBody (fileUploadTxBody, txSign);
~~~    

#### 事件

##### onTxBlockConfirm

此事件在文件元数据成功上链保存，并获得落块确认时发生。此时文件本体仍在上链处理中。

    
~~~java    
    public void onTxBlockConfirm(FileTxStatus fUplStatus, Object context);
~~~    

参数

fUplStatus FileTxStatus

包含文件上链操作的当前处理状态信息的对象。

fUplStatus中将包含如下返回信息，详细解释请参看FileTxStatus对象相关描述：

|
status，errorCode，message，fileID，versionID，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight
|

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java    
    FileUpload oFileUpload = new FileUpload() {
        @Override
        public void onTxBlockConfirm(FileTxStatus fUplStatus, Object context) {
           //事件触发条件：文件元数据成功上链保存，并获得落块确认。
           //此时文件本体仍在上链处理中。
           FileTxBlockInfo oFileTxBlockInfo = fUplStatus.txBlockData;
           System.out.println("文件链上ID =" + oFileTxBlockInfo.fileID);
           String fileIDFromCaller = context;
           System.out.println("链外应用系统调用端的唯一标识=" + fileIDFromCaller);
        }
    }
~~~    

##### onTxBlkCfmFailure

此事件在因落块确认失败，文件元数据上链保存被链回滚时发生。文件上链交易请求需重新提交。

    
~~~java    
    public void onTxBlockCfmFailure(FileTxStatus fUplStatus, Object context);
~~~    

参数

fUplStatus FileTxStatus

包含文件上链操作的当前处理状态信息的对象。

fUplStatus中将包含如下返回信息，详细解释请参看FileTxStatus对象相关描述：

|
status，errorCode，message，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight
|

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java    
    FileUpload oFileUpload = new FileUpload() {
        @Override
        public void onTxBlockCfmFailure(FileTxStatus fUplStatus, Object context) {
           //事件触发条件：文件上链交易落块确认失败，上链保存的文件元数据被链回滚。
           //事件触发后，会返回错误信息。文件上链交易请求需重新提交。
           FileTxBlockInfo oFileTxBlockInfo = fUplStatus.txBlockData;
           System.out.println("文件上链交易Hash =" + oFileTxBlockInfo.txHash);
           System.out.println("文件上链交易落块确认失败的返回结果=" + fUplStatus.message);
           String fileIDFromCaller = context;
           System.out.println("链外应用系统调用端的唯一标识=" + fileIDFromCaller);
        }
    }
~~~    

##### onTxSendSuccess

此事件在文件上链交易被节点确认接收时发生。此时文件上链交易处于全网同步，并等待执行处理的状态。

    
~~~java    
    public void onTxSendSuccess(FileTxStatus fUplStatus, Object context);
~~~    

参数

fUplStatus FileTxStatus

包含文件上链操作的当前处理状态信息的对象。

fUplStatus中将包含如下返回信息，详细解释请参看FileTxStatus对象相关描述：

| status，errorCode，message，txHash |

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java    
    FileUpload oFileUpload = new FileUpload() {
        @Override
        public void onTxSendSuccess(FileTxStatus fUplStatus, Object context) {
           //事件触发条件：文件上链交易发送成功，等待区块链执行处理。 
           FileTxBlockInfo oFileTxBlockInfo = fUplStatus.txBlockData;
           System.out.println("文件上链交易Hash =" + oFileTxBlockInfo.txHash);
        }
    }
~~~    

##### onTxSendFailure

此事件在节点接收文件上链交易失败时发生。文件上链交易请求需重新提交。

    
~~~java    
    public void onTxSendFailure(FileTxStatus fUplStatus, Object context);
~~~    

参数

fUplStatus FileTxStatus

包含文件上链操作的当前处理状态信息的对象。

fUplStatus中将包含如下返回信息，详细解释请参看FileTxStatus对象相关描述：

| errorCode，message |

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java    
    FileUpload oFileUpload = new FileUpload() {
        @Override
        public void onTxSendFailure(FileTxStatus fUplStatus, Object context) {
           //事件触发条件：文件上链交易发送失败。
           //事件触发后，会返回错误信息。
           System.out.println("文件上链交易发送失败的返回状态=" + fUplStatus.status);
           System.out.println("文件上链交易发送失败的返回结果=" + fUplStatus.message);
        }
    }
~~~    

##### onTxExecSuccess

此事件在文件上链交易执行成功，文件元数据上链保存，等待落块确认时发生。

    
~~~java    
    public void onTxExecSuccess(FileTxStatus fUplStatus, Object context);
~~~    

参数

fUplStatus FileTxStatus

包含文件上链操作的当前处理状态信息的对象。

fUplStatus中将包含如下返回信息，详细解释请参看FileTxStatus对象相关描述：

|
status，errorCode，message，fileID，versionID，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight
|

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java    
    FileUpload oFileUpload = new FileUpload() {
        @Override
        public void onTxExecSuccess(FileTxStatus fUplStatus, Object context) {
           //事件触发条件：文件上链交易执行成功，文件元数据上链保存，等待落块确认。
           //此时文件本体仍在上链处理中。
           FileTxBlockInfo oFileTxBlockInfo = fUplStatus.txBlockData;
           String fileIDFromCaller = context;
           System.out.println("链外应用系统调用端的唯一标识=" + fileIDFromCaller);
           System.out.println("文件链上ID =" + oFileTxBlockInfo.fileID);
           System.out.println("文件版本ID=" + oFileTxBlockInfo.versionID);
           System.out.println("文件上链交易Hash=" + oFileTxBlockInfo.txHash);
           System.out.println("交易执行时间戳=" + oFileTxBlockInfo.txExecTimestamp.toString());
           System.out.println("交易所在区块hash=" + oFileTxBlockInfo.blockHash);
           System.out.println("交易所在区块生成时间戳" + oFileTxBlockInfo.blockedTimestamp.toString());
           System.out.println("交易所在区块高度=" + oFileTxBlockInfo.blockHeight);
        }
    }
~~~    

##### onTxExecFailure

此事件在文件上链交易执行失败，文件元数据和文件本体均未上链保存时发生。事件触发后会返回错误信息。文件上链交易请求需重新提交。

    
~~~java    
    public void onTxExecFailure(FileTxStatus fUplStatus, Object context);
~~~    

参数

fUplStatus FileTxStatus

包含文件上链操作的当前处理状态信息的对象。

fUplStatus中将包含如下返回信息，详细解释请参看FileTxStatus对象相关描述：

|
status，errorCode，message，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight
|

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java    
    FileUpload oFileUpload = new FileUpload() {
        @Override
        public void onTxExecFailure(FileTxStatus fUplStatus, Object context) {
           //事件触发条件：文件上链交易执行失败，文件元数据和文件本体均未上链保存。
           //事件触发后，会返回错误信息。文件上链交易请求需重新提交。
           FileTxBlockInfo oFileTxBlockInfo = fUplStatus.txBlockData;
           String fileIDFromCaller = context;
           System.out.println("链外应用系统调用端的唯一标识=" + fileIDFromCaller);
           System.out.println("文件上链交易Hash =" + oFileTxBlockInfo.txHash);
           System.out.println("交易所在区块hash=" + oFileTxBlockInfo.blockHash);
           System.out.println("链上执行失败的返回结果=" + fUplStatus.message);
        }
    }
~~~    

##### onUploadAccomplish

此为事件在文件上链操作处理彻底完成，文件元数据和文件本体均成功上链保存时发生。

    
~~~java    
    public void onUploadAccomplish(FileTxStatus fUplStatus, Object context);
~~~    

参数

fUplStatus FileTxStatus

包含文件上链操作的当前处理状态信息的对象。

fUplStatus中将包含如下返回信息，详细解释请参看FileTxStatus对象相关描述：

|
status，errorCode，message，fileID，versionID，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight
|

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java    
    FileUpload oFileUpload = new FileUpload() {
        @Override
        public void onUploadAccomplish(FileTxStatus fUplStatus, Object context) {
           //事件触发条件：在文件上链操作处理彻底完成，文件元数据和文件本体均成功上链保存。
           FileTxBlockInfo oFileTxBlockInfo = fUplStatus.txBlockData;
           String fileIDFromCaller = context;
           System.out.println("链外应用系统调用端的唯一标识=" + fileIDFromCaller);
           System.out.println("文件链上ID =" + oFileTxBlockInfo.fileID);
           System.out.println("文件版本ID=" + oFileTxBlockInfo.versionID);
           System.out.println("文件上链交易Hash=" + oFileTxBlockInfo.txHash);
           System.out.println("交易所在区块hash=" + oFileTxBlockInfo.blockHash);
           System.out.println("文件名=" + this.fileName);
           System.out.println("文件描述=" + this.fileDescription); 
           System.out.println("文件附属属性=" + this.fileProperty); 
        }
    }
~~~    

##### onUploadFailure

此为事件在文件本体上链保存因超过重复尝试次数而超时失败时发生。文件上链交易请求需重新提交。

    
~~~java    
    public void onUploadFailure (FileTxStatus fUplStatus, Object context);
~~~    

**参数**

fUplStatus FileTxStatus

包含文件上链操作的当前处理状态信息的对象。

fUplStatus中将包含如下返回信息，详细解释请参看FileTxStatus对象相关描述：

|
status，errorCode，message，fileID，versionID，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight
|

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

**示例：**

    
~~~java    
    FileUpload oFileUpload = new FileUpload() {
        @Override
        public void onUploadFailure (FileTxStatus fUplStatus, Object context) {
           //事件触发条件：文件本体上链保存因超过重复尝试次数而超时失败，文件上链交易请求需重新提交。
           FileTxBlockInfo oFileTxBlockInfo = fUplStatus.txBlockData;
           String fileIDFromCaller = context;
           System.out.println("链外应用系统调用端的唯一标识=" + fileIDFromCaller);
           System.out.println("文件链上ID =" + oFileTxBlockInfo.fileID);
           System.out.println("链上执行失败的返回结果=" + fUplStatus.message);
        }
    }
~~~    

##### onError

此为事件在FileUpload调用出现异常时发生。事件触发后返回异常信息。

    
~~~java    
    public void onError(TxException e, Object context);
~~~    

示例：

    
~~~java    
    FileUpload oFileUpload = new FileUpload() {
        @Override
        public void onError(TxException e, Object context) {
           //事件触发条件：FileUpload调用出现异常，并返回异常信息。
           String fileIDFromCaller = context;
           System.out.println("链外应用系统调用端的唯一标识=" + fileIDFromCaller);
           System.out.println("异常状态描述=" + e.state);
           System.out.println("异常信息=" + e.exc);
        }
    }
~~~    

#### FileTxStatus.status状态编码

状态编码列表：

状态取值 | 描述 | 备注  
---|---|---  
TxSendSuccess | 上链交易发送成功。 | 节点确认接收文件上链交易请求，等待区块链执行处理。  
TxSendFailure | 上链交易发送失败。 | 节点接收文件上链交易请求失败，文件上链交易请求需重新提交。  
TxExecSuccess | 上链交易执行成功。 | 文件上链交易执行成功，文件元数据上链保存，等待落块确认。文件本体仍在上链处理中。  
TxExecFailure | 上链交易执行失败。 | 文件上链交易执行失败，文件元数据和文件本体均未上链保存。文件上链交易请求需重新提交。  
TxBlockConfirm | 上链交易落块确认。 | 文件元数据成功上链保存，并获得落块确认，文件本体仍在上链处理中。  
TxBlkCfmFailure | 上链交易落块确认失败。 | 因落块确认失败，上链保存的文件元数据被链回滚。文件上链交易请求需重新提交。  
UploadAccomplish | 文件成功上链保存。 | 文件保存链上操作处理彻底完成，文件元数据和文件本体均成功上链保存。  
UploadFailure | 文件上链保存失败。 | 文件本体上链保存因超过重复尝试次数而超时失败，文件上链交易请求需重新提交。  
  
### FileModify

用于进行文件更新的操作对象。

#### 构造函数

##### FileModify (Frontend, String)

    
~~~java    
    public FileModify (Frontend frontendServer, String businessDomainID);
~~~    

**参数**

frontendServer Frontend

前置节点服务器对象。

businessDomainID String

设置要访问的业务域标识。初始化时可以为空，后续可通过bizDomain属性赋值。businessDomainID在提交上链交易前必须赋值。

示例：

    
~~~java    
    //初始化前置节点对象（即链上操作发送对象）
    //--业务系统数字身份标识
    String systemID = "0d64ad368ebc37ddb80424376408cb7bb88ff328";
    //--业务系统数字身份私钥
    String systemPrivateKey = "8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc";
    //--前置节点调用接口地址
    String frontendUrl = "http://127.1.1.1:9000/fbs/";
    //创建前置节点对象
    Frontend oFrontend = new Frontend(systemID, systemPrivateKey, frontendUrl);
    //设置要访问的业务域标识
    String businessDomainID = "51eb48b51eb48b2896288021b73bac878c48b289";
    
    FileModify oFileModify = new FileModify(oFrontend, businessDomainID);
~~~    

##### FileModify ()

构造一个FileModify对象。后续需赋值要访问前置节点对象和要访问的业务域。

    
~~~java    
    public FileModify ();
~~~    

|-----------------------|

#### 属性

##### frontend

设置要访问的前置节点服务器对象。

    
~~~java    
    public Frontend frontend { set; get; }
~~~    

##### bizDomain

设置要更新文件的链上业务域的唯一标识。

    
~~~java    
    public String bizDomain { set; get; }
~~~    

##### fileID

设置要进行更新的链上文件的文件链上ID。

    
~~~java    
    public String fileID { set; get; }
~~~    

##### File

设置上链更新的新版本文件对应的文件对象。

    
~~~java    
    public File file { set; get; }
~~~    

示例：

    
~~~java    
    //待上传的新版本文件本体对应的文件对象
    File oLocalFile = new File("/storage/申请表.doc");
    oFileModify.file = oLocalFile;
~~~    

##### fileName

设置要更新的文件名称。

    
~~~java    
    public String fileName { set; get; }
~~~    

##### fileSuffix

设置要更新的文件扩展名。如："doc"，"pdf"，"mp3"等。

    
~~~java    
    public String fileSuffix { set; get; }
~~~    

##### fileDescription

设置要更新的文件描述信息。fileDescription的信息将被区块链加密保存，只有文件所有者和拥有文件读取权限方可获得相应的明文信息。

如果想要对链上已保存的fileDescription进行清空处理，则此属性需设置NULL。

    
~~~java    
    public String fileDescription { set; get; }
~~~    

##### fileProperty

设置要更新的文件附属属性信息。附属属性建议使用JSON或XML等格式构建，然后序列化成String的类型进行存储。fileProperty的信息将被区块链加密保存，只有文件所有者和拥有文件读取权限方可获得相应的明文信息。

如果想要对链上已保存的fileProperty进行清空处理，则此属性需设置NULL。

    
~~~java    
    public String fileProperty { set; get; }
~~~    

##### fileCopy

设置要更新的文件本体在链上保存时文件副本数量。文件副本是指文件本体在区块链节点网络中保存同时保存多少份拷贝。

    
~~~java    
    public int fileCopy { set; get; }
~~~    

##### fileSlice

设置要更新的文件本体在链上保存时文件切片数量。为了提高文件更新上链的保存，以及区块链中文件自我修复的效率，同时确保链上保存文件的安全性和隐私性，文件被区块链系统切分成若干碎片，然后随机分散保存于区块链节点网络中。

    
~~~java    
    public int fileSlice { set; get; }
    

##### ownerID

设置提交上链交易的文件所有者数字身份标识，必须是owners中的一个数字身份标识。

    
~~~java    
    public String ownerID { set; get; }
~~~    

##### eventContext

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。

    
~~~java    
    public Object eventContext { set; get; }
~~~    

示例：

    
~~~java    
    //上链更新文件在链外应用系统数据库中的唯一标识
    String fileIDFromCaller = "57bee7e51eb48b2896288021b7374cfc78c0bac8";
    oFileModify.eventContext =fileIDFromCaller;
~~~    

#### 方法

##### submit

向指定的前置节点服务器提交文件更新上链交易请求，开始进行文件更新上链操作。调用此方法，将会通过onTxBlockConfirm、onTxSendSuccess等事件返回链上处理结果。

    
~~~java    
    public void submit(String ownerPrivateKey);
~~~    

**参数**

ownerPrivateKey String

进行文件更新的所有者的数字身份私钥，ownerID对应的私钥。私钥用于对文件更新上链交易进行签名确权。

**示例：**

    
~~~java    
    //--链上文件所有者数字身份私钥
    String ownerPrivateKey = "8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc";
    //进行文件元数据和本体上链更新操作提交
    oFileModify.submit (ownerPrivateKey);
~~~

##### createTxBody

和前置节点进行交互，生成文件更新操作对应的上链交易体，以便使用ownerID对应的私钥对上链交易体进行确权签名。

    
~~~java    
    public String createTxBody();
~~~    

**返回**

String

序列化的文件更新上链交易体。

**示例：**

    
~~~java    
    //生成文件更新上链交易体
    String fileModifyTxBody= oFileModify.createTxBody();
    //用文件所有者数字身份对文件更新上链交易体进行签名
    String ownerPrivateKey = "3161be862236ae966004390908a5facb8f45763e38ce5cfb378e493f91a7873d";
    
    //--对文件更新上链交易体进行签名，并生成签名结果
    String txSign = CryptoUtil.crypto.signature(fileModifyTxBody, ownerPrivateKey);
~~~    

##### submitTxBody

使用文件更新上链交易体原文和ownerID中数字身份对上链交易体的签名结果信息，向指定的前置节点服务器提交文件更新上链交易请求，开始进行文件更新上链操作。调用此方法，onTxBlockConfirm、onTxSendSuccess等事件不会被触发。

    
~~~java    
    public void submitTxBody(String fileModifyTxBody, String txSign);
~~~    

**参数**

fileModifyTxBody String

文件更新上链交易体原文

txSign String

文件更新上链交易体签名结果信息

**示例：**

    
~~~java    
    //【程序A】准备文件更新上链交易体
    FileModify oPrepareFileModifyTxBody = new FileModify();
    File oLocalFile = new File("/storage/申请表.doc");
    oPrepareFileModifyTxBody.file = oLocalFile; 
    oPrepareFileModifyTxBody.SenderID = "0d64ad368ebc37ddb80424376408cb7bb88ff328"; 
    oPrepareFileModifyTxBody.fileCopy = 3;
    oPrepareFileModifyTxBody.fileSlice = 5;
    String fileModifyTxBody = oPrepareFileModifyTxBody.createTxBody();
    
    //【程序B】在外部使用数字身份签名应用进行fileModifyTxBody签名
    String ownerPrivateKey = "3161be862236ae966004390908a5facb8f45763e38ce5cfb378e493f91a7873d";
    String txSign = CryptoUtil.crypto.signature(fileModifyTxBody, ownerPrivateKey);
    
    //【程序A】提交文件更新上链交易，并跟踪上传状态
    FileModify oFileModify = new FileModify (frontendServer, businessDomainID);
    File oLocalFile = new File("/storage/申请表.doc");
    oFileModify.file = oLocalFile; 
    oFileModify.eventContext =fileIDFromCaller;
    oFileModify.submitTxBody (fileModifyTxBody, txSign);
~~~    

#### 事件

##### onTxBlockConfirm

此事件在文件元数据成功上链保存，并获得落块确认时发生。此时文件本体仍在上链处理中。

    
~~~java    
    public void onTxBlockConfirm(FileTxStatus fModifyStatus, Object context);
~~~    

参数

fModifyStatus FileModifyStatus

包含文件更新操作的当前处理状态信息的对象。

fModifyStatus中将包含如下返回信息，详细解释请参看FileModifyStatus对象相关描述：

|
status，errorCode，message，fileID，versionID，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight
|

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java    
    FileModify oFileModify = new FileModify() {
        @Override
        public void onTxBlockConfirm(FileTxStatus fModifyStatus, Object context) {
           //事件触发条件：文件元数据成功上链保存，并获得落块确认。
           //此时文件本体仍在上链处理中。
           FileTxBlockInfo oFileTxBlockInfo = fModifyStatus.txBlockData;
           System.out.println("文件链上ID =" + oFileTxBlockInfo.fileID);
           String fileIDFromCaller = context;
           System.out.println("链外应用系统调用端的唯一标识=" + fileIDFromCaller);
        }
    }
~~~    

##### onTxBlkCfmFailure

此事件在因落块确认失败，文件元数据上链保存被链回滚时发生。文件更新上链交易请求需重新提交。

    
~~~java    
    public void onTxBlockCfmFailure(FileTxStatus fModifyStatus, Object context);
~~~    

参数

fModifyStatus FileModifyStatus

包含文件更新操作的当前处理状态信息的对象。

fModifyStatus中将包含如下返回信息，详细解释请参看FileModifyStatus对象相关描述：

|
status，errorCode，message，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight
|

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java    
    FileModify oFileModify = new FileModify() {
        @Override
        public void onTxBlockCfmFailure(FileTxStatus fModifyStatus, Object context) {
           //事件触发条件：文件更新上链交易落块确认失败，上链更新的文件元数据被链回滚。
           //事件触发后，会返回错误信息。文件更新上链交易请求需重新提交。
           FileTxBlockInfo oFileTxBlockInfo = fModifyStatus.txBlockData;
           System.out.println("文件更新上链交易Hash =" + oFileTxBlockInfo.txHash);
           System.out.println("文件更新上链交易落块确认失败的返回结果=" + fModifyStatus.message);
           String fileIDFromCaller = context;
           System.out.println("链外应用系统调用端的唯一标识=" + fileIDFromCaller);
        }
    }
~~~    

##### onTxSendSuccess

此事件在文件更新上链交易被节点确认接收时发生。此时文件更新上链交易处于全网同步，并等待执行处理的状态。

    
~~~java    
    public void onTxSendSuccess(FileTxStatus fModifyStatus, Object context);
~~~    

参数

fModifyStatus FileModifyStatus

包含文件更新操作的当前处理状态信息的对象。

fModifyStatus中将包含如下返回信息，详细解释请参看FileModifyStatus对象相关描述：

| status，errorCode，message，txHash |

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java    
    FileModify oFileModify = new FileModify() {
        @Override
        public void onTxSendSuccess(FileTxStatus fModifyStatus, Object context) {
           //事件触发条件：文件更新上链交易发送成功，等待区块链执行处理。 
           FileTxBlockInfo oFileTxBlockInfo = fModifyStatus.txBlockData;
           System.out.println("文件更新上链交易Hash =" + oFileTxBlockInfo.txHash);
        }
    }
~~~    

##### onTxSendFailure

此事件在节点接收文件更新上链交易失败时发生。文件更新上链交易请求需重新提交。

    
~~~java    
    public void onTxSendFailure(FileTxStatus fModifyStatus, Object context);
~~~    

参数

fModifyStatus FileModifyStatus

包含文件更新操作的当前处理状态信息的对象。

fModifyStatus中将包含如下返回信息，详细解释请参看FileModifyStatus对象相关描述：

| errorCode，message |

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java    
    FileModify oFileModify = new FileModify() {
        @Override
        public void onTxSendFailure(FileTxStatus fModifyStatus, Object context) {
           //事件触发条件：文件更新上链交易发送失败。
           //事件触发后，会返回错误信息。
           System.out.println("文件更新上链交易发送失败的返回状态=" + fModifyStatus.status);
           System.out.println("文件更新上链交易发送失败的返回结果=" + fModifyStatus.message);
        }
    }
~~~    

##### onTxExecSuccess

此事件在文件更新上链交易执行成功，文件元数据上链保存，等待落块确认时发生。

    
~~~java    
    public void onTxExecSuccess(FileTxStatus fModifyStatus, Object context);
~~~    

参数

fModifyStatus FileModifyStatus

包含文件更新操作的当前处理状态信息的对象。

fModifyStatus中将包含如下返回信息，详细解释请参看FileModifyStatus对象相关描述：

|
status，errorCode，message，fileID，versionID，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight
|

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java    
    FileModify oFileModify = new FileModify() {
        @Override
        public void onTxExecSuccess(FileTxStatus fModifyStatus, Object context) {
           //事件触发条件：文件更新上链交易执行成功，文件元数据上链保存，等待落块确认。
           //此时文件本体仍在上链处理中。
           FileTxBlockInfo oFileTxBlockInfo = fModifyStatus.txBlockData;
           String fileIDFromCaller = context;
           System.out.println("链外应用系统调用端的唯一标识=" + fileIDFromCaller);
           System.out.println("文件链上ID =" + oFileTxBlockInfo.fileID);
           System.out.println("文件版本ID=" + oFileTxBlockInfo.versionID);
           System.out.println("文件更新上链交易Hash=" + oFileTxBlockInfo.txHash);
           System.out.println("交易执行时间戳=" + oFileTxBlockInfo.txExecTimestamp.toString());
           System.out.println("交易所在区块hash=" + oFileTxBlockInfo.blockHash);
           System.out.println("交易所在区块生成时间戳" + oFileTxBlockInfo.blockedTimestamp.toString());
           System.out.println("交易所在区块高度=" + oFileTxBlockInfo.blockHeight);
        }
    }
~~~    

##### onTxExecFailure

此事件在文件更新上链交易执行失败，文件元数据和文件本体均未上链保存时发生。事件触发后会返回错误信息。文件更新上链交易请求需重新提交。

    
~~~java    
    public void onTxExecFailure(FileTxStatus fModifyStatus, Object context);
~~~    

参数

fModifyStatus FileModifyStatus

包含文件更新上链操作的当前处理状态信息的对象。

fModifyStatus中将包含如下返回信息，详细解释请参看FileModifyStatus对象相关描述：

|
status，errorCode，message，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight
|

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java    
    FileModify oFileModify = new FileModify() {
        @Override
        public void onTxExecFailure(FileTxStatus fModifyStatus, Object context) {
           //事件触发条件：文件更新上链交易执行失败，文件元数据和文件本体均未上链保存。
           //事件触发后，会返回错误信息。文件更新上链交易请求需重新提交。
           FileTxBlockInfo oFileTxBlockInfo = fModifyStatus.txBlockData;
           String fileIDFromCaller = context;
           System.out.println("链外应用系统调用端的唯一标识=" + fileIDFromCaller);
           System.out.println("文件更新上链交易Hash =" + oFileTxBlockInfo.txHash);
           System.out.println("交易所在区块hash=" + oFileTxBlockInfo.blockHash);
           System.out.println("链上执行失败的返回结果=" + fModifyStatus.message);
        }
    }
~~~    

##### onUploadAccomplish

此为事件在文件更新操作处理彻底完成，文件元数据和文件本体均成功上链保存时发生。

    
~~~java    
    public void onUploadAccomplish(FileTxStatus fModifyStatus, Object context);
~~~    

参数

fModifyStatus FileModifyStatus

包含文件更新操作的当前处理状态信息的对象。

fModifyStatus中将包含如下返回信息，详细解释请参看FileModifyStatus对象相关描述：

|
status，errorCode，message，fileID，versionID，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight
|

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java    
    FileModify oFileModify = new FileModify() {
        @Override
        public void onUploadAccomplish(FileTxStatus fModifyStatus, Object context) {
           //事件触发条件：在文件更新操作处理彻底完成，文件元数据和文件本体均成功上链保存。
           FileTxBlockInfo oFileTxBlockInfo = fModifyStatus.txBlockData;
           String fileIDFromCaller = context;
           System.out.println("链外应用系统调用端的唯一标识=" + fileIDFromCaller);
           System.out.println("文件链上ID =" + oFileTxBlockInfo.fileID);
           System.out.println("文件版本ID=" + oFileTxBlockInfo.versionID);
           System.out.println("文件更新上链交易Hash=" + oFileTxBlockInfo.txHash);
           System.out.println("交易所在区块hash=" + oFileTxBlockInfo.blockHash);
           System.out.println("文件名=" + this.fileName);
           System.out.println("文件描述=" + this.fileDescription); 
           System.out.println("文件附属属性=" + this.fileProperty); 
        }
    }
~~~    

##### onUploadFailure

此为事件在文件本体上链保存因超过重复尝试次数而超时失败时发生。文件更新上链交易请求需重新提交。

    
~~~java    
    public void onUploadFailure (FileTxStatus fModifyStatus, Object context);
~~~    

**参数**

fModifyStatus FileModifyStatus

包含文件更新操作的当前处理状态信息的对象。

fModifyStatus中将包含如下返回信息，详细解释请参看FileModifyStatus对象相关描述：

|
status，errorCode，message，fileID，versionID，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight
|

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

**示例：**

    
~~~java    
    FileModify oFileModify = new FileModify() {
        @Override
        public void onUploadFailure (FileTxStatus fModifyStatus, Object context) {
           //事件触发条件：文件本体上链保存因超过重复尝试次数而超时失败，文件更新上链交易请求需重新提交。
           FileTxBlockInfo oFileTxBlockInfo = fModifyStatus.txBlockData;
           String fileIDFromCaller = context;
           System.out.println("链外应用系统调用端的唯一标识=" + fileIDFromCaller);
           System.out.println("文件链上ID =" + oFileTxBlockInfo.fileID);
           System.out.println("链上执行失败的返回结果=" + fModifyStatus.message);
        }
    }
~~~    

##### onError

此为事件在FileModify调用出现异常时发生。事件触发后返回异常信息。

    
~~~java    
    public void onError(TxException e, Object context);
~~~    

示例：

    
~~~java    
    FileModify oFileModify = new FileModify() {
        @Override
        public void onError(TxException e, Object context) {
           //事件触发条件：FileModify调用出现异常，并返回异常信息。
           String fileIDFromCaller = context;
           System.out.println("链外应用系统调用端的唯一标识=" + fileIDFromCaller);
           System.out.println("异常状态描述=" + e.state);
           System.out.println("异常信息=" + e.exc);
        }
    }
~~~    

#### FileTxStatus.status状态编码

状态编码列表：

状态取值 | 描述 | 备注  
---|---|---  
TxSendSuccess | 上链交易发送成功。 | 节点确认接收文件更新上链交易请求，等待区块链执行处理。  
TxSendFailure | 上链交易发送失败。 | 节点接收文件更新上链交易请求失败，文件更新上链交易请求需重新提交。  
TxExecSuccess | 上链交易执行成功。 | 文件更新上链交易执行成功，文件元数据上链保存，等待落块确认。文件本体仍在上链处理中。  
TxExecFailure | 上链交易执行失败。 | 文件更新上链交易执行失败，文件元数据和文件本体均未上链保存。文件更新上链交易请求需重新提交。  
TxBlockConfirm | 上链交易落块确认。 | 文件元数据成功上链保存，并获得落块确认，文件本体仍在上链处理中。  
TxBlkCfmFailure | 上链交易落块确认失败。 | 因落块确认失败，上链保存的文件元数据被链回滚。文件更新上链交易请求需重新提交。  
UploadAccomplish | 文件成功上链保存。 | 文件保存链上操作处理彻底完成，文件元数据和文件本体均成功上链保存。  
UploadFailure | 文件更新上链保存失败。 | 文件本体上链保存因超过重复尝试次数而超时失败，文件更新上链交易请求需重新提交。  
  
### FileMetaUpate

用于进行文件元数据更新的操作对象。

#### 构造函数

##### FileMetaUpate (Frontend, String)

    
~~~java    
    public FileMetaUpate (Frontend frontendServer, String businessDomainID);
~~~    

**参数**

frontendServer Frontend

前置节点服务器对象。

businessDomainID String

设置要访问的业务域标识。初始化时可以为空，后续可通过bizDomain属性赋值。businessDomainID在提交上链交易前必须赋值。

示例：

    
~~~java    
    //初始化前置节点对象（即链上操作发送对象）
    //--业务系统数字身份标识
    String systemID = "0d64ad368ebc37ddb80424376408cb7bb88ff328";
    //--业务系统数字身份私钥
    String systemPrivateKey = "8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc";
    //--前置节点调用接口地址
    String frontendUrl = "http://127.1.1.1:9000/fbs/";
    //创建前置节点对象
    Frontend oFrontend = new Frontend(systemID, systemPrivateKey, frontendUrl);
    //设置要访问的业务域标识
    String businessDomainID = "51eb48b51eb48b2896288021b73bac878c48b289";
    
    FileMetaUpate oFileMetaUpate = new FileMetaUpate (oFrontend, businessDomainID);
~~~    

##### FileMetaUpate ()

构造一个FileMetaUpate对象。后续需赋值要访问前置节点对象和要访问的业务域。

    
~~~java    
    public FileMetaUpate ();
~~~    

#### 属性

##### frontend

设置要访问的前置节点服务器对象。

    
~~~java    
    public Frontend frontend { set; get; }
~~~    

##### bizDomain

设置要更新元数据的文件所在链上业务域的唯一标识。

    
~~~java    
    public String bizDomain { set; get; }
~~~    

##### fileID

设置要进行元数据更新的链上文件的文件链上ID。

    
~~~java    
    public String fileID { set; get; }
~~~    

##### fileName

设置要更新的文件名称。

    
~~~java    
    public String fileName { set; get; }
~~~    

##### fileSuffix

设置要更新的文件扩展名。如："doc"，"pdf"，"mp3"等。

    
~~~java    
    public String fileSuffix { set; get; }
~~~    

##### fileDescription

设置要更新的文件描述信息。fileDescription的信息将被区块链加密保存，只有文件所有者和拥有文件读取权限方可获得相应的明文信息。

如果想要对链上已保存的fileDescription进行清空处理，则此属性需设置NULL。

    
~~~java    
    public String fileDescription { set; get; }
~~~    

##### fileProperty

设置要更新的文件附属属性信息。附属属性建议使用JSON或XML等格式构建，然后序列化成String的类型进行存储。fileProperty的信息将被区块链加密保存，只有文件所有者和拥有文件读取权限方可获得相应的明文信息。

如果想要对链上已保存的fileProperty进行清空处理，则此属性需设置NULL。

    
~~~java    
    public String fileProperty { set; get; }
~~~    

##### ownerID

设置提交上链交易的文件所有者数字身份标识，必须是owners中的一个数字身份标识。

    
~~~java    
    public String ownerID { set; get; }
~~~    

示例：

    
~~~java    
    String ownerID = "0d64ad368ebc37ddb80424376408cb7bb88ff328";
    oFileMetaUpate.ownerID = ownerID;
~~~    

##### EventContext

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。

    
~~~java    
    public Object eventContext { set; get; }
~~~    

示例：

    
~~~java    
    //上链更新元数据的文件在链外应用系统数据库中的唯一标识
    String fileIDFromCaller = "57bee7e51eb48b2896288021b7374cfc78c0bac8";
    oFileMetaUpate.eventContext =fileIDFromCaller;
~~~    

#### 方法

##### submit

向指定的前置节点服务器提交"文件元数据更新"上链交易请求，开始进行文件元数据更新链上操作。调用此方法，将会通过onTxBlockConfirm、onTxSendSuccess等事件返回链上处理结果。

    
~~~java    
    public void submit(String ownerPrivateKey);
~~~    

**参数**

ownerPrivateKey String

设置要进行元数据更新的文件所有者的数字身份私钥，ownerID对应的私钥。私钥用于对"文件元数据更新"上链交易进行签名确权。

**示例：**

    
~~~java    
    //--链上文件所有者数字身份私钥
    String ownerPrivateKey = "8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc";
    //进行文件元数据更新上链操作提交
    oFileMetaUpate.submit (ownerPrivateKey);
~~~    

##### createTxBody

和前置节点进行交互，生成"文件元数据更新"链上操作对应的上链交易体，以便使用ownerID对应的私钥对上链交易体进行确权签名。

    
~~~java    
    public String createTxBody();
~~~    

**返回**

String

序列化的"文件元数据更新"上链交易体。

**示例：**

    
~~~java    
    //生成"文件元数据更新"上链交易体
    String fileMetaUpdateTxBody= oFileMetaUpate.createTxBody();
    //用文件所有者数字身份对"文件元数据更新"上链交易体进行签名
    String ownerPrivateKey = "3161be862236ae966004390908a5facb8f45763e38ce5cfb378e493f91a7873d";
    
    //--对"文件元数据更新"上链交易体进行签名，并生成签名结果
    String txSign = CryptoUtil.crypto.signature(fileMetaUpdateTxBody, ownerPrivateKey);
~~~    

##### submitTxBody

使用文件元数据更新上链交易体原文和ownerID中数字身份对上链交易体的签名结果信息，向指定的前置节点服务器提交"文件元数据更新"上链交易请求。调用此方法，将会通过onTxBlockConfirm、onTxSendSuccess等事件返回链上处理结果。

    
~~~java    
    public void submitTxBody(String fileMetaUpdateTxBody, String txSign);
~~~    

**参数**

fileMetaUpdateTxBody String

文件元数据更新上链交易体原文

txSign String

文件元数据更新上链交易体签名结果信息

**示例：**

    
~~~java    
    //【程序A】准备文件元数据更新上链交易体
    FileMetaUpdate oPrepareFMetaUpdTxBody = new FileMetaUpdate();
    oPrepareFileUploadTxBody.fileID = "88021b73bac8b248b2896278c04a4378962e51eb";
    oPrepareFileUploadTxBody.ownerID = "0d64ad368ebc37ddb80424376408cb7bb88ff328"; 
    oPrepareFMetaUpdTxBody.fileDescription = "这是一个赋强公证申请表-2.0版本";
    oPrepareFMetaUpdTxBody.fileProperty = "{'接收单位': '公证处', '服务对象-新加字段': '个人'}";
    
    String fileMetaUpdTxBody = oPrepareFMetaUpdTxBody.createTxBody();
    
    //【程序B】在外部使用数字身份签名应用进行fileMetaUpdTxBody签名
    String ownerPrivateKey = "3161be862236ae966004390908a5facb8f45763e38ce5cfb378e493f91a7873d";
    String txSign = CryptoUtil.crypto.signature(fileMetaUpdTxBody, ownerPrivateKey);
    
    //【程序A】提交文件元数据更新上链交易，并跟踪链上处理状态
    FileMetaUpdate oFileMetaUpdate = new FileUpload (frontendServer, businessDomainID);
    oFileMetaUpdate.eventContext =fileIDFromCaller;
    oFileMetaUpdate.submitTxBody (fileMetaUpdTxBody, txSign);
~~~    

#### 事件

##### onTxBlockConfirm

此事件在文件元数据上链更新成功，并获得落块确认时发生。

    
~~~java    
    public void onTxBlockConfirm(FileTxStatus fMetaUpdStatus, Object context);
~~~    

参数

fMetaUpdStatus FileTxStatus

包含"文件元数据更新"链上操作的当前处理状态信息的对象。

fMetaUpdStatus中将包含如下返回信息，详细解释请参看FileTxStatus 对象相关描述：

|
status，errorCode，message，fileID，versionID，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight
|

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java    
    FileMetaUpate oFileMetaUpate = new FileMetaUpate() {
        @Override
        public void onTxBlockConfirm(FileTxStatus fMetaUpdStatus, Object context) {
           //事件触发条件：文件元数据上链更新成功，并获得落块确认。
           FileTxBlockInfo oFileTxBlockInfo = fMetaUpdStatus.txBlockData;
           System.out.println("文件链上ID =" + fMetaUpdStatus.fileID);
           System.out.println("文件当前版本ID =" + oFileTxBlockInfo.versionID);
           String fileIDFromCaller = context;
           System.out.println("链外应用系统调用端的唯一标识=" + fileIDFromCaller);
        }
    }
~~~    

##### onTxBlkCfmFailure

此事件在文件元数据更新上链交易落块确认失败，上链更新的文件元数据被链回滚时发生。事件触发后，会返回错误信息。文件元数据更新上链交易请求需重新提交。

    
~~~java    
    public void onTxBlockCfmFailure(FileTxStatus fMetaUpdStatus, Object context);
~~~   

参数

fMetaUpdStatus FileTxStatus

包含"文件元数据更新"链上操作的当前处理状态信息的对象。

fMetaUpdStatus中将包含如下返回信息，详细解释请参看FileTxStatus 对象相关描述：

|
status，errorCode，message，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight
|

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java    
    FileMetaUpate oFileMetaUpate = new FileMetaUpate() {
        @Override
        public void onTxBlockCfmFailure(FileTxStatus fMetaUpdStatus, Object context) {
           //事件触发条件：文件元数据更新上链交易落块确认失败，上链更新的文件元数据被链回滚。
           //事件触发后，会返回错误信息。文件元数据更新上链交易请求需重新提交。
           FileTxBlockInfo oFileTxBlockInfo = fMetaUpdStatus.txBlockData;
           System.out.println("文件元数据更新上链交易Hash =" + oFileTxBlockInfo.txHash);
           System.out.println("文件元数据更新上链交易落块确认失败的返回结果=" + fMetaUpdStatus.message);
           String fileIDFromCaller = context;
           System.out.println("链外应用系统调用端的唯一标识=" + fileIDFromCaller);
        }
    }
~~~    

##### onTxSendSuccess

此事件在文件元数据更新上链交易发送成功，等待区块链执行处理时发生。

    
~~~java    
    public void onTxSendSuccess(FileTxStatus fMetaUpdStatus, Object context);
~~~    

参数

fMetaUpdStatus FileTxStatus

包含"文件元数据更新"链上操作的当前处理状态信息的对象。

fMetaUpdStatus中将包含如下返回信息，详细解释请参看FileTxStatus 对象相关描述：

| status，errorCode，message，txHash |

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java    
    FileMetaUpate oFileMetaUpate = new FileMetaUpate(){
        @Override
        public void onTxSendSuccess(FileTxStatus fMetaUpdStatus, Object context) {
           //事件触发条件：文件元数据更新上链交易发送成功，等待区块链执行处理。 
           FileTxBlockInfo oFileTxBlockInfo = fMetaUpdStatus.txBlockData;
           System.out.println("文件元数据更新上链交易Hash =" + oFileTxBlockInfo.txHash);
        }
    }
~~~    

##### onTxSendFailure

此事件在文件元数据更新上链交易发送失败时发生。文件元数据更新上链交易请求需重新提交。

    
~~~java    
    public void onTxSendFailure(FileTxStatus fMetaUpdStatus, Object context);
~~~    

参数

fMetaUpdStatus FileTxStatus

包含"文件元数据更新"链上操作的当前处理状态信息的对象。

fMetaUpdStatus中将包含如下返回信息，详细解释请参看FileTxStatus 对象相关描述：

| errorCode，message |

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java    
    FileMetaUpate oFileMetaUpate = new FileMetaUpate() {
        @Override
        public void onTxSendFailure(FileTxStatus fMetaUpdStatus, Object context) {
           //事件触发条件：文件元数据更新上链交易发送失败。
           System.out.println("文件元数据更新上链交易发送失败的返回结果=" + fMetaUpdStatus.message);
        }
    }
~~~    

##### onTxExecSuccess

此事件在文件元数据更新上链交易执行成功，文件元数据上链更新成功，等待落块确认时发生。

    
~~~java    
    public void onTxExecSuccess(FileTxStatus fMetaUpdStatus, Object context);
~~~    

参数

fMetaUpdStatus FileTxStatus

包含"文件元数据更新"链上操作的当前处理状态信息的对象。

fMetaUpdStatus中将包含如下返回信息，详细解释请参看FileTxStatus 对象相关描述：

|
status，errorCode，message，fileID，versionID，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight
|

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java    
    FileMetaUpate oFileMetaUpate = new FileMetaUpate(){
        @Override
        public void onTxExecSuccess(FileTxStatus fMetaUpdStatus, Object context) {
           //事件触发条件：文件元数据更新上链交易执行成功，文件元数据上链更新成功，等待落块确认。
           FileTxBlockInfo oFileTxBlockInfo = fMetaUpdStatus.txBlockData;
           String fileIDFromCaller = context;
           System.out.println("链外应用系统调用端的唯一标识=" + fileIDFromCaller);
           System.out.println("文件链上ID =" + oFileTxBlockInfo.fileID);
           System.out.println("文件版本ID=" + oFileTxBlockInfo.versionID);
           System.out.println("文件元数据更新上链交易Hash=" + oFileTxBlockInfo.txHash);
           System.out.println("交易执行时间戳=" + oFileTxBlockInfo.txExecTimestamp.toString());
           System.out.println("交易所在区块hash=" + oFileTxBlockInfo.blockHash);
           System.out.println("交易所在区块生成时间戳" + oFileTxBlockInfo.blockedTimestamp.toString());
           System.out.println("交易所在区块高度=" + oFileTxBlockInfo.blockHeight);
        }
    }
~~~    

##### onTxExecFailure

此事件在文件元数据更新上链交易执行失败，文件元数据未上链更新时发生。事件触发后会返回错误信息。文件元数据上链交易请求需重新提交。

    
~~~java    
    public void onTxExecFailure(FileTxStatus fMetaUpdStatus, Object context);
~~~    

参数

fMetaUpdStatus FileTxStatus

包含"文件元数据更新"链上操作的当前处理状态信息的对象。

fMetaUpdStatus中将包含如下返回信息，详细解释请参看FileTxStatus 对象相关描述：

|
status，errorCode，message，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight
|

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java    
    FileMetaUpate oFileMetaUpate = new FileMetaUpate(){
        @Override
        public void onTxExecFailure(FileTxStatus fMetaUpdStatus, Object context) {
           //事件触发条件：文件元数据更新上链交易执行失败，文件元数据未上链更新。
           FileTxBlockInfo oFileTxBlockInfo = fMetaUpdStatus.txBlockData;
           String fileIDFromCaller = context;
           System.out.println("链外应用系统调用端的唯一标识=" + fileIDFromCaller);
           System.out.println("文件元数据更新上链交易Hash =" + oFileTxBlockInfo.txHash);
           System.out.println("链上执行失败的返回结果=" + fMetaUpdStatus.message);
        }
    }
~~~    

##### onError

此为事件在FileMetaUpate调用出现异常时发生。事件触发后返回异常信息。

    
~~~java    
    public void onError(TxException e, Object context);
~~~    

示例：

    
~~~java    
    FileMetaUpate oFileMetaUpate = new FileMetaUpate() {
        @Override
        public void onError(TxException e, Object context) {
           //事件触发条件：FileMetaUpdate调用出现异常。并返回异常信息。
           String fileIDFromCaller = context;
           System.out.println("链外应用系统调用端的唯一标识=" + fileIDFromCaller);
           System.out.println("异常状态描述=" + e.state);
           System.out.println("异常信息=" + e.exc);
        }
    }
~~~    

#### FileTxStatus.status状态编码

状态编码列表：

状态取值 | 描述 | 备注  
---|---|---  
TxSendSuccess | 上链交易发送成功。 | 节点确认接收文件元数据更新上链交易请求，等待区块链执行处理。  
TxSendFailure | 上链交易发送失败。 | 节点接收文件元数据更新上链交易请求失败，文件元数据更新上链交易请求需重新提交。  
TxExecSuccess | 上链交易执行成功。 | 文件元数据更新上链交易执行成功，文件元数据上链更新成功，等待落块确认。  
TxExecFailure | 上链交易执行失败。 | 文件元数据更新上链交易执行失败，文件元数据未上链更新。文件元数据更新上链交易请求需重新提交。  
TxBlockConfirm | 上链交易落块确认。 | 文件元数据上链更新成功，并获得落块确认。  
TxBlkCfmFailure | 上链交易落块确认失败。 | 因落块确认失败，上链更新的文件元数据被链回滚。文件元数据更新上链交易请求需重新提交。  
  
### FileAuthorise

用于进行文件授权的操作对象。

#### 构造函数

##### FileAuthorise (Frontend, String)

    
~~~java    
    public FileAuthorise (Frontend frontendServer, String businessDomainID);
~~~    

**参数**

frontendServer Frontend

前置节点服务器对象。

businessDomainID String

设置要访问的业务域标识。初始化时可以为空，后续可通过bizDomain属性赋值。businessDomainID在提交上链交易前必须赋值。

示例：

    
~~~java    
    //初始化前置节点对象（即链上操作发送对象）
    //--业务系统数字身份标识
    String systemID = "0d64ad368ebc37ddb80424376408cb7bb88ff328";
    //--业务系统数字身份私钥
    String systemPrivateKey = "8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc";
    //--前置节点调用接口地址
    String frontendUrl = "http://127.1.1.1:9000/fbs/";
    //创建前置节点对象
    Frontend oFrontend = new Frontend(systemID, systemPrivateKey, frontendUrl);
    //设置要访问的业务域标识
    String businessDomainID = "51eb48b51eb48b2896288021b73bac878c48b289";
    
    FileAuthorise oFileAuthorise = new FileAuthorise (oFrontend, businessDomainID);
~~~    

##### FileAuthorise ()

构造一个FileAuthorise对象。后续需赋值要访问前置节点对象和要访问的业务域。

    
~~~java    
    public FileAuthorise ();
~~~    

#### 属性

##### frontend

设置要访问的前置节点服务器对象。

    
~~~java    
    public Frontend frontend { set; get; }
~~~    

##### bizDomain

设置要进行文件授权的文件所在链上业务域的唯一标识。

    
~~~java    
    public String bizDomain { set; get; }
~~~    

##### fileID

设置要进行文件授权的链上文件的文件链上ID。

    
~~~java   
    public String fileID { set; get; }
~~~    

##### grantorID

设置提交上链交易的授权者数字身份标识，必须是owners或sharers中的一个数字身份标识。

  * 文件所有者可以授权分享者列表和读取者列表。
  * 文件分享者可以授权读取者列表。

    
~~~java    
    public String grantorID { set; get; }
~~~    

##### eventContext

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。

    
~~~java    
    public Object eventContext { set; get; }
~~~    

示例：

    
~~~java    
    //要授予文件授权的文件在链外应用系统数据库中的唯一标识
    String fileIDFromCaller = "57bee7e51eb48b2896288021b7374cfc78c0bac8";
    oFileAuthorise.eventContext =fileIDFromCaller;
~~~    

#### 方法

##### addReaders

设置要授予文件读取权限的数字身份标识列表。

    
~~~java    
    public void addReaders { String[] readers };
~~~    

**参数**

readers String[]

要授予文件读取权限的数字身份标识。

**示例：**

    
~~~java    
    //设置要授予文件读取权限的数字身份标识列表
    String[] readerIDs = {"e51eb48b57bee72896288021bcfc78c0bac87374",
    "8962857bee7b48b28021b7374cfc78c0bac8e51e",
    "374cfc78c0ba57bee78b2896288021b7c8 e51eb4"
    };
    oFileAuthorise.addReaders(readerIDs);
~~~    

##### addSharers

设置要授予文件分享权限的数字身份标识列表。

    
~~~java    
    public void addSharers { String[] Sharers };
~~~    

**参数**

Sharers String[]

要授予文件分享权限的数字身份标识。

**示例：**

    
~~~java    
    //设置要授予文件分享权限的数字身份标识列表
    String[] sharerIDs = {"e51eb48b57bee72896288021bcfc78c0bac87374",
    "8962857bee7b48b28021b7374cfc78c0bac8e51e",
    "374cfc78c0ba57bee78b2896288021b7c8 e51eb4"
    };
    oFileAuthorise.addSharers (sharerIDs);
~~~    

##### addOwners

设置要授予文件所有者权限的数字身份标识列表。

    
~~~java    
    public void addOwners { String[] Owners };
~~~    

**参数**

Owners String[]

要授予文件所有者权限的数字身份标识。

**示例：**

    
~~~java    
    //设置要授予文件所有者权限的数字身份标识列表
    String[] ownerIDs = {"e51eb48b57bee72896288021bcfc78c0bac87374",
    "8962857bee7b48b28021b7374cfc78c0bac8e51e",
    "374cfc78c0ba57bee78b2896288021b7c8 e51eb4"
    };
    oFileAuthorise.addOwners(ownerIDs);
~~~    

##### removeReaders

设置要删除文件读取权限的数字身份标识列表。

    
~~~java    
    public void removeReaders { String[] Readers };
~~~    

**示例：**

    
~~~java    
    //设置要删除文件读取权限的数字身份标识列表
    String[] readerIDs = {"e51eb48b57bee72896288021bcfc78c0bac87374",
    "8962857bee7b48b28021b7374cfc78c0bac8e51e",
    "374cfc78c0ba57bee78b2896288021b7c8 e51eb4"
    };
    oFileAuthorise.removeReaders(readerIDs);
~~~    

##### removeSharers

设置要删除文件分享权限的数字身份标识列表。

    
~~~java    
    public void removeSharers { String[] Sharers };
~~~    

**示例：**

    
~~~java    
    //设置要删除文件分享权限的数字身份标识列表
    String[] sharerIDs = {"e51eb48b57bee72896288021bcfc78c0bac87374",
    "8962857bee7b48b28021b7374cfc78c0bac8e51e",
    "374cfc78c0ba57bee78b2896288021b7c8 e51eb4"
    };
    oFileAuthorise.removeSharers(sharerIDs);
~~~    

##### removeOwners

设置要删除文件所有者权限的数字身份标识列表。

    
~~~java    
    public void removeOwners { String[] Owners };
~~~    

**示例：**

    
~~~java    
    //设置要删除文件所有者的数字身份标识列表
    String[] ownerIDs = {"e51eb48b57bee72896288021bcfc78c0bac87374",
    "8962857bee7b48b28021b7374cfc78c0bac8e51e",
    "374cfc78c0ba57bee78b2896288021b7c8 e51eb4"
    };
    oFileAuthorise.removeOwners(ownerIDs);
~~~    

##### createTxBody

和前置节点进行交互，生成"文件授权"链上操作对应的上链交易体，以便使用grantorID对应的私钥对上链交易体进行确权签名。

    
~~~java    
    public String createTxBody();
~~~    

**返回**

String

序列化的"文件授权"上链交易体。

**示例：**

    
~~~java    
    //生成"文件授权"上链交易体
    String fileAuthoriseTxBody= oFileAuthorise.createTxBody();
    //用grantorID中的数字身份对"文件授权"上链交易体进行签名
    String grantorPrivateKey = "3161be862236ae966004390908a5facb8f45763e38ce5cfb378e493f91a7873d";
    
    //--对"文件授权"上链交易体进行签名，并生成签名结果
    String txSign = CryptoUtil.crypto.signature(fileAuthoriseTxBody, grantorPrivateKey);
~~~    

##### submit

向指定的前置节点服务器提交"文件授权"上链交易请求，开始进行文件授权链上操作。调用此方法，将会通过onTxBlockConfirm、onTxSendSuccess等事件返回链上处理结果。

    
~~~java    
    public void submit (String grantorPrivateKey);
~~~    

**参数**

grantorPrivateKey String

grantorID对应的数字身份私钥。私钥用于对"文件授权"上链交易进行签名确权。

**示例：**

    
~~~java    
    //--提交上链交易的授权者数字身份私钥（即链上文件所有者或分享者中的一个数字身份标识）
    String grantorPrivateKey = "8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc";
    //进行文件授权上链操作提交
    oFileAuthorise.submit (grantorPrivateKey);
~~~    

##### submitTxBody

使用文件授权上链交易体原文和grantorID中数字身份对上链交易体的签名结果信息，向指定的前置节点服务器提交"文件授权"上链交易请求。调用此方法，onTxBlockConfirm、onTxSendSuccess等事件不会被触发。

    
~~~java    
    public FileTxStatus submitTxBody(String fileAuthoriseTxBody, String txSign);
~~~    

**参数**

fileAuthoriseTxBody String

文件授权上链交易体原文

txSign String

文件授权上链交易体签名结果信息

**返回**

FileTxStatus

包含"文件授权"链上操作的当前处理状态信息的对象。

**示例：**

    
~~~java    
    //【程序A】准备文件授权上链交易体
    FileAuthorise oPrepareFileAuthTxBody = new FileAuthorise();
    oPrepareFileAuthTxBody.fileID = "88021b73bac8b248b2896278c04a4378962e51eb";
    oPrepareFileAuthTxBody.grantorID = "0d64ad368ebc37ddb80424376408cb7bb88ff328"; 
    String[] readerIDs = {"e51eb48b57bee72896288021bcfc78c0bac87374",
    "8962857bee7b48b28021b7374cfc78c0bac8e51e",
    "374cfc78c0ba57bee78b2896288021b7c8 e51eb4"
    };
    oPrepareFileAuthTxBody.addReaders = readerIDs;
    
    String fileAuthoriseTxBody = oPrepareFileAuthTxBody.createTxBody();
    
    //【程序B】在外部使用数字身份签名应用进行fileAuthoriseTxBody签名
    String ownerPrivateKey = "3161be862236ae966004390908a5facb8f45763e38ce5cfb378e493f91a7873d";
    String txSign = CryptoUtil.crypto.signature(fileAuthoriseTxBody, ownerPrivateKey);
    
    //【程序A】提交文件授权上链交易，并跟踪链上处理状态
    FileAuthorise oFileAuthorise = new FileAuthorise (frontendServer, businessDomainID);
    oFileAuthorise.eventContext =fileIDFromCaller;
    FileTxStatus oFileTxStatus = oFileAuthorise.submitTxBody(fileAuthoriseTxBody, txSign);
    oFileTxStatus = oFileAuthorise.getAuthoriseStatus ();
~~~    

#### 事件

##### onTxBlockConfirm

此事件在文件授权上链交易执行成功，并获得落块确认时发生。

    
~~~java    
    public void onTxBlockConfirm(FileTxStatus fAuthStatus, Object context);
~~~    

参数

fAuthStatus FileTxStatus

包含"文件授权"链上操作的当前处理状态信息的对象。

fAuthStatus中将包含如下返回信息，详细解释请参看FileTxStatus 对象相关描述：

|
status，errorCode，message，fileID，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight
|

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java    
    FileAuthorise oFileAuthorise = new FileAuthorise() {
        @Override
        public void onTxBlockConfirm(FileTxStatus fAuthStatus, Object context) {
           //事件触发条件：文件授权上链交易执行成功，并获得落块确认。
           FileTxBlockInfo oFileTxBlockInfo = fAuthStatus.txBlockData;
           System.out.println("文件链上ID =" + oFileTxBlockInfo.fileID);
           String fileIDFromCaller = context;
           System.out.println("链外应用系统调用端的唯一标识=" + fileIDFromCaller);
        }
    }
~~~    

##### onTxBlkCfmFailure

此事件在文件授权上链交易执行失败，上链保存的文件授权被链回滚。事件触发后，会返回错误信息。文件授权上链交易请求需重新提交。

    
~~~java    
    public void onTxBlockCfmFailure(FileTxStatus fAuthStatus, Object context);
~~~    

参数

fAuthStatus FileTxStatus

包含"文件授权"链上操作的当前处理状态信息的对象。

fAuthStatus中将包含如下返回信息，详细解释请参看FileTxStatus 对象相关描述：

|
status，errorCode，message，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight
|

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java    
    FileAuthorise oFileAuthorise = new FileAuthorise() {
        @Override
        public void onTxBlockCfmFailure(FileTxStatus fAuthStatus, Object context) {
           //事件触发条件：文件授权上链交易执行失败，上链保存的文件授权被链回滚。
           //事件触发后，会返回错误信息。文件授权上链交易请求需重新提交。
           FileTxBlockInfo oFileTxBlockInfo = fAuthStatus.txBlockData;
           System.out.println("文件授权上链交易Hash =" + oFileTxBlockInfo.txHash);
           System.out.println("文件授权上链交易执行失败的返回结果=" + fAuthStatus.message);
           String fileIDFromCaller = context;
           System.out.println("链外应用系统调用端的唯一标识=" + fileIDFromCaller);
        }
    }
~~~    

##### onTxSendSuccess

此事件在文件授权上链交易发送成功，等待区块链执行处理时发生。

    
~~~java    
    public void onTxSendSuccess(FileTxStatus fAuthStatus, Object context);
~~~    

参数

fAuthStatus FileTxStatus

包含"文件授权"链上操作的当前处理状态信息的对象。

fAuthStatus中将包含如下返回信息，详细解释请参看FileTxStatus 对象相关描述：

| status，errorCode，message，txHash |

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java    
    FileAuthorise oFileAuthorise = new FileAuthorise() {
        @Override
        public void onTxSendSuccess(FileTxStatus fAuthStatus, Object context) {
           //事件触发条件：文件授权上链交易发送成功，等待区块链执行处理。 
           FileTxBlockInfo oFileTxBlockInfo = fAuthStatus.txBlockData;
           System.out.println("文件授权上链交易Hash =" + oFileTxBlockInfo.txHash);
        }
    }
~~~    

##### onTxSendFailure

此事件在文件授权上链交易发送失败时发生。文件授权上链交易请求需重新提交。

    
~~~java    
    public void onTxSendFailure(FileTxStatus fAuthStatus, Object context);
~~~    

参数

fAuthStatus FileTxStatus

包含"文件授权"链上操作的当前处理状态信息的对象。

fAuthStatus中将包含如下返回信息，详细解释请参看FileTxStatus 对象相关描述：

| errorCode，message |

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java    
    FileAuthorise oFileAuthorise = new FileAuthorise() {
        @Override
        public void onTxSendFailure (FileTxStatus fAuthStatus, Object context) {
           //事件触发条件：文件授权上链交易发送失败。
           //事件触发后，会返回错误信息。
           System.out.println("文件授权上链交易发送失败的返回结果=" + fAuthStatus.message);
        }
    }
~~~    

##### onTxExecSuccess

此事件在文件授权上链交易执行成功，等待落块确认时发生。

    
~~~java    
    public void onTxExecSuccess(FileTxStatus fAuthStatus, Object context);
~~~    

参数

fAuthStatus FileTxStatus

包含"文件授权"链上操作的当前处理状态信息的对象。

fAuthStatus中将包含如下返回信息，详细解释请参看FileTxStatus 对象相关描述：

|
status，errorCode，message，fileID，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight
|

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java    
    FileAuthorise oFileAuthorise = new FileAuthorise() {
        @Override
        public void onTxExecSuccess (FileTxStatus fAuthStatus, Object context) {
           //事件触发条件：文件授权上链交易执行成功，等待落块确认。
           FileTxBlockInfo oFileTxBlockInfo = fAuthStatus.txBlockData;
           String fileIDFromCaller = context;
           System.out.println("链外应用系统调用端的唯一标识=" + fileIDFromCaller);
           System.out.println("文件链上ID =" + oFileTxBlockInfo.fileID);
           System.out.println("文件授权上链交易Hash=" + oFileTxBlockInfo.txHash);
           System.out.println("交易执行时间戳=" + oFileTxBlockInfo.txExecTimestamp.toString());
           System.out.println("交易所在区块hash=" + oFileTxBlockInfo.blockHash);
           System.out.println("交易所在区块生成时间戳" + oFileTxBlockInfo.blockedTimestamp.toString());
           System.out.println("交易所在区块高度=" + oFileTxBlockInfo.blockHeight);
        }
    }
~~~    

##### onTxExecFailure

此事件在文件授权上链交易执行失败，对指定数字身份的相应权限授权未在链上生效时发生。事件触发后会返回错误信息。文件授权上链交易请求需重新提交。

    
~~~java    
    public void onTxExecFailure(FileTxStatus fAuthStatus, Object context);
~~~    

参数

fAuthStatus FileTxStatus

包含"文件授权"链上操作的当前处理状态信息的对象。

fAuthStatus中将包含如下返回信息，详细解释请参看FileTxStatus 对象相关描述：

|
status，errorCode，message，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight
|

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java    
    FileAuthorise oFileAuthorise = new FileAuthorise() {
        @Override
        public void onTxExecFailure (FileTxStatus fAuthStatus, Object context) {
           //事件触发条件：文件授权上链交易执行失败，对指定数字身份的相应权限授权未在链上生效。 
           //事件触发后，会返回错误信息。文件授权上链交易请求需重新提交。
           FileTxBlockInfo oFileTxBlockInfo = fAuthStatus.txBlockData;
           String fileIDFromCaller = context;
           System.out.println("链外应用系统调用端的唯一标识=" + fileIDFromCaller);
           System.out.println("文件授权上链交易Hash =" + oFileTxBlockInfo.txHash);
           System.out.println("链上执行失败的返回结果=" + fAuthStatus.message);
        }
    }
~~~    

##### onError

此为事件在FileAuthorise调用出现异常时发生。事件触发后返回异常信息。

    
~~~java    
    public void onError(TxException e, Object context);
~~~    

示例：

    
~~~java    
    FileAuthorise oFileAuthorise = new FileAuthorise() {
        @Override
        public void onError (TxException e, Object context) {
           //事件触发条件：FileAuthorise调用出现异常。并返回异常信息。
           String fileIDFromCaller = context;
           System.out.println("链外应用系统调用端的唯一标识=" + fileIDFromCaller);
           System.out.println("异常状态描述=" + e.state);
           System.out.println("异常信息=" + e.exc);
        }
    }
~~~    

#### FileTxStatus.status状态编码

状态编码列表：

状态取值 | 描述 | 备注  
---|---|---  
TxSendSuccess | 上链交易发送成功。 | 节点确认接收文件授权上链交易请求，等待区块链执行处理。  
TxSendFailure | 上链交易发送失败。 | 节点接收文件授权上链交易请求失败，文件授权上链交易请求需重新提交。  
TxExecSuccess | 上链交易执行成功。 | 文件授权上链交易执行成功，文件读取/所有者权限的数字身份标识列表上链更新成功，等待落块确认。  
TxExecFailure | 上链交易执行失败。 |
文件授权上链交易执行失败，文件读取/所有者权限的数字身份标识列表未上链更新。文件授权上链交易请求需重新提交。  
TxBlockConfirm | 上链交易落块确认。 | 文件授权上链更新成功，并获得落块确认。  
TxBlkCfmFailure | 上链交易落块确认失败。 |
因落块确认失败，上链更新的文件读取/所有者权限的数字身份标识列表被链回滚。文件授权上链交易请求需重新提交。  
  
### FileMetaFetch

用于进行文件元数据获取的操作对象。

#### 构造函数

##### FileMetaFetch (Frontend, String)

    
~~~java    
    public FileMetaFetch (Frontend frontendServer, String businessDomainID);
~~~    

**参数**

frontendServer Frontend

前置节点服务器对象。

businessDomainID String

设置要访问的业务域标识。初始化时可以为空，后续可通过bizDomain属性赋值。businessDomainID在提交链上查询请求前必须赋值。

示例：

    
~~~java    
    //初始化前置节点对象（即链上操作发送对象）
    //--业务系统数字身份标识
    String systemID = "0d64ad368ebc37ddb80424376408cb7bb88ff328";
    //--业务系统数字身份私钥
    String systemPrivateKey = "8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc";
    //--前置节点调用接口地址
    String frontendUrl = "http://127.1.1.1:9000/fbs/";
    //创建前置节点对象
    Frontend oFrontend = new Frontend(systemID, systemPrivateKey, frontendUrl);
    //设置要访问的业务域标识
    String businessDomainID = "51eb48b51eb48b2896288021b73bac878c48b289";
    
    FileMetaFetch oFileMetaFetch = new FileMetaFetch(oFrontend, businessDomainID);
~~~    

##### FileMetaFetch ()

构造一个FileMetaFetch对象。后续需赋值要访问前置节点对象和要访问的业务域。

    
~~~java    
    public FileMetaFetch ();
~~~    

#### 属性

##### frontend

设置要访问的前置节点服务器对象。

    
~~~java    
    public Frontend frontend { set; get; }
~~~    

##### bizDomain

设置要进行文件元数据获取的文件所在链上业务域的唯一标识。

    
~~~java    
    public String bizDomain { set; get; }
~~~    

##### fileID

设置要进行文件元数据获取的链上文件的文件链上ID。

    
~~~java    
    public String fileID { set; get; }
~~~    

##### versionID

设置要获取的链上文件指定版本的元数据的文件版本ID。如果此属性不赋值，则默认返回最新版本（即当前版本）的文件元数据信息。

    
~~~java    
    public String versionID { set; get; }
~~~    

##### fetcherID

设置要进行文件元数据获取的获取者数字身份标识。文件获取者必须拥有文件读取权限，owners、sharers、readers中的一个数字身份标识。

    
~~~java    
    public String fetcherID { set; get; }
~~~    

##### EventContext

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。

    
~~~java    
    public Object eventContext { set; get; }
~~~    

示例：

    
~~~java    
    //要获取文件元数据获取的文件在链外应用系统数据库中的唯一标识
    String fileIDFromCaller = "57bee7e51eb48b2896288021b7374cfc78c0bac8";
    oFileMetaFetch.eventContext =fileIDFromCaller;
~~~    

#### 方法

##### query

向指定的前置节点服务器提交"文件元数据获取"链上查询请求，开始进行文件元数据获取链上操作。调用此方法，将会通过onSuccess
和onFailure事件返回查询结果。

    
~~~java    
    public void query(String fetcherPrivateKey);
~~~    

**参数**

fetcherPrivateKey String

设置要进行文件元数据获取的获取者数字身份私钥，fetcherID对应的私钥。私钥用于对"文件元数据获取"链上查询请求进行签名确权。

**示例：**

    
~~~java    
    //--获取者数字身份私钥
    String fetcherPrivateKey = "8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc";
    FileMetaFetch oFileMetaFetch = new FileMetaFetch() {
        @Override
        public void onSuccess(FileMetaFetchStatus fmFetchStatus, Object context) {
          //事件触发条件：仅在采用异步查询方法时才会被触发
        }
    };
    
    //进行"文件元数据获取"链上操作提交
    oFileMetaFetch.query (fetcherPrivateKey);
~~~    

##### createRqBody

和前置节点进行交互，生成"文件元数据获取"链上操作对应的链上查询请求体，以便使用获取者数字身份对应的私钥对链上查询请求体进行确权签名。

    
~~~java   
    public String createRqBody();
~~~    

**返回**

String

序列化的"文件元数据获取"链上查询请求体。

**示例：**

    
~~~java    
    //生成"文件元数据获取"链上查询请求体
    String fmFetchRqBody= oFileMetaFetch.createRqBody();
    //用获取者数字身份对"文件元数据获取"链上查询请求体进行签名
    String fetcherPrivateKey = "8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc";
    String txSign = CryptoUtil.crypto.signature(fmFetchRqBody, fetcherPrivateKey);
~~~    

##### queryRqBody

使用文件元数据获取链上查询请求体原文和fetcherID中数字身份对查询请求体的签名结果信息，向指定的前置节点服务器提交"文件元数据获取"链上查询请求。调用此方法，将会通过onSuccess
和onFailure事件返回查询结果。

    
~~~java    
    public void queryRqBody (String fmFetchRqBody, String txSign);
~~~    

**参数**

fmFetchRqBody String

文件元数据获取链上查询请求体原文

txSign String

文件元数据获取链上查询请求体签名结果信息

**示例：**

    
~~~java    
    //【程序A】准备"文件元数据获取"链上查询请求体
    FileMetaFetch oPrepareFMFetchRqBody = new FileMetaFetch();
    oPrepareFMFetchRqBody.fileID = "88021b73bac8b248b2896278c04a4378962e51eb";
    oPrepareFMFetchRqBody.fetcherID = "0d64ad368ebc37ddb80424376408cb7bb88ff328"; 
    String fmFetchRqBody = oPrepareFMFetchRqBody.createRqBody ();
    
    //【程序B】在外部使用数字身份签名应用进行fmFetchRqBody签名
    String fetcherPrivateKey = "8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc";
    String txSign = CryptoUtil.crypto.signature(fmFetchRqBody, fetcherPrivateKey);
    
    //【程序A】提交"文件元数据获取"链上查询请求，并跟踪链上处理状态
    FileMetaFetch oFileMetaFetch = new FileMetaFetch(frontendServer, businessDomainID);
    oFileMetaFetch.eventContext =fileIDFromCaller;
    oFileMetaFetch.queryRqBody (fmFetchRqBody, txSign);
~~~    

#### 事件

##### onSuccess

此事件在"文件元数据获取"链上操作处理彻底完成，文件元数据已成功下载时发生。

    
~~~java    
    public void onSuccess (FileMetaFetchStatus fmFetchStatus, Object context);
~~~    

参数

fmFetchStatus FileMetaFetchStatus

包含"文件元数据获取"链上操作的当前处理状态信息的对象。

fmFetchStatus中将包含如下返回信息，详细解释请参看FileMetaFetchStatus对象相关描述：

| status，errorCode，message，fileMeta |

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java    
    FileMetaFetch oFileMetaFetch = new FileMetaFetch() {
        @Override
        public void onSuccess (FileMetaFetchStatus fmFetchStatus, Object context) {
          //事件触发条件：在"文件元数据获取"链上操作处理彻底完成，文件元数据已成功下载。
          String fileIDFromCaller = context;
          System.out.println("链外应用系统调用端的唯一标识=" + fileIDFromCaller);
          FileMeta oFileMetadata  = fmFetchStatus.fileMeta;
          System.out.println("文件链上ID =" + oFileMetadata.fileID);
          System.out.println("文件版本ID=" + oFileMetadata.versionID);
          System.out.println("文件名=" + oFileMetadata.fileName);
          System.out.println("文件附属属性=" + oFileMetadata.fileProperty); 
        }
    }
~~~    

##### onFailure

此事件在"文件元数据获取"链上操作处理失败，文件元数据未被下载时发生。

    
~~~java    
    public void onFailure(FileMetaFetchStatus fmFetchStatus, Object context);
~~~    

参数

fmFetchStatus FileMetaFetchStatus

包含"文件元数据获取"链上操作的当前处理状态信息的对象。

fmFetchStatus中将包含如下返回信息，详细解释请参看FileMetaFetchStatus对象相关描述：

| errorCode，message |

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java    
    FileMetaFetch oFileMetaFetch = new FileMetaFetch() {
        @Override
        public void onFailure (FileMetaFetchStatus fmFetchStatus, Object context) {
          //事件触发条件：在"文件元数据获取"链上操作处理失败，文件元数据未被下载。
          String fileIDFromCaller = context;
          System.out.println("链外应用系统调用端的唯一标识=" + fileIDFromCaller);
          System.out.println("查询失败=" + fmFetchStatus.message);
        }
    }
~~~    

##### onError

此为事件在FileMetaFetch调用出现异常时发生。事件触发后返回异常信息。

    
~~~java    
    public void onError(FetchException e, Object context);
~~~    

示例：

    
~~~java    
    FileMetaFetch oFileMetaFetch = new FileMetaFetch() {
        @Override
        public void onError(FetchException e, Object context) {
           //事件触发条件：FileMetaFetch调用出现异常。并返回异常信息。
           String fileIDFromCaller = context;
           System.out.println("链外应用系统调用端的唯一标识=" + fileIDFromCaller);
           System.out.println("异常状态描述=" + e.state);
           System.out.println("异常信息=" + e.exc);
        }
    }
~~~    
