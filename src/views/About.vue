<template>
<div>
  <v-app-bar 
    app 
    color="rgba(0,0,0, .8)"
    height="100"
    elevate-on-scroll
    dark
  >
  <div class=" hidden-lg-only">
    <home-menu/>
  </div>
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
          <v-card>
           
             </v-card>
        </v-col>   

        <v-col id="address" cols="10"
        md="5" class="mr-3 hidden-md-only hidden-xs-only hidden-sm-only">     
          <v-card class="pa-4" color="transparent" height="80" elevation="0"  >
            <v-icon left color="white">
              mdi-google-maps
            </v-icon>  
            <b>Endereço (</b><a href="https://goo.gl/maps/kLx8zsfHkDytiwGL9" style="color:#FFFFFF">Clique aqui para abrir o maps</a>)<br/><a href="https://goo.gl/maps/kLx8zsfHkDytiwGL9" style="color:#FFFFFF">Rua Carlos Vicari, 235</a><br/>
            <a href="https://goo.gl/maps/kLx8zsfHkDytiwGL9" style="color:#FFFFFF;">Pompéia - Água Branca - São Paulo</a>
          </v-card>
        </v-col>
            
        <v-col md="2"  class="hidden-md-only hidden-xs-only hidden-sm-only"> 
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
      <div style="padding-left: 20px;">
        <h4 class="black--text font-weight-black hidden-lg-only  hidden-xl-only"> Pneu ARO 17 PRIMACY 4 225/50R17 98Y XL</h4><br/>
      </div>
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
      <div id="greenButton">  
          <v-img 
            max-width="200"
            :src="require('@/assets/michelin-logo.jpg')"
          />
      </div>
      <br/>
      <div id="spec">
        <h2 class="black--text font-weight-black"> Pneu ARO 17 PRIMACY 4 225/50R17 98Y XL</h2><br/>
      
      <ul>
        <li class="black--text font-weight-black"><h2>Aceitamos todos os cartões de crédito</h2></li>
        <li class="black--text font-weight-black"><h2>PIX</h2></li>  
      </ul> 
      </div>
      <br/>
      <div id="greenButton">
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
      </div>
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
           Ideal para SUV, 4x4 e sedans, o Michelin Primacy 4 oferece excelência em segurança, economia, durabilidade e conforto. É um pneu completo, perfeito para você que enfrenta diversos desafios. O Michelin Primacy 4 é número um quando falamos em segurança. O desenho da sua banda de rodagem melhorou o desempenho em frenagens em piso molhado, o que aumentou em mais de 20% a expulsão da água. Além disso, é um modelo pensado para o seu bolso. Por durar muito, o período de troca é maior. Esse movimento acontece pelos compostos de última geração utilizados na borracha, aumentando a durabilidade em 30%. O Michelin Primacy 4 também é um pneu que ajuda o meio ambiente, pois é 11% menos resistente ao rolamento em relação ao seu antecessor, diminuindo o consumo de combustível e a emissão de CO2. Se você procura um pneu excelente, encontrou a resposta no Michelin Primacy 4: ideal para o seu veículo.

<p><h2>Sobre a marca Michelin</h2><br/>

A marca Michelin foi fundada em 1889 em Clermont-Ferrand, França e com o passar dos anos tornou-se uma referência em pneus. Produz atualmente pneus para carros, motos, suvs, caminhonetes e muito mais. Os pneus Michelin se consagraram no mercado graças à excelente aderência, durabilidade e conforto. Hoje são utilizados como pneu original de fábrica por diversas montadoras de automóveis, desde carros compactos até superesportivos de alta potência, que precisam de toda a tecnologia dos pneus Michelin para obter os melhores resultados nas pistas.</p>
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
        <v-row>
        <v-col cols="9">
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
        </v-col>
          <v-col>
            <v-img
                  :src="require('@/assets/inmetro.png')"
                  contain
                  class="pa-4"
                  width="300"
                
              />
          </v-col>
        </v-row>
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
        <table>
					<tr>
							<td class="uppercase">
								<b>ALFA ROMEO:</b>&nbsp;
								159</td>
						</tr>
					<tr>
							<td class="uppercase">
								<b>AUDI:</b>&nbsp;
								A4, A4 II, A5, A6, ALLROAD QUATTRO</td>
						</tr>
					<tr>
							<td class="uppercase">
								<b>BMW:</b>&nbsp;
								SÉRIE 3, SÉRIE 3 II, SÉRIE 3 III, X1</td>
						</tr>
					<tr>
							<td class="uppercase">
								<b>CHEVROLET:</b>&nbsp;
								CRUZE, CRUZE SPORT6</td>
						</tr>
					<tr>
							<td class="uppercase">
								<b>CITROEN:</b>&nbsp;
								DS5</td>
						</tr>
					<tr>
							<td class="uppercase">
								<b>DS:</b>&nbsp;
								DS5</td>
						</tr>
					<tr>
							<td class="uppercase">
								<b>FORD:</b>&nbsp;
								FUSION, FUSION II, FUSION III</td>
						</tr>
					<tr>
							<td class="uppercase">
								<b>HONDA:</b>&nbsp;
								ACCORD</td>
						</tr>
					<tr>
							<td class="uppercase">
								<b>HYUNDAI:</b>&nbsp;
								SONATA</td>
						</tr>
					<tr>
							<td class="uppercase">
								<b>JAGUAR:</b>&nbsp;
								XE</td>
						</tr>
					<tr>
							<td class="uppercase">
								<b>MERCEDES:</b>&nbsp;
								CLASSE C, CLASSE C II, CLASSE C III</td>
						</tr>
					<tr>
							<td class="uppercase">
								<b>MITSUBISHI:</b>&nbsp;
								ECLIPSE</td>
						</tr>
					<tr>
							<td class="uppercase">
								<b>PEUGEOT:</b>&nbsp;
								3008, 3008.0</td>
						</tr>
					<tr>
							<td class="uppercase">
								<b>SUZUKI:</b>&nbsp;
								S-CROSS</td>
						</tr>
					<tr>
							<td class="uppercase">
								<b>VOLVO:</b>&nbsp;
								C30, S40, S60, S80, V40</td>
						</tr>
        </table>	
        
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
    components: {
      
      HomeMenu: () => import('@/views/menu'),
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
  #spec{
    padding-left: 40px;
    

  }

  #greenButton{
    display: flex;
    justify-content: center; 
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
