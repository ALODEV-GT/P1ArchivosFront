import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RolEmpleadoDTO } from '../../../../../control/RolEmpleadoDTO';
import { RolesService } from '../../services/roles.service';
import { ColaboradoresService } from '../../services/colaboradores.service';
import { EmpleadoDTO } from '../../../../../control/EmpleadoDTO';
import { EstablecimientoDTO } from '../../../../../control/EstablecimientoDTO';
import { EstablecimientoService } from '../../../inventario/services/establecimiento.service';
import { LoginService } from '../../../../authentication/services/login.service';
import { PermisoDTO } from '../../../../../control/PermisoDTO';

declare var window: any;

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.css']
})
export class ColaboradoresComponent implements OnInit {

  btnNameActiveRol: string = "Rol";
  btnNameActiveSucursal: string = "Establecimiento";
  roles!: RolEmpleadoDTO[];
  rol!: RolEmpleadoDTO;
  empleados!: EmpleadoDTO[];
  establecimientos!: EstablecimientoDTO[];
  establecimiento!: EstablecimientoDTO;

  mostrarMensaje: boolean = false;
  mensaje: string = "";

  //Paginacion
  public page!: number;

  //Modal
  btnNameActiveRolM: string = "";
  btnNameActiveSucursalM: string = "";
  formModal: any;
  idM: number = 0;
  nombreM: string = "";
  usuarioM: string = "";
  contrasenaM: string = "";
  rolM!: RolEmpleadoDTO;
  establecimientoM!: EstablecimientoDTO;

  errorActualizarModal: boolean = false;
  mostrarMensajeModal: boolean = false;

  constructor(
    private rolesService: RolesService,
    private empleadosService: ColaboradoresService,
    private fb: FormBuilder,
    private establecimientoService: EstablecimientoService,
  ) {
    this.listarEmpleados();
    this.listarRoles();
    this.listarEstablecimientos();
  }

  ngOnInit(): void {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById("exampleModal")
    );
  }

  openModal(empleado: EmpleadoDTO) {
    this.mensaje = "";
    this.mostrarMensajeModal = false;
    this.rolM = empleado.rolEmpleado;
    this.establecimientoM = empleado.establecimiento;
    this.btnNameActiveRolM = empleado.rolEmpleado.nombre;
    this.btnNameActiveSucursalM = empleado.establecimiento.nombre;
    this.idM = empleado.idEmpleado;
    this.nombreM = empleado.nombre;
    this.usuarioM = empleado.usuario;
    this.contrasenaM = empleado.contrasena;
    this.formModal.show();
  }

  elegirRolM(rol: RolEmpleadoDTO) {
    this.btnNameActiveRolM = rol.nombre;
    this.rolM = rol;
  }

  elegirEstablecimientoM(establecimiento: EstablecimientoDTO) {
    this.btnNameActiveSucursalM = establecimiento.nombre;
    this.establecimientoM = establecimiento;
  }

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(5)]],
    usuario: ['', [Validators.required, Validators.minLength(5)]],
    contrasena: ['', [Validators.required, Validators.minLength(5)]]
  });

  editar() {
    let empleado: EmpleadoDTO = new EmpleadoDTO(this.idM, this.rolM.idRolEmpleado, this.establecimientoM.idEstablecimiento, this.usuarioM, this.contrasenaM, this.nombreM, this.rolM, this.establecimientoM);

    this.empleadosService.editar(empleado).subscribe((resp: EmpleadoDTO) => {
      if (!resp) {
        this.errorActualizarModal = true;
        this.mostrarMensajeModal = false;
      } else {
        this.errorActualizarModal = false;
        this.mostrarMensajeModal = true;
        this.listarEmpleados();
      }
    });
  }

  guardar() {
    if (this.btnNameActiveRol == "Rol" || this.btnNameActiveSucursal == "Establecimiento") {
      this.mostrarMensaje = true;
      this.mensaje = "Por favor elija el rol y el establecimiento"
      return
    }
    const nombre: string = this.miFormulario.get('nombre')?.value;
    const contrasena: string = this.miFormulario.get('contrasena')?.value;
    const usuario: string = this.miFormulario.get('usuario')?.value;
    let empleado: EmpleadoDTO = new EmpleadoDTO(0, this.rol.idRolEmpleado, this.establecimiento.idEstablecimiento, usuario, contrasena, nombre, this.rol, this.establecimiento);
    this.empleadosService.validarUsuario(empleado).subscribe((resp: PermisoDTO) => {
      if (resp.rol.idRolEmpleado == 0) { //Si idRolEmpleado es 0, es porque no existe el usuario
        this.empleadosService.agregar(empleado).subscribe((resp) => {
          console.log(resp);
          this.mostrarMensaje = true;
          this.mensaje = "Usuario agregado correctamente";
          this.listarEmpleados();
        });
      } else {
        this.mostrarMensaje = true;
        this.mensaje = "Este usuario ya existe";
      }
    });

  }

  listarRoles() {
    this.rolesService.lista().subscribe((res: RolEmpleadoDTO[]) => {
      this.roles = res;
    });
  }

  listarEmpleados() {
    this.empleadosService.lista().subscribe((res: EmpleadoDTO[]) => {
      this.empleados = res;
    });
  }

  elegirRol(rol: RolEmpleadoDTO) {
    this.btnNameActiveRol = rol.nombre;
    this.rol = rol;
  }

  elegirEstablecimiento(establecimiento: EstablecimientoDTO) {
    this.btnNameActiveSucursal = establecimiento.nombre;
    this.establecimiento = establecimiento;
  }

  listarEstablecimientos() {
    this.establecimientoService.lista().subscribe((res: EstablecimientoDTO[]) => {
      this.establecimientos = res;
    });
  }

  eliminar(empleado: EmpleadoDTO): void {
    this.empleadosService.eliminar(empleado).subscribe((res: boolean) => {
      this.listarEmpleados();
      if (res) {
        this.mostrarMensaje= true;
        this.mensaje = "Empleado eliminado"
      }

    });
  }

}
