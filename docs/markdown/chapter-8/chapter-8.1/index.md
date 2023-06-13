
## com.coolawchain.sdk.structdata

### DataUpload

用于进行结构数据上链保存的操作对象。

#### 构造函数

##### DataUpload (Frontend, String)

    
~~~java    
    public DataUpload (Frontend frontendServer, String businessDomainID);
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
    
    DataUpload oDataUpload = new DataUpload (oFrontend, businessDomainID);
~~~    

##### DataUpload ()

构造一个DataUpload对象。后续需赋值要访问前置节点对象和要访问的业务域。

    
~~~java  
    public DataUpload ();
~~~

#### 属性

##### frontend

设置要访问的前置节点服务器对象。

    
~~~java  
    public Frontend frontend { set; get; }
~~~

##### bizDomain

设置要上链保存的数据所在链上业务域的唯一标识。

    
~~~java
    public String bizDomain { set; get; }
~~~

##### dataContent

设置要上链保存的数据体。建议使用JSON或XML等格式构建，然后序列化成String的类型进行存储。dataContent的信息将被区块链加密保存。

    
~~~java    
    public String dataContent { set; get; }
~~~   

##### dataProperty

设置要上链保存的数据附属属性信息。附属属性建议使用JSON或XML等格式构建，然后序列化成String的类型进行存储。DdataProperty的信息将被区块链加密保存。

如果想要对链上已保存的dataProperty进行清空处理，则此属性需设置NULL。

    
~~~java  
    public String dataProperty { set; get; }
~~~  

##### encName

设置敏感数据的链上加密方式得名称。

    
~~~java
    public String encName{ set; get; }
~~~   

##### owner

设置提交上链交易的数据所有者数字身份标识，必须是owners中的一个数字身份标识。

    
~~~java    
    public RoleItem owner { set; get; }
~~~  

  * RoleItem

数字身份标识对象信息。

  * 属性

    * addr

数字身份标识。

    * encKey

对称加密的秘钥。

##### owners

设置链上数据的所有者数字身份标识列表。

    
~~~java
    public RoleItem[] owners { set; get; }
~~~   

示例：

    
~~~java     
    RoleItem[] ownerIDs =
    { new RoleItem
    (e51eb48b57bee72896288021bcfc78c0bac87374,6ca423b9ab5eaab00a882a807652ab6),
    new RoleItem
    (e51eb48b57bee72896288021bcfc78c0bac87374,6ca423b9ab5eaab00a882a807652ab6)
    }
    oDataUpload.owners = ownerIDs;
~~~    

##### sharers

设置要授予结构数据分享权限的数字身份标识列表。结构数据分享者有权添加数据读取者和删除自己添加的读取者数字身份标识。可以后续通过"数据授权"链上操作进行授权（DataAuthorise）。

如果dataID属性设置了已保存于链上的结构数据链上ID，此属性区块链做无效处理。即结构数据更新时，不会进行结构数据分享权限更新处理。

    
~~~java    
    public RoleItem[] sharers { set; get; }
~~~    

**示例：**

    
~~~java     
    //设置要授予结构数据分享权限的数字身份标识列表
    String[] sharerIDs = 
    { new RoleItem
    (e51eb48b57bee72896288021bcfc78c0bac87374,6ca423b9ab5eaab00a882a807652ab6),
    new RoleItem
    (e51eb48b57bee72896288021bcfc78c0bac87374,6ca423b9ab5eaab00a882a807652ab6)
    }
    oDataUpload.sharers = sahrerIDs;
~~~    

##### readers

设置要授予数据读取权限的数字身份标识列表。可以后续通过"数据授权"链上操作进行授权（DataAuthorise）。

如果dataID属性设置了已保存于链上的数据链上ID，此属性区块链做无效处理。即数据更新时，不会进行数据读取权限更新处理。

    
~~~java    
    public RoleItem[] readers { set; get; }
~~~    

**示例：**

    
~~~java     
    //设置要授予数据读取权限的数字身份标识列表
    String[] readers= 
    { new RoleItem
    (e51eb48b57bee72896288021bcfc78c0bac87374,6ca423b9ab5eaab00a882a807652ab6),
    new RoleItem
    (e51eb48b57bee72896288021bcfc78c0bac87374,6ca423b9ab5eaab00a882a807652ab6)
    }
    oDataUpload.sharers = readers;
~~~    

##### eventContext

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。

    
~~~java    
    public Object eventContext { set; get; }
~~~    

示例：

    
~~~java     
    //上链保存的数据在链外应用系统数据库中的唯一标识
    String dataIDfromBizSystem = "57bee7e51eb48b2896288021b7374cfc78c0bac8";
    oDataUpload.eventContext = dataIDfromBizSystem;
~~~    

#### 方法

##### submit

向指定的前置节点服务器提交"数据保存"上链交易请求，开始进行数据保存链上操作。调用此方法，将会通过onTxBlockConfirm、onTxSendSuccess等事件返回链上处理结果。

    
~~~java    
    public void submit(String ownerPrivateKey);
~~~    

**参数**

ownerPrivateKey String

设置要进行上链保存的数据所有者的数字身份私钥，ownerID对应的私钥。私钥用于对"数据保存"上链交易进行签名确权。

**示例：**

    
~~~java     
    //--链上数据所有者数字身份私钥
    String ownerPrivateKey = "8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc";
    //进行数据保存上链操作提交
    oDataUpload.submit (ownerPrivateKey);
~~~    

##### createTxBody

和前置节点进行交互，生成"数据保存"链上操作对应的上链交易体，以便使用ownerID对应的私钥对上链交易体进行确权签名。

    
~~~java    
    public String createTxBody();
~~~    

**返回**

String

序列化的"数据保存"上链交易体。

**示例：**

    
~~~java     
    //生成"数据保存"上链交易体
    String dataUploadTxBody= oDataUpload.createTxBody();
    //用数据所有者数字身份对"数据保存"上链交易体进行签名
    String ownerPrivateKey = "3161be862236ae966004390908a5facb8f45763e38ce5cfb378e493f91a7873d";
    //--对"数据保存"上链交易体进行签名，并生成签名结果
    String txSign = CryptoUtil.crypto.signature(dataUploadTxBody, ownerPrivateKey);
~~~    

##### submitTxBody

使用数据保存上链交易体原文和ownerID中数字身份对上链交易体的签名结果信息，向指定的前置节点服务器提交"数据保存"上链交易请求。调用此方法，将会通过onTxBlockConfirm、onTxSendSuccess等事件返回链上处理结果。

    
~~~java    
    public void submitTxBody(String dataUploadTxBody, String txSign);
~~~    

**参数**

dataUploadTxBody String

数据保存上链交易体原文

txSign String

数据保存上链交易体签名结果信息

**示例：**

    
~~~java     
    //【程序A】准备数据保存上链交易体
    DataUpload oPrepareDataUploadTxBody = new DataUpload();
    oPrepareDataUploadTxBody.dataID = "88021b73bac8b248b2896278c04a4378962e51eb";
    oPrepareDataUploadTxBody.ownerID = "0d64ad368ebc37ddb80424376408cb7bb88ff328"; 
    String[] ownersList = {"0d64ad368ebc37ddb80424376408cb7bb88ff328"};
    oPrepareDataUploadTxBody.owners = ownersList;
    oPrepareDataUploadTxBody.dataContent = "{'姓名': '张三','性别': '男'}";
    oPrepareDataUploadTxBody.dataProperty = "人员基本信息描述";
    
    String dataUploadTxBody = oPrepareDataUploadTxBody.createTxBody();
    
    //【程序B】在外部使用数字身份签名应用进行dataUploadTxBody签名
    String ownerPrivateKey = "3161be862236ae966004390908a5facb8f45763e38ce5cfb378e493f91a7873d";
    String txSign = CryptoUtil.crypto.signature(dataUploadTxBody, ownerPrivateKey);
    
    //【程序A】提交数据保存上链交易，并跟踪链上处理状态
    DataUpload oDataUpload = new DataUpload (frontendServer, businessDomainID);
    oDataUpload.eventContext =dataIDfromBizSystem;
    oDataUpload.submitTxBody (dataUploadTxBody, txSign);
~~~    

#### 事件

##### onTxBlockConfirm

此事件在结构数据上链保存成功，并获得落块确认时发生。

    
~~~java    
    public void onTxBlockConfirm(DataTxStatus dUploadStatus, Object context);
~~~    

参数

dUploadStatus DataUploadStatus

包含"数据保存"链上操作的当前处理状态信息的对象。

dUploadStatus中将包含如下返回信息，详细解释请参看DataUploadStatus对象相关描述：

|
status，errorCode，message，dataID，versionID，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight
|

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java     
    DataUpload oDataUpload = new DataUpload() {
        @Override
        public void onTxBlockConfirm(DataTxStatus dUploadStatus, Object context) {
           //事件触发条件：结构数据上链保存成功，并获得落块确认。
           DataTxBlockInfo oDataTxBlockInfo = dUploadStatus.txBlockData;
           System.out.println("数据链上ID =" + oDataTxBlockInfo.dataID);
           System.out.println("数据当前版本ID =" + oDataTxBlockInfo.versionID);
           String dataIDFromCaller = context;
           System.out.println("链外应用系统调用端的唯一标识=" + dataIDFromCaller);
        }
    }
~~~    

##### onTxBlkCfmFailure

此事件在结构数据保存上链交易落块确认失败，上链保存的结构数据被链回滚时发生。事件触发后，会返回错误信息。结构数据保存上链交易请求需重新提交。

    
~~~java    
    public void onTxBlockCfmFailure(DataTxStatus dUploadStatus, Object context);
~~~    

参数

dUploadStatus DataUploadStatus

包含"数据保存"链上操作的当前处理状态信息的对象。

dUploadStatus中将包含如下返回信息，详细解释请参看DataUploadStatus对象相关描述：

|
status，errorCode，message，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight
|

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java     
    DataUpload oDataUpload = new DataUpload() {
        @Override
        public void onTxBlockCfmFailure(DataTxStatus dUploadStatus, Object context) {
           //事件触发条件：结构数据保存上链交易落块确认失败，上链保存的结构数据被链回滚。
           //事件触发后，会返回错误信息。结构数据保存上链交易请求需重新提交。
           DataTxBlockInfo oDataTxBlockInfo = dUploadStatus.txBlockData;
           System.out.println("结构数据保存上链交易Hash =" + oDataTxBlockInfo.txHash);
           System.out.println("结构数据保存上链交易落块确认失败的返回结果=" + dUploadStatus.message);
           String dataIDFromCaller = context;
           System.out.println("链外应用系统调用端的唯一标识=" + dataIDFromCaller);
        }
    }
~~~    

##### onTxSendSuccess

此事件在结构数据保存上链交易发送成功，等待区块链执行处理时发生。

    
~~~java    
    public void onTxSendSuccess(DataTxStatus dUploadStatus, Object context);
~~~    

参数

dUploadStatus DataUploadStatus

包含"数据保存"链上操作的当前处理状态信息的对象。

dUploadStatus中将包含如下返回信息，详细解释请参看DataUploadStatus对象相关描述：

| status，errorCode，message，txHash |

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java     
    DataUpload oDataUpload = new DataUpload(){
        @Override
        public void onTxSendSuccess(DataTxStatus dUploadStatus, Object context) {
           //事件触发条件：结构数据保存上链交易发送成功，等待区块链执行处理。 
           DataTxBlockInfo oDataTxBlockInfo = dUploadStatus.txBlockData;
           System.out.println("结构数据保存上链交易Hash =" + oDataTxBlockInfo.txHash);
        }
    }
~~~    

##### onTxSendFailure

此事件在结构数据保存上链交易发送失败时发生。数据保存上链交易请求需重新提交。

    
~~~java    
    public void onTxSendFailure(DataTxStatus dUploadStatus, Object context);
~~~    

参数

dUploadStatus DataUploadStatus

包含"数据保存"链上操作的当前处理状态信息的对象。

dUploadStatus中将包含如下返回信息，详细解释请参看DataUploadStatus对象相关描述：

| errorCode，message |

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java     
    DataUpload oDataUpload = new DataUpload() {
        @Override
        public void onTxSendFailure(DataTxStatus dUploadStatus, Object context) {
           //事件触发条件：结构数据保存上链交易发送失败。
           System.out.println("结构数据保存上链交易发送失败的返回结果=" + dUploadStatus.message);
        }
    }
~~~    

##### onTxExecSuccess

此事件在结构数据保存上链交易执行成功，结构数据上链保存成功，等待落块确认时发生。

    
~~~java    
    public void onTxExecSuccess(DataTxStatus dUploadStatus, Object context);
