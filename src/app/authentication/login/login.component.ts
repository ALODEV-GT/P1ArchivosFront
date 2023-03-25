import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { EmpleadoDTO } from '../../../control/EmpleadoDTO';
import { PermisoDTO } from '../../../control/PermisoDTO';
import { Router } from '@angular/router';
import { RolEmpleadoDTO } from '../../../control/RolEmpleadoDTO';
import { EstablecimientoDTO } from '../../../control/EstablecimientoDTO';
import { TipoEstablecimientoDTO } from '../../../control/TipoEstablecimientoDTO';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) { }

  existe: boolean = true;


  ngOnInit(): void {

  }

  miFormulario: FormGroup = this.fb.group({
    usuario: ['', [Validators.required, Validators.minLength(5)]],
    contrasena: ['', [Validators.required, Validators.minLength(5)]]
  });

  autenticar() {
    const usuario: string = this.miFormulario.get('usuario')?.value;
    const contrasena: string = this.miFormulario.get('contrasena')?.value;
    let rol: RolEmpleadoDTO = new RolEmpleadoDTO(0, "");
    let tipoEst: TipoEstablecimientoDTO = new TipoEstablecimientoDTO(0, "");
    let establecimiento: EstablecimientoDTO = new EstablecimientoDTO(0, 0, "", "", tipoEst);
    let empleado: EmpleadoDTO = new EmpleadoDTO(0, 0, usuario, contrasena, "", rol, establecimiento);
    this.loginService.validarUsuario(empleado).subscribe((resp: PermisoDTO) => {
      if (resp.rol.idRolEmpleado == 0) { //Si idRolEmpleado es 0, es porque no existe el usuario
        this.existe = false;
      } else {
        //Guardar el usuario y sus permisos
        this.loginService.empleado = empleado;
        this.loginService.permisos = resp;

        //Direccionar a las paginas
        switch (resp.rol.idRolEmpleado) {
          case 1: //Administrador
            this.router.navigate(['./administrador/inicio'])
            break;
          case 2: //Vendedor
            this.router.navigate(['./vendedor/inicio'])
            break;
          case 3: //Inventario
            this.router.navigate(['./inventario/inicio'])
            break;
          case 4: //Bodeguero
            this.router.navigate(['./bodeguero/inicio'])
            break;
          default:
            break;
        }
      }
    });

  }
}
