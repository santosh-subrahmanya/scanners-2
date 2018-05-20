package com.products.barcodes.scanners;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

public class ApplicationSecurity extends WebSecurityConfigurerAdapter {
	
	@Autowired
	private RESTAuthenticationEntryPoint authenticationEntryPoint;
	
	//@Autowired
	//private RESTAuthenticationFailureHandler authenticationFailureHandler;
	
	@Autowired
	private RESTAuthenticationSuccessHandler authenticationSuccessHandler;

	@Override
	protected void configure(AuthenticationManagerBuilder builder) throws Exception {
		builder.inMemoryAuthentication().withUser("user").password("user").roles("USER").and().withUser("admin")
				.password("admin").roles("ADMIN");
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.authorizeRequests().antMatchers("/rest/**").authenticated();
		http.csrf().disable();
		http.exceptionHandling().authenticationEntryPoint(authenticationEntryPoint);
		http.formLogin().successHandler(authenticationSuccessHandler);
		//http.formLogin().failureHandler(authenticationFailureHandler);
	}

}