~~~    

参数

dUploadStatus DataUploadStatus

包含"数据保存"链上操作的当前处理状态信息的对象。

dUploadStatus中将包含如下返回信息，详细解释请参看DataUploadStatus对象相关描述：

|
status，errorCode，message，dataID，versionID，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight
|

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java     
    DataUpload oDataUpload = new DataUpload(){
        @Override
        public void onTxExecSuccess(DataTxStatus dUploadStatus, Object context) {
           //事件触发条件：结构数据保存上链交易执行成功，结构数据上链保存成功，等待落块确认。
           DataTxBlockInfo oDataTxBlockInfo = dUploadStatus.txBlockData;
           String dataIDFromCaller = context;
           System.out.println("链外应用系统调用端的唯一标识=" + dataIDFromCaller);
           System.out.println("数据链上ID =" + oDataTxBlockInfo.dataID);
           System.out.println("数据当前版本ID=" + oDataTxBlockInfo.versionID);
           System.out.println("结构数据保存上链交易Hash=" + oDataTxBlockInfo.txHash);
           System.out.println("交易执行时间戳=" + oDataTxBlockInfo.txExecTimestamp.toString());
           System.out.println("交易所在区块hash=" + oDataTxBlockInfo.blockHash);
           System.out.println("交易所在区块生成时间戳" + oDataTxBlockInfo.blockedTimestamp.toString());
           System.out.println("交易所在区块高度=" + oDataTxBlockInfo.blockHeight);
        }
    }
~~~    

##### onTxExecFailure

此事件在结构数据保存上链交易执行失败，结构数据未上链保存时发生。事件触发后会返回错误信息。数据保存上链交易请求需重新提交。

    
~~~java    
    public void onTxExecFailure(DataTxStatus dUploadStatus, Object context);
~~~    

参数

dUploadStatus DataUploadStatus

包含"数据保存"链上操作的当前处理状态信息的对象。

dUploadStatus中将包含如下返回信息，详细解释请参看DataUploadStatus对象相关描述：

|
status，errorCode，message，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight
|

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java     
    DataUpload oDataUpload = new DataUpload(){
        @Override
        public void onTxExecFailure(DataTxStatus dUploadStatus, Object context) {
           //事件触发条件：结构数据保存上链交易执行失败，结构数据未上链保存。
           DataTxBlockInfo oDataTxBlockInfo = dUploadStatus.txBlockData;
           String DataIDFromCaller = context;
           System.out.println("链外应用系统调用端的唯一标识=" + DataIDFromCaller);
           System.out.println("结构数据保存上链交易Hash =" + oDataTxBlockInfo.txHash);
           System.out.println("链上执行失败的返回结果=" + dUploadStatus.message);
        }
    }
~~~    

##### onError

此为事件在DataUpload调用出现异常时发生。事件触发后返回异常信息。

    
~~~java    
    public void onError(TxException e, Object context);
~~~    

示例：

    
~~~java     
    DataUpload oDataUpload = new DataUpload() {
        @Override
        public void onError(TxException e, Object context) {
           //事件触发条件：DataUpload调用出现异常。并返回异常信息。
           String DataIDFromCaller = context;
           System.out.println("链外应用系统调用端的唯一标识=" + DataIDFromCaller);
           System.out.println("异常状态描述=" + e.state);
           System.out.println("异常信息=" + e.exc);
        }
    }
~~~    

#### DataTxStatus.status状态编码

状态编码列表：

状态取值 | 描述 | 备注  
---|---|---  
TxSendSuccess | 上链交易发送成功。 | 节点确认接收数据保存上链交易请求，等待区块链执行处理。  
TxSendFailure | 上链交易发送失败。 | 节点接收数据保存上链交易请求失败，数据保存上链交易请求需重新提交。  
TxExecSuccess | 上链交易执行成功。 | 数据保存上链交易执行成功，数据上链保存成功，等待落块确认。  
TxExecFailure | 上链交易执行失败。 | 数据保存上链交易执行失败，数据未上链保存。数据保存上链交易请求需重新提交。  
TxBlockConfirm | 上链交易落块确认。 | 数据上链保存成功，并获得落块确认。  
TxBlkCfmFailure | 上链交易落块确认失败。 | 因落块确认失败，上链保存的数据被链回滚。数据保存上链交易请求需重新提交。  
  
### DataModify

用于进行结构数据更新操作对象。

#### 构造函数

##### DataModify (Frontend, String)

    
~~~java    
    public DataModify (Frontend frontendServer, String businessDomainID);
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
    
    DataModify oDataModify = new DataModify (oFrontend, businessDomainID);
~~~    

##### DataModify ()

构造一个DataModify对象。后续需赋值要访问前置节点对象和要访问的业务域。

    
~~~java    
    public DataModify ();
~~~    

#### 属性

##### frontend

设置要访问的前置节点服务器对象。

    
~~~java    
    public Frontend frontend { set; get; }
~~~    

##### bizDomain

设置要进行更新的数据所在链上业务域的唯一标识。

    
~~~java    
    public String bizDomain { set; get; }
~~~    

##### dataID

设置要进行更新的链上数据的数据链上ID。

    
~~~java    
    public String dataID { set; get; }
~~~    

##### dataContent

设置要进行更新的数据体。建议使用JSON或XML等格式构建，然后序列化成String的类型进行存储。dataContent的信息将被区块链加密保存。

    
~~~java    
    public String dataContent { set; get; }
~~~    

##### dataProperty

设置要进行更新的数据附属属性信息。附属属性建议使用JSON或XML等格式构建，然后序列化成String的类型进行存储。dataProperty的信息将被区块链加密保存。

如果想要对链上已保存的dataProperty进行清空处理，则此属性需设置NULL。

    
~~~java    
    public String dataProperty { set; get; }
~~~    

##### ownerID

设置提交上链交易的数据所有者数字身份标识，必须是owners中的一个数字身份标识。

    
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
    //上链更新数据在链外应用系统数据库中的唯一标识
    String dataIDfromBizSystem = "57bee7e51eb48b2896288021b7374cfc78c0bac8";
    oDataModify.eventContext = dataIDfromBizSystem;
~~~    

#### 方法

##### submit

向指定的前置节点服务器提交数据更新上链交易请求，开始进行数据更新上链操作。调用此方法，将会通过onTxBlockConfirm、onTxSendSuccess等事件返回链上处理结果。

    
~~~java    
    public void submit(String ownerPrivateKey);
~~~    

**参数**

ownerPrivateKey String

设置进行数据更新的所有者的数字身份私钥，ownerID对应的私钥。私钥用于对数据更新上链交易进行签名确权。

**示例：**

    
~~~java     
    //--链上数据所有者数字身份私钥
    String ownerPrivateKey = "8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc";
    //进行数据更新上链操作提交
    oDataModify.submit (ownerPrivateKey);
~~~    

##### createTxBody

和前置节点进行交互，生成数据更新链上操作对应的上链交易体，以便使用ownerID对应的私钥对上链交易体进行确权签名。

    
~~~java    
    public String createTxBody();
~~~    

**返回**

String

序列化的数据更新上链交易体。

**示例：**

    
~~~java     
    //生成数据更新上链交易体
    String dataModifyTxBody = oDataModify.createTxBody();
    //用数据所有者数字身份对数据更新上链交易体进行签名
    String ownerPrivateKey = "3161be862236ae966004390908a5facb8f45763e38ce5cfb378e493f91a7873d";
    //--对数据更新上链交易体进行签名，并生成签名结果
    String txSign = CryptoUtil.crypto.signature(dataModifyTxBody, ownerPrivateKey);
~~~    

##### submitTxBody

使用数据更新上链交易体原文和ownerID中数字身份对上链交易体的签名结果信息，向指定的前置节点服务器提交数据更新上链交易请求。调用此方法，将会通过onTxBlockConfirm、onTxSendSuccess等事件返回链上处理结果。

    
~~~java    
    public void submitTxBody(String dataModifyTxBody, String txSign);
~~~    

**参数**

dataModifyTxBody String

数据更新上链交易体原文

txSign String

数据更新上链交易体签名结果信息

**示例：**

    
~~~java     
    //【程序A】准备数据更新上链交易体
    DataModify oPrepareDataModifyTxBody = new DataModify();
    oPrepareDataModifyTxBody.dataID = "88021b73bac8b248b2896278c04a4378962e51eb";
    oPrepareDataModifyTxBody.ownerID = "0d64ad368ebc37ddb80424376408cb7bb88ff328"; 
    oPrepareDataModifyTxBody.dataContent = "{'姓名': '张三','性别': '男'}";
    oPrepareDataModifyTxBody.dataProperty = "人员基本信息描述";
    
    String dataModifyTxBody = oPrepareDataModifyTxBody.createTxBody();
    
    //【程序B】在外部使用数字身份签名应用进行dataModifyTxBody签名
    String ownerPrivateKey = "3161be862236ae966004390908a5facb8f45763e38ce5cfb378e493f91a7873d";
    String txSign = CryptoUtil.crypto.signature(dataModifyTxBody, ownerPrivateKey);
    
    //【程序A】提交数据更新上链交易，并跟踪链上处理状态
    DataModify oDataModify = new DataModify (frontendServer, businessDomainID);
    oDataModify.eventContext =dataIDfromBizSystem;
    oDataModify.submitTxBody (dataModifyTxBody, txSign);
~~~    

#### 事件

##### onTxBlockConfirm

此事件在结构数据上链保存成功，并获得落块确认时发生。

    
~~~java    
    public void onTxBlockConfirm(DataTxStatus dModifyStatus, Object context);
~~~    

参数

dModifyStatus DataModifyStatus

包含数据更新操作的当前处理状态信息的对象。

dModifyStatus中将包含如下返回信息，详细解释请参看DataModifyStatus对象相关描述：

|
status，errorCode，message，dataID，versionID，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight
|

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java     
    DataModify oDataModify = new DataModify() {
        @Override
        public void onTxBlockConfirm(DataTxStatus dModifyStatus, Object context) {
           //事件触发条件：结构数据上链保存成功，并获得落块确认。
           DataTxBlockInfo oDataTxBlockInfo = dModifyStatus.txBlockData;
           System.out.println("数据链上ID =" + oDataTxBlockInfo.dataID);
           System.out.println("数据当前版本ID =" + oDataTxBlockInfo.versionID);
           String dataIDFromCaller = context;
           System.out.println("链外应用系统调用端的唯一标识=" + dataIDFromCaller);
        }
    }
~~~    

##### onTxBlkCfmFailure

此事件在结构数据更新上链交易落块确认失败，上链保存的结构数据被链回滚时发生。事件触发后，会返回错误信息。结构数据更新上链交易请求需重新提交。

    
~~~java    
    public void onTxBlockCfmFailure(DataTxStatus dModifyStatus, Object context);
~~~    

参数

dModifyStatus DataModifyStatus

包含数据更新操作的当前处理状态信息的对象。

dModifyStatus中将包含如下返回信息，详细解释请参看DataModifyStatus对象相关描述：

|
status，errorCode，message，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight
|

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java     
    DataModify oDataModify = new DataModify() {
        @Override
        public void onTxBlockCfmFailure(DataTxStatus dModifyStatus, Object context) {
           //事件触发条件：结构数据更新上链交易落块确认失败，上链保存的结构数据被链回滚。
           //事件触发后，会返回错误信息。结构数据更新上链交易请求需重新提交。
           DataTxBlockInfo oDataTxBlockInfo = dModifyStatus.txBlockData;
           System.out.println("结构数据更新上链交易Hash =" + oDataTxBlockInfo.txHash);
           System.out.println("结构数据更新上链交易落块确认失败的返回结果=" + dModifyStatus.message);
           String dataIDFromCaller = context;
           System.out.println("链外应用系统调用端的唯一标识=" + dataIDFromCaller);
        }
    }
~~~    

##### onTxSendSuccess

此事件在结构数据更新上链交易发送成功，等待区块链执行处理时发生。

    
~~~java    
    public void onTxSendSuccess(DataTxStatus dModifyStatus, Object context);
~~~    

参数

dModifyStatus DataModifyStatus

包含数据更新操作的当前处理状态信息的对象。

dModifyStatus中将包含如下返回信息，详细解释请参看DataModifyStatus对象相关描述：

| status，errorCode，message，txHash |

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java     
    DataModify oDataModify = new DataModify(){
        @Override
        public void onTxSendSuccess(DataTxStatus dModifyStatus, Object context) {
           //事件触发条件：结构数据更新上链交易发送成功，等待区块链执行处理。 
           DataTxBlockInfo oDataTxBlockInfo = dModifyStatus.txBlockData;
           System.out.println("结构数据更新上链交易Hash =" + oDataTxBlockInfo.txHash);
        }
    }
