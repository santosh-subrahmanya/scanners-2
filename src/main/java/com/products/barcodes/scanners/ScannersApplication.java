package com.products.barcodes.scanners;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.SecurityProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.core.annotation.Order;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@EnableAutoConfiguration
@SpringBootApplication
@ComponentScan(basePackages = {"com.products.barcodes.scanners"})
public class ScannersApplication {
	
	@Bean
    public ApplicationSecurity webSecurityConfigurerAdapter() {
        return new ApplicationSecurity();
    }

	public static void main(String[] args) {
		SpringApplication.run(ScannersApplication.class, args);
	}
	
	@Order(SecurityProperties.BASIC_AUTH_ORDER)
	public static class MySecurityConfigurer extends WebSecurityConfigurerAdapter {

		@Override
		protected void configure(AuthenticationManagerBuilder builder) throws Exception {
			builder.inMemoryAuthentication()
			.withUser("user").password("user").roles("USER")
			.and().withUser("admin").password("admin").roles("ADMIN");
		}
		
		@Override
		protected void configure(HttpSecurity http) throws Exception {
			http.authorizeRequests().anyRequest().authenticated().and().httpBasic();
		}
	}
	
	
}
