package com.recycleit.recycleitbackend.security.jwt;

import com.recycleit.recycleitbackend.entity.Role;
import com.recycleit.recycleitbackend.entity.User;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

public class JwtUserFactory {

    public JwtUserFactory() {
    }

    public static JwtUser create(User user) {
        return new JwtUser(
            user.getId(),
            user.getUsername(),
            user.getEmail(),
            user.getPassword(),
            mapToGrantedAuthorities(new ArrayList<>(user.getRoles()))
        );
    }

    private static List<GrantedAuthority> mapToGrantedAuthorities(List<Role> userRoles) {
        return userRoles.stream()
            .map(role ->
                new SimpleGrantedAuthority(role.getName())
            ).collect(Collectors.toList());
    }
}
