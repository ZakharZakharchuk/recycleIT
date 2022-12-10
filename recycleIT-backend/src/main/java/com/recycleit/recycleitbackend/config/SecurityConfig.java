package com.recycleit.recycleitbackend.config;

import com.recycleit.recycleitbackend.security.jwt.JwtConfigurer;
import com.recycleit.recycleitbackend.security.jwt.JwtTokenProvider;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.stereotype.Component;

@Component
@Slf4j
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    private final JwtTokenProvider jwtTokenProvider;

    private static final String LOGIN_ENDPOINT = "/login";

    private static final String FACILITY_ENDPOINT = "/facilities/**";

    private static final String REGISTER_ENDPOINT = "/register";

    private static final String SUPPORT_ENDPOINT = "/support-questions/**";

    private static final String SERVICE_ENDPOINT = "/services_questions/**";

    private static final String RATINGS_ENDPOINT = "/ratings/**";

    @Autowired
    public SecurityConfig(JwtTokenProvider jwtTokenProvider) {
        this.jwtTokenProvider = jwtTokenProvider;
    }

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }


    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
            .httpBasic().disable()
            .csrf().disable()
            .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            .and()
            .authorizeRequests()
            .antMatchers(LOGIN_ENDPOINT, REGISTER_ENDPOINT, FACILITY_ENDPOINT, SUPPORT_ENDPOINT,
                SERVICE_ENDPOINT).permitAll()
            .antMatchers(RATINGS_ENDPOINT).hasRole("USER")
            .and()
            .apply(new JwtConfigurer(jwtTokenProvider));
    }
}
