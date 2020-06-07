import { LoadingIndicatorModule } from './shared/components/loading-indicator/loading-indicator.module';
import { NotAuthenticatedGuard } from './shared/route-guards/not-authenticated.guard';
import { IsAuthenticatedGuard } from './shared/route-guards/is-authenticated.guard';
import { FormErrorHandler } from './shared/error-handlers/form-error-handler.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component/app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent],
  providers: [FormErrorHandler, IsAuthenticatedGuard, NotAuthenticatedGuard],
})
export class AppModule {}
