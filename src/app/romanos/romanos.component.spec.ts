import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RomanosComponent } from './romanos.component';

describe('RomanosComponent', () => {
  let component: RomanosComponent;
  let fixture: ComponentFixture<RomanosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RomanosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RomanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should detect empty input', () => {
    fixture.componentInstance.numero = ""
    fixture.componentInstance.calcular();
    expect(component.respuesta).toEqual("Ingrese un numero arábigo")
    expect(component.error).toEqual(false)
  });

  it('should detect a letter in the input', () => {
    fixture.componentInstance.numero = "12a3"
    fixture.componentInstance.calcular();
    expect(component.respuesta).toEqual("Ingrese un numero arábigo, sin letras")
    expect(component.error).toEqual(false)
  });

  it('should detect an input of a length > 4', () => {
    fixture.componentInstance.numero = "12345"
    fixture.componentInstance.calcular();
    expect(component.respuesta).toEqual("Debe ser menor a 4 digitos y menor que 1001")
    expect(component.error).toEqual(false)
  });

  it('should detect an input > 1000', () => {
    fixture.componentInstance.numero = "1001"
    fixture.componentInstance.calcular();
    expect(component.respuesta).toEqual("Debe ser menor a 4 digitos y menor que 1001")
    expect(component.error).toEqual(false)
  });

  it('should detect a space in the input', () => {
    fixture.componentInstance.numero = "88 8"
    fixture.componentInstance.calcular();
    expect(component.respuesta).toEqual("Ingrese el numero sin espacios")
    expect(component.error).toEqual(false)
  });

  it('should create a roman number of a random arabic number', () => {
    fixture.componentInstance.numero = Math.floor(Math.random()*1000).toString();
    fixture.componentInstance.calcular();
    expect(component.respuesta).not.toBe("Ingrese el numero sin espacios");
    expect(component.respuesta).not.toBe("Debe ser menor a 4 digitos y menor que 1001");
    expect(component.respuesta).not.toBe("Ingrese un numero arábigo, sin letras");
    expect(component.respuesta).not.toBe("Ingrese un numero arábigo");
    expect(component.error).toEqual(true)
  });

  it('should create a roman number of 1000', () => {
    fixture.componentInstance.numero = "1000"
    fixture.componentInstance.calcular();
    expect(component.respuesta).toEqual("M")
    expect(component.error).toEqual(true)
  });

  it('should create a roman number of 35', () => {
    fixture.componentInstance.numero = "35"
    fixture.componentInstance.calcular();
    expect(component.respuesta).toEqual("XXXV")
    expect(component.error).toEqual(true)
  });

  it('should create a roman number of 93', () => {
    fixture.componentInstance.numero = "93"
    fixture.componentInstance.calcular();
    expect(component.respuesta).toEqual("XCIII")
    expect(component.error).toEqual(true)
  });

  it('should create a roman number of 888', () => {
    fixture.componentInstance.numero = "888"
    fixture.componentInstance.calcular();
    expect(component.respuesta).toEqual("DCCCLXXXVIII")
    expect(component.error).toEqual(true)
  });

});