~~~    

##### onTxSendFailure

此事件在结构数据更新上链交易发送失败时发生。数据更新上链交易请求需重新提交。

    
~~~java    
    public void onTxSendFailure(DataTxStatus dModifyStatus, Object context);
~~~    

参数

dModifyStatus DataModifyStatus

包含数据更新操作的当前处理状态信息的对象。

dModifyStatus中将包含如下返回信息，详细解释请参看DataModifyStatus对象相关描述：

| errorCode，message |

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java     
    DataModify oDataModify = new DataModify() {
        @Override
        public void onTxSendFailure(DataTxStatus dModifyStatus, Object context) {
           //事件触发条件：结构数据更新上链交易发送失败。
           System.out.println("结构数据更新上链交易发送失败的返回结果=" + dModifyStatus.message);
        }
    }
~~~    

##### onTxExecSuccess

此事件在结构数据更新上链交易执行成功，结构数据上链保存成功，等待落块确认时发生。

    
~~~java    
    public void onTxExecSuccess(DataTxStatus dModifyStatus, Object context);
~~~    

参数

dModifyStatus DataModifyStatus

包含数据更新操作的当前处理状态信息的对象。

dModifyStatus中将包含如下返回信息，详细解释请参看DataModifyStatus对象相关描述：

|
status，errorCode，message，dataID，versionID，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight
|

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java     
    DataModify oDataModify = new DataModify(){
        @Override
        public void onTxExecSuccess(DataTxStatus dModifyStatus, Object context) {
           //事件触发条件：结构数据更新上链交易执行成功，结构数据上链保存成功，等待落块确认。
           DataTxBlockInfo oDataTxBlockInfo = dModifyStatus.txBlockData;
           String dataIDFromCaller = context;
           System.out.println("链外应用系统调用端的唯一标识=" + dataIDFromCaller);
           System.out.println("数据链上ID =" + oDataTxBlockInfo.dataID);
           System.out.println("数据当前版本ID=" + oDataTxBlockInfo.versionID);
           System.out.println("结构数据更新上链交易Hash=" + oDataTxBlockInfo.txHash);
           System.out.println("交易执行时间戳=" + oDataTxBlockInfo.txExecTimestamp.toString());
           System.out.println("交易所在区块hash=" + oDataTxBlockInfo.blockHash);
           System.out.println("交易所在区块生成时间戳" + oDataTxBlockInfo.blockedTimestamp.toString());
           System.out.println("交易所在区块高度=" + oDataTxBlockInfo.blockHeight);
        }
    }
~~~    

##### onTxExecFailure

此事件在结构数据更新上链交易执行失败，结构数据未上链保存时发生。事件触发后会返回错误信息。数据更新上链交易请求需重新提交。

    
~~~java    
    public void onTxExecFailure(DataTxStatus dModifyStatus, Object context);
~~~    

参数

dModifyStatus DataModifyStatus

包含数据更新操作的当前处理状态信息的对象。

dModifyStatus中将包含如下返回信息，详细解释请参看DataModifyStatus对象相关描述：

|
status，errorCode，message，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight
|

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java     
    DataModify oDataModify = new DataModify(){
        @Override
        public void onTxExecFailure(DataTxStatus dModifyStatus, Object context) {
           //事件触发条件：结构数据更新上链交易执行失败，结构数据未上链保存。
           DataTxBlockInfo oDataTxBlockInfo = dModifyStatus.txBlockData;
           String DataIDFromCaller = context;
           System.out.println("链外应用系统调用端的唯一标识=" + DataIDFromCaller);
           System.out.println("结构数据更新上链交易Hash =" + oDataTxBlockInfo.txHash);
           System.out.println("链上执行失败的返回结果=" + dModifyStatus.message);
        }
    }
~~~    

##### onError

此为事件在DataModify调用出现异常时发生。事件触发后返回异常信息。

    
~~~java    
    public void onError(TxException e, Object context);
~~~    

示例：

    
~~~java     
    DataModify oDataModify = new DataModify() {
        @Override
        public void onError(TxException e, Object context) {
           //事件触发条件：DataModify调用出现异常。并返回异常信息。
           String DataIDFromCaller = context;
           System.out.println("链外应用系统调用端的唯一标识=" + DataIDFromCaller);
           System.out.println("异常状态描述=" + e.state);
           System.out.println("异常信息=" + e.exc);
        }
    }
~~~    

#### DataTxStatus.status状态编码

状态编码列表：

状态取值 | 描述 | 备注  
---|---|---  
TxSendSuccess | 上链交易发送成功。 | 节点确认接收数据更新上链交易请求，等待区块链执行处理。  
TxSendFailure | 上链交易发送失败。 | 节点接收数据更新上链交易请求失败，数据更新上链交易请求需重新提交。  
TxExecSuccess | 上链交易执行成功。 | 数据更新上链交易执行成功，数据上链保存成功，等待落块确认。  
TxExecFailure | 上链交易执行失败。 | 数据更新上链交易执行失败，数据未上链保存。数据更新上链交易请求需重新提交。  
TxBlockConfirm | 上链交易落块确认。 | 数据上链保存成功，并获得落块确认。  
TxBlkCfmFailure | 上链交易落块确认失败。 | 因落块确认失败，上链保存的数据被链回滚。数据更新上链交易请求需重新提交。  
  
### DataAuthorise

用于进行结构数据授权的操作对象。

#### 构造函数

##### DataAuthorise (Frontend, String)

    
~~~java    
    public DataAuthorise (Frontend frontendServer, String businessDomainID);
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
    
    DataAuthorise oDataAuthorise = new DataAuthorise (oFrontend, businessDomainID);
~~~    

##### DataAuthorise ()

构造一个DataAuthorise对象。后续需赋值要访问前置节点对象和要访问的业务域。

    
~~~java    
    public DataAuthorise ();
~~~    

#### 属性

##### frontend

设置要访问的前置节点服务器对象。

    
~~~java    
    public Frontend frontend { set; get; }
~~~    

##### bizDomain

设置要进行数据授权的数据所在链上业务域的唯一标识。

    
~~~java    
    public String bizDomain { set; get; }
~~~    

##### dataID

设置要进行数据授权的链上数据的数据链上ID。

    
~~~java    
    public String dataID { set; get; }
~~~    

##### grantorID

设置提交上链交易的授权者数字身份标识，必须是owners或sharers中的一个数字身份标识。

  * 数据所有者可以授权分享者列表和读取者列表。
  * 数据分享者可以授权读取者列表。

    
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
    //要授予数据授权的数据在链外应用系统数据库中的唯一标识
    String dataIDfromBizSystem = "57bee7e51eb48b2896288021b7374cfc78c0bac8";
    oDataAuthorise.eventContext =dataIDfromBizSystem;
~~~    

#### 方法

##### addReaders

设置要授予数据读取权限的数字身份标识列表。

    
~~~java    
    public void addReaders ( RoleItem [] readers );
~~~    

**参数**

readers RoleItem []

要授予数据读取权限的数字身份标识。

**示例：**

    
~~~java     
    //设置要授予数据读取权限的数字身份标识列表
    String[] readerIDs =
    { new RoleItem
    (e51eb48b57bee72896288021bcfc78c0bac87374,6ca423b9ab5eaab00a882a807652ab6),
    new RoleItem
    (e51eb48b57bee72896288021bcfc78c0bac87374,6ca423b9ab5eaab00a882a807652ab6)
    }
    oDataAuthorise.addReaders(readerIDs);
~~~    

##### addSharers

设置要授予数据分享权限的数字身份标识列表。

    
~~~java    
    public void addSharers ( RoleItem [] Sharers );
~~~    

**参数**

Sharers RoleItem []

要授予数据分享权限的数字身份标识。

**示例：**

    
~~~java     
    //设置要授予数据分享权限的数字身份标识列表
    String[] sharerIDs =
    { new RoleItem
    (e51eb48b57bee72896288021bcfc78c0bac87374,6ca423b9ab5eaab00a882a807652ab6),
    new RoleItem
    (e51eb48b57bee72896288021bcfc78c0bac87374,6ca423b9ab5eaab00a882a807652ab6)
    }
    oDataAuthorise.addSharers (sharerIDs);
~~~    

##### addOwners

设置要授予数据所有者权限的数字身份标识列表。

    
~~~java    
    public void addOwners (RoleItem [] Owners);
~~~    

**参数**

Owners RoleItem []

要授予数据所有者权限的数字身份标识。

**示例：**

    
~~~java     
    //设置要授予数据所有者权限的数字身份标识列表
    String[] ownerIDs =
     { new RoleItem
    (e51eb48b57bee72896288021bcfc78c0bac87374,6ca423b9ab5eaab00a882a807652ab6),
    new RoleItem
    (e51eb48b57bee72896288021bcfc78c0bac87374,6ca423b9ab5eaab00a882a807652ab6)
    }
    oDataAuthorise.addOwners(ownerIDs);
~~~    

##### removeReaders

设置要删除数据读取权限的数字身份标识列表。

    
~~~java    
    public void removeReaders (RoleItem [] Readers);
~~~    

**示例：**

    
~~~java     
    //设置要删除数据读取权限的数字身份标识列表
    String[] readerIDs = {"e51eb48b57bee72896288021bcfc78c0bac87374",
    "8962857bee7b48b28021b7374cfc78c0bac8e51e",
    "374cfc78c0ba57bee78b2896288021b7c8 e51eb4"
    };
    oDataAuthorise.removeReaders(readerIDs);
~~~    

##### removeSharers

设置要删除数据分享权限的数字身份标识列表。

    
~~~java    
    public void removeSharers { String[] Sharers };
~~~    

**示例：**

    
~~~java     
    //设置要删除数据分享权限的数字身份标识列表
    String[] sharerIDs = {"e51eb48b57bee72896288021bcfc78c0bac87374",
    "8962857bee7b48b28021b7374cfc78c0bac8e51e",
    "374cfc78c0ba57bee78b2896288021b7c8 e51eb4"
    };
    oDataAuthorise.removeSharers(sharerIDs);
~~~    

##### removeOwners

设置要删除数据所有者权限的数字身份标识列表。

    
~~~java    
    public void removeOwners (String[] Owners);
~~~    

**示例：**

    
~~~java     
    //设置要删除数据所有者的数字身份标识列表
    String[] ownerIDs = {"e51eb48b57bee72896288021bcfc78c0bac87374",
    "8962857bee7b48b28021b7374cfc78c0bac8e51e",
    "374cfc78c0ba57bee78b2896288021b7c8 e51eb4"
    };
    oDataAuthorise.removeOwners(ownerIDs);
~~~    

##### submit

向指定的前置节点服务器提交"数据授权"上链交易请求。调用此方法，将会通过onTxBlockConfirm、onTxSendSuccess等事件返回链上处理结果。

    
~~~java    
    public void submit (String senderPrivateKey);
~~~    

**参数**

grantorPrivateKey String

提交上链交易的授权者数字身份私钥，grantorID对应的私钥。私钥用于对"数据授权"上链交易进行签名确权。

**示例：**

    
~~~java     
    //--提交上链交易的授权者数字身份私钥（即Owners或Sharers中的一个数字身份标识）
    String grantorPrivateKey = "8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc";
    //进行数据授权上链操作提交
    oDataAuthorise.submit (grantorPrivateKey);
~~~    

##### createTxBody

和前置节点进行交互，生成"数据授权"链上操作对应的上链交易体，以便使用grantorID对应的私钥对上链交易体进行确权签名。

    
~~~java    
    public String createTxBody();
~~~    

**返回**

String

序列化的"数据授权"上链交易体。

**示例：**

    
~~~java     
    //生成"数据授权"上链交易体
    String dataAuthoriseTxBody= oDataAuthorise.createTxBody();
    //使用提交上链交易的授权者数字身份对"数据授权"上链交易体进行签名
    String grantorPrivateKey = "3161be862236ae966004390908a5facb8f45763e38ce5cfb378e493f91a7873d";
    //--对"数据授权"上链交易体进行签名，并生成签名结果
    String txSign = CryptoUtil.crypto.signature(dataAuthoriseTxBody, grantorPrivateKey);
~~~    

##### submitTxBody

使用数据授权上链交易体原文和grantorID中数字身份对上链交易体的签名结果信息，向指定的前置节点服务器提交"数据授权"上链交易请求。调用此方法，将会通过onTxBlockConfirm、onTxSendSuccess等事件返回链上处理结果。

    
~~~java    
    public void submitTxBody(String dataAuthoriseTxBody, String txSign);
~~~    

**参数**

