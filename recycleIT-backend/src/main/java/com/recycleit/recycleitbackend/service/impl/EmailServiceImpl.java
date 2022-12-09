package com.recycleit.recycleitbackend.service.impl;

import com.recycleit.recycleitbackend.service.EmailService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class EmailServiceImpl implements EmailService {

    private final JavaMailSender emailSender;

    private static final String MESSAGE_PATTERN = "Email: %s\nMessage: %s";

    @Override
    public void sendSimpleMessage(String subject, String userEmail, String text) {
        String format = String.format(MESSAGE_PATTERN, userEmail, text);
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("recycleithacathon@gmail.com");
        message.setTo("recycleithacathon@gmail.com");
        message.setSubject(subject);
        message.setText(format);
        emailSender.send(message);
        System.out.println("Message sent");
    }
}