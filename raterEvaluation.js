

var categories = [
                    {
                        "Id": 1,
                        "Section": null,
                        "CategoryTitle": "Safety",
                        "Ordinal": 1
                    },
                    {
                        "Id": 2,
                        "Section": null,
                        "CategoryTitle": "Customer Service",
                        "Ordinal": 2
                    },
                    {
                        "Id": 3,
                        "Section": null,
                        "CategoryTitle": "Duties and Responsibilities",
                        "Ordinal": 3
                    },
                    {
                        "Id": 4,
                        "Section": null,
                        "CategoryTitle": "Leadership Skill",
                        "Ordinal": 4
                    }
                ]
                var raterEval = [
                    {
                        "Id": 1,
                        "Ordinal": 1,
                        "Title": "I. Appearance & Grooming/Uniform Equipment",
                        "TitleDesciption": "I. Appearance & Grooming/Uniform Equipment",
                        "MaxGrade": 11,
                        "MinGrade": 0,
                        "Category_Id": 1
                    },
                    {
                        "Id": 2,
                        "Ordinal": 2,
                        "Title": "II. Basic Knowledge",
                        "TitleDesciption": "II. Basic Knowledge",
                        "MaxGrade": 34,
                        "MinGrade": 0,
                        "Category_Id": 1
                    },
                    {
                        "Id": 3,
                        "Ordinal": 3,
                        "Title": "III. Effectiveness in Coaching & Mentoring",
                        "TitleDesciption": "III. Effectiveness in Coaching & Mentoring",
                        "MaxGrade": 11,
                        "MinGrade": 0,
                        "Category_Id": 1
                    },
                    {
                        "Id": 4,
                        "Ordinal": 4,
                        "Title": "IV. Customer Service Orientation",
                        "TitleDesciption": "IV. Customer Service Orientation",
                        "MaxGrade": 19,
                        "MinGrade": 0,
                        "Category_Id": 1
                    },
                    {
                        "Id": 5,
                        "Ordinal": 5,
                        "Title": "V. Attitude Towards The Job",
                        "TitleDesciption": "V. Attitude Towards The Job",
                        "MaxGrade": 25,
                        "MinGrade": 0,
                        "Category_Id": 1
                    }
                ]

                
                var categoryFind = raterEval.map(rater => {
                  var catFind = categories.find(c => c.Id === rater.Category_Id); 
                    return { 
                      Ordinal : rater.Ordinal,
                      Category : catFind.CategoryTitle,
                      CategoryOrdinal: catFind.Ordinal,
                      Title: rater.Title,
                      TitleDesciption: rater.TitleDesciption,
                      MinGrade: rater.MinGrade,
                      MaxGrade: rater.MaxGrade,
                    }
                  }
                );

                console.log(categoryFind)
