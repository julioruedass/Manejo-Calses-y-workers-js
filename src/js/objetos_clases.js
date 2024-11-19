
        class Personaje {
            name;
            energy;

            constructor(name, energy ) {
                this.name = name;
                this.energy = energy;
              }
            // Getter para 'name'
            get name() {
                return this.name;
            }

            get status() {
                return '⭐'.repeat(this.energy);
              }
        }

       
    
        const mario = new Personaje("Mario Bross",5);     // { name: "Mario", energy: 10 }
        mario.name      // Mario
        mario.energy    // 5
        mario.status    // '⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐'
  
        function f_set_values_person(){
            elemento_nom=document.getElementById("nombre_1")
            elemento_nom.innerHTML=mario.name;
            elemento_liv=document.getElementById("lives_1")
            elemento_liv.innerHTML=mario.status;
        }