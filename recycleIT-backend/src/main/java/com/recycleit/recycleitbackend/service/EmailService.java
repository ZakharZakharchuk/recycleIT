package com.recycleit.recycleitbackend.service;

public interface EmailService {
    void sendSimpleMessage(String subject, String userEmail, String text);
}
