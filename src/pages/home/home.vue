<template>
  <div class="cons">
  <div class="bs-docs-featurette">
    <div class="container">
      <h2 class="bs-docs-featurette-title">Cancer Treatment Target Analysis and Effective Drug Prediction based on CMADP</h2>
      <p class="lead">
        <span>CMADP combines the genome-scale metabolic network and the metabolic gene reconstruction obtained from the 
        differential analysis to obtain the differential metabolic network model, which predicts potential cancer treatment targets 
        by means of single gene knockout and toxicity testing. Afterwards, the drugs associated with the target are obtained from drug 
        databases such as DrugBank, PharmGKB, Drug Target Commons, GuidetoPharmacology, etc. Finally, </span>
        <a href="http://dx.doi.org/10.1101/2020.07.08.192930" target="_blank">DeepCDR</a> 
        <span>is used to predict the therapeutic effect of the drug in cancer cell lines. </span></p>

      <hr class="half-rule">

      <div class="row">
        
          <img src="./assets/workflow.png"  class="img-responsive" width="100%">
          <div class="col-md-4">
        </div>
        <div class="col-md-4">
          <h4 align="center">Workflow of CMADP</h4>
        </div>
          <!-- <p>performed functional enrichment analysis and found that phosphoproteins with high -->
              <!-- expression in SC1, SC3, and SC5 were enriched in focal adhesion and adherens junction -->
              <!-- pathways (Figure 3C)<a href="css/index.htm#less" >Less</a> and <a href="css/index.htm#sass" >Sass</a></p> -->
        
        <!-- <div class="col-md-4">
          <img src="./assets/img/2.jpg"  class="img-responsive" width="100%">
          <h3>Data</h3>
          <p>constructed tissue specific kinase-substrate networks based on previously reported methods </p>
        </div>
        <div class="col-md-4">
          <img src="./assets/img/3.jpg"  class="img-responsive" width="100%">
          <h3>Result</h3>
          <p> establish an accurate index for determining the most suitable drugs for a given tumor type.</p>
        </div> -->
      </div>

      <!-- <hr class="half-rule">

      <p class="lead">TreeQnet is full open sourced</p>
      <a href="https://github.com/twbs/bootstrap" class="btn btn-outline btn-lg">Acess Our Paper</a> -->
    </div>
  </div>
  </div>
</template>


<style scoped>
@import "./assets/css/docs.min.css";
@import "./assets/css/patch.css";
@import "../../assets/styles/bootstrap.min.css";
</style>