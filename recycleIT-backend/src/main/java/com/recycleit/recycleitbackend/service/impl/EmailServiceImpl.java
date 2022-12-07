package com.recycleit.recycleitbackend.service.impl;

import com.recycleit.recycleitbackend.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailServiceImpl implements EmailService {

    @Autowired
    private JavaMailSender emailSender;

    private static final String MESSAGE_PATTERN = "Email: %s\nMessage: %s";

    @Override
    public void sendSimpleMessage(String userEmail, String text) {
        String format = String.format(MESSAGE_PATTERN, userEmail, text);
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("recycleithacathon@gmail.com");
        message.setTo("recycleithacathon@gmail.com");
        message.setSubject("Question to service");
        message.setText(format);
        emailSender.send(message);
        System.out.println("Message sent");
    }
}