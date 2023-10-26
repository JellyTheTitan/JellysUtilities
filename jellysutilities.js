(function (Scratch) {
    
    'use strict' ;

    if (!(Scratch.extensions.unsandboxed)) {
        throw new Error("Sorry! The \"Jelly's Utilities\" exstension has to be ran without the Sandbox.") ;
    }

    class JellysUtilities {
        getInfo() {
            return {
                id : "jellysutilities",
                name : "Jelly's Utilities",
                color1 : "#00032A",
                color2 : "#FFFFFF",
                color3 : "#FFFFFF",
                blocks : [

                    {
                        opcode : "shiftLeft",
                        blockType : Scratch.BlockType.REPORTER,
                        text : "[ONE] << [TWO]",

                        arguments : {
                            ONE : {
                                type : Scratch.ArgumentType.NUMBER,
                                defaultValue : "",
                            },

                            TWO : {
                                type : Scratch.ArgumentType.NUMBER,
                                defaultValue : "",
                            }
                        }
                    },

                    {
                        opcode : "shiftRightSigned",
                        blockType : Scratch.BlockType.REPORTER,
                        text : "[ONE] >> [TWO]",

                        arguments : {
                            ONE : {
                                type : Scratch.ArgumentType.NUMBER,
                                defaultValue : "",
                            },

                            TWO : {
                                type : Scratch.ArgumentType.NUMBER,
                                defaultValue : "",
                            }
                        }
                    },

                    {
                        opcode : "shiftRightUnsigned",
                        blockType : Scratch.BlockType.REPORTER,
                        text : "[ONE] >>> [TWO]",

                        arguments : {
                            ONE : {
                                type : Scratch.ArgumentType.NUMBER,
                                defaultValue : "",
                            },

                            TWO : {
                                type : Scratch.ArgumentType.NUMBER,
                                defaultValue : "",
                            }
                        }
                    },

                    "---",

                    {
                        opcode : "convertToNegative",
                        blockType : Scratch.BlockType.REPORTER,
                        text : "-[NUM]",

                        arguments : {
                            NUM : {
                                type : Scratch.ArgumentType.NUMBER,
                                defaultValue : "",
                            }
                        }
                    },

                    {
                        opcode : "squareRoot",
                        blockType : Scratch.BlockType.REPORTER,
                        text : "√ [ONE]",

                        arguments : {
                            ONE : {
                                type : Scratch.ArgumentType.NUMBER,
                                defaultValue : "",
                            }
                        }
                    },
                    
                    {
                        opcode : "calculateModulus",
                        blockType : Scratch.BlockType.REPORTER,
                        text : "[ONE] % [TWO]",

                        arguments : {
                            ONE : {
                                type : Scratch.ArgumentType.NUMBER,
                                defaultValue : "",
                            },

                            TWO : {
                                type : Scratch.ArgumentType.NUMBER,
                                defaultValue : "",
                            }
                        }
                    },

                    {
                        opcode : "power",
                        blockType : Scratch.BlockType.REPORTER,
                        text : "[ONE] ^ [TWO]",

                        arguments : {
                            ONE : {
                                type : Scratch.ArgumentType.NUMBER,
                                defaultValue : "",
                            },

                            TWO : {
                                type : Scratch.ArgumentType.NUMBER,
                                defaultValue : "",
                            }
                        }
                    },

                    "---",

                    {
                        opcode : "returnPi",
                        blockType : Scratch.BlockType.REPORTER,
                        text : "π",
                        disableMonitor : true
                    },

                    {
                        opcode : "returnE",
                        blockType : Scratch.BlockType.REPORTER,
                        text : "e",
                        disableMonitor : true
                    },

                    {
                        opcode : "returnInfinity",
                        blockType : Scratch.BlockType.REPORTER,
                        text : "∞",
                        disableMonitor : true
                    },

                    "---",
                    
                    {
                        opcode : "lessEqualTo",
                        blockType : Scratch.BlockType.BOOLEAN,
                        text : "[ONE] <= [TWO]",

                        arguments : {
                            ONE : {
                                type : Scratch.ArgumentType.NUMBER,
                                defaultValue : "",
                            },

                            TWO : {
                                type : Scratch.ArgumentType.NUMBER,
                                defaultValue : "",
                            }
                        }
                    },

                    {
                        opcode : "greaterEqualTo",
                        blockType : Scratch.BlockType.BOOLEAN,
                        text : "[ONE] >= [TWO]",

                        arguments : {
                            ONE : {
                                type : Scratch.ArgumentType.NUMBER,
                                defaultValue : "",
                            },

                            TWO : {
                                type : Scratch.ArgumentType.NUMBER,
                                defaultValue : "",
                            }
                        }
                    },

                    {
                        opcode : "isExactly",
                        blockType : Scratch.BlockType.BOOLEAN,
                        text : "[ONE] is exactly [TWO] ?",

                        arguments : {
                            ONE : {
                                type : Scratch.ArgumentType.STRING,
                                defaultValue : "",
                            },

                            TWO : {
                                type : Scratch.ArgumentType.STRING,
                                defaultValue : "",
                            }
                        }
                    },

                    "---",

                    {
                        opcode : "alertUser",
                        blockType : Scratch.BlockType.COMMAND,
                        text : "alert [MESSAGE]",

                        arguments : {
                            MESSAGE : {
                                type : Scratch.ArgumentType.STRING,
                                defaultValue : "",
                            }
                        }
                    },

                    {
                        opcode : "promptUser",
                        blockType : Scratch.BlockType.REPORTER,
                        text : "prompt [PROMPT]",

                        arguments : {
                            PROMPT : {
                                type : Scratch.ArgumentType.STRING,
                                defaultValue : "",
                            }
                        }
                    },

                    {
                        opcode : "confirmUser",
                        blockType : Scratch.BlockType.BOOLEAN,
                        text : "confirm [CONFIRM]",

                        arguments : {
                            CONFIRM : {
                                type : Scratch.ArgumentType.STRING,
                                defaultValue : "",
                            }
                        }
                    },
                ]
            }
        } ;

        // 'opcode' Functions

        shiftLeft(args) {
            return args.ONE << args.TWO ;
        }

        shiftRightSigned(args) {
            return args.ONE >> args.TWO ;
        }

        shiftRightUnsigned(args) {
            return args.ONE >>> args.TWO ;
        }

        convertToNegative(args) {
            return -Math.abs(args.NUM) ;
        }

        squareRoot(args) {
            return Math.sqrt(args.ONE) ;
        }

        calculateModulus(args) {
            return args.ONE % args.TWO ;
        }

        power(args) {
            return Math.pow(args.ONE, args.TWO) ;
        }

        returnPi() {
            return Math.PI ;
        }

        returnE() {
            return Math.E ;
        }

        returnInfinity() {
            return Infinity ;
        }

        lessEqualTo(args) {
            return args.ONE <= args.TWO ;
        }

        greaterEqualTo(args) {
            return args.ONE >= args.TWO ;
        }

        isExactly(args) {
            return args.ONE == args.TWO ;
        }

        alertUser(args) {
            alert(args.MESSAGE) ;
        }

        promptUser(args) {
            return prompt(args.PROMPT) ;
        }

        confirmUser(args) {
            return confirm(args.CONFIRM) ;
        }
    }

    Scratch.extensions.register(new JellysUtilities()) ;
})(Scratch) ;