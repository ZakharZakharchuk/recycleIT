package com.recycleit.recycleitbackend.entity;

public class ServicesQuestion {

    private Long id;

    private String userMail;

    private String question;

    public Long getId() {
        return id;
    }

    public String getUserMail() {
        return userMail;
    }

    public String getQuestion() {
        return question;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setUserMail(String userMail) {
        this.userMail = userMail;
    }

    public void setQuestion(String question) {
        this.question = question;
    }
}
