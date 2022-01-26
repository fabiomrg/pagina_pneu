<template>
<div>
  <v-app-bar 
    app 
    color="rgba(0,0,0, .8)"
    height="100"
    elevate-on-scroll
    dark
  >
    <v-container>
      <v-row class="mb-1" no-gutters>
        <v-col cols="6"
        md="4">  
          <v-img
              :src="require('@/assets/logo.png')"
              contain
              class="pa-4"
              max-height="300"
              max-width="300"
          />
        </v-col>  
           
        <v-col cols="6"
        md="4" class="mr-3 hidden-xs-only">     
          <v-card class="pa-4" color="transparent" height="80" elevation="0"  >
            <v-icon left color="white">
              mdi-google-maps
            </v-icon>  
            <b>Endereço</b><br/><a href="https://goo.gl/maps/kLx8zsfHkDytiwGL9" style="color:#FFFFFF">Rua Carlos Vicari, 235</a><br/>
            <a href="https://goo.gl/maps/kLx8zsfHkDytiwGL9" style="color:#FFFFFF;">Pompéia - Água Branca - São Paulo</a>
          </v-card>
        </v-col>
            
        <v-col class="mr-3 hidden-xs-only"> 
          <v-card class="pa-4" color="transparent" height="80" elevation="0"  >
            <v-icon left color="white">
              mdi-phone
            </v-icon>  
            <b>Telefone / WhatsApp</b><br/> <a href="tel:+55-11-3862-4428" style="color:#FFFFFF">(11) 3862-4428</a><br/>
              <a href="tel:+55-11-98433-2546" style="color:#FFFFFF">(11) 98433-2546</a> <br/><br/>
          </v-card>
        </v-col>   
      </v-row>
    </v-container>

  </v-app-bar>
  <v-row>
    <v-container id="div4" align="right">
      <v-card elevation="4"> 
        <v-img  
          class="mx-auto" 
          :max-width="400"
          :src="require('@/assets/pneu.jpg')"
        
        />     
      </v-card>
    </v-container>
    <v-container id="div2" align="left">
      <p class="black--text font-weight-black"> 
      Passeio > ARO 17 PRIMACY 4 225/50R17 98Y XL
      </p>
      <v-row align-text="left" no-gutters> 
        <v-img 
          max-width="200"
          :src="require('@/assets/michelin-logo.png')"
        />
      </v-row>  
      <br/>
      <p class="black--text font-weight-black"> 
      Michelin ARO 17 PRIMACY 4 225/50R17 98Y XL
      </p>
      <ul>
        <li class="black--text font-weight-black">Aceitamos todos os cartões de crédito</li>
        <li class="black--text font-weight-black">PIX</li>  
      </ul> 
      <br/>
      <v-btn 
        color="green" 
        class="white--text" 
        @click="dialog = true"
        height="80">

          <v-icon color="white" x-large>mdi-whatsapp</v-icon>
            <v-col>  
              <v-row>
                Televendas/whatsapp<br/>
                (11)98433-2546<br/>
                
              </v-row> 
             
            </v-col>
      </v-btn>
      <br/><br/>
      <h2 class="black--text font-weight-black"> Abrimos todos os dias, inclusive aos domingos e feriados</h2>
    </v-container> 
  </v-row>
  <br/>
    <v-card 
      elevation="4" 
      class="mx-auto" 
      max-width="94%"
      outlined
      > 
        <v-card-title class="white--text white text-h5 red darken-4">
          Descrição do pneu
        </v-card-title>
          <v-card-text>
             <br/>
            O pneu Michelin Primacy 4 é um modelo que se destaca pela alta durabilidade e quilometragem, sendo que consegue manter as suas características de desempenho por muito mais tempo, ou seja, mesmo quando já está mais desgastado, é um pneu seguro e com excelente desempenho em curvas e frenagens, pois tem preservadas as maneiras com que trabalha. Em pista molhada, por exemplo, o desempenho é garantido, pois possui escultura diferenciada nos sulcos, mantendo a capacidade de expulsar a água mesmo com a borracha desgastada. Além disso, é um pneu confortável, silencioso e com ótima aderência em curvas e frenagens, além de apresentar ótimas respostas da direção, mesmo em altas velocidades.
          </v-card-text>
        
    </v-card>
    <br/><br/>
    <v-card 
      elevation="4" 
      class="mx-auto" 
      max-width="94%"
      outlined
      > 
      <v-card-title class="white--text white text-h5 red darken-4">
        Especificações Técnicas
      </v-card-title>
      <v-card-text>
          <br/>
        
      </v-card-text>     
    </v-card>
    <br/><br/>
    <v-card 
      elevation="4" 
      class="mx-auto" 
      max-width="94%"
      outlined
      > 
      <v-card-title class="white--text white text-h5 red darken-4">
        Aplicação
      </v-card-title>
      <v-card-text>
          <br/>
        
      </v-card-text>     
    </v-card>
  

  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"

    >
      <v-card dark>
        <v-card-title class="text-h5 black lighten-2">
          Nossa loja
        </v-card-title>

        <v-card-text>
          <br/>
           <h3>Endereço:</h3><br/><a href="https://goo.gl/maps/kLx8zsfHkDytiwGL9" style="color:#FFFFFF; text-decoration: none">Rua Carlos Vicari, 235  (clique aqui para abrir o google maps)</a><br/>
           <a href="https://goo.gl/maps/kLx8zsfHkDytiwGL9" style="color:#FFFFFF; text-decoration: none">Pompéia - Água Branca - São Paulo</a><br/><br/>
           <h3>Telefone / WhatsApp:</h3><br/> <a href="tel:+55-11-3862-4428" style="color:#FFFFFF; text-decoration: none">(11) 3862-4428 (clique aqui para nos ligar)</a><br/><br/>
           <a href="https://api.whatsapp.com/send/?phone=5511984332546" style="color:#FFFFFF; text-decoration: none">(11) 98433-2546 (clique aqui para abrir o whatsapp)</a> <br/><br/>
           <b class="text-h6">Abrimos todos os dias das 7h às 21h, inclusive aos domingos e feriados</b>
         
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            Fechar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>


</div>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },
  }
</script>

<style type="text/css">
  #div1{
    
    border-radius:10px;
    max-width: 600px;
    height: 500px;
    margin-top: 30px ;
    margin-left: 200px;
    background: #ffffff;
  
  }
  #div2{
    
    
    border-radius:10px;
    max-width: 600px;
    height: 500px;
    margin-top: 30px ;
    
  
  }
  #div3{
    
    border-radius:10px;
    max-width: 94%;
    height: 500px;
    margin-top: 30px ;
    
  
  }

   #div4{
    
    border-radius:10px;
    max-width: 450px;
    height: 500px;
    margin-top: 30px ;

  }
  
  </style>
