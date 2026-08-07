
    const design_obj = {
        "design_code": "Australian",
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
                "steel-column-shape": "pipe",
                "steel-column-database": "CHS (Grade 350)",
                "steel-column-profile": "168.3x7.1 CHS",
                "steel-column-material": "AS/NZS 1163 Gr. C250",
                "steel-baseplate-width": 350,
                "steel-baseplate-height": 350,
                "steel-baseplate-thickness": 20,
                "steel-baseplate-grouting-thickness": 20,
                "steel-baseplate-material": "AS/NZS 3678 Gr. 250",
                "steel-foundation-material": "N20",
                "steel-foundation-width": 450,
                "steel-foundation-height": 450,
                "steel-foundation-thickness": 300
            }
        },
        "anchors": {
            "data": {
                "custom-anchor-fy": 240,
                "custom-anchor-fu": 400,
                "anchor-pattern": "Four Corners",
                "anchor-prop-diam": "M12",
                "anchor-prop-material": "4.6",
                "anchor-thread-included": "included",
                "anchor-web-bending": "web-bending",
                "use-welded-plate-washers": false,
                "anchor-plate-washer-thickness": 0,
                "anchor-prop-length": 250,
                "anchor-prop-ending": "rectangle",
                "anchor-prop-side-dim": 60,
                "anchor-prop-thk-dim": 10,
                "hook-direction": "inward",
                "anchor-prop-hook-length": 50,
                "anchor-numbers": 1,
                "anchor-numbers-z": 2,
                "anchor-numbers-y": 2,
                "anchor-edge-distance-z": 50,
                "anchor-edge-distance-y": 50,
                "anchor-spacing-z": 250,
                "anchor-spacing-y": 250,
                "line-anchor-edge-distance-z": 50,
                "line-anchor-edge-distance-y": 50
            }
        },
        "welds": {
            "data": {
                "box-weld-size": 7,
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
                "welds-column-mat": "430"
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
            "concrete_compression_factor": 0.6,
            "steel_bending_factor": 0.9,
            "steel_tension_factor": 0.9,
            "steel_shear_factor": 0.9,
            "weld_factor": 0.8,
            "bolt_in_tension_factor": 0.8,
            "concrete_failure_factor": 0.6667,
            "prying_factor": 1,
            "custom_lever_arm": 0,
            "k7_factor": "ductile",
            "restraint_factor": "no-restraint"
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
            "neglect_concrete_pryout": false,
            "distribute_shear_to_all": false,
            "simplified_approach_shear": false,
            "consider_both_directions": false,
            "include_embedded_head_radius": true,
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