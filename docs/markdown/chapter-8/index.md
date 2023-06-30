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

### FileFetch

用于进行链上文件本体获取的操作对象。

#### 构造函数

##### FileFetch(Frontend, String)

    
~~~java    
    public FileFetch (Frontend frontendServer, String businessDomainID);
~~~    

**参数**

frontendServer Frontend

前置节点服务器对象。

businessDomainID String

设置要访问的业务域标识。初始化时可以为空，后续可通过bizDomain属性赋值。businessDomainID在提交文件本体链上获取请求前必须赋值。

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
    
    FileFetch oFileFetch = new FileFetch(oFrontend, businessDomainID);
~~~    

##### FileFetch()

构造一个FileFetch对象。后续需赋值要访问前置节点对象和要访问的业务域。

    
~~~java    
    public FileFetch ();
~~~    

#### 属性

##### frontend

设置要访问的前置节点服务器对象。

    
~~~java    
    public Frontend frontend { set; get; }
~~~    

##### bizDomain

设置要获取本体的文件所在链上业务域的唯一标识。

    
~~~java    
    public String bizDomain { set; get; }
~~~    

##### fileID

设置要获取本体的链上文件的文件链上ID。

    
~~~java    
    public String fileID { set; get; }
~~~    

##### filePath

设置要获取本体后存储路径及名称。

    
~~~java    
    public String filePath{ set; get; }
~~~    

##### versionID

设置要获取本体的链上文件指定版本的文件版本ID。如果此属性不赋值，则默认返回最新版本（即当前版本）的文件本体。

    
~~~java      
    public String versionID { set; get; }
~~~    

##### fetcherID

设置要进行文件本体获取的获取者数字身份标识。文件本体获取者必须拥有文件读取权限，owners、sharers、readers中的一个数字身份标识。

    
~~~java     
    public String fetcherID { set; get; }
~~~  

##### eventContext

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。

    
~~~java    
    public Object eventContext { set; get; }
~~~     

示例：

    
~~~java    
    //要获取本体的文件在链外应用系统数据库中的唯一标识
    String fileIDFromCaller = "57bee7e51eb48b2896288021b7374cfc78c0bac8";
    oFileFetch.eventContext =fileIDFromCaller;
~~~    

#### 方法

##### query

向指定的前置节点服务器提交文件本体链上获取请求。调用此方法，将会通过onSuccess 和onFailure事件返回获取结果。

    
~~~java    
    public void query (String fetcherPrivateKey);
~~~   

**参数**

fetcherPrivateKey String

设置要进行文件本体获取的获取者数字身份私钥，fetcherID对应的私钥。私钥用于对文件本体链上获取请求进行签名确权。

**示例：**

    
~~~java    
    //--获取者数字身份私钥
    String fetcherPrivateKey = "8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc";
    //进行"文件本体获取"链上操作提交
    oFileFetch.query (fetcherPrivateKey);
~~~    

##### createRqBody

和前置节点进行交互，生成文件本体链上获取请求体，以便使用fetcherID对应的私钥对文件本体链上获取请求体进行确权签名。

    
~~~java    
    public String createRqBody();
~~~    

**返回**

String

序列化的文件本体链上获取请求体。

**示例：**

    
~~~java    
    //生成文件本体链上获取请求体
    String fileFetchRqBody= oFileFetch.createRqBody();
    //用获取者数字身份对文件本体链上获取请求体进行签名
    String fetcherPrivateKey = "8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc";
    String txSign = CryptoUtil.crypto.signature(fileFetchRqBody, fetcherPrivateKey);
~~~    

##### queryRqBody

使用文件本体链上获取请求体原文和fetcherID中数字身份对获取请求体的签名结果信息，向指定的前置节点服务器提交文件本体链上获取请求。调用此方法，将会通过onSuccess
和onFailure事件返回获取结果。

    
~~~java    
    public void queryRqBody (String fileFetchRqBody, String txSign);
~~~    

**参数**

fileFetchRqBody String

文件本体链上获取请求体原文

txSign String

文件本体链上获取请求体签名结果信息

**示例：**

    
~~~java    
    //【程序A】准备文件本体链上获取请求体
    FileFetch oPrepareFileFetchRqBody = new FileFetch();
    oPrepareFileFetchRqBody.fileID = "88021b73bac8b248b2896278c04a4378962e51eb";
    oPrepareFileFetchRqBody.fetcherID = "0d64ad368ebc37ddb80424376408cb7bb88ff328"; 
    String fileFetchRqBody = oPrepareFileFetchRqBody.createRqBody();
    
    //【程序B】在外部使用数字身份签名应用进行fileFetchRqBody签名
    String fetcherPrivateKey = "8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc";
    String txSign = CryptoUtil.crypto.signature(fileFetchRqBody, fetcherPrivateKey);
    
    //【程序A】提交文件本体链上获取请求
    FileFetch oFileFetch = new FileFetch(frontendServer, businessDomainID);
    oFileFetch.eventContext =fileIDFromCaller;
    oFileFetch.queryRqBody (fileFetchRqBody, txSign);
~~~    

#### 事件

##### onSuccess

此事件在"文件本体获取"链上操作处理彻底完成，文件本体已成功下载时发生。

    
~~~java    
    public void onSuccess (FileFetchStatus fFetchStatus, Object context);
~~~    

参数

fFetchStatus FileFetchStatus

包含"文件本体获取"链上操作的当前处理状态信息的对象。

fFetchStatus中将包含如下返回信息，详细解释请参看FileFetchStatus对象相关描述：

| status，errorCode，message，fileBody |

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java    
    FileFetch oFileFetch = new FileFetch() {
        @Override
        public void onSuccess(FileFetchStatus fFetchStatus, Object context) {
           //事件触发条件：在"文件本体获取"链上操作处理彻底完成，文件本体已成功下载。
           String fileIDFromCaller = context;
           System.out.println("链外应用系统调用端的唯一标识=" + fileIDFromCaller);
           //下载的文件本体
           File oFile = fFetchStatus.fileBody; 
        }
    }
~~~    

##### onFailure

此事件在"文件本体获取"链上操作处理失败，文件本体未被下载时发生。

    
~~~java    
    public void onSuccess (FileFetchStatus fFetchStatus, Object context);
~~~    

参数

fFetchStatus FileFetchStatus

包含"文件本体获取"链上操作的当前处理状态信息的对象。

fFetchStatus中将包含如下返回信息，详细解释请参看FileFetchStatus对象相关描述：

| errorCode，message |

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java    
    FileFetch oFileFetch = new FileFetch() {
        @Override
        public void onFailure(FileFetchStatus fFetchStatus, Object context)) {
          //事件触发条件：在"文件本体获取"链上操作处理失败，文件本体未被下载。
          String fileIDFromCaller = context;
          System.out.println("链外应用系统调用端的唯一标识=" + fileIDFromCaller);
          System.out.println("查询失败=" + fFetchStatus.message);
        }
    }
~~~    

##### onError

此为事件在FileFetch调用出现异常时发生。事件触发后返回异常信息。

    
~~~java    
    public void onError(FetchException e, Object context);
~~~    

示例：

    
~~~java    
    FileFetch oFileFetch = new FileFetch() {
        @Override
        public void onError(FetchException e, Object context) {
           //事件触发条件：FileFetch调用出现异常。并返回异常信息。
           String fileIDFromCaller = context;
           System.out.println("链外应用系统调用端的唯一标识=" + fileIDFromCaller);
           System.out.println("异常状态描述=" + e.state);
           System.out.println("异常信息=" + e.exc);
        }
    }
~~~    

### FileDelete

用于进行结构文件删除的操作对象。

#### 构造函数

##### FileDelete (Frontend, String)

    
~~~java    
    public FileDelete (Frontend frontendServer, String businessDomainID);
~~~    

**参数**

frontendServer Frontend

前置节点服务器对象。

businessDomainID String

设置要访问的业务域标识。初始化时可以为空，后续可通过bizDomain属性赋值。businessDomainID在提交文件删除前必须赋值。

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
    
    FileDelete oFileDelete = new FileDelete(oFrontend, businessDomainID);
~~~    

##### FileDelete()

构造一个FileDelete对象。后续需赋值要访问前置节点对象和要访问的业务域。

    
~~~java    
    public FileDelete ();
~~~

#### 属性

##### frontend

设置要访问的前置节点服务器对象。

    
~~~java    
    public Frontend frontend { set; get; }
~~~

##### bizDomain

设置要删除文件的链上业务域的唯一标识。

    
~~~java    
    public String bizDomain { set; get; }
~~~    

##### fileID

设置要删除的链上文件的文件链上ID。

    
~~~java    
    public String fileID { set; get; }
~~~    

##### ownerID

设置文件所有者的数字身份标识。只有文件所有者才有权提交文件删除。

    
~~~java    
    public String ownerID { set; get; }
~~~    

##### EventContext

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。

    
~~~java    
    public Object eventContext { set; get; }
~~~    

