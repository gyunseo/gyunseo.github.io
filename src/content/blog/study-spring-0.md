---
author: Gyunseo Lee
title: Spring 공부 0
pubDatetime: 2025-04-03T15:34:00+09:00
modDatetime: 2025-04-03T15:34:00+09:00
featured: false
draft: false
tags:
  - Spring
  - Java
description: Spring 프레임워크 공부하기 0
ogImage:
---

## Table of contents

## Spring Framework이란?

Spring은 Java 기반 엔터프라이즈 애플리케이션 개발을 크게 단순화하는 가벼운 오픈 소스 프레임워크  
-> 무슨 말?

# Spring 아키텍처

![](https://res.cloudinary.com/gyunseo-blog/image/upload/f_auto/v1743662239/image_gxugkl.png)

Spring은 엔터프라이즈 어플리케이션 개발하는 데에 필요한 여러 기능을 제공함.  
크게 7가지 모듈로 구분.  

**Core container**: 핵심 컨테이너는 Spring 프레임워크의 핵심이며 다른 모든 모듈은 그 위에 구축됩니다. 종속성 주입 기능을 제공하며 제어 역전이라고도 합니다. 이 모듈에는 Spring 빈 구성 파일에 정의된 다양한 애플리케이션 객체(빈이라고 함)의 수명 주기를 생성하고 관리하는 BeanFactory(팩토리 패턴의 구현)가 포함되어 있습니다.

**Application context:** 이 모듈은 다양한 엔터프라이즈 수준 서비스 _인 국제화(i18n)_ , 스케줄링, JNDI 액세스, 이메일 등을 제공합니다.

**AOP:** 이 모듈은 로깅, 트랜잭션 관리 등과 같은 애플리케이션의 다양한 횡단적 관심사를 구현하는 데 도움이 됩니다. 이러한 관심사는 애플리케이션 코드에서 분리되어 다양한 횡단적 구성 파일에 주입됩니다.

**Spring web:** Spring 프레임워크는 Spring 웹 모듈을 제공하여 웹 기반 애플리케이션을 개발하는 데 도움이 됩니다. 이 모듈은 애플리케이션 컨텍스트 모듈 위에 구축되어 웹 지향 기능을 제공합니다.

**Spring MVC:** Spring MVC 모듈은 Spring 웹 모듈 위에 구축되었으며 MVC 디자인 패턴에 기반한 웹 애플리케이션을 개발하는 데 도움이 됩니다.

**Spring DAO:** 거의 모든 엔터프라이즈 애플리케이션은 데이터베이스와 상호 작용해야 합니다. Spring DAO 모듈은 데이터베이스 연결 생성, 해제 등과 같은 저수준 JDBC 작업에 대한 추상화를 제공하여 데이터베이스와 상호 작용하기 쉽게 해줍니다.

**Spring ORM:** Hibernate, iBatis, JPA 등과 같은 여러 인기 있는 객체 관계 매핑 도구가 있습니다. Spring ORM 모듈은 이러한 도구와 통합하는 데 도움이 됩니다.

### 제어 반전(IoC) 또는 종속성 주입(DI)

일반적인 자바 기반 엔터프라이즈 애플리케이션은 여러 자바 클래스로 구성됩니다.  
지정된 기능을 수행하기 위해 각 자바 클래스(A.java)는 하나 이상의 다른 자바 클래스에 종속될 수 있습니다.  
이러한 다른 자바 클래스는 자바 클래스 A의 종속성으로 알려져 있습니다.  
일반적으로 각 클래스는 종속된 클래스의 참조를 얻는 책임을 집니다.  
이는 고도로 결합된 (안 좋은 거) 애플리케이션으로 이어집니다.

Spring 프레임워크는 Java 클래스의 종속성을 획득하는 책임을 Spring 컨테이너에 위임하고 Java 클래스가 지정된 기능에만 집중할 수 있도록 하여 _느슨하게 결합된_ 애플리케이션을 개발하는 데 도움이 됩니다.  
Spring 컨테이너는 컨테이너가 초기화될 때(일반적으로 애플리케이션 시작 시) 종속성을 Java 클래스에 주입합니다.  

종속성 주입은 제어의 역전이라고도 합니다.  
Java 클래스가 컨테이너에서 종속성을 얻는 대신, 컨테이너가 Java 클래스에 종속성을 주입합니다.  
따라서 제어의 역전이 있습니다.

# 실습하면서 느껴 보기
![](https://res.cloudinary.com/gyunseo-blog/image/upload/f_auto/v1743663542/image_k3noao.png)
요런식으로 spring-context library를 설치하면 종속성으로 aop, beans, core, expression이 딸려 옵니다.

```java
public class Application {  
  
  public static void main(String[] args) {  
    CourseService service = new CourseService();  
    System.out.println(service.list());  
  }  
}
```
요렇게 돼 있던 코드를...  
아래와 같이 Context 모듈을 이용해서  
```java
package dev.gyunseo.config;  
  
import org.springframework.context.annotation.Configuration;  
  
@Configuration  
public class AppConfig {  
  @Bean
  public CourseService getCourseService() {
    return new CourseService();
  }
  
}
```

참고로 `@Configuration` 어노테이션을 타고 들어가면, `Configuration.java`에 다음과 같은 설명이 나옵니다.  

```java
Indicates that a class declares one or more @Bean methods and may be processed by the Spring container to generate bean definitions and service requests for those beans at runtime, for example:
  @Configuration
  public class AppConfig {
 
      @Bean
      public MyBean myBean() {
          // instantiate, configure and return bean ...
      }
  }
```

이걸 해석하면
• @Configuration: 이 클래스가 Spring의 구성 클래스를 정의한다고 Spring에게 알려주는 애너테이션입니다. 구성 클래스는 Spring 컨테이너에 Bean을 정의하는 역할을 합니다.

• @Bean: 이 애너테이션은 메서드가 반환하는 객체를 Spring 컨테이너에 Bean으로 등록하겠다는 것을 의미합니다. Spring은 이 메서드를 호출하여 해당 객체를 관리합니다. 위 예시에서 myBean() 메서드는 MyBean 타입의 객체를 반환하며, 이 객체는 Spring의 Bean으로 등록됩니다.

  
이렇게 선언된 Bean은 Spring이 관리하게 되어 애플리케이션에서 해당 Bean을 필요로 할 때 자동으로 주입하거나 사용할 수 있습니다.

```java
package dev.gyunseo;  
  
import dev.gyunseo.config.AppConfig;  
import dev.gyunseo.service.CourseService;  
import org.springframework.context.ApplicationContext;  
import org.springframework.context.annotation.AnnotationConfigApplicationContext;  
  
public class Application {  
  
  public static void main(String[] args) {  
    ApplicationContext applicationContext = new AnnotationConfigApplicationContext(AppConfig.class);  
    CourseService courseService = applicationContext.getBean("courseService", CourseService.class);  
    System.out.println(courseService.list());  
  }}
```


요런식으로 바꿀 수 있음.  


• AnnotationConfigApplicationContext는 Spring의 애플리케이션 컨텍스트 중 하나로, Java 클래스를 통해 설정을 구성하는 데 사용됩니다.

• AppConfig.class는 @Configuration 애너테이션이 붙은 클래스입니다. 이 클래스에서 Bean을 정의하고 관리하게 됩니다.

• 이 코드에서는 AppConfig 클래스가 @Configuration으로 설정된 Bean 구성을 포함하고 있다고 가정합니다.

• ApplicationContext는 애플리케이션의 모든 Bean을 관리하고 설정하는 역할을 합니다.

• getBean() 메서드를 사용하여 Spring 컨테이너에서 courseService라는 이름의 Bean을 가져옵니다.

• "courseService"는 Bean의 이름을 나타내며, CourseService.class는 반환될 Bean의 타입을 나타냅니다.

• getBean() 메서드는 컨테이너에서 courseService라는 이름의 Bean을 찾아 CourseService 타입으로 반환합니다.

• CourseService는 아마도 어떤 서비스를 제공하는 클래스일 것입니다

**요약:**

  

이 코드는 Spring의 **ApplicationContext**를 사용하여 **AppConfig** 클래스에서 정의된 Bean들을 로드하고, courseService Bean을 가져와서 그 메서드인 list()를 호출하여 결과를 출력하는 예제입니다.

참고로 `Bean`은 팩토리 패턴.  

# 팩토리 패턴

```python
from enum import Enum

class AnimalType(Enum):
    CAT = 1
    DOG = 2

class Animal:
    def speak(self, speak_string): print(speak_string)

class Cat(Animal):
    def __init__(self, _speak_string):
        self.speak_string = _speak_string
    def speak(self): super().speak(self.speak_string)

class Dog(Animal):
    def __init__(self, _speak_string):
        self.speak_string = _speak_string
    def speak(self): super().speak(self.speak_string)

class Factory():
    def createAnimal(self, animal):
        if animal == AnimalType.CAT: return Cat("야옹")
        elif animal == AnimalType.DOG: return Dog("월월")

factory = Factory()
cat = factory.createAnimal(AnimalType.CAT)
dog = factory.createAnimal(AnimalType.DOG)

cat.speak()
dog.speak()
```

개떡같이 던져줘도 찰떡같이 객체를 생성해서 잘 반환해주는 거(?)

![](https://res.cloudinary.com/gyunseo-blog/image/upload/f_auto/v1743671994/image_svbxfb.png)
