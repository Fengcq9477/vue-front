<template>
<div class='main'>
  <el-form :model="form"  :rules="rules"  ref="form">
   
      <el-card shadow="hover">
        <div slot="header" >
          <span>Add Task</span>
        </div>
        
        <!-- <span style="font-family:Times New Roman, Times, serif; font-style:Bold;font-size:10px;">Task Description</span>
        <el-popover
            placement="top-start"
            title="Instructions"
            width="200"
            trigger="hover"
            content="you can define the name and description of your task, which you want to compute by our model">
            <i class="el-icon-question" slot="reference"></i>
        </el-popover> -->

        <!-- <el-divider></el-divider> -->
        
        <el-row>
        <el-col :span="8" style="margin-bottom: 12px;">
        
          <el-form-item label=" " prop="taskname">
            <div class="bigfont">Enter the name of your task</div>
            <el-input v-model="form.taskname" placeholder="please enter your task name" style="width:300px"></el-input>
          </el-form-item>
          <el-form-item label=" " prop="description">
            <div class="bigfont">Enter the description of your task</div>
            <el-input v-model="form.description" placeholder="please enter your task description" style="width:300px"></el-input>
          </el-form-item>
          <el-form-item label=" " prop="mail">
            <div class="bigfont">Enter your Email address</div>
            <el-input v-model="form.mail" placeholder="please enter your Email address" style="width:300px"></el-input>
          </el-form-item>
        </el-col>
         
      
    
       
        
        <el-col :span="16" style="margin-bottom: 12px;">
          
          <el-form-item label=" " prop="modelname">
            <div class="bigfont">Select the model you want to use</div>
            
            <el-select v-model="form.modelname" @change="selectFn($event)" placeholder="select your model">
              <el-option
                v-for="(modelname, index) in modelnames"
                :key="modelname.name"
                :label="modelname.name"
                :value="index">{{modelname.name}}
              </el-option>
            </el-select>
                 
          </el-form-item>
          <div v-show="isShow">
          <el-form-item label="*" prop="inputparams">
            <div class="bigfont">Enter parameters you need to use in your task</div>
            <el-table :data="form.inputparams" style="width: 100%" empty-text = "--">
              <el-table-column prop="type" label="param type" width="180">
                <template slot-scope="scope">
                  <el-input v-if="0" v-model="scope.row.type"></el-input>
                  <span v-else>{{scope.row.type}}</span>
                </template>
              </el-table-column>
              <el-table-column prop="default" label="param value" width="180">
                <template slot-scope="scope">
            <el-input v-if="1" v-model="scope.row.default"></el-input>
            <span v-else>{{scope.row.default}}</span>
                </template>
              </el-table-column>
              
              <el-table-column prop="name" label="param description" >
                <template slot-scope="scope">
            <el-input v-if="0" v-model="scope.row.name"></el-input>
            <span v-else>{{scope.row.name}}</span>
                </template>
              </el-table-column>
            </el-table>
          </el-form-item>

          <el-form-item label="*" prop="outparams">
            <div class="bigfont">Enter type of results you want</div>
            <el-table :data="form.outparams" style="width: 100%" empty-text = "--">
              <el-table-column prop="type" label="param type" width="180">
                <template slot-scope="scope">
                  <el-input v-if="0" v-model="scope.row.type"></el-input>
                  <span v-else>{{scope.row.type}}</span>
                </template>
              </el-table-column>
              <el-table-column prop="default" label="param value" width="180">
                <template slot-scope="scope">
            <el-input v-if="0" v-model="scope.row.default"></el-input>
            <span v-else>{{scope.row.default}}</span>
                </template>
              </el-table-column>
              <el-table-column prop="name" label="param description" >
                <template slot-scope="scope">
            <el-input v-if="0" v-model="scope.row.name"></el-input>
            <span v-else>{{scope.row.name}}</span>
                </template>
              </el-table-column>
              
            </el-table>
          </el-form-item>
          </div>
        </el-col>
        </el-row>
  
        <!-- <span style="font-family:Times New Roman, Times, serif; font-style:Bold;font-size:10px;">Upload Data</span>
        <el-popover
            placement="top-start"
            title="Instructions"
            width="200"
            trigger="hover"
            content="you can define the name and description of your task, which you want to compute by our model">
            <i class="el-icon-question" slot="reference"></i>
        </el-popover> -->
        <el-divider></el-divider>
        <div>
          <p style="color:red">Please Note:</p>
          <p><span> (1)You need to upload the corresponding RNA-seq data file according to the model requirements, the data format is log2 (count+1), which is consistent with the </span>
          <a href="https://gdc.cancer.gov/" target="_blank"> Genomic Data Commons (GDC) portal </a>
          <span>, and the file format is .csv. You can modify the name of the input parameter, but it must be consistent with the file you uploaded.</span>
          </p>
          <p>(2)Please double check the email address you entered, we will send you a notification email after the task is executed successfully or failed.</p>
          <p>(3)Please read the output parameter description carefully, it provides the specific function of the corresponding parameter.</p>
          </div>
        <el-divider></el-divider>
        
        <!-- <el-form-item label=" " prop="type">
          <div class="bigfont">Select data type you want to upload</div>
          <el-select v-model="form.type">
            <el-option
              v-for="type in types"
              :key="type"  
              :value="type">{{type}}
            </el-option>
          </el-select>
        </el-form-item> -->
        <div style="margin-bottom: 24px;">
          <MultiFileUpload></MultiFileUpload>
        </div>
        
        <!-- <span style="font-family:Times New Roman, Times, serif; font-style:Bold;font-size:10px;">Upload Task</span>
        <el-popover
            placement="top-start"
            title="Instructions"
            width="200"
            trigger="hover"
            content="you can define the name and description of your task, which you want to compute by our model">
            <i class="el-icon-question" slot="reference"></i>
        </el-popover> -->
        <el-divider></el-divider>
    
        <el-form-item>
          <el-button size="small" type="primary" @click="updateHandle('form')">Upload Task</el-button>
          <el-button size="small">Cancel Upload</el-button>
        </el-form-item>
      </el-card>
    
   
  </el-form>