dataAuthoriseTxBody String

数据授权上链交易体原文

txSign String

数据授权上链交易体签名结果信息

**示例：**

    
~~~java     
    //【程序A】准备数据授权上链交易体
    DataAuthorise oPrepareDataAuthTxBody = new DataAuthorise();
    oPrepareDataAuthTxBody.dataID = "88021b73bac8b248b2896278c04a4378962e51eb";
    oPrepareDataAuthTxBody.grantorID = "0d64ad368ebc37ddb80424376408cb7bb88ff328"; 
    String[] readerIDs =  {
     new RoleItem
    (e51eb48b57bee72896288021bcfc78c0bac87374,6ca423b9ab5eaab00a882a807652ab6),
    new RoleItem
    (e51eb48b57bee72896288021bcfc78c0bac87374,6ca423b9ab5eaab00a882a807652ab6)
    }
    oPrepareDataAuthTxBody.addReaders = readerIDs;
    
    String dataAuthoriseTxBody = oPrepareDataAuthTxBody.createTxBody();
    
    //【程序B】在外部使用数字身份签名应用进行dataAuthoriseTxBody签名
    String grantorPrivateKey = "3161be862236ae966004390908a5facb8f45763e38ce5cfb378e493f91a7873d";
    String txSign = CryptoUtil.crypto.signature(dataAuthoriseTxBody, grantorPrivateKey);
    
    //【程序A】提交数据授权上链交易，并跟踪链上处理状态
    DataAuthorise oDataAuthorise = new DataAuthorise (frontendServer, businessDomainID);
    oDataAuthorise.eventContext =dataIDfromBizSystem;
    oDataAuthorise.submitTxBody (dataAuthoriseTxBody, txSign);
~~~    

#### 事件

##### onTxBlockConfirm

此事件在数据授权上链交易执行成功，并获得落块确认时发生。

    
~~~java    
    public void onTxBlockConfirm(DataTxStatus dAuthStatus, Object context);
~~~    

参数

dAuthStatus DataAuthoriseStatus

包含"数据授权"链上操作的当前处理状态信息的对象。

dAuthStatus中将包含如下返回信息，详细解释请参看DataAuthoriseStatus对象相关描述：

|
status，errorCode，message，dataID，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight
|

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java     
    DataAuthorise oDataAuthorise = new DataAuthorise() {
        @Override
        public void onTxBlockConfirm(DataTxStatus dAuthStatus, Object context) {
           //事件触发条件：数据授权上链交易执行成功，并获得落块确认。
           DataTxBlockInfo oDataTxBlockInfo = dAuthStatus.txBlockData;
           System.out.println("数据链上ID =" + oDataTxBlockInfo.dataID);
           String fileIDFromCaller = context;
           System.out.println("链外应用系统调用端的唯一标识=" + fileIDFromCaller);
        }
    }
~~~    

##### onTxBlkCfmFailure

此事件在数据授权上链交易执行失败，上链保存的数据授权被链回滚。事件触发后，会返回错误信息。数据授权上链交易请求需重新提交。

    
~~~java    
    public void onTxBlockCfmFailure(DataTxStatus dAuthStatus, Object context);
~~~    

参数

dAuthStatus DataAuthoriseStatus

包含"数据授权"链上操作的当前处理状态信息的对象。

dAuthStatus中将包含如下返回信息，详细解释请参看DataAuthoriseStatus对象相关描述：

|
status，errorCode，message，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight
|

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java     
    DataAuthorise oDataAuthorise = new DataAuthorise() {
        @Override
        public void onTxBlockCfmFailure(DataTxStatus dAuthStatus, Object context) {
           //事件触发条件：数据授权上链交易执行失败，上链保存的数据授权被链回滚。
           //事件触发后，会返回错误信息。数据授权上链交易请求需重新提交。
           DataTxBlockInfo oDataTxBlockInfo = dAuthStatus.txBlockData;
           System.out.println("数据授权上链交易Hash =" + oDataTxBlockInfo.txHash);
           System.out.println("数据授权上链交易执行失败的返回结果=" + dAuthStatus.message);
           String fileIDFromCaller = context;
           System.out.println("链外应用系统调用端的唯一标识=" + fileIDFromCaller);
        }
    }
~~~    

##### onTxSendSuccess

此事件在数据授权上链交易发送成功，等待区块链执行处理时发生。

    
~~~java    
    public void onTxSendSuccess(DataTxStatus dAuthStatus, Object context);
~~~    

参数

dAuthStatus DataAuthoriseStatus

包含"数据授权"链上操作的当前处理状态信息的对象。

dAuthStatus中将包含如下返回信息，详细解释请参看DataAuthoriseStatus对象相关描述：

| status，errorCode，message，txHash |

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java     
    DataAuthorise oDataAuthorise = new DataAuthorise() {
        @Override
        public void onTxSendSuccess(DataTxStatus dAuthStatus, Object context) {
           //事件触发条件：数据授权上链交易发送成功，等待区块链执行处理。 
           DataTxBlockInfo oDataTxBlockInfo = dAuthStatus.txBlockData;
           System.out.println("数据授权上链交易Hash =" + oDataTxBlockInfo.txHash);
        }
    }
~~~    

##### onTxSendFailure

此事件在数据授权上链交易发送失败时发生。数据授权上链交易请求需重新提交。

    
~~~java    
    public void onTxSendFailure(DataTxStatus dAuthStatus, Object context);
~~~    

参数

dAuthStatus DataAuthoriseStatus

包含"数据授权"链上操作的当前处理状态信息的对象。

dAuthStatus中将包含如下返回信息，详细解释请参看DataAuthoriseStatus对象相关描述：

| errorCode，message |

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java     
    DataAuthorise oDataAuthorise = new DataAuthorise() {
        @Override
        public void onTxSendFailure (DataTxStatus dAuthStatus, Object context) {
           //事件触发条件：数据授权上链交易发送失败。
           //事件触发后，会返回错误信息。
           System.out.println("数据授权上链交易发送失败的返回结果=" + dAuthStatus.message);
        }
    }
~~~    

##### onTxExecSuccess

此事件在数据授权上链交易执行成功，等待落块确认时发生。

    
~~~java    
    public void onTxExecSuccess(DataTxStatus dAuthStatus, Object context);
~~~    

参数

dAuthStatus DataAuthoriseStatus

包含"数据授权"链上操作的当前处理状态信息的对象。

dAuthStatus中将包含如下返回信息，详细解释请参看DataAuthoriseStatus对象相关描述：

|
status，errorCode，message，dataID，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight
|

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java     
    DataAuthorise oDataAuthorise = new DataAuthorise() {
        @Override
        public void onTxExecSuccess (DataTxStatus dAuthStatus, Object context) {
           //事件触发条件：数据授权上链交易执行成功，等待落块确认。
           DataTxBlockInfo oDataTxBlockInfo = dAuthStatus.txBlockData;
           String fileIDFromCaller = context;
           System.out.println("链外应用系统调用端的唯一标识=" + fileIDFromCaller);
           System.out.println("数据链上ID =" + oDataTxBlockInfo.dataID);
           System.out.println("数据授权上链交易Hash=" + oDataTxBlockInfo.txHash);
           System.out.println("交易执行时间戳=" + oDataTxBlockInfo.txExecTimestamp.toString());
           System.out.println("交易所在区块hash=" + oDataTxBlockInfo.blockHash);
           System.out.println("交易所在区块生成时间戳" + oDataTxBlockInfo.blockedTimestamp.toString());
           System.out.println("交易所在区块高度=" + oDataTxBlockInfo.blockHeight);
        }
    }
~~~    

##### onTxExecFailure

此事件在数据授权上链交易执行失败，对指定数字身份的相应权限授权未在链上生效时发生。事件触发后会返回错误信息。数据授权上链交易请求需重新提交。

    
~~~java    
    public void onTxExecFailure(DataTxStatus dAuthStatus, Object context);
~~~    

参数

dAuthStatus DataAuthoriseStatus

包含"数据授权"链上操作的当前处理状态信息的对象。

dAuthStatus中将包含如下返回信息，详细解释请参看DataAuthoriseStatus对象相关描述：

|
status，errorCode，message，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight
|

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java     
    DataAuthorise oDataAuthorise = new DataAuthorise() {
        @Override
        public void onTxExecFailure (DataTxStatus dAuthStatus, Object context) {
           //事件触发条件：数据授权上链交易执行失败，对指定数字身份的相应权限授权未在链上生效。 
           //事件触发后，会返回错误信息。数据授权上链交易请求需重新提交。
           DataTxBlockInfo oDataTxBlockInfo = dAuthStatus.txBlockData;
           String fileIDFromCaller = context;
           System.out.println("链外应用系统调用端的唯一标识=" + fileIDFromCaller);
           System.out.println("数据授权上链交易Hash =" + oDataTxBlockInfo.txHash);
           System.out.println("链上执行失败的返回结果=" + dAuthStatus.message);
        }
    }
~~~    

##### onError

此为事件在DataAuthorise调用出现异常时发生。事件触发后返回异常信息。

    
~~~java    
    public void onError(TxException e, Object context);
~~~    

示例：

    
~~~java     
    DataAuthorise oDataAuthorise = new DataAuthorise() {
        @Override
        public void onError (TxException e, Object context) {
           //事件触发条件：DataAuthorise调用出现异常。并返回异常信息。
           String fileIDFromCaller = context;
           System.out.println("链外应用系统调用端的唯一标识=" + fileIDFromCaller);
           System.out.println("异常状态描述=" + e.state);
           System.out.println("异常信息=" + e.exc);
        }
    }
~~~    

#### DataTxStatus.status状态编码

状态编码列表：

状态取值 | 描述 | 备注  
---|---|---  
TxSendSuccess | 上链交易发送成功。 | 节点确认接收数据授权上链交易请求，等待区块链执行处理。  
TxSendFailure | 上链交易发送失败。 | 节点接收数据授权上链交易请求失败，数据授权上链交易请求需重新提交。  
TxExecSuccess | 上链交易执行成功。 | 数据授权上链交易执行成功，数据读取/所有者权限的数字身份标识列表上链更新成功，等待落块确认。  
TxExecFailure | 上链交易执行失败。 |
数据授权上链交易执行失败，数据读取/所有者权限的数字身份标识列表未上链更新。数据授权上链交易请求需重新提交。  
TxBlockConfirm | 上链交易落块确认。 | 数据授权上链更新成功，并获得落块确认。  
TxBlkCfmFailure | 上链交易落块确认失败。 |
因落块确认失败，上链更新的数据读取/所有者权限的数字身份标识列表被链回滚。数据授权上链交易请求需重新提交。  
  
### DataFetch

用于进行链上结构数据获取的操作对象。

#### 构造函数

##### DataFetch (Frontend, String)

    
~~~java    
    public DataFetch (Frontend frontendServer, String businessDomainID);
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
    
    DataFetch oDataFetch = new DataFetch(oFrontend, businessDomainID);
~~~    

##### DataFetch ()

构造一个DataFetch对象。后续需赋值要访问前置节点对象和要访问的业务域。

    
~~~java    
    public DataFetch ();
~~~    

#### 属性

##### frontend

设置要访问的前置节点服务器对象。

    
~~~java    
    public Frontend frontend { set; get; }
~~~    

##### bizDomain

设置要进行数据获取的数据所在链上业务域的唯一标识。

    
~~~java    
    public String bizDomain { set; get; }
~~~    

##### dataID

设置要进行数据获取的链上数据的数据链上ID。

    
~~~java    
    public String dataID { set; get; }
~~~    

##### versionID

设置要获取的链上数据指定版本的数据的数据版本ID。如果此属性不赋值，则默认返回最新版本（即当前版本）的数据信息。

    
~~~java    
    public String versionID { set; get; }
~~~    

##### fetcherID

设置要进行数据获取的获取者数字身份标识。数据获取者必须拥有数据读取权限，owners、sharers、readers中的一个数字身份标识。

    
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
    //要获取的链上数据在链外应用系统数据库中的唯一标识
    String dataIDFromCaller = "57bee7e51eb48b2896288021b7374cfc78c0bac8";
    oDataFetch.eventContext =dataIDFromCaller;
~~~    

#### 方法

##### query

向指定的前置节点服务器提交"数据获取"链上获取请求。调用此方法，将会通过onSuccess 和onFailure事件返回查询结果。

    
~~~java    
    public void query(String fetcherPrivateKey);
~~~    

**参数**

fetcherPrivateKey String

设置要进行数据获取的获取者数字身份私钥，fetcherID对应私钥。私钥用于对"数据获取"链上获取请求进行签名确权。