示例：

    
~~~java    
    //要删除的文件在链外应用系统数据库中的唯一标识
    String fileIDFromCaller = "57bee7e51eb48b2896288021b7374cfc78c0bac8";
    oFileDelete.eventContext =fileIDFromCaller;
~~~    

#### 方法

##### submit

向指定的前置节点服务器提交"文件删除"上链交易请求。调用此方法，将会通过onTxBlockConfirm、onTxSendSuccess等事件返回链上处理结果。

    
~~~java    
    public void submit(String ownerPrivateKey);
~~~

**参数**

ownerPrivateKey String

设置要删除的链上文件所有者的数字身份私钥，ownerID对应的私钥。私钥用于对"文件删除"上链交易进行签名确权。

**示例：**

    
~~~java    
    //--链上文件所有者数字身份私钥
    String ownerPrivateKey = "8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc";
    //进行文件删除上链操作提交
    oFileDelete.submit (ownerPrivateKey);
~~~    

##### createTxBody

和前置节点进行交互，生成"文件删除"链上操作对应的上链交易体，以便使用ownerID对应的私钥对上链交易体进行确权签名。

    
~~~java    
    public String createTxBody();
~~~    

**返回**

String

序列化的"文件删除"上链交易体。

**示例：**

    
~~~java    
    //生成"文件删除"上链交易体
    String fileDeleteTxBody= oFileDelete.createTxBody();
    //用文件所有者数字身份对"文件删除"上链交易体进行签名
    String ownerPrivateKey = "3161be862236ae966004390908a5facb8f45763e38ce5cfb378e493f91a7873d";
    //--对"文件删除"上链交易体进行签名，并生成签名结果
    String txSign = CryptoUtil.crypto.signature(fileDeleteTxBody, ownerPrivateKey);
~~~    

##### submitTxBody

使用文件删除上链交易体原文和ownerID中数字身份对上链交易体的签名结果信息，向指定的前置节点服务器提交"文件删除"上链交易请求。调用此方法，将会通过onTxBlockConfirm、onTxSendSuccess等事件返回链上处理结果。

    
~~~java    
    public void submitTxBody(String FileDeleteTxBody, String txSign);
~~~

**参数**

FileDeleteTxBody String

文件删除上链交易体原文

txSign String

文件删除上链交易体签名结果信息

**示例：**

    
~~~java    
    //【程序A】准备文件删除上链交易体
    FileDelete oPrepareFileDeleteTxBody = new FileDelete();
    oPrepareFileDeleteTxBody.fileID = "88021b73bac8b248b2896278c04a4378962e51eb";
    oPrepareFileDeleteTxBody.ownerID = "0d64ad368ebc37ddb80424376408cb7bb88ff328"; 
    
    String fileDeleteTxBody = oPrepareFileDeleteTxBody.createTxBody();
    
    //【程序B】在外部使用数字身份签名应用进行fileDeleteTxBody签名
    String ownerPrivateKey = "8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc";
    String txSign = CryptoUtil.crypto.signature(FileDeleteTxBody, ownerPrivateKey);
    
    //【程序A】提交文件删除上链交易，并跟踪链上处理状态
    FileDelete oFileDelete = new FileDelete(frontendServer, businessDomainID);
    oFileDelete.eventContext =fileIDFromCaller;
    FileTxStatus oFileTxStatus = oFileDelete.submitTxBody (fileDeleteTxBody, txSign);
~~~    

#### 事件

##### onTxBlockConfirm

此事件在文件删除上链交易执行成功，并获得落块确认时发生。

    
~~~java    
    public void onTxBlockConfirm(FileTxStatus fDeleteStatus, Object context);
~~~    

参数

fDeleteStatus FileTxStatus

包含"文件删除"上链交易的当前处理状态信息的对象。

fDeleteStatus中将包含如下返回信息，详细解释请参看FileTxStatus 对象相关描述：

|
status，errorCode，message，fileID，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight
|

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java    
    FileDelete oFileDelete = new FileDelete() {
       @Override
        public void onTxBlockConfirm(FileTxStatus fDeleteStatus, Object context) {
           //事件触发条件：文件删除上链交易执行成功，并获得落块确认。
           FileTxBlockInfo oFileTxBlockInfo = fDeleteStatus.txBlockData;
           System.out.println("文件链上ID =" + oFileTxBlockInfo.fileID);
           String fileIDFromCaller = context;
           System.out.println("链外应用系统调用端的唯一标识=" + fileIDFromCaller);
        }
    }
~~~    

##### onTxBlkCfmFailure

此事件在文件删除上链交易落块确认失败，删除状态变更被链回滚时发生。事件触发后，会返回错误信息。文件删除上链交易需重新提交。

    
~~~java    
    public void onTxBlockCfmFailure(FileTxStatus fDeleteStatus, Object context);
~~~

参数

fDeleteStatus FileTxStatus

包含"文件删除"上链交易的当前处理状态信息的对象。

fDeleteStatus中将包含如下返回信息，详细解释请参看FileTxStatus 对象相关描述：

|
status，errorCode，message，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight
|

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java    
    FileDelete oFileDelete = new FileDelete() {
        @Override
        public void onTxBlockCfmFailure(FileTxStatus fDeleteStatus, Object context) {
           //事件触发条件：文件删除上链交易落块确认失败，删除状态变更被链回滚。
           //事件触发后，会返回错误信息。文件删除上链交易请求需重新提交。
           String fileIDFromCaller = context;
           System.out.println("链外应用系统调用端的唯一标识=" + fileIDFromCaller);
           FileTxBlockInfo oFileTxBlockInfo = fDeleteStatus.txBlockData;
           System.out.println("文件删除上链交易Hash =" + oFileTxBlockInfo.txHash);
           System.out.println("文件删除上链交易落块确认失败的返回结果=" + fDeleteStatus.message);
        }
    }
~~~    

##### onTxSendSuccess

此事件在文件删除上链交易发送成功，等待区块链执行处理时发生。

    
~~~java    
    public void onTxSendSuccess(FileTxStatus fDeleteStatus, Object context);
~~~    

参数

fDeleteStatus FileTxStatus

包含"文件删除"上链交易的当前处理状态信息的对象。

fDeleteStatus中将包含如下返回信息，详细解释请参看FileTxStatus 对象相关描述：

| status，errorCode，message，txHash |

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java    
    FileDelete oFileDelete = new FileDelete() {
        @Override
        public void onTxSendSuccess(FileTxStatus fDeleteStatus, Object context) {
           //事件触发条件：文件删除上链交易发送成功，等待区块链执行处理。 
           FileTxBlockInfo oFileTxBlockInfo = fDeleteStatus.txBlockData;
           System.out.println("文件删除上链交易Hash =" + oFileTxBlockInfo.txHash);
        }
    }
~~~    

##### onTxSendFailure

此事件在文件删除上链交易发送失败时发生。文件删除上链交易需重新提交。

    
~~~java 
    public void onTxSendFailure(FileTxStatus fDeleteStatus, Object context);
~~~

参数

fDeleteStatus FileTxStatus

包含"文件删除"上链交易的当前处理状态信息的对象。

fDeleteStatus中将包含如下返回信息，详细解释请参看FileTxStatus 对象相关描述：

| errorCode，message |

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java    
    FileDelete oFileDelete = new FileDelete() {
        @Override
        public void onTxSendFailure (FileTxStatus fDeleteStatus, Object context) {
           //事件触发条件：文件删除上链交易发送失败。
           //事件触发后，会返回错误信息。
           System.out.println("文件删除上链交易发送失败的返回结果=" + fDeleteStatus.message);
        }
    }
~~~    

##### onTxExecSuccess

此事件在文件删除上链交易执行成功，等待落块确认时发生。

    
~~~java    
    public void onTxExecSuccess(FileTxStatus fDeleteStatus, Object context);
~~~

参数

fDeleteStatus FileTxStatus

包含"文件删除"上链交易的当前处理状态信息的对象。

fDeleteStatus中将包含如下返回信息，详细解释请参看FileTxStatus 对象相关描述：

|
status，errorCode，message，fileID，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight
|

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java    
    FileDelete oFileDelete = new FileDelete() {
        @Override
        public void onTxExecSuccess (FileTxStatus fDeleteStatus, Object context) {
           //事件触发条件：文件删除上链交易执行成功，等待落块确认。
           FileTxBlockInfo oFileTxBlockInfo = fDeleteStatus.txBlockData;
           String fileIDFromCaller = context;
           System.out.println("链外应用系统调用端的唯一标识=" + fileIDFromCaller);
           System.out.println("文件链上ID =" + oFileTxBlockInfo.fileID);
           System.out.println("文件删除上链交易Hash=" + oFileTxBlockInfo.txHash);
           System.out.println("交易执行时间戳=" + oFileTxBlockInfo.txExecTimestamp);
           System.out.println("交易所在区块hash=" + oFileTxBlockInfo.blockHash);
           System.out.println("交易所在区块生成时间戳" + oFileTxBlockInfo.blockedTimestamp);
           System.out.println("交易所在区块高度=" + oFileTxBlockInfo.blockHeight);
        }
    }
