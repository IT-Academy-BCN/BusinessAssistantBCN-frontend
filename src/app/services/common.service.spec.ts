import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { JwtInterceptor } from '../helpers/JwtInterceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CommonService } from './common.service';
import { RouterTestingModule } from '@angular/router/testing';


describe('CommonService', () => {

  let service: CommonService;
  let httpMock: HttpTestingController;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [
        CommonService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: JwtInterceptor,
          multi: true,
        },
      ],
    });
    service = TestBed.inject(CommonService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('GET', () =>{
    it('Should execute GET', () => {
      const result = 'testing';
      service.getZones().subscribe( response => {
        expect(response).toBe(result);
      });
      const req = httpMock.expectOne(`${ environment.BACKEND_BASE_URL }${ environment.BACKEND_ZONES_URL }`);
      expect(req.request.method).toBe('GET');
      req.flush(result);
    });

    it('Should add an Authorization header', () =>{
      localStorage.setItem('token','1234');
      service.getZones().subscribe(response => {
        expect(response).toBeTruthy();
      });
      const httpRequest = httpMock.expectOne(`${ environment.BACKEND_BASE_URL }${ environment.BACKEND_ZONES_URL }`);
      expect(httpRequest.request.headers.has('Authorization')).toEqual(true);

    });

    it('Should not add an Authorization header', () =>{
      localStorage.removeItem('token');
      service.getZones().subscribe(response => {
        expect(response).toBeTruthy();
      });
      const httpRequest = httpMock.expectOne(`${ environment.BACKEND_BASE_URL }${ environment.BACKEND_ZONES_URL }`);
      expect(httpRequest.request.headers.has('Authorization')).toEqual(false);
    });
  })

});