**示例：**

    
~~~java     
    //--获取者数字身份私钥
    String fetcherPrivateKey = "8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc";
    DataFetch oDataFetch = new DataFetch() {
        @Override
        public void onSuccess(DataFetchStatus dFetchStatus, Object context) {
          //事件触发条件：仅在采用异步查询方法时才会被触发
        }
    };
    
    //进行"数据获取"链上操作提交
    oDataFetch.query (fetcherPrivateKey);
~~~    

##### createRqBody

和前置节点进行交互，生成"数据获取"链上操作对应的链上获取请求体，以便使用fetcherID对应的私钥对链上获取请求体进行确权签名。

    
~~~java    
    public String createRqBody();
~~~    

**返回**

String

序列化的"数据获取"链上获取请求体。

**示例：**

    
~~~java     
    //生成"数据获取"链上获取请求体
    String dFetchRqBody= oDataFetch.createRqBody();
    //用获取者数字身份对"数据获取"链上获取请求体进行签名
    String fetcherPrivateKey = "3161be862236ae966004390908a5facb8f45763e38ce5cfb378e493f91a7873d";
    //--对"数据获取"链上获取请求体进行签名，并生成签名结果
    String txSign = CryptoUtil.crypto.signature(dFetchRqBody, fetcherPrivateKey);
~~~    

##### queryRqBody

使用数据获取链上获取请求体原文和fetcherID中数字身份对获取请求体的签名结果信息，向指定的前置节点服务器提交"数据获取"链上获取请求。调用此方法，将会通过onSuccess
和onFailure事件返回查询结果。

    
~~~java    
    public void queryRqBody (String dFetchRqBody, String txSign);
~~~    

**参数**

dFetchRqBody String

数据获取链上获取请求体原文

txSign String

数据获取链上获取请求体签名结果信息

**示例：**

    
~~~java     
    //【程序A】准备"数据获取"链上获取请求体
    DataFetch oPrepareDFetchRqBody = new DataFetch();
    oPrepareDFetchRqBody.dataID = "88021b73bac8b248b2896278c04a4378962e51eb";
    oPrepareDFetchRqBody.fetcherID = "0d64ad368ebc37ddb80424376408cb7bb88ff328"; 
    String dFetchRqBody = oPrepareDFetchRqBody.createRqBody ();
    
    //【程序B】在外部使用数字身份签名应用进行dFetchRqBody签名
    String fetcherPrivateKey = "8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc";
    String txSign = CryptoUtil.crypto.signature(dFetchRqBody, fetcherPrivateKey);
    
    //【程序A】提交"数据获取"链上获取请求，并跟踪链上处理状态
    DataFetch oDataFetch = new DataFetch(frontendServer, businessDomainID);
    oDataFetch.eventContext =dataIDFromCaller;
    oDataFetch.queryRqBody (dFetchRqBody, txSign);
~~~    

#### 事件

##### onSuccess

此事件在"数据获取"链上操作处理彻底完成，数据已成功下载时发生。

    
~~~java    
    public void onSuccess (DataFetchStatus dFetchStatus, Object context);
~~~    

参数

dFetchStatus DataFetchStatus

包含"数据获取"链上操作的当前处理状态信息的对象。

dFetchStatus中将包含如下返回信息，详细解释请参看DataFetchStatus对象相关描述：

| status，errorCode，message，data |

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java     
    DataFetch oDataFetch = new DataFetch() {
        @Override
        public void onSuccess (DataFetchStatus dFetchStatus, Object context) {
          //事件触发条件：在"数据获取"链上操作处理彻底完成，数据已成功下载。
          String dataIDFromCaller = context;
          System.out.println("链外应用系统调用端的唯一标识=" + dataIDFromCaller);
          StructData oStructData = dFetchStatus.data;
          System.out.println("数据链上ID =" + oStructData.dataID);
          System.out.println("数据版本ID=" + oStructData.versionID);
          System.out.println("数据体=" + oStructData.dataContent);
          System.out.println("数据附属属性=" + oStructData.dataProperty); 
        }
    }
~~~    

##### onFailure

此事件在"数据获取"链上操作处理失败，数据未被下载时发生。

    
~~~java    
    public void onSuccess (DataFetchStatus dFetchStatus, Object context);
~~~    

参数

dFetchStatus DataFetchStatus

包含"数据获取"链上操作的当前处理状态信息的对象。

dFetchStatus中将包含如下返回信息，详细解释请参看DataFetchStatus对象相关描述：

| errorCode，message |

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java     
    DataFetch oDataFetch = new DataFetch() {
        @Override
        public void onFailure (DataFetchStatus dFetchStatus, Object context) {
          //事件触发条件：在"数据获取"链上操作处理失败，数据未被下载。
          String dataIDFromCaller = context;
          System.out.println("链外应用系统调用端的唯一标识=" + dataIDFromCaller);
          System.out.println("查询失败=" + dFetchStatus.message);
        }
    }
~~~    

##### onError

此为事件在DataFetch调用出现异常时发生。事件触发后返回异常信息。

    
~~~java    
    public void onError(FetchException e, Object context);
~~~    

示例：

    
~~~java     
    DataFetch oDataFetch = new DataFetch() {
        @Override
        public void onError(FetchException e, Object context) {
           //事件触发条件：DataFetch调用出现异常。并返回异常信息。
           String dataIDFromCaller = context;
           System.out.println("链外应用系统调用端的唯一标识=" + dataIDFromCaller);
           System.out.println("异常状态描述=" + e.state);
           System.out.println("异常信息=" + e.exc);
        }
    }
~~~    

### DataDelete

用于进行结构数据删除的操作对象。

#### 构造函数

##### DataDelete (Frontend, String)

    
~~~java    
    public DataDelete (Frontend frontendServer, String businessDomainID);
~~~    

**参数**

frontendServer Frontend

前置节点服务器对象。

businessDomainID String

设置要访问的业务域标识。初始化时可以为空，后续可通过bizDomain属性赋值。businessDomainID在提交数据删除前必须赋值。

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
    
    DataDelete oDataDelete = new DataDelete(oFrontend, businessDomainID);
~~~    

##### DataDelete()

构造一个DataDelete对象。后续需赋值要访问前置节点对象和要访问的业务域。

    
~~~java    
    public DataDelete ();
~~~    

#### 属性

##### frontend

设置要访问的前置节点服务器对象。

    
~~~java    
    public Frontend frontend { set; get; }
~~~    

##### bizDomain

设置要删除数据的链上业务域的唯一标识。

    
~~~java    
    public String bizDomain { set; get; }
~~~    

##### dataID

设置要删除的链上数据的数据链上ID。

    
~~~java    
    public String dataID { set; get; }
~~~    

##### ownerID

设置数据所有者的数字身份标识。只有数据所有者才有权提交数据删除。

    
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
    //要删除的数据在链外应用系统数据库中的唯一标识
    String dataIDFromCaller = "57bee7e51eb48b2896288021b7374cfc78c0bac8";
    oDataDelete.eventContext =dataIDFromCaller;
~~~    

#### 方法

##### submit

向指定的前置节点服务器提交"数据删除"上链交易请求。调用此方法，将会通过onTxBlockConfirm、onTxSendSuccess等事件返回链上处理结果。

    
~~~java    
    public void submit(String ownerPrivateKey);
~~~    

**参数**

ownerPrivateKey String

设置要删除的链上数据所有者的数字身份私钥，ownerID对应的私钥。私钥用于对"数据删除"上链交易进行签名确权。

**示例：**

    
~~~java     
    //--链上数据所有者数字身份私钥
    String ownerPrivateKey = "8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc";
    //进行数据删除上链操作提交
    oDataDelete.submit (ownerPrivateKey);
~~~    

##### createTxBody

和前置节点进行交互，生成"数据删除"链上操作对应的上链交易体，以便使用ownerID中数字身份对应的私钥对上链交易体进行确权签名。

    
~~~java    
    public String createTxBody();
~~~    

**返回**

String

序列化的"数据删除"上链交易体。

**示例：**

    
~~~java     
    //生成"数据删除"上链交易体
    String dataDeleteTxBody= oDataDelete.createTxBody();
    //用数据所有者数字身份对"数据删除"上链交易体进行签名
    String ownerPrivateKey = "3161be862236ae966004390908a5facb8f45763e38ce5cfb378e493f91a7873d";
    //--对"数据删除"上链交易体进行签名，并生成签名结果
    String txSign = CryptoUtil.crypto.signature(dataDeleteTxBody, ownerPrivateKey);
~~~    

##### submitTxBody

使用数据删除上链交易体原文和ownerID中数字身份对上链交易体的签名结果信息，向指定的前置节点服务器提交"数据删除"上链交易请求。调用此方法，将会通过onTxBlockConfirm、onTxSendSuccess等事件返回链上处理结果。

    
~~~java    
    public void submitTxBody(String dataDeleteTxBody, String txSign);
~~~    

**参数**

dataDeleteTxBody String

数据删除上链交易体原文

txSign String

数据删除上链交易体签名结果信息

**示例：**

    
~~~java     
    //【程序A】准备数据删除上链交易体
    DataDelete oPrepareDataDeleteTxBody = new DataDelete();
    oPrepareDataDeleteTxBody.dataID = "88021b73bac8b248b2896278c04a4378962e51eb";
    oPrepareDataDeleteTxBody.ownerID = "0d64ad368ebc37ddb80424376408cb7bb88ff328"; 
    
    String dataDeleteTxBody = oPrepareDataDeleteTxBody.createTxBody();
    
    //【程序B】在外部使用数字身份签名应用进行dataDeleteTxBody签名
    String ownerPrivateKey = "3161be862236ae966004390908a5facb8f45763e38ce5cfb378e493f91a7873d";
    String txSign = CryptoUtil.crypto.signature(dataDeleteTxBody, ownerPrivateKey);
    
    //【程序A】提交数据删除上链交易，并跟踪链上处理状态
    DataDelete oDataDelete = new DataDelete(frontendServer, businessDomainID);
    oDataDelete.eventContext =dataIDFromCaller;
    DataTxStatus oDataTxStatus = oDataDelete.submitTxBody (dataDeleteTxBody, txSign);
~~~    

#### 事件

##### onTxBlockConfirm

此事件在数据删除上链交易执行成功，并获得落块确认时发生。

    
~~~java    
    public void onTxBlockConfirm(DataTxStatus dDeleteStatus, Object context);
~~~    

参数

dDeleteStatus DataTxStatus

包含"数据删除"上链交易的当前处理状态信息的对象。

dDeleteStatus中将包含如下返回信息，详细解释请参看DataTxStatus对象相关描述：

|
status，errorCode，message，dataID，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight
|

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java     
    DataDelete oDataDelete = new DataDelete() {
       @Override
        public void onTxBlockConfirm(DataTxStatus dDeleteStatus, Object context) {
           //事件触发条件：数据删除上链交易执行成功，并获得落块确认。
           DataTxBlockInfo oDataTxBlockInfo = dDeleteStatus.txBlockData;
           System.out.println("数据链上ID =" + oDataTxBlockInfo.dataID);
           String dataIDFromCaller = context;
           System.out.println("链外应用系统调用端的唯一标识=" + dataIDFromCaller);
        }
    }
~~~    

##### onTxBlkCfmFailure

此事件在数据删除上链交易落块确认失败，删除状态变更被链回滚时发生。事件触发后，会返回错误信息。数据删除上链交易需重新提交。

    
~~~java    
    public void onTxBlockCfmFailure(DataTxStatus dDeleteStatus, Object context);
~~~    

参数

dDeleteStatus DataTxStatus

包含"数据删除"上链交易的当前处理状态信息的对象。

dDeleteStatus中将包含如下返回信息，详细解释请参看DataTxStatus对象相关描述：

|
status，errorCode，message，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight
|

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java     
    DataDelete oDataDelete = new DataDelete() {
        @Override
        public void onTxBlockCfmFailure(DataTxStatus dDeleteStatus, Object context) {
           //事件触发条件：数据删除上链交易落块确认失败，删除状态变更被链回滚。
           //事件触发后，会返回错误信息。数据删除上链交易请求需重新提交。
           String dataIDFromCaller = context;
           System.out.println("链外应用系统调用端的唯一标识=" + dataIDFromCaller);
           DataTxBlockInfo oDataTxBlockInfo = dDeleteStatus.txBlockData;
           System.out.println("数据删除上链交易Hash =" + oDataTxBlockInfo.txHash);
           System.out.println("数据删除上链交易落块确认失败的返回结果=" + dDeleteStatus.message);
        }
    }
~~~   

##### onTxSendSuccess

