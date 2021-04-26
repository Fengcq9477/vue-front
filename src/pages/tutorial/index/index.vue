

<template>

<div >
  
  <div class="tutorial-content">
    <ul class="tutorial-nav-ul" id="nav">
     
      <!-- <li class="tutorial-nav-li"><a href="#welcome" class=" ">Welcome</a></li> -->
      <li class="tutorial-nav-li"><a href="#howtouse" class=" ">How to use</a></li>
      <li class="tutorial-nav-li"><a href="#addtask" class=" ">Add Task</a></li>
      <li class="tutorial-nav-li"><a href="#runtask" class=" ">Run Task</a></li>
    
    
      <li class="tutorial-nav-li"><a href="#results" class=" ">Results</a></li>
      <li class="tutorial-nav-li"><a href="#tutorial" class=" ">Tutorial</a></li>
      <!-- <li class="tutorial-nav-li"><a href="#faqs" class=" ">FAQs</a></li> -->
      <li class="tutorial-nav-li"><a href="#contact" class=" ">Contact Us</a></li>
    </ul>
    
    <div class="tutorial-doc-content">
      <!-- <h2 id="welcome"> Welcome to TreeQNet</h2>
      <p> </p>
      
      <p>TreeQNet innovatively uses the proteome and phosphoproteome
         data of tumor tissues and normal tissues of cancer patients to construct tissue-specific kinase-substrate 
         network , and then uses the elastic regression model to predict so as to realize the prediction of drug sensitivity
          of patients.  Based on this webserver,
        You can:</p>
      <ul class='tutorial-ul'>
        <li>Prediction of drug sensitivity using proteome data. </li>
        <li>Prediction of drug sensitivity using phosphoproteome data. </li>
      </ul> -->
      
      <h3 id="howtouse"> How to use</h3>
      <li> To use TreeQNet webserver visit <a href="" >202.38.31.87:8180 </a></li>
      
      <h3 id="addtask"> Add Task</h3>
      <ul class='tutorial-ul'>
        <li>Name and describe the task.</li>
        <li>Select the metabolic network model to be used.</li>
        <li>Upload files according to model requirements.</li>
        <li>Click the "Upload Task" button to add your task.</li>
        <li>Click "Cancel Upload" to cancel adding the task.</li>
      </ul>
      <h3 id="runtask">Run Task</h3>
      <ul class='tutorial-ul'>
        <li>"Run task" gives all the tasks stored in the platform database, including yours and those added by others.</li>
        <li>Each item gives the name, function description, and metabolic network model used by the task.</li>
        <li>You can execute the task you want by clicking the "execute" button, whether it is yours or someone else's.</li>
        <li>Tasks in the "executing" state and "success" state do not need to be re-executed.</li>
      </ul>
      <h3 id="results"> Results</h3>
      <ul class='tutorial-ul'>
        <li>You can query the tasks you are interested in by task name.</li>
        <li>"Task Information" displays detailed information about this task, including name, status, description, creation time, end time, etc.</li>
        <li>"Download" provides the download of task running results. The list of downloaded files depends on the output parameter list of the metabolic network model used.</li>
      </ul>
       <h3 id="tutorial"> Tutorial</h3>
      <ul class='tutorial-ul'>
        <li>Provide guidance on platform usage.</li>
      </ul>
       <!-- <h3 id="faqs"> FAQs</h3>
      <ul class='tutorial-ul'>
        <li>Colors of Red Bar</li>
        <li>Colors of Yellow Bar</li>
        <li>Colors of Green Bar</li>
      </ul> -->
       <h3 id="contact"> Contact Us</h3>
      <ul class='tutorial-ul'>
        <li>If you have any questions about the use of the platform, please contact us.</li>
      </ul>
    </div>
  </div>


</div>
</template>


<style scoped>
@import "../../../assets/styles/bootstrap.min.css";
@import "../css/style.css";

</style>