~~~    

##### onTxExecFailure

此事件在文件删除上链交易执行失败，删除状态变更未在链上生效时发生。事件触发后会返回错误信息。文件删除上链交易需重新提交。

    
~~~java    
    public void onTxExecFailure (FileTxStatus fMetaUpdStatus, Object context);
~~~

参数

fDeleteStatus FileTxStatus

包含"文件删除"上链交易的当前处理状态信息的对象。

fDeleteStatus中将包含如下返回信息，详细解释请参看FileTxStatus 对象相关描述：

|
status，errorCode，message，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight
|

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java    
    FileDelete oFileDelete = new FileDelete() {
        @Override
        public void onTxExecFailure (FileTxStatus fDeleteStatus, Object context) {
           //事件触发条件：文件删除上链交易执行失败，删除状态变更未在链上生效。 
           //事件触发后，会返回错误信息。删除状态变更上链交易请求需重新提交。
           FileTxBlockInfo oFileTxBlockInfo = fDeleteStatus.txBlockData;
           String fileIDFromCaller = context;
           System.out.println("链外应用系统调用端的唯一标识=" + fileIDFromCaller);
           System.out.println("文件链上ID =" + oFileTxBlockInfo.fileID);
           System.out.println("删除状态变更上链交易Hash=" + oFileTxBlockInfo.txHash);
           System.out.println("交易执行时间戳=" + oFileTxBlockInfo.txExecTimestamp);
           System.out.println("交易所在区块hash=" + oFileTxBlockInfo.blockHash);
           System.out.println("交易所在区块生成时间戳" + oFileTxBlockInfo.blockedTimestamp);
           System.out.println("交易所在区块高度=" + oFileTxBlockInfo.blockHeight);
           System.out.println("链上执行失败的返回结果=" + fDeleteStatus.message);
        }
    }
~~~    

##### onError

此为事件在FileDelete调用出现异常时发生。事件触发后返回异常信息。

    
~~~java    
    public void onError (TxException e, Object context);
~~~    

