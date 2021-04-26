<template lang="html">
  <div>
    <div class='main'>
    <el-card class="box-card" shadow="hover">
        <el-table
          :data="items"
          style="width: 100%"
          :row-class-name="tableRowClassName">
          <el-table-column
            prop="name"
            label="name"
            width="180">
          </el-table-column>
          <el-table-column
             prop="description"
             label="description"
             width="180">
           </el-table-column>
           <el-table-column
             prop="modelname"
             label="modelname"
             width="180">
           </el-table-column>
           <el-table-column
             prop="status"
             label="status">
           </el-table-column>
           <el-table-column prop="" label="operation" align="center">
              <template slot-scope="scope">
                <el-button size="small" type="primary" @click="deleteobject(scope.row)">execute</el-button>       
             </template>
            </el-table-column>
        </el-table>
        
         

        <el-pagination
          :page-size="pageSize"
          class="center"
          layout="prev, pager, next"
          :total="count"
          @current-change="pageChange">
        </el-pagination>
    </el-card>
    </div>
  </div>
</template>

<script>
import MoPaging from '../../components/paging'
export default {
    components : {
            MoPaging 
        },
  inject: ['reload'],
  data () {
         return {
            pageSize : 10, //每页显示10条数据
            currentPage : 1, //当前页码
            count : 0,
            items: [],
            shows: {'name':0,'description':0, 'model':0, 'modelname':0,'outparams':1, 'status': 0, 'stdout': 0,'createdAt': 0, 'inputparams': 0, 'id':0,}
      }
  },
   created() {
            //请求第一页数据
            this.getList()

        } ,
  methods: {

        
         tableRowClassName({row, rowIndex}) {
  
           if (row.status === "failed") { 
            return 'warning-row';
          } else if (row.status === "sucess") {
          return 'success-row';
          }else if (row.status === "executing"){
           return 'wait-row';
          }else{
            return 'no-row';
          }
         },
         
        download1 (paths) {
            if(!sessionStorage.getItem('token')){
              this.$router.push('/login');
            }else{
            console.log(paths)
            for(const path of JSON.parse( paths)){
            console.log(path)
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
            }
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
                let params = {
                    params: {
                        skip: (this.currentPage-1)*this.pageSize,
                        limit: this.pageSize
                    }
                };
                console.log(params)
                this.instance.getTasks(params).then((res)=>{ 
					//成功
                    this.items = res.data.result;
                    this.count = res.data.count;
                    console.log(this.count)
                    
				})
            },
        pageChange (currentPage) {
                this.currentPage = currentPage
                this.getList()
            },
   
    // 文件超出个数限制时的钩子
    deleteobject(item) {
        if(item.status=='success'){
          this.$confirm('This task has been executed and there is no need to execute it again', '', {
          confirmButtonText: 'I know',
          cancelButtonText: 'Cancel',
          type: 'warning'
        })
        }
        else if(item.status=='executing'){
          this.$confirm('This task is being executed', '', {
          confirmButtonText: 'I know',
          cancelButtonText: 'Cancel',
          type: 'warning'
        })
        }
        else{
          this.$confirm('This operation will execute the model, continue?', '', {
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
            type: 'warning'
          }).then(() => {
          let params = {
                    
                        id: item.id,
                        status: 'executing'
                    
                };
              
          console.log(params)
          this.instance.updateStatus(params,  {'Content-Type': 'application/x-www-form-urlencoded'}).then((res)=>{ 
					  //成功
                    console.log(res);
                });
          location.reload();
          });
          
        }
        
    },
     mounted() {
            //请求第一页数据
            this.getList()
        } 
  }
}
</script>

<style src='src/assets/styles/bootstrap.min.css' scoped></style>

<style scoped>
  .main { /* it is for tree that be in center*/
		margin-left: 3%; margin-bottom: 5%; margin-top: 3%;
	}
  .el-table .warning-row {
    background: rgba(31, 147, 255, 0.09);
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
  .el-table .wait-row {
    background:#D3E2F2;
  }
  .el-table .no-row {
    background:#F0F1E3;
  }
.center{
        text-align:center;
        margin-top:10px;
  }
 .box-card {
    width: auto;
  }
</style>