此事件在数据删除上链交易发送成功，等待区块链执行处理时发生。

    
~~~java    
    public void onTxSendSuccess(DataTxStatus dDeleteStatus, Object context);
~~~    

参数

dDeleteStatus DataTxStatus

包含"数据删除"上链交易的当前处理状态信息的对象。

dDeleteStatus中将包含如下返回信息，详细解释请参看DataTxStatus对象相关描述：

| status，errorCode，message，txHash |

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java     
    DataDelete oDataDelete = new DataDelete() {
        @Override
        public void onTxSendSuccess(DataTxStatus dDeleteStatus, Object context) {
           //事件触发条件：数据删除上链交易发送成功，等待区块链执行处理。 
           DataTxBlockInfo oDataTxBlockInfo = dDeleteStatus.txBlockData;
           System.out.println("数据删除上链交易Hash =" + oDataTxBlockInfo.txHash);
        }
    }
~~~    

##### onTxSendFailure

此事件在数据删除上链交易发送失败时发生。数据删除上链交易需重新提交。

    
~~~java    
    public void onTxSendFailure(DataTxStatus dDeleteStatus, Object context);
~~~    

参数

dDeleteStatus DataTxStatus

包含"数据删除"上链交易的当前处理状态信息的对象。

dDeleteStatus中将包含如下返回信息，详细解释请参看DataTxStatus对象相关描述：

| errorCode，message |

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java     
    DataDelete oDataDelete = new DataDelete() {
        @Override
        public void onTxSendFailure (DataTxStatus dDeleteStatus, Object context) {
           //事件触发条件：数据删除上链交易发送失败。
           //事件触发后，会返回错误信息。
           System.out.println("数据删除上链交易发送失败的返回结果=" + dDeleteStatus.message);
        }
    }
~~~    

##### onTxExecSuccess

此事件在数据删除上链交易执行成功，等待落块确认时发生。

    
~~~java    
    public void onTxExecSuccess(DataTxStatus dDeleteStatus, Object context);
~~~    

参数

dDeleteStatus DataTxStatus

包含"数据删除"上链交易的当前处理状态信息的对象。

dDeleteStatus中将包含如下返回信息，详细解释请参看DataTxStatus对象相关描述：

|
status，errorCode，message，dataID，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight
|

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java     
    DataDelete oDataDelete = new DataDelete() {
        @Override
        public void onTxExecSuccess (DataTxStatus dDeleteStatus, Object context) {
           //事件触发条件：数据删除上链交易执行成功，等待落块确认。
           DataTxBlockInfo oDataTxBlockInfo = dDeleteStatus.txBlockData;
           String dataIDFromCaller = context;
           System.out.println("链外应用系统调用端的唯一标识=" + dataIDFromCaller);
           System.out.println("数据链上ID =" + oDataTxBlockInfo.dataID);
           System.out.println("数据删除上链交易Hash=" + oDataTxBlockInfo.txHash);
           System.out.println("交易执行时间戳=" + oDataTxBlockInfo.txExecTimestamp);
           System.out.println("交易所在区块hash=" + oDataTxBlockInfo.blockHash);
           System.out.println("交易所在区块生成时间戳" + oDataTxBlockInfo.blockedTimestamp);
           System.out.println("交易所在区块高度=" + oDataTxBlockInfo.blockHeight);
        }
    }
~~~    

##### onTxExecFailure

此事件在数据删除上链交易执行失败，删除状态变更未在链上生效时发生。事件触发后会返回错误信息。数据删除上链交易需重新提交。

    
~~~java    
    public void onTxExecFailure(DataTxStatus dDeleteStatus , Object context);
~~~    

参数

dDeleteStatus DataTxStatus

包含"数据删除"上链交易的当前处理状态信息的对象。

dDeleteStatus中将包含如下返回信息，详细解释请参看DataTxStatus对象相关描述：

|
status，errorCode，message，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight
|

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java     
    DataDelete oDataDelete = new DataDelete() {
        @Override
        public void onTxExecFailure(DataTxStatus dDeleteStatus, Object context) {
           //事件触发条件：数据删除上链交易执行失败，删除状态变更未在链上生效。 
           //事件触发后，会返回错误信息。删除状态变更上链交易请求需重新提交。
           DataTxBlockInfo oDataTxBlockInfo = dDeleteStatus.txBlockData;
           String dataIDFromCaller = context;
           System.out.println("链外应用系统调用端的唯一标识=" + dataIDFromCaller);
           System.out.println("数据链上ID =" + oDataTxBlockInfo.dataID);
           System.out.println("删除状态变更上链交易Hash=" + oDataTxBlockInfo.txHash);
           System.out.println("交易执行时间戳=" + oDataTxBlockInfo.txExecTimestamp);
           System.out.println("交易所在区块hash=" + oDataTxBlockInfo.blockHash);
           System.out.println("交易所在区块生成时间戳" + oDataTxBlockInfo.blockedTimestamp);
           System.out.println("交易所在区块高度=" + oDataTxBlockInfo.blockHeight);
           System.out.println("链上执行失败的返回结果=" + dDeleteStatus.message);
        }
    }
~~~    

##### onError

此为事件在DataDelete调用出现异常时发生。事件触发后返回异常信息。

    
~~~java    
    public void onError(TxException e, Object context);
~~~    

示例：

    
~~~java     
    DataDelete oDataDelete = new DataDelete() {
        @Override
        public void onError(TxException e, Object context) {
           //事件触发条件：DataDelete调用出现异常。并返回异常信息。
           String dataIDFromCaller = context;
           System.out.println("链外应用系统调用端的唯一标识=" + dataIDFromCaller);
           System.out.println("异常状态描述=" + e.state);
           System.out.println("异常信息=" + e.exc);
        }
    }
~~~    

#### DataTxStatus.status状态编码

状态编码列表：

状态取值 | 描述 | 备注  
---|---|---  
TxSendSuccess | 上链交易发送成功。 | 节点确认接收数据删除上链交易请求，等待区块链执行处理。  
TxSendFailure | 上链交易发送失败。 | 节点接收数据删除上链交易请求失败，数据删除上链交易请求需重新提交。  
TxExecSuccess | 上链交易执行成功。 | 数据删除上链交易执行成功，等待落块确认。  
TxExecFailure | 上链交易执行失败。 | 数据删除上链交易执行失败，删除状态变更未在链上生效。数据删除上链交易请求需重新提交。  
TxBlockConfirm | 上链交易落块确认。 | 数据删除上链交易执行成功，并获得落块确认  
TxBlkCfmFailure | 上链交易落块确认失败。 | 因落块确认失败，删除状态变更被链回滚。数据删除上链交易请求需重新提交。  
  
### DataDigestCheck

用于进行链上结构数据体验真的操作对象。

#### 构造函数

##### DataDigestCheck (Frontend, String)

    
~~~java    
    public DataDigestCheck (Frontend frontendServer, String businessDomainID);
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
    
    DataDigestCheck oDataDigestCheck = new DataDigestCheck(oFrontend, businessDomainID);
~~~    

##### DataDigestCheck ()

构造一个DataDigestCheck对象。后续需赋值要访问前置节点对象和要访问的业务域。

    
~~~java    
    public DataDigestCheck ();
~~~    

#### 属性

##### frontend

设置要访问的前置节点服务器对象。

    
~~~java    
    public Frontend frontend { set; get; }
~~~    

##### bizDomain

设置要进行数据验真的结构数据所在链上业务域的唯一标识。

    
~~~java    
    public String bizDomain { set; get; }
~~~    

##### dataID

设置要进行数据验真的链上数据的数据链上ID。

    
~~~java    
    public String dataID { set; get; }
~~~    

##### versionID

设置要验证的链上数据指定版本的数据版本ID。如果此属性不赋值，则默认是和链上数据的最新版本（即当前版本）的数据指纹特征信息进行验证。

    
~~~java    
    public String versionID { set; get; }
~~~    

##### dataDigest

本地结构数据体指纹特征值，用于验证本地结构数据是否和链上结构数据的特定版本的结构数据体一致，是否被篡改过。结构数据体内容如有任何微小的变化，对应的指纹特征值就会发生变化。

    
~~~java    
    public String dataDigest { set; get; }
~~~    

#### 方法

##### query

以同步调用方式，向指定的前置节点服务器提交"数据验真"链上查询请求，开始进行数据验真链上操作。

    
~~~java    
    public DataDigestCheckStatus query();
~~~    

**返回**

DataDigestCheckStatus

包含"数据验真"链上操作的查询结果信息。

### DataVersionsFetch

用于进行链上结构数据历史版本列表获取的操作对象。

#### 构造函数

##### DataVersionsFetch (Frontend, String)

    
~~~java    
    public DataVersionsFetch (Frontend frontendServer, String businessDomainID);
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
    
    DataVersionsFetch oDataVerFetch = new DataVersionsFetch(oFrontend, businessDomainID);
~~~    

##### DataVersionsFetch ()

构造一个DataVersionsFetch对象。后续需赋值要访问前置节点对象和要访问的业务域。

    
~~~java    
    public DataVersionsFetch ();
~~~    

#### 属性

##### frontend

设置要访问的前置节点服务器对象。

    
~~~java    
    public Frontend frontend { set; get; }
~~~    

##### bizDomain

设置要获取数据版本列表的结构数据所在链上业务域的唯一标识。

    
~~~java    
    public String bizDomain { set; get; }
~~~    

##### dataID

设置要获取数据版本列表的链上结构数据的数据链上ID。

    
~~~java    
    public String dataID { set; get; }
~~~    

##### fetcherID

设置要获取数据版本列表的获取者数字身份标识。数据获取者必须拥有数据读取权，owners、sharers、readers中的一个数字身份标识。

    
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
    //要获取数据版本列表的数据在链外应用系统数据库中的唯一标识
    String dataIDFromCaller = "57bee7e51eb48b2896288021b7374cfc78c0bac8";
    DataVersionsFetch.eventContext =dataIDFromCaller;
~~~    

#### 方法

##### query

向指定的前置节点服务器提交"数据版本列表获取"链上获取请求。调用此方法，将会通过onSuccess 和onFailure事件返回查询结果。

    
~~~java    
    public void query(String fetcherPrivateKey);
~~~    

**参数**

fetcherPrivateKey String

设置要进行数据版本列表获取的获取者数字身份私钥，fetcherID对应的私钥。私钥用于对"数据版本列表获取"链上获取请求进行签名确权。

**示例：**

    
~~~java     
    DataVersionsFetch oDataVerFetch = new DataVersionsFetch () {
        @Override
        public void onSuccess(DataVersionsFetchStatus dVerFetchStatus, Object context) {
         //事件触发条件：数据版本列表成功下载。
        }
    };
    
    //获取者数字身份私钥
    String fetcherPrivateKey = "8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc";
    //进行"数据版本列表获取"链上操作提交
    oDataVerFetch.query (fetcherPrivateKey);
~~~    

##### createRqBody

和前置节点进行交互，生成"数据版本列表获取"链上操作对应的链上获取请求体，以便使用fetcherID对应的私钥对链上获取请求体进行确权签名。

    
~~~java    
    public String createRqBody();
~~~    

**返回**

String

序列化的"数据版本列表获取"链上获取请求体。

**示例：**

    
~~~java     
    //生成"数据版本列表获取"链上获取请求体
    String dVerFetchRqBody= oDataVersionsFetch.createRqBody();
    //用获取者数字身份对"数据版本列表获取"链上获取请求体进行签名
    String fetcherPrivateKey = "3161be862236ae966004390908a5facb8f45763e38ce5cfb378e493f91a7873d";
    //--对"数据版本列表获取"链上获取请求体进行签名，并生成签名结果
    String txSign = CryptoUtil.crypto.signature(dVerFetchRqBody, fetcherPrivateKey);
~~~    

##### queryRqBody

使用数据版本列表获取链上获取请求体原文和fetcherID中数字身份对获取请求体的签名结果信息，向指定的前置节点服务器提交"数据版本列表获取"链上获取请求。调用此方法，将会通过onSuccess
和onFailure事件返回查询结果。

    
~~~java    
    public void queryRqBody (String dVerFetchRqBody, String txSign);
~~~    

**参数**

dVerFetchRqBody String

数据版本列表获取链上获取请求体原文

txSign String

数据版本列表获取链上获取请求体签名结果信息

