# Spreadsheet demo for Honeydew

## AC: 
```
1. The goal of the exercise is to check the following areas of expertise. Please find way to show them through the exercise:
    1. Code structure, division into files and components ✅
    2. Code clarity, attention to details ✅
    3. Unit testing for relevant parts ✅
    4. State management, interaction between components ✅
    5. Routing ✅
    6. Memoization 🤔 `(I used deferred values for the size controller values, memoization was avoided (comments below))`
    7. Work with hooks ✅
    8. Styling (no css files) ✅
2. You can use MUI or other library for basic components. Please do not use any ready-made spreadsheet component. ✅
3. **Please submit the exercise through git.** ✅
4. **Please provide clear instructions for how to run the app.** ✅

### Exercise

Create a “spreadsheet-like” component according to the following spec:

1. The component receives the size of the spreadsheet (X by Y cells). If the component is too large to fit in screen, it would allow scrolling. Rows are numbered by numbers and columns are numbered by letters. ✅
2. Each cell can contain either:
    1. A number ✅
    2. A reference to another field (e.g. “=A1”) which will calculate it as that field + 1 (if =”A1” that calc the value of A1 + 1) ✅
3. Each cell can be in one of two states:
    1. Display - displays the result number after doing the necessary calculations ✅
    2. Edit - allows editing the value/formula behind the field. Upon change, all relevant fields that somehow refer to this field, need to be updated as well. ✅
4. Cell goes into edit mode when you double click on it. When done editing, you press enter, and the new value is displayed. If there’s an error, it is displayed and the cell remains in edit mode. ✅
5. Add an edit bar on the top that would present the actual content of the currently selected cell value, and allow editing it. ✅
6. You can assume that there are no circular references in the spreadsheet. ✅ `(But the case is covered)`
7. Nicely looking styling. ✅ `(I am not UI/UX to judge, but I think it looks good)`

Additional complexities (bonuses):

1. In addition to reference, support a formula, which is always a summarization of either numbers or other fields (e.g. the supported format is “=SUM(A1, 4, B2, 4)”. “SUM” is the only supported function. ✅
2. Detect circular references, and do not allow such field values (validation error). ✅
````

## Leftovers for the task:
```
 P1 tasks:
- Revisit logic to potentially add more memoization
Memoization conflicting with the live update feature that I value more for this demo. With each sell needed to be reevaluated to identify if the update if needed, memoization will not help.
When the project is almost done, I have an idea of what I would try to add more memoization, but I need to change a lot for that.

P2 tasks:
- Think over change divs to tr, td, th
Initially I did divs to speed up the render part and move to the 'fun' logic part.
Yet with time I decided to leave it as is, at least for now, as it is a spreadsheet and not a table.
```

## Additional notes:
```
 Regarding Errors handling:
I restricted the inputs for 'errored' cells to be closed by the 'Enter' key (as was described in AC), but allowed to double-click another one, as it's a common behaviour in Google Spreadsheet.
However, I added an error indication so a user could see that the cell is not valid.
```


## How to run the app:
```
1. Clone the repo
2. Run `npm install` to install the dependencies
3. Run `npm start` to start the app
```
