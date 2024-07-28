$(document).ready(function () {
    $('#toggleInstructionsButton').click(function () {
        const instructionsDiv = $('#instructions');
        const selectedApproach = $('#approachSelect').val();

        let instructions = [];
        let totalTime = 0;

        if (selectedApproach === 'optimal') {
            instructions = [
                { step: "B A X O 2", description: "Bianca and Andrew cross over together (2 minutes).", time: 2 },
                { step: "B- X B 2", description: "Bianca returns with the torch (2 minutes).", time: 2 },
                { step: "D C X O 9", description: "Diane and Charles cross over together (9 minutes).", time: 9 },
                { step: "A- X B 1", description: "Andrew returns with the torch (1 minute).", time: 1 },
                { step: "B A X O 2", description: "Bianca and Andrew cross over together (2 minutes).", time: 2 }
            ];
            totalTime = 16;
        } else if (selectedApproach === 'alternative1') {
            instructions = [
                { step: "D A X O 9", description: "Diane and Andrew cross over together (9 minutes).", time: 9 },
                { step: "A- X B 1", description: "Andrew returns with the torch (1 minute).", time: 1 },
                { step: "C B X O 6", description: "Charles and Bianca cross over together (6 minutes).", time: 6 },
                { step: "B- X B 2", description: "Bianca returns with the torch (2 minutes).", time: 2 },
                { step: "B A X O 2", description: "Bianca and Andrew cross over together again (2 minutes).", time: 2 }
            ];
            totalTime = 20;
        } else if (selectedApproach === 'alternative2') {
            instructions = [
                { step: "C A X O 6", description: "Charles and Andrew cross over together (6 minutes).", time: 6 },
                { step: "A- X B 1", description: "Andrew returns with the torch (1 minute).", time: 1 },
                { step: "D B X O 9", description: "Diane and Bianca cross over together (9 minutes).", time: 9 },
                { step: "B- X B 2", description: "Bianca returns with the torch (2 minutes).", time: 2 },
                { step: "B A X O 2", description: "Bianca and Andrew cross over together again (2 minutes).", time: 2 }
            ];
            totalTime = 20;
        } else if (selectedApproach === 'alternative3') {
            instructions = [
                { step: "D A X O 9", description: "Diane and Andrew cross over together (9 minutes).", time: 9 },
                { step: "A- X B 1", description: "Andrew returns with the torch (1 minute).", time: 1 },
                { step: "C A X O 6", description: "Charles and Andrew cross over together (6 minutes).", time: 6 },
                { step: "A- X B 1", description: "Andrew returns with the torch (1 minute).", time: 1 },
                { step: "B A X O 2", description: "Bianca and Andrew cross over together again (2 minutes).", time: 2 }
            ];
            totalTime = 19;
        }

        let instructionHTML = "";
        instructions.forEach(instruction => {
            instructionHTML += `<p><strong>${instruction.step}</strong> - ${instruction.description}</p>`;
        });

        instructionHTML += `<p><strong>T O T ${totalTime}</strong> - Total time taken: ${totalTime} minutes.</p>`;
        instructionsDiv.html(instructionHTML);

        if (instructionsDiv.is(':hidden')) {
            instructionsDiv.show();
            $(this).text('Hide Instructions');
        } else {
            instructionsDiv.hide();
            $(this).text('Show Instructions');
        }
    });
});