示例：

    
~~~java    
    FileDelete oFileDelete = new FileDelete() {
        @Override
        public void onError(TxException e, Object context) {
           //事件触发条件：FileDelete调用出现异常。并返回异常信息。
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
TxSendSuccess | 上链交易发送成功。 | 节点确认接收文件删除上链交易请求，等待区块链执行处理。  
TxSendFailure | 上链交易发送失败。 | 节点接收文件删除上链交易请求失败，文件删除上链交易请求需重新提交。  
TxExecSuccess | 上链交易执行成功。 | 文件删除上链交易执行成功，等待落块确认。  
TxExecFailure | 上链交易执行失败。 | 文件删除上链交易执行失败，删除状态变更未在链上生效。文件删除上链交易请求需重新提交。  
TxBlockConfirm | 上链交易落块确认。 | 文件删除上链交易执行成功，并获得落块确认  
TxBlkCfmFailure | 上链交易落块确认失败。 | 因落块确认失败，删除状态变更被链回滚。文件删除上链交易请求需重新提交。  
  
### FileEmptyApply

用于进行文件本体审批清空申请的操作对象。文件本体清空前必须满足以下条件：

  * 在进行文件本体清空前文件必须被设置为删除状态，否则区块链判定清空申请失败。
  * 在文件本体清空申请时，必须将全部所有者列表中的数字身份标识添加至清空审批人列表中，否则区块链判定清空申请失败。
  * 在文件本体清空申请时，文件本体清空审批人列表中必须包含除所有者之外的数字身份标识参与清空审批，否则区块链判定清空申请失败。

#### 构造函数

##### FileEmptyApply (Frontend, String)

    
~~~java    
    public FileEmptyApply (Frontend frontendServer, String businessDomainID);
~~~    

**参数**

frontendServer Frontend

前置节点服务器对象。

businessDomainID String

设置要访问的业务域标识。初始化时可以为空，后续可通过bizDomain属性赋值。businessDomainID在提交文件本体清空申请前必须赋值。

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
    
    FileEmptyApply oFileEmptyApply = new FileEmptyApply(oFrontend, businessDomainID);
~~~    

##### FileEmptyApply()

构造一个FileEmptyApply对象。后续需赋值要访问前置节点对象和要访问的业务域。

    
~~~java    
    public FileEmptyApply ();
~~~    

#### 属性

##### frontend

设置要访问的前置节点服务器对象。

    
~~~java    
    public Frontend frontend { set; get; }
~~~    

##### bizDomain

设置要清空文件本体的链上业务域的唯一标识。

    
~~~java    
    public String bizDomain { set; get; }
~~~    

##### fileID

设置要清空文件本体的链上文件的文件链上ID。

    
~~~java    
    public String fileID { set; get; }
~~~   

##### ownerID

设置文件所有者的数字身份标识。只有文件所有者才有权提交清空申请。

    
~~~java    
    public String ownerID { set; get; }
~~~    

##### approvers

设置参与清空审批的数字身份标识列表。

    
~~~java    
    public String[] approvers { set; get; }

~~~    
示例：

    
~~~java    
    //--设置清空审批人的数字身份标识列表
    String[] approverIDs = {"e51eb48b57bee72896288021bcfc78c0bac87374",
    "8962857bee7b48b28021b7374cfc78c0bac8e51e",
    "374cfc78c0ba57bee78b2896288021b7c8 e51eb4"
    };
    oFileEmptyApply.approvers = approverIDs;
~~~    

##### eventContext

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。

    
~~~java    
    public Object eventContext { set; get; }
~~~    

示例：

    
~~~java    
    //要清空文件本体的文件在链外应用系统数据库中的唯一标识
    String fileIDFromCaller = "57bee7e51eb48b2896288021b7374cfc78c0bac8";
    oFileEmptyApply.eventContext =fileIDFromCaller;
~~~    

#### 方法

##### submit

向指定的前置节点服务器提交"文件本体清空申请"上链交易请求。调用此方法，将会通过onTxBlockConfirm、onTxSendSuccess等事件返回链上处理结果。

~~~java    
    
    public void submit(String ownerPrivateKey);
~~~    

**参数**

ownerPrivateKey String

设置要清空的链上文件所有者的数字身份私钥，ownerID对应的私钥。私钥用于对"文件本体清空申请"上链交易进行签名确权。

**示例：**

    
~~~java    
    //--链上文件所有者数字身份私钥
    String ownerPrivateKey = "8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc";
    //进行文件本体清空申请上链操作提交
    oFileEmptyApply.submit (ownerPrivateKey);
~~~    

##### createTxBody

和前置节点进行交互，生成"文件本体清空申请"链上操作对应的上链交易体，以便使用文件所有者数字身份对应的私钥对上链交易体进行确权签名。

    
~~~java    
    public String createTxBody ();
~~~    

**返回**

String

序列化的"文件本体清空申请"上链交易体。

**示例：**

    
~~~java    
    //生成"文件本体清空申请"上链交易体
    String fileEmptyApplyTxBody= oFileEmptyApply.createTxBody();
    //用文件所有者数字身份对"文件本体清空申请"上链交易体进行签名
    String ownerPrivateKey = "3161be862236ae966004390908a5facb8f45763e38ce5cfb378e493f91a7873d";
    
    //对"文件本体清空申请"上链交易体进行签名，并生成签名结果
    String txSign = CryptoUtil.crypto.signature(fileEmptyApplyTxBody, ownerPrivateKey);
~~~    

##### submitTxBody

使用文件本体清空申请上链交易体原文和文件所有者数字身份对上链交易体的签名结果信息，向指定的前置节点服务器提交"文件本体清空申请"上链交易请求。调用此方法，将会通过onTxBlockConfirm、onTxSendSuccess等事件返回链上处理结果。

    
~~~java    
    public void submitTxBody (String fileEmptyApplyTxBody, String txSign);
~~~    

**参数**

fileEmptyApplyTxBody String

文件本体清空申请上链交易体原文

txSign String

文件本体清空申请上链交易体签名结果信息

**示例：**

    
~~~java    
    //【程序A】准备文件本体清空申请上链交易体
    FileEmptyApply oPrepareFEmptyApplyTxBody = new FileEmptyApply();
    oPrepareFEmptyApplyTxBody.fileID = "88021b73bac8b248b2896278c04a4378962e51eb";
    oPrepareFEmptyApplyTxBody.ownerID = "0d64ad368ebc37ddb80424376408cb7bb88ff328"; 
    //--设置清空审批人的数字身份标识列表
    String[] approverIDs = {"e51eb48b57bee72896288021bcfc78c0bac87374",
    "8962857bee7b48b28021b7374cfc78c0bac8e51e",
    "374cfc78c0ba57bee78b2896288021b7c8 e51eb4"
    };
    oPrepareFEmptyApplyTxBody.approvers = approverIDs;
    String fEmptyApplyTxBody = oPrepareFEmptyApplyTxBody.createTxBody();
    
    //【程序B】在外部使用数字身份签名应用进行fEmptyApplyTxBody签名
    String ownerPrivateKey = "3161be862236ae966004390908a5facb8f45763e38ce5cfb378e493f91a7873d";
    String txSign = CryptoUtil.crypto.signature(fEmptyApplyTxBody, ownerPrivateKey);
    
    //【程序A】提交文件本体清空申请上链交易，并跟踪链上处理状态
    FileEmptyApply oFileEmptyApply = new FileEmptyApply(frontendServer, businessDomainID);
    oFileEmptyApply.eventContext =fileIDFromCaller;
    FileTxStatus oFEmptyApplyStatus = oFileEmptyApply.submitTxBody (fEmptyApplyTxBody, txSign);
~~~    

#### 事件

##### onTxBlockConfirm

此事件在清空申请上链交易执行成功，并获得落块确认时发生。

    
~~~java    
    public void onTxBlockConfirm (FileTxStatus fEmptyApplyStatus, Object context);
~~~    

参数

fEmptyApplyStatus FileTxStatus

包含"文件本体清空申请"上链交易的当前处理状态信息的对象。

fEmptyApplyStatus中将包含如下返回信息，详细解释请参看FileTxStatus 对象相关描述：

|
status，errorCode，message，fileID，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight
|

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java    
    FileEmptyApply oFileEmptyApply = new FileEmptyApply() {
       @Override
        public void onTxBlockConfirm(FileTxStatus fEmptyApplyStatus, Object context) {
           //事件触发条件：清空申请上链交易执行成功，并获得落块确认。
           FileTxBlockInfo oFileTxBlockInfo = fEmptyApplyStatus.txBlockData;
           System.out.println("文件链上ID =" + oFileTxBlockInfo.fileID);
           String fileIDFromCaller = context;
           System.out.println("链外应用系统调用端的唯一标识=" + fileIDFromCaller);
        }
    }
~~~    

##### onTxBlkCfmFailure

此事件在清空申请上链交易落块确认失败，清空申请被链回滚时发生。事件触发后，会返回错误信息。清空申请上链交易需重新提交。

    
~~~java    
    public void onTxBlockCfmFailure(FileTxStatus fEmptyApplyStatus, Object context);
~~~    

参数

fEmptyApplyStatus FileTxStatus

包含"文件本体清空申请"上链交易的当前处理状态信息的对象。

fEmptyApplyStatus中将包含如下返回信息，详细解释请参看FileTxStatus 对象相关描述：

|
status，errorCode，message，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight
|

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java    
    FileEmptyApply oFileEmptyApply = new FileEmptyApply() {
        @Override
        public void onTxBlockCfmFailure(FileTxStatus fEmptyApplyStatus, Object context) {
           //事件触发条件：清空申请上链交易落块确认失败，清空申请被链回滚。
           //事件触发后，会返回错误信息。清空申请上链交易请求需重新提交。
           String fileIDFromCaller = context;
           System.out.println("链外应用系统调用端的唯一标识=" + fileIDFromCaller);
           FileTxBlockInfo oFileTxBlockInfo = fEmptyApplyStatus.txBlockData;
           System.out.println("清空申请上链交易Hash =" + oFileTxBlockInfo.txHash);
           System.out.println("清空申请上链交易落块确认失败的返回结果=" + fEmptyApplyStatus.message);
        }
    }
~~~    

##### onTxSendSuccess

此事件在清空申请上链交易发送成功，等待区块链执行处理时发生。

    
~~~java    
    public void onTxSendSuccess(FileTxStatus fEmptyApplyStatus, Object context);
~~~    

参数

fEmptyApplyStatus FileTxStatus

包含"文件本体清空申请"上链交易的当前处理状态信息的对象。

fEmptyApplyStatus中将包含如下返回信息，详细解释请参看FileTxStatus 对象相关描述：

| status，errorCode，message，txHash |

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java    
    FileEmptyApply oFileEmptyApply = new FileEmptyApply() {
        @Override
        public void onTxSendSuccess(FileTxStatus fEmptyApplyStatus, Object context) {
           //事件触发条件：清空申请上链交易发送成功，等待区块链执行处理。 
           FileTxBlockInfo oFileTxBlockInfo = fEmptyApplyStatus.txBlockData;
           System.out.println("清空申请上链交易Hash =" + fEmptyApplyStatus.txHash);
        }
    }
~~~    

##### onTxSendFailure

此事件在清空申请上链交易发送失败时发生。文件本体清空申请上链交易需重新提交。

    
~~~java    
    public void onTxSendFailure(FileTxStatus fEmptyApplyStatus, Object context);
~~~    

参数

fEmptyApplyStatus FileTxStatus

包含"文件本体清空申请"上链交易的当前处理状态信息的对象。

fEmptyApplyStatus中将包含如下返回信息，详细解释请参看FileTxStatus 对象相关描述：

| errorCode，message |

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java    
    FileEmptyApply oFileEmptyApply = new FileEmptyApply() {
        @Override
        public void onTxSendFailure (FileTxStatus fEmptyApplyStatus, Object context) {
           //事件触发条件：清空申请上链交易发送失败。
           //事件触发后，会返回错误信息。
           System.out.println("清空申请上链交易发送失败的返回结果=" + fEmptyApplyStatus.message);
        }
    }
~~~    

##### onTxExecSuccess

此事件在清空申请上链交易执行成功，等待落块确认时发生。

    
~~~java    
    public void onTxExecSuccess(FileTxStatus fEmptyApplyStatus, Object context);
~~~    

参数

fEmptyApplyStatus FileTxStatus

包含"文件本体清空申请"上链交易的当前处理状态信息的对象。

fEmptyApplyStatus中将包含如下返回信息，详细解释请参看FileTxStatus 对象相关描述：

|
status，errorCode，message，fileID，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight
|

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java    
    FileEmptyApply oFileEmptyApply = new FileEmptyApply() {
        @Override
        public void onTxExecSuccess (FileTxStatus fEmptyApplyStatus, Object context) {
           //事件触发条件：清空申请上链交易执行成功，等待落块确认。
           FileTxBlockInfo oFileTxBlockInfo = fEmptyApplyStatus.txBlockData;
           String fileIDFromCaller = context;
           System.out.println("链外应用系统调用端的唯一标识=" + fileIDFromCaller);
           System.out.println("文件链上ID =" + oFileTxBlockInfo.fileID);
           System.out.println("清空申请上链交易Hash=" + oFileTxBlockInfo.txHash);
           System.out.println("交易执行时间戳=" + oFileTxBlockInfo.txExecTimestamp);
           System.out.println("交易所在区块hash=" + oFileTxBlockInfo.blockHash);
           System.out.println("交易所在区块生成时间戳" + oFileTxBlockInfo.blockedTimestamp);
           System.out.println("交易所在区块高度=" + oFileTxBlockInfo.blockHeight);
        }
    }
~~~    

##### onTxExecFailure

此事件在清空申请上链交易执行失败，清空审批人名单未在链上生效时发生。事件触发后会返回错误信息。文件本体清空申请上链交易需重新提交。

    
~~~java    
    public void onTxExecFailure(FileTxStatus fEmptyApplyStatus, Object context);
~~~

参数

fEmptyApplyStatus FileTxStatus

包含"文件本体清空申请"上链交易的当前处理状态信息的对象。

fEmptyApplyStatus中将包含如下返回信息，详细解释请参看FileTxStatus 对象相关描述：

|
status，errorCode，message，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight
|

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java    
    FileEmptyApply oFileEmptyApply = new FileEmptyApply() {
        @Override
        public void onTxExecFailure(FileTxStatus fEmptyApplyStatus, Object context) {
           //事件触发条件：清空申请上链交易执行失败，清空审批人名单未在链上生效。 
           //事件触发后，会返回错误信息。清空申请上链交易请求需重新提交。
           FileTxBlockInfo oFileTxBlockInfo = fEmptyApplyStatus.txBlockData;
           String fileIDFromCaller = context;
           System.out.println("链外应用系统调用端的唯一标识=" + fileIDFromCaller);
           System.out.println("文件链上ID =" + oFileTxBlockInfo.fileID);
           System.out.println("清空申请上链交易Hash=" + oFileTxBlockInfo.txHash);
           System.out.println("交易执行时间戳=" + oFileTxBlockInfo.txExecTimestamp);
           System.out.println("交易所在区块hash=" + oFileTxBlockInfo.blockHash);
           System.out.println("交易所在区块生成时间戳" + oFileTxBlockInfo.blockedTimestamp);
           System.out.println("交易所在区块高度=" + oFileTxBlockInfo.blockHeight);
           System.out.println("链上执行失败的返回结果=" + fEmptyApplyStatus.message);
        }
    }
~~~    

##### onError

此为事件在FileEmptyApply调用出现异常时发生。事件触发后返回异常信息。

    
~~~java    
    public void onError(TxException e, Object context);
~~~    

示例：

    
~~~java    
    FileEmptyApply oFileEmptyApply = new FileEmptyApply() {
        @Override
        public void onError(TxException e, Object context) {
           //事件触发条件：FileEmptyApply调用出现异常。并返回异常信息。
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
TxSendSuccess | 上链交易发送成功。 | 节点确认接收文件本体清空申请上链交易请求，等待区块链执行处理。  
TxSendFailure | 上链交易发送失败。 | 节点接收文件本体清空申请上链交易请求失败，文件本体清空申请上链交易请求需重新提交。  
TxExecSuccess | 上链交易执行成功。 | 文件本体清空申请上链交易执行成功，等待落块确认。  
TxExecFailure | 上链交易执行失败。 |
文件本体清空申请上链交易执行失败，清空审批人名单未在链上生效。文件本体清空申请上链交易请求需重新提交。  
TxBlockConfirm | 上链交易落块确认。 | 文件本体清空申请上链更新成功，并获得落块确认。  
TxBlkCfmFailure | 上链交易落块确认失败。 | 因落块确认失败，清空申请被链回滚。文件本体清空申请上链交易请求需重新提交。  
  
### FileEmptyApprove

用于进行文件本体清空审批的操作对象。

所有文件本体清空审批列表中的审批人必须均同意清空，否则清空申请审批失败。清空申请审批通过后，区块链会将指定的链上文件的所有版本的文件本体彻底从区块链节点网络中清除（即文件本体将不再保存于链上），但文件的所有版本的元数据仍会保留在链上，以便事后审计。

#### 构造函数

##### FileEmptyApprove (Frontend, String)

    
~~~java    
    public FileEmptyApprove (Frontend frontendServer, String businessDomainID);
~~~    

**参数**

frontendServer Frontend

前置节点服务器对象。

businessDomainID String

设置要访问的业务域标识。初始化时可以为空，后续可通过bizDomain属性赋值。businessDomainID在提交文件本体清空审批请求前必须赋值。

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
    
    FileEmptyApprove oFileEmptyApprove = new FileEmptyApprove(oFrontend, businessDomainID);
~~~    

##### FileEmptyApprove ()

构造一个FileEmptyApprove对象。后续需赋值要访问前置节点对象和要访问的业务域。

    
~~~java    
    public FileEmptyApprove ();
~~~    

#### 属性

##### frontend

设置要访问的前置节点服务器对象。

    
~~~java    
    public Frontend frontend { set; get; }
~~~    

##### bizDomain

设置要进行清空审批的文件所在的链上业务域的唯一标识。

    
~~~java    
    public String bizDomain { set; get; }
~~~    

##### fileID

设置要清空审批的链上文件的文件链上ID。

    
~~~java    
    public String fileID { set; get; }
~~~    

##### approverID

设置清空审批人的数字身份标识。

    
~~~java    
    public String approverID { set; get; }
~~~    

##### reply

设置审批结论（1 同意删除 2 拒绝删除）。

    
~~~java    
    public String reply { set; get; }
~~~    

##### eventContext

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。

    
~~~java    
    public Object eventContext { set; get; }
~~~    

示例：

    
~~~java    
    //要清空审批的文件在链外应用系统数据库中的唯一标识
    String fileIDFromCaller = "57bee7e51eb48b2896288021b7374cfc78c0bac8";
    FileEmptyApprove.eventContext =fileIDFromCaller;
~~~    

#### 方法

##### submit

向指定的前置节点服务器提交"文件本体清空审批"上链交易请求。调用此方法，将会通过onTxBlockConfirm、onTxSendSuccess等事件返回链上处理结果。

    
~~~java    
    public void submit(String approverPrivateKey);
~~~   

**参数**

approverPrivateKey String

设置清空审批人的数字身份私钥，approverID对应的私钥。私钥用于对"文件本体清空审批"上链交易进行签名确权。

**示例：**

    
~~~java    
    //--清空审批人的数字身份私钥
    String approverPrivateKey = "8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc";
    //进行文件本体清空审批上链交易提交
    oFEmptyApprove.submit (approverPrivateKey);
~~~    

##### createTxBody

和前置节点进行交互，生成"文件本体清空审批"链上操作对应的上链交易体，以便使用approverID对应的私钥对上链交易体进行确权签名。

    
~~~java    
    public String createTxBody();
~~~    

**返回**

String

序列化的"文件本体清空审批"上链交易体。

**示例：**

    
~~~java    
    //生成"文件本体清空审批"上链交易体
    String fEmptyApproveTxBody= oFileEmptyApprove.createTxBody();
    //用清空审批人数字身份对"文件本体清空审批"上链交易体进行签名
    String approverPrivateKey = "3161be862236ae966004390908a5facb8f45763e38ce5cfb378e493f91a7873d";
    //--对"文件本体清空审批"上链交易体进行签名，并生成签名结果
    String txSign = CryptoUtil.crypto.signature(fEmptyApproveTxBody, approverPrivateKey);
~~~    

##### submitTxBody

使用文件本体清空审批上链交易体原文和approverID中数字身份对上链交易体的签名结果信息，向指定的前置节点服务器提交"文件本体清空审批"上链交易请求。调用此方法，将会通过onTxBlockConfirm、onTxSendSuccess等事件返回链上处理结果。

~~~java    
    
    public void submitTxBody(String fEmptyApproveTxBody, String txSign);
~~~    

**参数**

fEmptyApproveTxBody String

文件本体清空审批上链交易体原文

txSign String

文件本体清空审批上链交易体签名结果信息

**示例：**

    
~~~java    
    //【程序A】准备文件本体清空审批上链交易体
    FileEmptyApprove oPrepareFMTApproveTxBody = new FileEmptyApprove ();
    oPrepareFMTApproveTxBody.fileID = "88021b73bac8b248b2896278c04a4378962e51eb";
    oPrepareFMTApproveTxBody.approverID = "0d64ad368ebc37ddb80424376408cb7bb88ff328";
    oPrepareFMTApproveTxBody.reply = 1;
    
    String fEmptyApproveTxBody = oPrepareFMTApproveTxBody.createTxBody ();
    
    //【程序B】在外部使用数字身份签名应用进行fEmptyApproveTxBody签名
    String approverPrivateKey = "3161be862236ae966004390908a5facb8f45763e38ce5cfb378e493f91a7873d";
    String txSign = CryptoUtil.crypto.signature(fEmptyApproveTxBody, approverPrivateKey);
    
    //【程序A】提交文件本体清空审批上链交易，并跟踪链上处理状态
    FileEmptyApprove oFEmptyApprove = new FileEmptyApprove(frontendServer, businessDomainID);
    oFEmptyApprove.eventContext =fileIDFromCaller;
    FileTxStatus oFEmptyApproveStatus = oFEmptyApprove.submitTxBody (fEmptyApproveTxBody, txSign);
~~~    

#### 事件

##### onTxBlockConfirm

此事件在清空审批上链交易执行成功，并获得落块确认时发生。

~~~java    
    
    public void onTxBlockConfirm(FileTxStatus fEmptyApproveStatus, Object context);
~~~    

参数

fEmptyApproveStatus FileTxStatus

包含"文件本体清空审批"上链交易的当前处理状态信息的对象。

fEmptyApproveStatus中将包含如下返回信息，详细解释请参看FileTxStatus 对象相关描述：

|
status，errorCode，message，fileID，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight
|

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java    
    FileEmptyApprove oFileEmptyApprove = new FileEmptyApprove() {
       @Override
        public void onTxBlockConfirm(FileTxStatus fEmptyAproveStatus, Object context) {
           //事件触发条件：清空审批上链交易执行成功，并获得落块确认。
           FileTxBlockInfo oFileTxBlockInfo = fEmptyAproveStatus.txBlockData;
           System.out.println("文件链上ID =" + oFileTxBlockInfo.fileID);
           String fileIDFromCaller = context;
           System.out.println("链外应用系统调用端的唯一标识=" + fileIDFromCaller);
        }
    }
~~~    

##### onTxBlkCfmFailure

此事件在清空审批上链交易落块确认失败，清空审批被链回滚时发生。事件触发后，会返回错误信息。清空审批上链交易需重新提交。

    
~~~java    
    public void onTxBlockCfmFailure(FileTxStatus fEmptyApproveStatus, Object context);
~~~    

参数

fEmptyApproveStatus FileTxStatus

包含"文件本体清空审批"上链交易的当前处理状态信息的对象。

fEmptyApproveStatus中将包含如下返回信息，详细解释请参看FileTxStatus 对象相关描述：

|
status，errorCode，message，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight
|

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java    
    FileEmptyApprove oFileEmptyApprove = new FileEmptyApprove() {
      @Override
      public void onTxBlockCfmFailure(FileTxStatus fEmptyApproveStatus, Object context) {
         //事件触发条件：清空审批上链交易落块确认失败，清空审批被链回滚。
         //事件触发后，会返回错误信息。清空审批上链交易请求需重新提交。
         String fileIDFromCaller = context;
         System.out.println("链外应用系统调用端的唯一标识=" + fileIDFromCaller);
         FileTxBlockInfo oFileTxBlockInfo = fEmptyApproveStatus.txBlockData;
         System.out.println("清空审批上链交易Hash =" + oFileTxBlockInfo.txHash);
         System.out.println("清空审批上链交易落块确认失败的返回结果=" + fEmptyApproveStatus.message);
      }
    }
~~~    

##### onTxSendSuccess

此事件在清空审批上链交易发送成功，等待区块链执行处理时发生。

    
~~~java    
    public void onTxSendSuccess(FileTxStatus fEmptyApproveStatus, Object context);
~~~    

参数

fEmptyApproveStatus FileTxStatus

包含"文件本体清空审批"上链交易的当前处理状态信息的对象。

fEmptyApproveStatus中将包含如下返回信息，详细解释请参看FileTxStatus 对象相关描述：

| status，errorCode，message，txHash |

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java    
    FileEmptyApprove oFileEmptyApprove = new FileEmptyApprove() {
        @Override
        public void onTxSendSuccess(FileTxStatus fEmptyApproveStatus, Object context) {
           //事件触发条件：清空审批上链交易发送成功，等待区块链执行处理。 
           FileTxBlockInfo oFileTxBlockInfo = fEmptyApproveStatus.txBlockData;
           System.out.println("清空审批上链交易Hash =" + oFileTxBlockInfo.txHash);
        }
    }
~~~    

##### onTxSendFailure

此事件在清空审批上链交易发送失败时发生。事件触发后会返回错误信息。文件本体清空审批上链交易需重新提交。

    
~~~java    
    public void onTxSendFailure(FileTxStatus fEmptyApproveStatus, Object context);
~~~    

参数

fEmptyApproveStatus FileTxStatus

包含"文件本体清空审批"上链交易的当前处理状态信息的对象。

fEmptyApproveStatus中将包含如下返回信息，详细解释请参看FileTxStatus 对象相关描述：

| errorCode，message |

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java    
    FileEmptyApprove oFileEmptyApprove = new FileEmptyApprove() {
        @Override
        public void onTxSendFailure(FileTxStatus fEmptyApproveStatus, Object context) {
           //事件触发条件：清空审批上链交易发送失败。
           //事件触发后，会返回错误信息。
           System.out.println("清空审批上链交易发送失败的返回结果=" + fEmptyApplyStatus.message);
        }
    }
~~~   

##### onTxExecSuccess

此事件在清空审批上链交易执行成功，等待落块确认时发生。

    
~~~java    
    public void onTxExecSuccess(FileTxStatus fEmptyApproveStatus, Object context);
~~~

参数

fEmptyApproveStatus FileTxStatus

包含"文件本体清空审批"上链交易的当前处理状态信息的对象。

fEmptyApproveStatus中将包含如下返回信息，详细解释请参看FileTxStatus 对象相关描述：

|
status，errorCode，message，fileID，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight
|

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java    
    FileEmptyApprove oFileEmptyApprove = new FileEmptyApprove() {
        @Override
        public void onTxExecSuccess(FileTxStatus fEmptyApproveStatus, Object context) {
           //事件触发条件：清空审批上链交易执行成功，等待落块确认。
           FileTxBlockInfo oFileTxBlockInfo = fEmptyApproveStatus.txBlockData;
           String fileIDFromCaller = context;
           System.out.println("链外应用系统调用端的唯一标识=" + fileIDFromCaller);
           System.out.println("文件链上ID =" + oFileTxBlockInfo.fileID);
           System.out.println("清空审批上链交易Hash=" + oFileTxBlockInfo.txHash);
           System.out.println("交易执行时间戳=" + oFileTxBlockInfo.txExecTimestamp);
           System.out.println("交易所在区块hash=" + oFileTxBlockInfo.blockHash);
           System.out.println("交易所在区块生成时间戳" + oFileTxBlockInfo.blockedTimestamp);
           System.out.println("交易所在区块高度=" + oFileTxBlockInfo.blockHeight);
        }
    }
~~~    

##### onTxExecFailure

此事件在清空审批上链交易执行失败，清空审批结果未在链上生效时发生。事件触发后会返回错误信息。文件本体清空审批上链交易需重新提交。

    
~~~java    
    public void onTxExecFailure(FileTxStatus fEmptyApproveStatus, Object context);
~~~

参数

fEmptyApproveStatus FileTxStatus

包含"文件本体清空审批"上链交易的当前处理状态信息的对象。

fEmptyApproveStatus中将包含如下返回信息，详细解释请参看FileTxStatus 对象相关描述：

|
status，errorCode，message，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight
|

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java    
    FileEmptyApprove oFileEmptyApprove = new FileEmptyApprove() {
        @Override
        public void onTxExecFailure(FileTxStatus fEmptyApproveStatus, Object context) {
           //事件触发条件：清空审批上链交易执行失败，清空审批结果未在链上生效。 
           //事件触发后，会返回错误信息。清空审批上链交易请求需重新提交。
           FileTxBlockInfo oFileTxBlockInfo = fEmptyApproveStatus.txBlockData;
           String fileIDFromCaller = context;
           System.out.println("链外应用系统调用端的唯一标识=" + fileIDFromCaller);
           System.out.println("文件链上ID =" + oFileTxBlockInfo.fileID);
           System.out.println("清空审批上链交易Hash=" + oFileTxBlockInfo.txHash);
           System.out.println("交易执行时间戳=" + oFileTxBlockInfo.txExecTimestamp);
           System.out.println("交易所在区块hash=" + oFileTxBlockInfo.blockHash);
           System.out.println("交易所在区块生成时间戳" + oFileTxBlockInfo.blockedTimestamp);
           System.out.println("交易所在区块高度=" + oFileTxBlockInfo.blockHeight);
           System.out.println("链上执行失败的返回结果=" + fEmptyApproveStatus.message);
        }
    }
~~~    

##### onError

此为事件在FileEmptyApprove调用出现异常时发生。事件触发后返回异常信息。

    
~~~java    
    public void onError(TxException e, Object context);
~~~    

示例：

    
~~~java    
    FileEmptyApprove oFileEmptyApprove = new FileEmptyApprove() {
        @Override
        public void onError(TxException e, Object context) {
           //事件触发条件：FileEmptyApprove调用出现异常。并返回异常信息。
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
TxSendSuccess | 上链交易发送成功。 | 节点确认接收文件本体清空审批上链交易请求，等待区块链执行处理。  
TxSendFailure | 上链交易发送失败。 | 节点接收文件本体清空审批上链交易请求失败，文件本体清空审批上链交易请求需重新提交。  
TxExecSuccess | 上链交易执行成功。 | 文件本体清空审批上链交易执行成功，等待落块确认。  
TxExecFailure | 上链交易执行失败。 | 文件本体清空审批上链交易执行失败，清空审批结果未在链上生效。清空审批上链交易请求需重新提交。  
TxBlockConfirm | 上链交易落块确认。 | 文件本体清空审批上链交易执行成功，并获得落块确认。  
TxBlkCfmFailure | 上链交易落块确认失败。 | 清空审批上链交易落块确认失败，清空审批被链回滚。清空审批上链交易请求需重新提交。  
  
### FileDigestCheck

用于进行链上文件验真的操作对象。

#### 构造函数

##### FileDigestCheck (Frontend, String)

    
~~~java    
    public FileDigestCheck (Frontend frontendServer, String businessDomainID);
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
    
    FileDigestCheck oFileDigestCheck = new FileDigestCheck(oFrontend, businessDomainID);
~~~    

##### FileDigestCheck ()

构造一个FileDigestCheck对象。后续需赋值要访问前置节点对象和要访问的业务域。

    
~~~java    
    public FileDigestCheck ();
~~~    

#### 属性

##### frontend

设置要访问的前置节点服务器对象。

    
~~~java    
    public Frontend frontend { set; get; }
~~~    

##### bizDomain

设置要进行文件验真的文件所在链上业务域的唯一标识。

    
~~~java    
    public String bizDomain { set; get; }
~~~    

##### fileID

设置要进行文件验真的链上文件的文件链上ID。

    
~~~java    
    public String fileID { set; get; }
~~~    

##### versionID

设置要验证的链上文件指定版本的文件版本ID。如果此属性不赋值，则默认是和链上文件的最新版本（即当前版本）的文件指纹特征信息进行验证。

    
~~~java    
    public String versionID { set; get; }
~~~    

##### fileDigest

本地文件的本体指纹特征值，用于验证本地文件是否和链上文件的特定版本的文件本体是否是一致的，是否被篡改过。文件本体内容如有任何微小的变化，对应的指纹特征值就会发生变化。

    
~~~java    
    public String fileDigest { set; get; }
~~~    

#### 方法

##### query

以同步调用方式，向指定的前置节点服务器提交"文件验真"链上查询请求，开始进行文件验真链上操作。

    
~~~java    
    public FileDigestCheckStatus query();
~~~    

**返回**

FileDigestCheckStatus

包含"文件验真"链上操作的查询结果信息。

### FileVersionsFetch

用于进行链上文件历史版本列表获取的操作对象。

#### 构造函数

##### FileVersionsFetch (Frontend, String)

    
~~~java    
    public FileVersionsFetch (Frontend frontendServer, String businessDomainID);
~~~    

**参数**

frontendServer Frontend

前置节点服务器对象。

businessDomainID String

设置要访问的业务域标识。初始化时可以为空，后续可通过bizDomain属性赋值。businessDomainID在提交链上获取请求前必须赋值。

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
    
    FileVersionsFetch oFileVerFetch = new FileVersionsFetch(oFrontend, businessDomainID);
~~~    

##### FileVersionsFetch ()

构造一个FileVersionsFetch对象。后续需赋值要访问前置节点对象和要访问的业务域。

    
~~~java    
    public FileVersionsFetch ();
~~~    

#### 属性

##### frontend

设置要访问的前置节点服务器对象。

    
~~~java    
    public Frontend frontend { set; get; }
~~~    

##### bizDomain

设置要获取文件版本列表的文件所在链上业务域的唯一标识。

    
~~~java    
    public String bizDomain { set; get; }
~~~    

##### fileID

设置要获取文件版本列表的链上文件的文件链上ID。

    
~~~java    
    public String fileID { set; get; }
~~~    

##### fetcherID

设置要获取文件版本列表的获取者数字身份标识。文件获取者必须拥有文件读取权限，owners、sharers、readers中的一个数字身份标识。

    
~~~java    
    public String fetcherIDv{ set; get; }
~~~    

##### eventContext

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。

    
~~~java    
    public Object eventContext { set; get; }
~~~    

示例：

    
~~~java    
    //要获取文件版本列表的文件在链外应用系统数据库中的唯一标识
    String fileIDFromCaller = "57bee7e51eb48b2896288021b7374cfc78c0bac8";
    FileVersionsFetch.eventContext =fileIDFromCaller;
~~~    

#### 方法

##### query

向指定的前置节点服务器提交"文件版本列表获取"链上获取请求。调用此方法，将会通过onSuccess 和onFailure事件返回查询结果。

    
~~~java    
    public void query(String fetcherPrivateKey);
~~~    

**参数**

fetcherPrivateKey String

设置要进行文件版本列表获取的获取者数字身份私钥，fetcherID对应的私钥。私钥用于对"文件版本列表获取"链上获取请求进行签名确权。

**示例：**

    
~~~java    
    FileVersionsFetch oFileVerFetch = new FileVersionsFetch () {
        @Override
        public void onSuccess(FileVersionsFetchStatus fVerFetchStatus, Object context) {
         //事件触发条件：文件版本列表成功下载。
        }
    };
    
    //获取者数字身份私钥
    String fetcherPrivateKey = "8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc";
    //进行"文件版本列表获取"链上操作提交
    oFileVerFetch.query (fetcherPrivateKey);
~~~    

##### createRqBody

和前置节点进行交互，生成"文件版本列表获取"链上操作对应的链上获取请求体，以便使用获取者数字身份对应的私钥对链上获取请求体进行确权签名。

    
~~~java    
    public String createRqBody();
~~~    

**返回**

String

序列化的"文件版本列表获取"链上获取请求体。

**示例：**

    
~~~java    
    //生成"文件版本列表获取"链上获取请求体
    String fVerFetchRqBody= oFileVersionsFetch.createRqBody();
    //用获取者数字身份对"文件版本列表获取"链上获取请求体进行签名
    String fetcherPrivateKey = "8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc";
    String txSign = CryptoUtil.crypto.signature(fVerFetchRqBody, fetcherPrivateKey);
~~~    

##### queryRqBody

使用文件版本列表获取链上获取请求体原文和fetcherID中数字身份对获取请求体的签名结果信息，向指定的前置节点服务器提交"文件版本列表获取"链上获取请求。调用此方法，将会通过onSuccess
和onFailure事件返回查询结果。

    
~~~java    
    public void queryRqBody (String fVerFetchRqBody, String txSign);
~~~    

**参数**

fVerFetchRqBody String

文件版本列表获取链上获取请求体原文

txSign String

文件版本列表获取链上获取请求体签名结果信息

**示例：**

    
~~~java    
    //【程序A】准备"文件版本列表获取"链上获取请求体
    FileVersionsFetch oPrepareFVerFetchRqBody = new FileVersionsFetch();
    oPrepareFVerFetchRqBody.fileID = "88021b73bac8b248b2896278c04a4378962e51eb";
    oPrepareFVerFetchRqBody.fetcherID = "0d64ad368ebc37ddb80424376408cb7bb88ff328"; 
    String fVerFetchRqBody = oPrepareFVerFetchRqBody.createRqBody ();
    
    //【程序B】在外部使用数字身份签名应用进行fVerFetchRqBody签名
    String fetcherPrivateKey = "8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc";
    String txSign = CryptoUtil.crypto.signature(fVerFetchRqBody, fetcherPrivateKey);
    
    //【程序A】提交"文件版本列表获取"链上获取请求，并跟踪链上处理状态
    FileVersionsFetch oFileVerFetch = new FileVersionsFetch (frontendServer, businessDomainID);
    oFileVerFetch.eventContext =fileIDFromCaller;
    oFileVerFetch.queryRqBody (fVerFetchRqBody, txSign);
~~~    

#### 事件

##### onSuccess

此事件在"文件版本列表获取"链上操作处理彻底完成，文件版本列表已成功下载时发生。

    
~~~java    
    public void onSuccess (FileVersionsFetchStatus fVerFetchStatus, Object context);
~~~    

参数

fVerFetchStatus FileVersionsFetchStatus

包含"文件版本列表获取"链上操作的当前处理状态信息的对象。

fVerFetchStatus中将包含如下返回信息，详细解释请参看FileVersionsFetchStatus对象相关描述：

| status，errorCode，message，versions |

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java    
    FileVersionsFetch oFileVersionsFetch = new FileVersionsFetch() {
        @Override
        public void onSuccess(FileVersionsFetchStatus fVerFetchStatus, Object context) {
           //事件触发条件：在"获取文件版本列表"成功下载。
           String fileIDFromCaller = context;
           System.out.println("链外应用系统调用端的唯一标识=" + fileIDFromCaller);
           List<FileVersionInfo> oFileVersionInfo = fVerFetchStatus.versions;
           for (int i=0; i< oFileVersionInfo.length; i++) {
             System.out.println("文件版本标识: " + oFileVersionInfo[i].versionID);
             System.out.println("文件版本的生成时间戳: " + oFileVersionInfo[i].timestamp);
    
             //获取指定版本的文件元数据
             FileMetaFetch oFileMetaFetch = new FileMetaFetch();
    
             //指定获取元数据的链上文件的文件链上ID。
             oFileMetaFetch.fileID = "21b73bac878c04a437b28962e51eb48b28962880";
             //指定获取元数据的链上文件的文件版本ID。
             oFileMetaFetch.versionID = oFileVersionInfo[i].versionID;
                          ......
             //进行"文件元数据获取"上链操作提交
             FileMetaFetchStatus oFileMetaFetchStatus = oFileMetaFetch.query(readerPrivateKey);
           }
        }
    }
~~~    

##### onFailure

此事件在"获取文件版本列表"链上操作处理失败，文件版本列表未被下载时发生。

    
~~~java    
    public void onSuccess (FileVersionsFetchStatus fVerFetchStatus, Object context);
~~~    

参数

fVerFetchStatus FileVersionsFetchStatus

包含"文件版本列表获取"链上操作的当前处理状态信息的对象。

fVerFetchStatus中将包含如下返回信息，详细解释请参看FileVersionsFetchStatus对象相关描述：

| errorCode，message |

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java    
    FileVersionsFetch oFileVersionsFetch = new FileVersionsFetch() {
        @Override
        public void onFailure(FileVersionsFetchStatus fVerFetchStatus, Object context) {
          //事件触发条件：在"获取文件版本列表"链上操作处理失败，文件版本列表未被下载。
          String fileIDFromCaller = context;
          System.out.println("链外应用系统调用端的唯一标识=" + fileIDFromCaller);
          System.out.println("查询失败=" + fVerFetchStatus.message);
        }
    }
~~~    

##### onError

此为事件在FileVersionsFetch调用出现异常时发生。事件触发后返回异常信息。

    
~~~java    
    public void onError(FetchException e, Object context);
~~~    

示例：

    
~~~java    
    FileVersionsFetch oFileVersionsFetch = new FileVersionsFetch() {
        @Override
        public void onError(FetchException e, Object context) {
           //事件触发条件：FileVersionsFetch调用出现异常。并返回异常信息。
           String fileIDFromCaller = context;
           System.out.println("链外应用系统调用端的唯一标识=" + fileIDFromCaller);
           System.out.println("异常状态描述=" + e.state);
           System.out.println("异常信息=" + e.exc);
        }
    }
~~~    

### FileRightsFetch

用于进行链上文件权限列表获取的操作对象。权限列表包括：所有者列表、分享者列表、读取者列表。

  * 文件所有者有权获取完整的所有者列表和所有者分别授权的读取者列表；完整的分享者列表和分享者分别授权的读取者列表。
  * 文件分享者有权获取自己授权的读取者列表。
  * 文件读取者无权获取文件权限列表。

#### 构造函数

##### FileRightsFetch (Frontend, String)

    
~~~java    
    public FileRightsFetch (Frontend frontendServer, String businessDomainID);
~~~    

**参数**

frontendServer Frontend

前置节点服务器对象。

businessDomainID String

设置要访问的业务域标识。初始化时可以为空，后续可通过bizDomain属性赋值。businessDomainID在提交链上获取请求前必须赋值。

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
    
    FileRightsFetch oFileRightsFetch = new FileRightsFetch(oFrontend, businessDomainID);
~~~    

##### FileRightsFetch ()

构造一个FileRightsFetch对象。后续需赋值要访问前置节点对象和要访问的业务域。

    
~~~java    
    public FileRightsFetch ();
~~~    

#### 属性

##### frontend

设置要访问的前置节点服务器对象。

    
~~~java    
    public Frontend frontend { set; get; }
~~~    

##### bizDomain

设置要获取文件权限列表的文件所在链上业务域的唯一标识。

    
~~~java    
    public String bizDomain { set; get; }
~~~    

##### fileID

设置要获取文件权限列表的链上文件的文件链上ID。

    
~~~java    
    public String fileID { set; get; }
~~~    

##### fetcherID

设置要获取文件权限列表的获取者数字身份标识，owners、sharers、readers中的一个数字身份标识。

    
~~~java    
    public String fetcherID { set; get; }
~~~   

##### eventContext

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。

    
~~~java    
    public Object eventContext { set; get; }
~~~    

示例：

    
~~~java    
    //要获取文件权限列表的文件在链外应用系统数据库中的唯一标识
    String fileIDFromCaller = "57bee7e51eb48b2896288021b7374cfc78c0bac8";
    FileRightsFetch.eventContext =fileIDFromCaller;
~~~    

#### 方法

##### query

向指定的前置节点服务器提交"文件权限列表获取"链上获取请求。调用此方法，将会通过onSuccess 和onFailure事件返回查询结果。

    
~~~java    
    public void query(String fetcherPrivateKey);
~~~    

**参数**

fetcherPrivateKey String

设置要进行文件权限列表获取的获取者数字身份私钥，fetcherID对应的私钥。私钥用于对"文件权限列表获取"链上获取请求进行签名确权。

**示例：**

    
~~~java    
    FileRightsFetch oFileRightsFetch = new FileRightsFetch () {
        @Override
        public void onSuccess(FileRightsFetchStatus fRightsFetchStatus, Object context) {
         //事件触发条件：文件权限列表成功下载。
        }
    };
    
    //获取者数字身份私钥
    String fetcherPrivateKey = "8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc";
    //进行"文件权限列表获取"链上操作提交
    oFileRightsFetch.query (fetcherPrivateKey);
~~~    

##### createRqBody

和前置节点进行交互，生成"文件权限列表获取"链上操作对应的链上获取请求体，以便使用获取者数字身份对应的私钥对链上获取请求体进行确权签名。

    
~~~java    
    public String createRqBody();
~~~    

**返回**

String

序列化的"文件权限列表获取"链上获取请求体。

**示例：**

    
~~~java    
    //生成"文件权限列表获取"链上获取请求体
    String fRightsFetchRqBody = oFileRightsFetch.createRqBody ();
    //用获取者数字身份对"文件权限列表获取"链上获取请求体进行签名
    String fetcherPrivateKey = "8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc";
    String txSign = CryptoUtil.crypto.signature(fRightsFetchRqBody, fetcherPrivateKey);
~~~    

##### queryRqBody

使用文件权限列表获取链上获取请求体原文和fetcherID中数字身份对获取请求体的签名结果信息，向指定的前置节点服务器提交"文件权限列表获取"链上获取请求。调用此方法，将会通过onSuccess
和onFailure事件返回查询结果。

    
~~~java    
    public void queryRqBody (String fRightsFetchRqBody, String txSign);
~~~    

**参数**

fRightsFetchRqBody String

文件权限列表获取链上获取请求体原文

txSign String

文件权限列表获取链上获取请求体签名结果信息

**示例：**

    
~~~java    
    //【程序A】准备"文件权限列表获取"链上获取请求体
    FileRightsFetch oPrepareFRightsFetchRqBody = new FileRightsFetch();
    oPrepareFRightsFetchRqBody.fileID = "88021b73bac8b248b2896278c04a4378962e51eb";
    oPrepareFRightsFetchRqBody.fetcherID = "0d64ad368ebc37ddb80424376408cb7bb88ff328"; 
    String fRightsFetchRqBody = oPrepareFRightsFetchRqBody.createRqBody ();
    
    //【程序B】在外部使用数字身份签名应用进行fRightsFetchRqBody签名
    String fetcherPrivateKey = "8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc";
    String txSign = CryptoUtil.crypto.signature(fRightsFetchRqBody, fetcherPrivateKey);
    
    //【程序A】提交"文件权限列表获取"链上获取请求，并跟踪链上处理状态
    FileRightsFetch oFileRightsFetch = new FileRightsFetch (frontendServer, businessDomainID);
    oFileRightsFetch.eventContext =fileIDFromCaller;
    oFileRightsFetch.queryRqBody (fRightsFetchRqBody, txSign);
~~~    

#### 事件

##### onSuccess

此事件在"文件权限列表获取"链上操作处理彻底完成，文件权限列表已成功下载时发生。

    
~~~java    
    public void onSuccess (FileRightsFetchStatus fRightsFetchStatus, Object context);
~~~    

参数

fRightsFetchStatus FileRightsFetchStatus

包含"文件权限列表获取"链上操作的当前处理状态信息的对象。

fRightsFetchStatus中将包含如下返回信息，详细解释请参看FileRightsFetchStatus对象相关描述：

| status，errorCode，message，fileRights |

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java    
    FileRightsFetch oFileRightsFetch = new FileRightsFetch() {
        @Override
        public void onSuccess(FileRightsFetchStatus fRightsFetchStatus, Object context) {
           //事件触发条件：在"获取文件权限列表"成功下载。
           String fileIDFromCaller = context;
           System.out.println("链外应用系统调用端的唯一标识=" + fileIDFromCaller);
           FileRightsInfo oFileRightsInfo = fRightsFetchStatus.fileRights;
    
           for (int i=0; i< oFileRightsInfo.owners.length; i++) {
             System.out.println("文件所有者身份标识: " + oFileRightsInfo.owners[i]);
           }
    
           //文件所有者所授权的分享者列表 
           SharerList[] oSharersSetByOwner = fRightsFetchStatus.sharersByOwner;
           for (int j=0; j< oSharersSetByOwner.length; j++) {
             System.out.println("有授权分享者的文件所有者数字身份标识=" + oSharersSetByOwner[j].ownerID);
             for (int n=0; n< oSharersSetByOwner[j].sharers.length; n++) {
                System.out.println("当前文件所有者授权的分享者数字身份标识=" + oSharersSetByOwner[i].sharers[n]);
             }
           }
        }
    }
~~~    

##### onFailure

此事件在"获取文件权限列表"链上操作处理失败，文件权限列表未被下载时发生。

    
~~~java    
    public void onSuccess (FileRightsFetchStatus fRightsFetchStatus, Object context);
~~~    

参数

fRightsFetchStatus FileRightsFetchStatus

包含"获取文件权限列表"链上操作的当前处理状态信息的对象。

fRightsFetchStatus中将包含如下返回信息，详细解释请参看FileRightsFetchStatus对象相关描述：

| errorCode，message |

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java    
    FileRightsFetch oFileRightsFetch = new FileRightsFetch() {
        @Override
        public void onFailure(FileRightsFetchStatus fRightsFetchStatus, Object context) {
          //事件触发条件：在"获取文件权限列表"链上操作处理失败，文件权限列表未被下载。
          String fileIDFromCaller = context;
          System.out.println("链外应用系统调用端的唯一标识=" + fileIDFromCaller);
          System.out.println("查询失败=" + fRightsFetchStatus.message);
        }
    }
~~~    

##### onError

此为事件在FileRightsFetch调用出现异常时发生。事件触发后返回异常信息。

    
~~~java    
    public void onError(FetchException e, Object context);
~~~    

示例：

    
~~~java    
    FileRightsFetch oFileRightsFetch = new FileRightsFetch() {
        @Override
        public void onError(FetchException e, Object context) {
           //事件触发条件：FileRightsFetch调用出现异常。并返回异常信息。
           String fileIDFromCaller = context;
           System.out.println("链外应用系统调用端的唯一标识=" + fileIDFromCaller);
           System.out.println("异常状态描述=" + e.state);
           System.out.println("异常信息=" + e.exc);
        }
    }
~~~