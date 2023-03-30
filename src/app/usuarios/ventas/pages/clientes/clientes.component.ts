import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from '../../services/cliente.service';
import { ClienteDTO } from '../../../../../control/ClienteDTO';

declare var window: any;

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  existe: boolean = false;
  agregado: boolean = false;
  clientes!: ClienteDTO[];

  //Pagination
  public page!: number;

  //Modal
  formModal: any;
  nitAux: string = "";
  nit: string = "";
  nombre: string = "";
  errorActualizar: boolean = false;
  mostrarMensaje: boolean = false;

  constructor(
    private fb: FormBuilder,
    private clienteService: ClienteService
  ) {
    this.listar();
  }

  ngOnInit(): void {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById("exampleModal")
    );
  }

  openModal(nit: string, nombre: string) {
    this.nit = nit;
    this.nombre = nombre;
    this.formModal.show();
  }

  editar() {
    this.clienteService.editar(new ClienteDTO(this.nit, this.nombre, false)).subscribe((resp: ClienteDTO)=>{
      if (!resp) {
        this.errorActualizar = true;
        this.mostrarMensaje = false;
      }else{
        this.errorActualizar = false; 
        this.mostrarMensaje = true;
        this.listar();       
      }
    });
  }

  miFormulario: FormGroup = this.fb.group({
    nit: ['', [Validators.required, Validators.minLength(5)]],
    nombre: ['', [Validators.required, Validators.minLength(5)]]
  });

  listar() {
    this.clienteService.lista().subscribe((res: ClienteDTO[]) => {
      this.clientes = res;
    });
  }

  validar() {
    const nit: string = this.miFormulario.get('nit')?.value;
    const nombre: string = this.miFormulario.get('nombre')?.value;
    let cliente: ClienteDTO = new ClienteDTO(nit, nombre, false);
    this.clienteService.validar(cliente).subscribe((resp: ClienteDTO) => {
      if (resp.existe) {
        this.existe = true;
        this.agregado = false;
      } else {
        this.agregar(cliente);
      }
    });

  }

  agregar(cliente: ClienteDTO) {
    this.clienteService.agregar(cliente).subscribe((resp: ClienteDTO) => {
      this.agregado = true;
      this.existe = false;
      this.listar();

    });
  }

  eliminar(nit: string): void {
    this.clienteService.eliminar(nit).subscribe((res) => {
      this.listar();
    });
  }


}
