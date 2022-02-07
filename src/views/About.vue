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
      <v-row  no-gutters>
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

         <v-col>     
          <v-card  >
           
             </v-card>
        </v-col>   

        <v-col cols="10"
        md="5" class="mr-3 hidden-xs-only">     
          <v-card class="pa-4" color="transparent" height="80" elevation="0"  >
            <v-icon left color="white">
              mdi-google-maps
            </v-icon>  
            <b>Endereço (</b><a href="https://goo.gl/maps/kLx8zsfHkDytiwGL9" style="color:#FFFFFF">Clique aqui para abrir o maps</a>)<br/><a href="https://goo.gl/maps/kLx8zsfHkDytiwGL9" style="color:#FFFFFF">Rua Carlos Vicari, 235</a><br/>
            <a href="https://goo.gl/maps/kLx8zsfHkDytiwGL9" style="color:#FFFFFF;">Pompéia - Água Branca - São Paulo</a>
          </v-card>
        </v-col>
            
        <v-col md="2"  class="hidden-xs-only"> 
          <v-card  class="pa-4" color="transparent" height="80" elevation="0"  >
            <v-icon left color="white">
              mdi-phone
            </v-icon>  
            <b>Contato</b><br/> <a href="tel:+55-11-3862-4428" style="color:#FFFFFF">(11) 3862-4428</a><br/>
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
        <v-container id="div5" align="center">   
          <v-row style="text-align: center;">
            <v-col>
               <v-icon x-large color="black">mdi-tire</v-icon><br/>
              Desenho Assimétrico
            </v-col>
            <v-col>
               <v-icon x-large color="black">mdi-road-variant</v-icon><br/>
              Alta Aderência
            </v-col>
            <v-col>
              <v-icon x-large color="black">mdi-shield-star-outline</v-icon><br/>
              Qualidade Premium
            </v-col>
            <v-col>
              <v-icon x-large color="black">mdi-volume-off</v-icon><br/>
              Baixo Ruído
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-container>
    

    <v-container id="div2" align="left">
      <v-row align-text="left" no-gutters> 
        <v-img 
          max-width="200"
          :src="require('@/assets/michelin-logo.png')"
        />
      </v-row>  
      <br/>
      
      <h2 class="black--text font-weight-black"> Pneu ARO 17 PRIMACY 4 225/50R17 98Y XL</h2><br/>
    
      <ul>
        <li class="black--text font-weight-black"><h2>Aceitamos todos os cartões de crédito</h2></li>
        <li class="black--text font-weight-black"><h2>PIX</h2></li>  
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
        <table> 	
			  	<tr>
						<td>
							<p>Marca</p>
						</td>
						<td>
							<p>MICHELIN</p>
						</td>
					</tr>
          <tr>
						<td>
							<p>Modelo</p>
						</td>
						<td>
							<p>PRIMACY 4</p>
						</td>
					</tr>
				  <tr>
						<td>
							<p>Medida</p>
						</td>
						<td>
							<p>225/50R17</p>
						</td>
					</tr>
			  	<tr>
						<td>
							<p>Largura</p>
						</td>
						<td>
							<p>225mm</p>
						</td>
					</tr>
				  <tr>
						<td>
							<p>Perfil</p>
						</td>
						<td>
						  <p>50%</p>
						</td>
				  </tr>
			    <tr>
						<td>
							<p>Aro</p>
						</td>
						<td>
							<p>17</p>
						</td>
					</tr>
			  	<tr>
						<td>
							<p>Diâmetro total em mm</p>
						</td>
						<td>
							<p>656.8</p>
						</td>
					</tr>
			  	<tr>
            <td>
              <p>Índice de peso</p>
            </td>
            <td>
              <p>98 - 750 kg</p>
            </td>
			  	</tr>
			  	<tr>
						<td>
							<p>Índice de velocidade</p>
						</td>
						<td>
							<p>Y - 300 km/h</p>
						</td>
					</tr>
			  	<tr>
						<td>
							<p>Tipo de construção</p>
						</td>
						<td>
							<p>RADIAL</p>
						</td>
					</tr>
			  	<tr>
            <td>
                <p>Peso</p>
            </td>
            <td>
                <p>9.54</p>
            </td>
           </tr>
                <tr>
						<td>
							<p>Extra Load</p>
						</td>
						<td>
							<p>SIM</p>
						</td>
					</tr>
				  <tr>
						<td>
							<p>Protetor de bordas</p>
						</td>
						<td>
							<p>NÃO</p>
						</td>
					</tr>
				  <tr>
						<td>
							<p>Sidewall</p>
						</td>
						<td>
							<p>BSW LETRAS PRETAS</p>
						</td>
					</tr>
				<tr>
						<td>
							<p>Tipo de terreno</p>
						</td>
						<td>
							<p>HT</p>
						</td>
					</tr>
				<tr>
						<td>
							<p>Desenho</p>
						</td>
						<td>
							<p>Assimétrico</p>
						</td>
					</tr>
				<tr>
						<td>
							<p>Registro Inmetro</p>
						</td>
						<td>
							<p>002711/2017</p>
						</td>
					</tr>
			  	<tr>
						<td>
							<p>Garantia</p>
						</td>
						<td>
							<p>5 anos Contra Defeito de Fabricação</p>
						</td>
					</tr>
			  	<tr>
						<td>
							<p>Observações</p>
						</td>
						<td>
							<p>Produto novo. Imagem meramente ilustrativa</p>
						</td>
					</tr>
        </table>
        
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
      <v-card >
      
        <v-card-text class=text-center >
          <br/>
          <h2 style="color:#000000">Nossa loja</h2>
          <br/>
          <h3><v-icon>mdi-google-maps</v-icon>Rua Carlos Vicari, 235, Pompéia, São Paulo - SP</h3> <a href="https://goo.gl/maps/kLx8zsfHkDytiwGL9">(clique aqui para abrir o google maps)</a><br/>
           <a href="https://goo.gl/maps/kLx8zsfHkDytiwGL9" style="color:#000000; text-decoration: none"></a><br/>
           <h2 style="color:#000000">Telefone / WhatsApp:</h2><br/> 
           <h2>(11)3862-4428</h2><a href="tel:+55-11-3862-4428">(clique aqui para nos ligar)</a><br/><br/>
           <h2>(11) 98433-2546</h2><a href="https://api.whatsapp.com/send/?phone=5511984332546">(clique aqui para abrir o whatsapp)</a> <br/><br/>
           <b class="text-h6" style="color:red;" ><i>Abrimos todos os dias das 7h às 21h, inclusive aos domingos e feriados</i></b>
         
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
    margin-top: 60px ;
    
  
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

  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}

  
</style>
