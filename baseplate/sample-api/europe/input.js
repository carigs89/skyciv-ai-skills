
    /* NOTE: 
        this is an axial load only, so you won't receive the full set of results. This is to help test and demonstrate how partial loads return partial results.
    */
   
    const design_obj = {
        "design_code": "Europe",
        "support_type": "pinned",
        "units_data": {
            "first_init": true,
            "units": "metric",
            "units_length": "mm",
            "axial_f_units": "kN",
            "units_strength": "MPa",
            "bending_f_units": "kN-m",
            "length_factor": 1,
            "to_mm": 1,
            "to_in": 1,
            "kNm_Kipft": 1,
            "kN_Kip": 1,
            "strength_factor": 0.00689476,
            "units_strength_steel": "MPa",
            "strength_factor_steel": 6.89476
        },
        "project_details": {
            "project_units": "metric",
            "company": "",
            "designer": "",
            "project_name": "",
            "project_id": "",
            "project_notes": "",
            "client": ""
        },
        "steel_parts": {
            "data": {
                "custom-column-fy": 240,
                "custom-column-fu": 400,
                "custom-bp-fy": 240,
                "custom-bp-fu": 400,
                "custom-conc-fc": 20,
                "use-cracked-concrete": true,
                "steel-column-shape": "i-shape",
                "steel-column-database": "Wide flange HE HL beams",
                "steel-column-profile": "HE 200 B",
                "steel-column-material": "S235",
                "steel-column-height": 0,
                "steel-baseplate-width": 400,
                "steel-baseplate-height": 400,
                "steel-baseplate-thickness": 20,
                "steel-baseplate-material": "S235",
                "steel-baseplate-grouting-thickness": 0,
                "grout-material-selected": "greater-than-30",
                "steel-foundation-material": "C20/25",
                "steel-foundation-width": 450,
                "steel-foundation-height": 450,
                "steel-foundation-thickness": 380
            }
        },
        "anchors": {
            "data": {
                "custom-anchor-fy": 240,
                "custom-anchor-fu": 400,
                "anchor-pattern": "Web Only",
                "anchor-prop-diam": "M12",
                "anchor-prop-material": "8.8",
                "anchor-thread-included": "included",
                "anchor-web-bending": "web-bending",
                "anchor-prop-length": 300,
                "anchor-hole-clearance": "compliant",
                "anchor-prop-ending": "rectangle",
                "anchor-prop-side-dim": 60,
                "anchor-prop-thk-dim": 10,
                "hook-direction": "inward",
                "anchor-prop-hook-length": 50,
                "anchor-numbers": 2,
                "anchor-numbers-z": 2,
                "anchor-numbers-y": 2,
                "anchor-spacing-z": 100,
                "anchor-spacing-y": 90,
                "anchor-edge-distance-z": 150,
                "anchor-edge-distance-y": 155,
                "line-anchor-edge-distance-z": 150,
                "line-anchor-edge-distance-y": 155
            }
        },
        "welds": {
            "data": {
                "box-weld-size": 9,
                "input_table_col_weld_size": [
                    [
                        1,
                        "Top Flange",
                        "Both",
                        7
                    ],
                    [
                        2,
                        "Bottom Flange",
                        "Both",
                        7
                    ],
                    [
                        3,
                        "Web",
                        "Both",
                        7
                    ]
                ],
                "custom-weld-fexx": 482,
                "use_welds_for_comp": "false",
                "weld-type": "fillet",
                "weld-setback": 0,
                "welds-column-mat": "E35"
            }
        },
        "loads": [
            {
                "lc": "1",
                "Mz": "0",
                "My": "0",
                "Nx": "100",
                "Vz": "0",
                "Vy": "0",
                "moment_label": ""
            }
        ],
        "factors": {
            "concrete_factor": 1.5,
            "bending_factor": 1,
            "anchor_shear_factor": 1.5,
            "weld_factor": 1.25,
            "custom_lever_arm": 0,
            "concrete_alpha_factor": 1.5,
            "concrete_beta_factor": 0.66667,
            "concrete_alpha_cc_factor": 1,
            "concrete_theta_factor": 90,
            "exposure_class": "xc4",
            "structural_class": "s4",
            "countersunk": "no",
            "cut_threads": "no",
            "k7_factor": "ductile",
            "k8_factor": 2,
            "restraint_factor": "no-restraint",
            "design_situation": "permanent",
            "elastic_modulus_steel": 210000,
            "elastic_modulus_concrete": 33000,
            "rotational_stiffness_lower": 2,
            "rotational_stiffness_upper": 30
        },
        "detailing": {
            "weld_size": true,
            "anchor_clearance": true,
            "bp_edge_distance": true,
            "embed_plate": true,
            "concrete_splitting": true,
            "min_anchors": true
        },
        "design_settings": {
            "neglect_concrete_breakout_for_tension": false,
            "neglect_concrete_breakout_for_shear": false,
            "neglect_concrete_pryout": true,
            "distribute_shear_to_all": false,
            "simplified_approach_shear": false,
            "consider_both_directions": false,
            "include_embedded_head_radius": false,
            "use_sci_for_welds": false
        },
        "version": 2
    }

var args = {
    auth: {
        username: "",
        key: ""
    },
    functions: [
        {
            function: 'standalone.baseplate.start',
            arguments: { keep_open: true, },
        },
        {
            function: 'standalone.baseplate.check',
            arguments: design_obj,
        },
    ],
};