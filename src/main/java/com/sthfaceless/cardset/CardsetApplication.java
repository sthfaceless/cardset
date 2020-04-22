package com.sthfaceless.cardset;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})
public class CardsetApplication {

	public static void main(String[] args) {
		SpringApplication.run(CardsetApplication.class, args);
	}

}