**示例：**

    
~~~java     
    //【程序A】准备"数据版本列表获取"链上获取请求体
    DataVersionsFetch oPrepareDVerFetchRqBody = new DataVersionsFetch();
    oPrepareDVerFetchRqBody.dataID = "88021b73bac8b248b2896278c04a4378962e51eb";
    oPrepareDVerFetchRqBody.fetcherID = "0d64ad368ebc37ddb80424376408cb7bb88ff328"; 
    String dVerFetchRqBody = oPrepareDVerFetchRqBody.createRqBody ();
    
    //【程序B】在外部使用数字身份签名应用进行dVerFetchRqBody签名
    String fetcherPrivateKey = "8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc";
    String txSign = CryptoUtil.crypto.signature(dVerFetchRqBody, fetcherPrivateKey);
    
    //【程序A】提交"数据版本列表获取"链上获取请求，并跟踪链上处理状态
    DataVersionsFetch oDataVerFetch = new DataVersionsFetch (frontendServer, businessDomainID);
    oDataVerFetch.eventContext =dataIDFromCaller;
    oDataVerFetch.queryRqBody (dVerFetchRqBody, txSign);
~~~    

#### 事件

##### onSuccess

此事件在"数据版本列表获取"链上操作处理彻底完成，数据版本列表已成功下载时发生。

    
~~~java    
    public void onSuccess (DataVersionsFetchStatus dVerFetchStatus, Object context);
~~~    

参数

dVerFetchStatus DataVersionsFetchStatus

包含"数据获取"链上操作的当前处理状态信息的对象。

dVerFetchStatus中将包含如下返回信息，详细解释请参看DataVersionsFetchStatus对象相关描述：

| status，errorCode，message，versions |

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java     
    DataVersionsFetch oDataVersionsFetch = new DataVersionsFetch() {
        @Override
        public void onSuccess(DataVersionsFetchStatus dVerFetchStatus, Object context) {
           //事件触发条件："获取数据版本列表"成功下载。
           String dataIDFromCaller = context;
           System.out.println("链外应用系统调用端的唯一标识=" + dataIDFromCaller);
           List<DataVersionInfo> oDataVersionInfo = dVerFetchStatus.versions;
           for (int i=0; i< oDataVersionInfo.length; i++) {
             System.out.println("数据版本标识: " + oDataVersionInfo[i].versionID);
             System.out.println("数据版本的生成时间戳: " + oDataVersionInfo[i].timestamp);
    
             //获取指定版本的结构数据
             DataFetch oDataFetch = new DataFetch();
    
             //指定获取链上数据的数据链上ID。
             oDataFetch.dataID = "21b73bac878c04a437b28962e51eb48b28962880";
             //指定获取链上数据的数据版本ID。
             oDataFetch.versionID = oDataVersionInfo[i].versionID;
                          ......
             //进行"获取数据版本列表"上链操作提交
             DataFetchStatus oDataFetchStatus = oDataFetch.query(fetcherPrivateKey);
           }
        }
    }
~~~    

##### onFailure

此事件在"数据版本列表获取"链上操作处理失败，数据版本列表未被下载时发生。

    
~~~java    
    public void onSuccess (DataVersionsFetchStatus dVerFetchStatus, Object context);
~~~    

参数

dVerFetchStatus DataVersionsFetchStatus

包含"数据元数据获取"链上操作的当前处理状态信息的对象。

dVerFetchStatus中将包含如下返回信息，详细解释请参看DataVersionsFetchStatus对象相关描述：

| errorCode，message |

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java     
    DataVersionsFetch oDataVersionsFetch = new DataVersionsFetch() {
        @Override
        public void onFailure(DataVersionsFetchStatus dVerFetchStatus, Object context) {
          //事件触发条件："数据版本列表获取"链上操作处理失败，数据版本列表未被下载。
          String dataIDFromCaller = context;
          System.out.println("链外应用系统调用端的唯一标识=" + dataIDFromCaller);
          System.out.println("查询失败=" + dVerFetchStatus.message);
        }
    }
~~~    

##### onError

此为事件在DataVersionsFetch调用出现异常时发生。事件触发后返回异常信息。

    
~~~java    
    public void onError(FetchException e, Object context);
~~~    

示例：

    
~~~java     
    DataVersionsFetch oDataVersionsFetch = new DataVersionsFetch() {
        @Override
        public void onError(FetchException e, Object context) {
           //事件触发条件：DataVersionsFetch调用出现异常。并返回异常信息。
           String dataIDFromCaller = context;
           System.out.println("链外应用系统调用端的唯一标识=" + dataIDFromCaller);
           System.out.println("异常状态描述=" + e.state);
           System.out.println("异常信息=" + e.exc);
        }
    }
~~~    

### DataRightsFetch

用于进行链上结构数据权限列表获取的操作对象。权限列表包括：所有者列表、分享者列表、读取者列表。

  * 结构数据所有者有权获取完整的所有者列表和所有者分别授权的读取者列表；完整的分享者列表和分享者分别授权的读取者列表。
  * 结构数据分享者有权获取自己授权的读取者列表。
  * 结构数据读取者无权获取结构数据权限列表。

#### 构造函数

##### DataRightsFetch (Frontend, String)

    
~~~java    
    public DataRightsFetch (Frontend frontendServer, String businessDomainID);
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
    
    DataRightsFetch oDataRightsFetch = new DataRightsFetch(oFrontend, businessDomainID);
~~~    

##### DataRightsFetch ()

构造一个DataRightsFetch对象。后续需赋值要访问前置节点对象和要访问的业务域。

    
~~~java    
    public DataRightsFetch ();
~~~    

#### 属性

##### frontend

设置要访问的前置节点服务器对象。

    
~~~java    
    public Frontend frontend { set; get; }
~~~    

##### bizDomain

设置要获取结构数据权限列表的结构数据所在链上业务域的唯一标识。

    
~~~java    
    public String bizDomain { set; get; }
~~~    

##### dataID

设置要获取结构数据权限列表的链上结构数据的结构数据链上ID。

    
~~~java    
    public String dataID { set; get; }
~~~    

##### fetcherID

设置要获取结构数据权限列表的获取者数字身份标识，owners、sharers、readers中的一个数字身份标识。

    
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
    //要获取结构数据权限列表的结构数据在链外应用系统数据库中的唯一标识
    String DataIDFromCaller = "57bee7e51eb48b2896288021b7374cfc78c0bac8";
    DataRightsFetch.eventContext =DataIDFromCaller;
~~~    

#### 方法

##### query

向指定的前置节点服务器提交"结构数据权限列表获取"链上获取请求。调用此方法，将会通过onSuccess 和onFailure事件返回查询结果。

    
~~~java    
    public void query(String fetcherPrivateKey);
~~~    

**参数**

fetcherPrivateKey String

设置要进行结构数据权限列表获取的获取者数字身份私钥，fetcherID对应的私钥。私钥用于对"结构数据权限列表获取"链上获取请求进行签名确权。

**示例：**

    
~~~java     
    DataRightsFetch oDataRightsFetch = new DataRightsFetch () {
        @Override
        public void onSuccess(DataRightsFetchStatus dRightsFetchStatus, Object context) {
         //事件触发条件：结构数据权限列表成功下载。
        }
    };
    
    //获取者数字身份私钥
    String fetcherPrivateKey = "8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc";
    //进行"结构数据权限列表获取"链上操作提交
    oDataRightsFetch.query (fetcherPrivateKey);
~~~    

##### createRqBody

和前置节点进行交互，生成"结构数据权限列表获取"链上操作对应的链上获取请求体，以便使用fetcherID对应的私钥对链上获取请求体进行确权签名。

    
~~~java    
    public String createRqBody();
~~~    

**返回**

String

序列化的"结构数据权限列表获取"链上获取请求体。

**示例：**

    
~~~java     
    //生成"结构数据权限列表获取"链上获取请求体
    String dRightsFetchRqBody= oDataRightsFetch.createRqBody();
    //用获取者数字身份对"结构数据权限列表获取"链上获取请求体进行签名
    String fetcherPrivateKey = "3161be862236ae966004390908a5facb8f45763e38ce5cfb378e493f91a7873d";
    //--对"结构数据权限列表获取"链上获取请求体进行签名，并生成签名结果
    String txSign = CryptoUtil.crypto.signature(dRightsFetchRqBody, fetcherPrivateKey);
~~~    

##### queryRqBody

使用结构数据权限列表获取链上获取请求体原文和fetcherID中数字身份对获取请求体的签名结果信息，向指定的前置节点服务器提交"结构数据权限列表获取"链上获取请求。调用此方法，将会通过onSuccess
和onFailure事件返回查询结果。

    
~~~java    
    public void queryRqBody (String dRightsFetchRqBody, String txSign);
~~~    

**参数**

dRightsFetchRqBody String

结构数据权限列表获取链上获取请求体原文

txSign String

结构数据权限列表获取链上获取请求体签名结果信息

**示例：**

    
~~~java     
    //【程序A】准备"结构数据权限列表获取"链上获取请求体
    DataRightsFetch oPrepareDRightsFetchRqBody = new DataRightsFetch();
    oPrepareDRightsFetchRqBody.dataID = "88021b73bac8b248b2896278c04a4378962e51eb";
    oPrepareDRightsFetchRqBody.fetcherID = "0d64ad368ebc37ddb80424376408cb7bb88ff328"; 
    String dRightsFetchRqBody = oPrepareDRightsFetchRqBody.createRqBody ();
    
    //【程序B】在外部使用数字身份签名应用进行dRightsFetchRqBody签名
    String fetcherPrivateKey = "8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc";
    String txSign = CryptoUtil.crypto.signature(dRightsFetchRqBody, fetcherPrivateKey);
    
    //【程序A】提交"结构数据权限列表获取"链上获取请求，并跟踪链上处理状态
    DataRightsFetch oDataRightsFetch = new DataRightsFetch (frontendServer, businessDomainID);
    oDataRightsFetch.eventContext =DataIDFromCaller;
    oDataRightsFetch.queryRqBody (dRightsFetchRqBody, txSign);
~~~    

#### 事件

##### onSuccess

此事件在"结构数据权限列表获取"链上操作处理彻底完成，结构数据权限列表已成功下载时发生。

    
~~~java    
    public void onSuccess (DataRightsFetchStatus dRightsFetchStatus, Object context);
~~~    

参数

dRightsFetchStatus DataRightsFetchStatus

包含"结构数据权限列表获取"链上操作的当前处理状态信息的对象。

dRightsFetchStatus中将包含如下返回信息，详细解释请参看DataRightsFetchStatus对象相关描述：

| status，errorCode，message，dataRights |

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java     
    DataRightsFetch oDataRightsFetch = new DataRightsFetch() {
        @Override
        public void onSuccess(DataRightsFetchStatus dRightsFetchStatus, Object context) {
           //事件触发条件：在"获取结构数据权限列表"成功下载。
           String DataIDFromCaller = context;
           System.out.println("链外应用系统调用端的唯一标识=" + DataIDFromCaller);
           DataRightsInfo oDataRightsInfo = dRightsFetchStatus.dataRights;
    
           for (int i=0; i< oDataRightsInfo.owners.length; i++) {
             System.out.println("结构数据所有者身份标识: " + oDataRightsInfo.owners[i]);
           }
    
           //结构数据所有者所授权的分享者列表 
           SharerList[] oSharersSetByOwner = dRightsFetchStatus.sharersByOwner;
           for (int j=0; j< oSharersSetByOwner.length; j++) {
             System.out.println("有授权分享者的结构数据所有者数字身份标识=" + oSharersSetByOwner[j].ownerID);
             for (int n=0; n< oSharersSetByOwner[j].sharers.length; n++) {
                System.out.println("当前结构数据所有者授权的分享者数字身份标识=" + oSharersSetByOwner[i].sharers[n]);
             }
           }
        }
    }
~~~    

##### onFailure

此事件在"获取结构数据权限列表"链上操作处理失败，结构数据权限列表未被下载时发生。

    
~~~java    
    public void onSuccess (DataRightsFetchStatus dRightsFetchStatus, Object context);
~~~    

参数

dRightsFetchStatus DataRightsFetchStatus

包含"获取结构数据权限列表"链上操作的当前处理状态信息的对象。

dRightsFetchStatus中将包含如下返回信息，详细解释请参看DataRightsFetchStatus对象相关描述：

| errorCode，message |

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java     
    DataRightsFetch oDataRightsFetch = new DataRightsFetch() {
        @Override
        public void onFailure(DataRightsFetchStatus dRightsFetchStatus, Object context) {
          //事件触发条件：在"获取结构数据权限列表"链上操作处理失败，结构数据权限列表未被下载。
          String DataIDFromCaller = context;
          System.out.println("链外应用系统调用端的唯一标识=" + DataIDFromCaller);
          System.out.println("查询失败=" + dRightsFetchStatus.message);
        }
    }
~~~    

##### onError

此为事件在DataRightsFetch调用出现异常时发生。事件触发后返回异常信息。

    
~~~java    
    public void onError(FetchException e, Object context);
