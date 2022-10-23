---
title: "[Flutter] CircularProgressIndicator와 Chip 사용해보기"
date: "2022-10-21"
category: "tech"
slug: "/tech/flutter-CircularProgressIndicator-and-chip"
# img: "https://user-images.githubusercontent.com/76241233/189472910-3ae9b4a8-6fd6-484c-8e00-d07dab309b45.jpeg"
tags:
  - "스터디 Flutter"
---

## 여러가지 컴포넌트로 데모 만들어보기

스터디 주제를 어떻게 묶어야 할 지 모르겠는 상황에 처해...

Card, CircularProgressIndicator, Chip, Tooltip 사용해 간단한 페이지를 만들어보았습니다.

```dart
import 'dart:async';

import 'package:flutter/material.dart';

//Material design library
void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      title: 'Material App',
      home: HomeView(),
    );
  }
}

class HomeView extends StatefulWidget {
  const HomeView({Key? key}) : super(key: key);
  @override
  State<HomeView> createState() => _HomeViewState();
}

class _HomeViewState extends State<HomeView> {
  List<String> categories = [
    'Javascript',
    'React',
    'Flutter',
    'Java',
    'Typescript',
  ];

  void addCategories(String categoryName) {
    categories.add(categoryName);
    setState(() {});
  }

  void removeCategories(String categoryName) {
    categories.remove(categoryName);
    setState(() {});
  }

  double _progress = 0;
  bool _visible = false;

  void startTimer() {
    new Timer.periodic(
      Duration(milliseconds: 500),
      (Timer timer) => setState(
        () {
          if (_progress >= 1) {
            _visible = false;
            timer.cancel();
          } else {
            _progress += 0.9;
          }
        },
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Demo'),
        centerTitle: true,
      ),
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Center(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                const SizedBox(height: 16),
                Card(
                  child: TooltipSample(),
                ),
                const SizedBox(
                  height: 16,
                ),
                Visibility(
                  child: CircularProgressIndicator(
                    strokeWidth: 10,
                    backgroundColor: Colors.cyanAccent,
                    valueColor: new AlwaysStoppedAnimation<Color>(Colors.red),
                    value: _progress,
                  ),
                  visible: _visible,
                  maintainSize: false,
                ),
                Wrap(
                  spacing: 24,
                  children: categories.map(
                    (category) {
                      return Chip(
                        onDeleted: () {
                          setState(() {
                            _visible = true;
                            _progress = 0;
                          });
                          startTimer();
                          new Future.delayed(const Duration(milliseconds: 500),
                              () {
                            removeCategories(category);
                          });
                        },
                        deleteIcon: const Icon(Icons.remove_circle),
                        label: Text(category),
                      );
                    },
                  ).toList(),
                ),
                if (categories.isEmpty)
                  const Center(
                    child: Text('No Languages available!'),
                  ),
                SizedBox(
                  height: 60,
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

class TooltipSample extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return const Tooltip(
      message: 'You can remove these',
      child: Text('What should you do', style: TextStyle(fontSize: 20.0)),
    );
  }
}
```

<video width="100%" controls="controls">
    <source src="https://user-images.githubusercontent.com/76241233/197394954-59dac2ef-78de-43ca-a9c7-9a9c2dbb2fca.mov" type="video/mp4">
</video>

## 알게 된 점

`CircularProgressIndicator` 에 당연히 Visible 속성이 있을 줄 알았는데, Visibility를 사용해야 한다는 것을 알게 되었다.

◾ [[Flutter] Form, Alert에 사용할 수 있는 플러터 컴포넌트](/tech/flutter-use-several-components) 👈 이전 글 보기