</div>
</template>

<script>
import axios from 'axios'
import MultiFileUpload from '../../components/upload/MultiFileUpload'

export default {
   components: {
      MultiFileUpload
  },
  data() {
    return {
      types: [
        '.csv', '.tsv', '.xlsx'
      ],
      isShow: false,
      modelnames: [],
      limitNum: 100,
      formLabelWidth: '80px',
      fileList: [],
      form: {
          file: '',
          taskname: '',
          description: '',
          modelname:'',
          mail:'',
          // type: '.csv',
          inputparams:[],
          outparams:[],
        },
        rules: {
          description: [
            { required: true, message: 'description can not be empty', trigger: 'blur' }
          ],
          taskname: [
            { required: true, message: 'taskname can not be empty', trigger: 'blur' }
          ],
        
          type: [
            { required: true, message: 'type can not be empty', trigger: 'blur' }
          ],
          modelname: [
            { required: true, message: 'model can not be empty', trigger: 'blur' }
          ],
          mail: [
            { required: true, message: 'email address can not be empty', trigger: 'blur' }
          ],
        }
    }
  },
  created() {
            //请求第一页数�?
            this.formData = new FormData()
            this.getList()
        } ,
  
  methods: {
    download1 (paths) {
          // if(!sessionStorage.getItem('token')){
          //   this.$router.push('/login');
          // }else{
          
          for(const path of JSON.parse( paths)){
           
          //console.log(path)
          let params = {
                  params: {
                      path: path.value
                  }
              };
             console.log(params)
              this.instance.download(params).then((res)=>{ 
                this.downloadfile(res.data,path.value.split("/").pop());
              });
          }
          // }
      },
      
      downloadfile (data,fileName) {
        if (!data) {
            return
        }
        let url = window.URL.createObjectURL(new Blob([data]));
        let link = document.createElement('a');
        link.style.display = 'none';
        link.href = url;
        link.setAttribute('download',fileName);
        document.body.appendChild(link);
        link.click();
      },


    getList () {            
                this.instance.getModels().then((res)=>{ 
          //成功
                this.modelnames = res.data.result;
                   
				})
      },
    mounted() {
            //请求第一页数�?
            this.getList()
        },

    // selected: function(type) {
    //   this.type = type
    // },
    
    selectFn(e) {
      
      console.log(e)
      
      this.form.inputparams = this.modelnames[Number(e)].inputparams;
      this.form.outparams = this.modelnames[Number(e)].outparams;
      this.form.modelname = this.modelnames[Number(e)].name;

     
      this.isShow = true;
     
                    
    },
    updateHandle (formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            this.updatedatabase();
          }
        });
      },
    
    updatedatabase() {
      let path = ''
        if(this.filepath){
           path = this.filepath          
        }
        const data = {
          modelname: this.form.modelname,
          rawtype: this.form.type,
          taskname: this.form.taskname,
          rawurl: path,
          mail:this.form.mail,
          description: this.form.description,
          inputparams: JSON.stringify(this.form.inputparams),
          outparams: JSON.stringify(this.form.outparams),
        };
      
        console.log(data);
        this.instance.insertTasks(data,  {'Content-Type': 'application/x-www-form-urlencoded'}).then(res => {
          this.$notify.success({
            title: 'success',
            message: `add task success`
          });
          console.log(res);
        }).catch((error)=> {
          this.$notify.error({
            title: error.response.data.error.id,
            message: error.response.data.error.message
        });
        });
    }
  }
}
</script>

<style lang="scss" scoped>
.main { /* it is for tree that be in center*/
		margin-left: 3%; margin-bottom: 5%; margin-top: 3%; margin-right: 20%;
	}
.el-card /deep/ .el-card__header {
    background-color: rgba(31, 147, 255, 0.3);
    font-family:"Times New Roman", Times, serif;
}
.bigfont{
  font-family:"Helvetica Neue";
  font-weight:bold;
  font-size:10px;
}
</style>