~~~    

示例：

    
~~~java     
    DataRightsFetch oDataRightsFetch = new DataRightsFetch() {
        @Override
        public void onError(FetchException e, Object context) {
           //事件触发条件：DataRightsFetch调用出现异常。并返回异常信息。
           String DataIDFromCaller = context;
           System.out.println("链外应用系统调用端的唯一标识=" + DataIDFromCaller);
           System.out.println("异常状态描述=" + e.state);
           System.out.println("异常信息=" + e.exc);
        }
    }
~~~    

## com.coolawchain.sdk.contract

### ContractCall

用于进行链上合约调用的操作对象。

#### 构造函数

##### ContractCall (Frontend, String)

    
~~~java    
    public ContractCall (Frontend frontendServer, String businessDomainID);
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
    
    ContractCall oContractCall = new ContractCall (oFrontend, businessDomainID);
~~~    

##### ContractCall ()

构造一个ContractCall对象。后续需赋值要访问前置节点对象和要访问的业务域。

    
~~~java    
    public ContractCall ();
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

##### scAddress

设置要调用的链上合约地址。

    
~~~java    
    public String scAddress { set; get; }
~~~    

##### callerID

设置合约调用者数字身份标识。

    
~~~java    
    public String callerID { set; get; }
~~~    

示例：

    
~~~java     
    String callerID = "0d64ad368ebc37ddb80424376408cb7bb88ff328";
    oContractCall.callerID = callerID;
~~~    

##### scHexParam

设置合约方法调用参数。此属性保存的是经过序列化后的参数体。参数体序列化方式由编写合约的开发者提供规范。

    
~~~java    
    public String scHexParam { set; get; }
~~~    

##### eventContext

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。

    
~~~java    
    public Object eventContext { set; get; }
~~~    

示例：

    
~~~java     
    //合约调用对应的链外应用系统调用端的参考标识，便于事件中进行后续业务逻辑处理。
    String scIDfromCaller = "57bee7e51eb48b2896288021b7374cfc78c0bac8";
    oContractCall.eventContext = scIDfromCaller;
~~~    

#### 方法

##### submit

向指定的前置节点服务器提交"合约调用"上链交易请求，开始进行合约调用链上操作。调用此方法，将会通过onTxBlockConfirm、onTxSendSuccess等事件返回链上处理结果。

    
~~~java    
    public void submit(String callerPrivateKey);
~~~    

**参数**

callerPrivateKey String

设置合约调用者的数字身份私钥。私钥用于对"合约调用"上链交易进行签名确权。

**示例：**

    
~~~java     
    //--链上调用者数字身份私钥
    String callerPrivateKey = "8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc";
    //进行合约调用上链操作提交
    oContractCall.submit (callerPrivateKey);
~~~    

##### createTxBody

和前置节点进行交互，生成"合约调用"链上操作对应的上链交易体，以便使用调用者数字身份对应的私钥对上链交易体进行确权签名。

    
~~~java    
    public String createTxBody();
~~~    

**返回**

String

序列化的"合约调用"上链交易体。

**示例：**

    
~~~java     
    //生成"合约调用"上链交易体
    String scCallTxBody= oContractCall.createTxBody();
    //用调用者数字身份对"合约调用"上链交易体进行签名
    String callerPrivateKey = "3161be862236ae966004390908a5facb8f45763e38ce5cfb378e493f91a7873d";
    //--对"合约调用"上链交易体进行签名，并生成签名结果
    String txSign = CryptoUtil.crypto.signature(scCallTxBody, callerPrivateKey);
~~~    

##### submitTxBody

使用合约调用上链交易体原文和调用者数字身份对上链交易体的签名结果信息，向指定的前置节点服务器提交"合约调用"上链交易请求。调用此方法，将会通过onTxBlockConfirm、onTxSendSuccess等事件返回链上处理结果。

    
~~~java    
    public void submitTxBody(String scCallTxBody, String txSign);
~~~    

**参数**

scCallTxBody String

合约调用上链交易体原文

txSign String

合约调用上链交易体签名结果信息

**示例：**

    
~~~java     
    //【程序A】准备合约调用上链交易体
    ContractCall oPrepareSCCallTxBody = new ContractCall();
    oPrepareFileUploadTxBody.scAddress = "88021b73bac8b248b2896278c04a4378962e51eb";
    oPrepareFileUploadTxBody.callerID = "0d64ad368ebc37ddb80424376408cb7bb88ff328"; 
    oContractCall.scHexParam = SCHexParam;
    
    String scCallTxBody= oPrepareSCCallTxBody.createTxBody();
    
    //【程序B】在外部使用数字身份签名应用进行scCallTxBody签名
    String callerPrivateKey = "3161be862236ae966004390908a5facb8f45763e38ce5cfb378e493f91a7873d";
    String txSign = CryptoUtil.crypto.signature(scCallTxBody, callerPrivateKey);
    
    
    //【程序A】提交合约调用上链交易，并跟踪链上处理状态
    ContractCall oContractCall = new FileUpload (frontendServer, businessDomainID);
    oContractCall.eventContext = scIDfromCaller;
    oContractCall.submitTxBody (scCallTxBody, txSign);
~~~    

#### 事件

##### onTxBlockConfirm

此事件在合约调用成功，并获得落块确认时发生。

    
~~~java    
    public void onTxBlockConfirm(ContractCallStatus scCallStatus, Object context);
~~~    

参数

scCallStatus ContractCallStatus

包含"合约调用"链上操作的当前处理状态信息的对象。

scCallStatus中将包含如下返回信息，详细解释请参看ContractCallStatus对象相关描述：

|
status，errorCode，message，scHexReturnData，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight
|

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java     
    ContractCall oContractCall = new ContractCall() {
        @Override
        public void onTxBlockConfirm(ContractCallStatus scCallStatus, Object context) {
           //事件触发条件：合约调用成功，并获得落块确认。
           SCTxBlockInfo oSCTxBlockInfo = scCallStatus.txBlockData;
           System.out.println("合约调用返回结果=" + scCallStatus.scHexReturnData);
           String scIDfromCaller = context;
           System.out.println("链外应用系统调用端的唯一标识=" + scIDfromCaller);
        }
    }
~~~    

##### onTxBlkCfmFailure

此事件在合约调用上链交易落块确认失败，合约调用影响的链上数据变化被链回滚时发生。事件触发后，会返回错误信息。合约调用上链交易请求需重新提交。

    
~~~java    
    public void onTxBlockCfmFailure(ContractCallStatus scCallStatus, Object context);
~~~    

参数

scCallStatus ContractCallStatus

包含"合约调用"链上操作的当前处理状态信息的对象。

scCallStatus中将包含如下返回信息，详细解释请参看ContractCallStatus对象相关描述：

|
status，errorCode，message，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight
|

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java     
    ContractCall oContractCall = new ContractCall() {
        @Override
        public void onTxBlockCfmFailure(ContractCallStatus scCallStatus, Object context) {
           //事件触发条件：合约调用上链交易落块确认失败，合约调用影响的链上数据变化被链回滚。
           //事件触发后，会返回错误信息。合约调用上链交易请求需重新提交。
           SCTxBlockInfo oSCTxBlockInfo = scCallStatus.txBlockData;
           System.out.println("合约调用上链交易Hash =" + oSCTxBlockInfo.txHash);
           System.out.println("合约调用上链交易落块确认失败的返回结果=" + scCallStatus.message);
           String scIDfromCaller = context;
           System.out.println("链外应用系统调用端的唯一标识=" + scIDfromCaller);
        }
    }
~~~    

##### onTxSendSuccess

此事件在合约调用上链交易发送成功，等待区块链执行处理时发生。

    
~~~java    
    public void onTxSendSuccess(ContractCallStatus scCallStatus, Object context);
~~~    

参数

scCallStatus ContractCallStatus

包含"合约调用"链上操作的当前处理状态信息的对象。

scCallStatus中将包含如下返回信息，详细解释请参看ContractCallStatus对象相关描述：

| status，errorCode，message，txHash |

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java     
    ContractCall oContractCall = new ContractCall(){
        @Override
        public void onTxSendSuccess(ContractCallStatus scCallStatus, Object context) {
           //事件触发条件：合约调用上链交易发送成功，等待区块链执行处理。 
           SCTxBlockInfo oSCTxBlockInfo = scCallStatus.txBlockData;
           System.out.println("合约调用上链交易Hash =" + oSCTxBlockInfo.txHash);
        }
    }
~~~    

##### onTxSendFailure

此事件在合约调用上链交易发送失败时发生。合约调用上链交易请求需重新提交。

    
~~~java    
    public void onTxSendFailure(ContractCallStatus scCallStatus, Object context);
~~~    

参数

scCallStatus ContractCallStatus

包含"合约调用"链上操作的当前处理状态信息的对象。

scCallStatus中将包含如下返回信息，详细解释请参看ContractCallStatus对象相关描述：

| errorCode，message |

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java     
    ContractCall oContractCall = new ContractCall() {
        @Override
        public void onTxSendFailure(ContractCallStatus scCallStatus, Object context) {
           //事件触发条件：合约调用上链交易发送失败。
           System.out.println("合约调用上链交易发送失败的返回结果=" + scCallStatus.message);
        }
    }
~~~    

##### onTxExecSuccess

此事件在合约调用上链交易执行成功，等待落块确认时发生。

    
~~~java    
    public void onTxExecSuccess(ContractCallStatus scCallStatus, Object context);
~~~    

参数

scCallStatus ContractCallStatus

包含"合约调用"链上操作的当前处理状态信息的对象。

scCallStatus中将包含如下返回信息，详细解释请参看ContractCallStatus对象相关描述：

|
status，errorCode，message，scHexReturnData，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight
|

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java     
    ContractCall oContractCall = new ContractCall(){
        @Override
        public void onTxExecSuccess(ContractCallStatus scCallStatus, Object context) {
           //事件触发条件：合约调用上链交易执行成功，等待落块确认。
           SCTxBlockInfo oSCTxBlockInfo = scCallStatus.txBlockData;
           System.out.println("合约调用返回结果=" + scCallStatus.scHexReturnData);
           String scIDfromCaller = context;
           System.out.println("链外应用系统调用端的唯一标识=" + scIDfromCaller);
           System.out.println("合约调用上链交易Hash=" + oSCTxBlockInfo.txHash);
           System.out.println("交易执行时间戳=" + oSCTxBlockInfo.txExecTimestamp.toString());
           System.out.println("交易所在区块hash=" + oSCTxBlockInfo.blockHash);
           System.out.println("交易所在区块生成时间戳" + oSCTxBlockInfo.blockedTimestamp.toString());
           System.out.println("交易所在区块高度=" + oSCTxBlockInfo.blockHeight);
        }
    }
~~~    

##### onTxExecFailure

此事件在合约调用上链交易执行失败，合约调用影响的链上数据变化未上链生效时发生。事件触发后会返回错误信息。文件元数据上链交易请求需重新提交。

    
~~~java    
    public void onTxExecFailure(ContractCallStatus scCallStatus, Object context);
~~~    

参数

scCallStatus ContractCallStatus

包含"合约调用"链上操作的当前处理状态信息的对象。

scCallStatus中将包含如下返回信息，详细解释请参看ContractCallStatus对象相关描述：

|
status，errorCode，message，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight
|

context Object

设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。

示例：

    
~~~java     
    ContractCall oContractCall = new ContractCall(){
        @Override
        public void onTxExecFailure(ContractCallStatus scCallStatus, Object context) {
           //事件触发条件：合约调用上链交易执行失败，合约调用影响的链上数据变化未上链生效。
           SCTxBlockInfo oSCTxBlockInfo = scCallStatus.txBlockData;
           String scIDfromCaller = context;
           System.out.println("链外应用系统调用端的唯一标识=" + scIDfromCaller);
           System.out.println("结构数据保存上链交易Hash =" + oSCTxBlockInfo.txHash);
           System.out.println("链上执行失败的返回结果=" + scCallStatus.message);
        }
    }
~~~    

##### onError

此为事件在ContractCall调用出现异常时发生。事件触发后返回异常信息。

    
~~~java    
    public void onError(TxException e, Object context);
~~~    

示例：

    
~~~java     
    ContractCall oContractCall = new ContractCall() {
        @Override
        public void onError(TxException e, Object context) {
           //事件触发条件：ContractCall调用出现异常。并返回异常信息。
           String scIDfromCaller = context;
           System.out.println("链外应用系统调用端的唯一标识=" + scIDfromCaller);
           System.out.println("异常状态描述=" + e.state);
           System.out.println("异常信息=" + e.exc);
        }
    }
~~~